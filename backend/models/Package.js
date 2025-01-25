const db = require('../config/database');

class Package {
    static async create({
        title,
        description,
        imageUrl,
        price,
        duration,
        groupSize,
        categories,
        highlights,
        parkId,
        itinerary
    }) {
        const [result] = await db.execute(
            `INSERT INTO packages (
                title, description, image_url, price, duration,
                group_size, categories, highlights, park_id,
                itinerary, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [title, description, imageUrl, price, duration,
             groupSize, JSON.stringify(categories),
             JSON.stringify(highlights), parkId,
             JSON.stringify(itinerary)]
        );
        return result.insertId;
    }

    static async update(id, {
        title,
        description,
        imageUrl,
        price,
        duration,
        groupSize,
        categories,
        highlights,
        parkId,
        itinerary
    }) {
        await db.execute(
            `UPDATE packages SET 
                title = ?, description = ?, image_url = ?,
                price = ?, duration = ?, group_size = ?,
                categories = ?, highlights = ?, park_id = ?,
                itinerary = ?, updated_at = NOW()
            WHERE id = ?`,
            [title, description, imageUrl, price, duration,
             groupSize, JSON.stringify(categories),
             JSON.stringify(highlights), parkId,
             JSON.stringify(itinerary), id]
        );
    }

    static async getPackagesByParkIdentifier(parkIdentifier) {
        try {
            console.log(`Getting packages for park: ${parkIdentifier}`);
            
            // First check if park exists
            const [parks] = await db.execute(
                'SELECT id FROM parks WHERE identifier = ?',
                [parkIdentifier]
            );

            if (!parks.length) {
                throw new Error(`Park not found with identifier: ${parkIdentifier}`);
            }

            const parkId = parks[0].id;

            // Get packages for the park
            const [rows] = await db.execute(
                `SELECT p.*, pk.name as park_name, pk.identifier 
                FROM packages p 
                JOIN parks pk ON p.park_id = pk.id 
                WHERE pk.identifier = ?`,
                [parkIdentifier]
            );
            
            console.log(`Found ${rows.length} packages in database`);
            
            if (!rows.length) {
                return []; // Return empty array if no packages found
            }

            return rows.map(row => ({
                id: row.id,
                title: row.title || row.name,
                image: row.image_url,
                price: parseFloat(row.price),
                duration: row.duration,
                groupSize: row.group_size,
                categories: JSON.parse(row.categories || '[]'),
                description: row.description,
                highlights: JSON.parse(row.highlights || '[]'),
                itinerary: JSON.parse(row.itinerary || '[]')
            }));
        } catch (error) {
            console.error('Error in getPackagesByParkIdentifier:', error);
            throw error;
        }
    }

    static async findById(id) {
        const [rows] = await db.execute(
            `SELECT p.*, pk.name as park_name 
            FROM packages p 
            JOIN parks pk ON p.park_id = pk.id 
            WHERE p.id = ?`,
            [id]
        );
        if (rows[0]) {
            rows[0].categories = JSON.parse(rows[0].categories);
            rows[0].highlights = JSON.parse(rows[0].highlights);
            rows[0].itinerary = JSON.parse(rows[0].itinerary);
        }
        return rows[0];
    }

    static async getAll(filters = {}) {
        let query = `
            SELECT p.*, pk.name as park_name 
            FROM packages p 
            JOIN parks pk ON p.park_id = pk.id 
            WHERE 1=1
        `;
        const params = [];

        if (filters.parkId) {
            query += ' AND p.park_id = ?';
            params.push(filters.parkId);
        }

        if (filters.featured) {
            query += ' AND p.featured = 1';
        }

        if (filters.minPrice) {
            query += ' AND p.price >= ?';
            params.push(filters.minPrice);
        }

        if (filters.maxPrice) {
            query += ' AND p.price <= ?';
            params.push(filters.maxPrice);
        }

        if (filters.duration) {
            query += ' AND p.duration = ?';
            params.push(filters.duration);
        }

        query += ' ORDER BY p.created_at DESC';

        const [rows] = await db.execute(query, params);
        rows.forEach(row => {
            row.itinerary = JSON.parse(row.itinerary);
            row.inclusions = JSON.parse(row.inclusions);
            row.exclusions = JSON.parse(row.exclusions);
        });
        return rows;
    }

    static async delete(id) {
        await db.execute('DELETE FROM packages WHERE id = ?', [id]);
    }

    static async getFeaturedPackages() {
        const [rows] = await db.execute(
            `SELECT p.*, pk.name as park_name 
            FROM packages p 
            JOIN parks pk ON p.park_id = pk.id 
            WHERE p.featured = 1 
            ORDER BY p.created_at DESC`
        );
        rows.forEach(row => {
            row.itinerary = JSON.parse(row.itinerary);
            row.inclusions = JSON.parse(row.inclusions);
            row.exclusions = JSON.parse(row.exclusions);
        });
        return rows;
    }

    static async getStats() {
        const [rows] = await db.execute(`
            SELECT 
                COUNT(*) as total_packages,
                SUM(CASE WHEN featured = 1 THEN 1 ELSE 0 END) as featured_packages,
                AVG(price) as average_price,
                MIN(price) as min_price,
                MAX(price) as max_price,
                AVG(duration) as average_duration
            FROM packages
        `);
        return rows[0];
    }

    static async getPerformanceStats({ startDate, endDate, limit = 10 }) {
        let query = `
            SELECT 
                p.*,
                pk.name as park_name,
                COUNT(DISTINCT b.id) as total_bookings,
                COUNT(DISTINCT e.id) as total_enquiries,
                SUM(b.total_price) as total_revenue,
                COUNT(DISTINCT CASE WHEN b.status = 'completed' THEN b.id END) as completed_bookings,
                COUNT(DISTINCT CASE WHEN e.status = 'converted' THEN e.id END) as converted_enquiries,
                AVG(CASE WHEN t.rating IS NOT NULL THEN t.rating END) as average_rating,
                COUNT(DISTINCT t.id) as total_reviews
            FROM packages p
            JOIN parks pk ON p.park_id = pk.id
            LEFT JOIN bookings b ON p.id = b.package_id
            LEFT JOIN enquiries e ON p.id = e.package_id
            LEFT JOIN testimonials t ON p.id = t.package_id
            WHERE 1=1
        `;
        const params = [];

        if (startDate) {
            query += ' AND (b.created_at >= ? OR e.created_at >= ?)';
            params.push(startDate, startDate);
        }

        if (endDate) {
            query += ' AND (b.created_at <= ? OR e.created_at <= ?)';
            params.push(endDate, endDate);
        }

        query += `
            GROUP BY p.id
            ORDER BY total_bookings DESC, total_revenue DESC
            LIMIT ?
        `;
        params.push(limit);

        const [rows] = await db.execute(query, params);
        rows.forEach(row => {
            row.itinerary = JSON.parse(row.itinerary);
            row.inclusions = JSON.parse(row.inclusions);
            row.exclusions = JSON.parse(row.exclusions);
        });
        return rows;
    }

    static async getPackageByTitle(title) {
        try {
            console.log(`Getting package with title: ${title}`);
            const [rows] = await db.execute(
                `SELECT p.*, pk.name as park_name, pk.identifier 
                FROM packages p 
                JOIN parks pk ON p.park_id = pk.id 
                WHERE p.title = ?`,
                [title]
            );
            
            if (!rows.length) {
                throw new Error(`Package not found with title: ${title}`);
            }

            const row = rows[0];
            return {
                id: row.id,
                title: row.title || row.name,
                image: row.image_url,
                price: parseFloat(row.price),
                duration: row.duration,
                groupSize: row.group_size,
                categories: JSON.parse(row.categories || '[]'),
                description: row.description,
                highlights: JSON.parse(row.highlights || '[]'),
                itinerary: JSON.parse(row.itinerary || '[]'),
                parkName: row.park_name,
                parkId: row.park_id
            };
        } catch (error) {
            console.error('Error in getPackageByTitle:', error);
            throw error;
        }
    }

    static async getPackagesByCategory(category) {
        try {
            const [rows] = await db.execute(
                `SELECT p.*, GROUP_CONCAT(DISTINCT c.name) as categories
                 FROM packages p
                 LEFT JOIN package_categories pc ON p.id = pc.package_id
                 LEFT JOIN categories c ON pc.category_id = c.id
                 WHERE c.name = ?
                 GROUP BY p.id`,
                [category]
            );

            console.log(`Found ${rows.length} packages for category ${category}`);

            return rows.map(row => ({
                id: row.id,
                title: row.title,
                image: row.image_url,
                price: parseFloat(row.price),
                duration: row.duration,
                description: row.description,
                bestTime: row.best_time || "June-October",
                categories: row.categories ? row.categories.split(',') : [],
                highlights: row.highlights ? JSON.parse(row.highlights) : [],
                itinerary: row.itinerary ? JSON.parse(row.itinerary) : [],
                parkName: row.park_name
            }));
        } catch (error) {
            console.error('Error in getPackagesByCategory:', error);
            throw error;
        }
    }
}

module.exports = Package; 