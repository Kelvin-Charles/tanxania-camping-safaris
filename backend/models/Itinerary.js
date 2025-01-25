const db = require('../config/database');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

class Itinerary {
    // Create a new itinerary template
    static async createTemplate({
        title,
        description,
        duration,
        startLocation,
        endLocation,
        type,
        circuit = null,
        difficultyLevel = null,
        basePrice = null,
        days,
        inclusions,
        exclusions
    }) {
        const connection = await db.getConnection();
        try {
            await connection.beginTransaction();

            // Insert main itinerary template
            const [result] = await connection.execute(
                `INSERT INTO itinerary_templates (
                title, description, duration, start_location,
                    end_location, type, circuit, difficulty_level,
                    base_price, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [title, description, duration, startLocation,
                 endLocation, type, circuit, difficultyLevel,
                 basePrice]
            );

            const templateId = result.insertId;

            // Insert days
            for (let i = 0; i < days.length; i++) {
                const day = days[i];
                await connection.execute(
                    `INSERT INTO itinerary_days (
                        itinerary_template_id, day_number, title,
                        description, activities, accommodation,
                        meals, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
                    [templateId, i + 1, day.title,
                     day.description, JSON.stringify(day.activities),
                     day.accommodation, day.meals]
                );
            }

            // Insert inclusions
            for (const inclusion of inclusions) {
                await connection.execute(
                    `INSERT INTO itinerary_inclusions (
                        itinerary_template_id, description, created_at
                    ) VALUES (?, ?, NOW())`,
                    [templateId, inclusion]
                );
            }

            // Insert exclusions
            for (const exclusion of exclusions) {
                await connection.execute(
                    `INSERT INTO itinerary_exclusions (
                        itinerary_template_id, description, created_at
                    ) VALUES (?, ?, NOW())`,
                    [templateId, exclusion]
                );
            }

            await connection.commit();
            return templateId;
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    // Get itinerary template by ID
    static async getTemplateById(id) {
        const [template] = await db.execute(
            `SELECT * FROM itinerary_templates WHERE id = ?`,
            [id]
        );

        if (!template[0]) return null;

        const [days] = await db.execute(
            `SELECT * FROM itinerary_days 
            WHERE itinerary_template_id = ? 
            ORDER BY day_number`,
            [id]
        );

        const [inclusions] = await db.execute(
            `SELECT description FROM itinerary_inclusions 
            WHERE itinerary_template_id = ?`,
            [id]
        );
        
        const [exclusions] = await db.execute(
            `SELECT description FROM itinerary_exclusions 
            WHERE itinerary_template_id = ?`,
            [id]
        );

        return {
            ...template[0],
            days: days.map(day => ({
                ...day,
                activities: JSON.parse(day.activities)
            })),
            inclusions: inclusions.map(inc => inc.description),
            exclusions: exclusions.map(exc => exc.description)
        };
    }

    // Update itinerary template
    static async updateTemplate(id, {
        title,
        description,
        duration,
        startLocation,
        endLocation,
        type,
        circuit,
        difficultyLevel,
        basePrice,
        days,
        inclusions,
        exclusions
    }) {
        const connection = await db.getConnection();
        try {
            await connection.beginTransaction();

            // Update main template
            await connection.execute(
                `UPDATE itinerary_templates SET
                    title = ?, description = ?, duration = ?,
                    start_location = ?, end_location = ?, type = ?,
                    circuit = ?, difficulty_level = ?, base_price = ?,
                    updated_at = NOW()
                WHERE id = ?`,
                [title, description, duration, startLocation,
                 endLocation, type, circuit, difficultyLevel,
                 basePrice, id]
            );

            // Delete existing days, inclusions, and exclusions
            await connection.execute(
                'DELETE FROM itinerary_days WHERE itinerary_template_id = ?',
                [id]
            );
            await connection.execute(
                'DELETE FROM itinerary_inclusions WHERE itinerary_template_id = ?',
                [id]
            );
            await connection.execute(
                'DELETE FROM itinerary_exclusions WHERE itinerary_template_id = ?',
                [id]
            );

            // Insert new days
            for (let i = 0; i < days.length; i++) {
                const day = days[i];
                await connection.execute(
                    `INSERT INTO itinerary_days (
                        itinerary_template_id, day_number, title,
                        description, activities, accommodation,
                        meals, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
                    [id, i + 1, day.title, day.description,
                     JSON.stringify(day.activities),
                     day.accommodation, day.meals]
                );
            }

            // Insert new inclusions
            for (const inclusion of inclusions) {
                await connection.execute(
                    `INSERT INTO itinerary_inclusions (
                        itinerary_template_id, description, created_at
                    ) VALUES (?, ?, NOW())`,
                    [id, inclusion]
                );
            }

            // Insert new exclusions
            for (const exclusion of exclusions) {
                await connection.execute(
                    `INSERT INTO itinerary_exclusions (
                        itinerary_template_id, description, created_at
                    ) VALUES (?, ?, NOW())`,
                    [id, exclusion]
                );
            }

            await connection.commit();
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    // Delete itinerary template
    static async deleteTemplate(id) {
        await db.execute(
            'UPDATE itinerary_templates SET is_active = false WHERE id = ?',
            [id]
        );
    }

    // Get all active templates with optional filters
    static async getAllTemplates({
        type = null,
        circuit = null,
        difficultyLevel = null,
        minDuration = null,
        maxDuration = null,
        minPrice = null,
        maxPrice = null
    } = {}) {
        let query = `
            SELECT * FROM itinerary_templates 
            WHERE is_active = true
        `;
        const params = [];

        if (type) {
            query += ' AND type = ?';
            params.push(type);
        }
        if (circuit) {
            query += ' AND circuit = ?';
            params.push(circuit);
        }
        if (difficultyLevel) {
            query += ' AND difficulty_level = ?';
            params.push(difficultyLevel);
        }
        if (minDuration) {
            query += ' AND duration >= ?';
            params.push(minDuration);
        }
        if (maxDuration) {
            query += ' AND duration <= ?';
            params.push(maxDuration);
        }
        if (minPrice) {
            query += ' AND base_price >= ?';
            params.push(minPrice);
        }
        if (maxPrice) {
            query += ' AND base_price <= ?';
            params.push(maxPrice);
        }

        query += ' ORDER BY created_at DESC';

        const [templates] = await db.execute(query, params);
        return templates;
    }

    // Create custom itinerary
    static async createCustom({
        baseTemplateId = null,
        title,
        description,
        duration,
        startLocation,
        endLocation,
        customerId,
        bookingId = null,
        totalPrice = null,
        notes = null,
        days,
        inclusions,
        exclusions
    }) {
        const connection = await db.getConnection();
        try {
            await connection.beginTransaction();

            // Insert main custom itinerary
            const [result] = await connection.execute(
                `INSERT INTO custom_itineraries (
                    base_template_id, title, description,
                    duration, start_location, end_location,
                    customer_id, booking_id, total_price,
                    notes, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
                [baseTemplateId, title, description,
                 duration, startLocation, endLocation,
                 customerId, bookingId, totalPrice, notes]
            );

            const customId = result.insertId;

            // Insert days
            for (let i = 0; i < days.length; i++) {
                const day = days[i];
                await connection.execute(
                    `INSERT INTO custom_itinerary_days (
                        custom_itinerary_id, day_number, title,
                        description, activities, accommodation,
                        meals, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
                    [customId, i + 1, day.title,
                     day.description, JSON.stringify(day.activities),
                     day.accommodation, day.meals]
                );
            }

            // Insert inclusions
            for (const inclusion of inclusions) {
                await connection.execute(
                    `INSERT INTO custom_itinerary_inclusions (
                        custom_itinerary_id, description, created_at
                    ) VALUES (?, ?, NOW())`,
                    [customId, inclusion]
                );
            }

            // Insert exclusions
            for (const exclusion of exclusions) {
                await connection.execute(
                    `INSERT INTO custom_itinerary_exclusions (
                        custom_itinerary_id, description, created_at
                    ) VALUES (?, ?, NOW())`,
                    [customId, exclusion]
                );
            }

            await connection.commit();
            return customId;
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    // Get custom itinerary by ID
    static async getCustomById(id) {
        const [itinerary] = await db.execute(
            `SELECT ci.*, it.title as base_template_title 
            FROM custom_itineraries ci
            LEFT JOIN itinerary_templates it ON ci.base_template_id = it.id
            WHERE ci.id = ?`,
            [id]
        );

        if (!itinerary[0]) return null;

        const [days] = await db.execute(
            `SELECT * FROM custom_itinerary_days 
            WHERE custom_itinerary_id = ? 
            ORDER BY day_number`,
            [id]
        );

        const [inclusions] = await db.execute(
            `SELECT description FROM custom_itinerary_inclusions 
            WHERE custom_itinerary_id = ?`,
            [id]
        );

        const [exclusions] = await db.execute(
            `SELECT description FROM custom_itinerary_exclusions 
            WHERE custom_itinerary_id = ?`,
            [id]
        );

        return {
            ...itinerary[0],
            days: days.map(day => ({
                ...day,
                activities: JSON.parse(day.activities)
            })),
            inclusions: inclusions.map(inc => inc.description),
            exclusions: exclusions.map(exc => exc.description)
        };
    }

    // Update custom itinerary status
    static async updateCustomStatus(id, status) {
        await db.execute(
            `UPDATE custom_itineraries 
            SET status = ?, updated_at = NOW() 
            WHERE id = ?`,
            [status, id]
        );
    }

    // Get custom itineraries by customer
    static async getCustomByCustomer(customerId) {
        const [itineraries] = await db.execute(
            `SELECT * FROM custom_itineraries 
            WHERE customer_id = ? 
            ORDER BY created_at DESC`,
            [customerId]
        );
        return itineraries;
    }

    // Keep the existing generatePDF method
    static async generatePDF(id, outputPath, isCustom = false) {
        const itinerary = isCustom ? 
            await this.getCustomById(id) : 
            await this.getTemplateById(id);

        if (!itinerary) throw new Error('Itinerary not found');

        // Create a PDF document with custom options
        const doc = new PDFDocument({
            size: 'A4',
            margins: { top: 50, bottom: 50, left: 50, right: 50 },
            bufferPages: true
        });

        const stream = fs.createWriteStream(outputPath);
        doc.pipe(stream);

        // Add company logo (assuming logo exists in assets)
        // doc.image(path.join(__dirname, '../assets/logo.png'), 50, 45, { width: 150 });

        // Title Section
        doc.fontSize(24)
           .fillColor('#2c3e50')
           .font('Helvetica-Bold')
           .text(itinerary.title, { align: 'center' });
        
        doc.moveDown();
        doc.fontSize(12)
           .font('Helvetica')
           .fillColor('#34495e')
           .text(itinerary.description, { align: 'justify' });

        // Trip Overview Box
        doc.moveDown()
           .fontSize(16)
           .font('Helvetica-Bold')
           .fillColor('#2c3e50')
           .text('Trip Overview');

        doc.rect(50, doc.y, 495, 80)
           .fillAndStroke('#f9f9f9', '#bdc3c7');
        
        let yPos = doc.y + 10;
        doc.fontSize(12)
           .font('Helvetica')
           .fillColor('#34495e')
           .text(`Duration: ${itinerary.duration} days`, 70, yPos)
           .text(`Start: ${itinerary.start_location}`, 70, yPos + 20)
           .text(`End: ${itinerary.end_location}`, 70, yPos + 40);

        // Daily Itinerary
        doc.moveDown(2)
           .fontSize(16)
           .font('Helvetica-Bold')
           .fillColor('#2c3e50')
           .text('Daily Itinerary');

        itinerary.days.forEach((day, index) => {
            // Day Header
            doc.moveDown()
               .fontSize(14)
               .font('Helvetica-Bold')
               .fillColor('#2980b9')
               .text(`Day ${index + 1}: ${day.title}`);

            // Day Description
            doc.fontSize(12)
               .font('Helvetica')
               .fillColor('#34495e')
               .text(day.description, { align: 'justify' });

            // Activities
            if (day.activities && day.activities.length > 0) {
                doc.moveDown(0.5)
                   .fontSize(12)
                   .font('Helvetica-Bold')
                   .text('Today\'s Activities:');

                day.activities.forEach(activity => {
                    doc.fontSize(12)
                       .font('Helvetica')
                       .text(`• ${activity}`, { indent: 20 });
                });
            }

            // Accommodation & Meals
            doc.moveDown(0.5)
               .fontSize(12)
               .font('Helvetica-Bold')
               .text('Accommodation:', { continued: true })
               .font('Helvetica')
               .text(` ${day.accommodation}`);

            doc.fontSize(12)
               .font('Helvetica-Bold')
               .text('Meals:', { continued: true })
               .font('Helvetica')
               .text(` ${day.meals}`);

            // Add page break if needed
            if (doc.y > 700 && index < itinerary.days.length - 1) {
                doc.addPage();
            }
        });

        // Inclusions & Exclusions
        doc.addPage();
        
        // Inclusions
        doc.fontSize(16)
           .font('Helvetica-Bold')
           .fillColor('#2c3e50')
           .text('What\'s Included');

        doc.moveDown(0.5);
        itinerary.inclusions.forEach(item => {
            doc.fontSize(12)
               .font('Helvetica')
               .fillColor('#34495e')
               .text(`✓ ${item}`, { indent: 20 });
        });

        // Exclusions
        doc.moveDown()
           .fontSize(16)
           .font('Helvetica-Bold')
           .fillColor('#2c3e50')
           .text('What\'s Not Included');

        doc.moveDown(0.5);
        itinerary.exclusions.forEach(item => {
            doc.fontSize(12)
               .font('Helvetica')
               .fillColor('#34495e')
               .text(`✗ ${item}`, { indent: 20 });
        });

        // Additional Notes
        if (itinerary.notes) {
            doc.moveDown()
               .fontSize(16)
               .font('Helvetica-Bold')
               .fillColor('#2c3e50')
               .text('Important Notes');

            doc.moveDown(0.5)
               .fontSize(12)
               .font('Helvetica')
               .fillColor('#34495e')
               .text(itinerary.notes, { align: 'justify' });
        }

        // Footer on each page
        const pages = doc.bufferedPageRange();
        for (let i = 0; i < pages.count; i++) {
            doc.switchToPage(i);
            
            // Footer line
            doc.moveTo(50, 780)
               .lineTo(545, 780)
               .stroke('#bdc3c7');

            // Footer text
            doc.fontSize(10)
               .font('Helvetica')
               .fillColor('#95a5a6')
               .text(
                   'Tanzania Camping Safaris',
                   50,
                   790,
                   { align: 'left' }
               )
               .text(
                   `Page ${i + 1} of ${pages.count}`,
                   50,
                   790,
                   { align: 'right' }
               );
        }

        doc.end();

        return new Promise((resolve, reject) => {
            stream.on('finish', resolve);
            stream.on('error', reject);
        });
    }

    static async delete(id) {
        await db.execute('DELETE FROM itineraries WHERE id = ?', [id]);
    }
}

module.exports = Itinerary; 