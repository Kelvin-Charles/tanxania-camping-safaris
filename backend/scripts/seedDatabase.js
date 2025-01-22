const db = require('../config/database');
const { parkPackages } = require('./seedData');

async function seedDatabase() {
    try {
        // First, insert parks
        const parks = [
            {
                identifier: 'serengeti',
                name: 'Serengeti National Park',
                description: 'Home to the great migration',
                location: 'Northern Tanzania',
                circuit: 'northern',
                highlights: JSON.stringify(['Wildlife viewing', 'Great Migration', 'Savannah landscapes']),
                activities: JSON.stringify(['Game drives', 'Balloon safaris', 'Walking safaris'])
            },
            {
                identifier: 'kilimanjaro',
                name: 'Mount Kilimanjaro',
                description: 'Africa\'s highest peak',
                location: 'Northern Tanzania',
                circuit: 'northern',
                highlights: JSON.stringify(['Summit climb', 'Snow-capped peaks', 'Alpine forests']),
                activities: JSON.stringify(['Mountain climbing', 'Hiking', 'Nature walks'])
            },
            {
                identifier: 'ngorongoro',
                name: 'Ngorongoro Conservation Area',
                description: 'World\'s largest intact caldera',
                location: 'Northern Tanzania',
                circuit: 'northern',
                highlights: JSON.stringify(['Crater views', 'Big Five viewing', 'Maasai culture']),
                activities: JSON.stringify(['Game drives', 'Cultural visits', 'Hiking'])
            },
            {
                identifier: 'katavi',
                name: 'Katavi National Park',
                description: 'Remote wilderness experience',
                location: 'Western Tanzania',
                circuit: 'western',
                highlights: JSON.stringify(['Remote wilderness', 'Hippo pools', 'River ecosystems']),
                activities: JSON.stringify(['Game drives', 'Walking safaris', 'Bird watching'])
            }
        ];

        // Insert parks
        for (const park of parks) {
            try {
                const [result] = await db.execute(
                    `INSERT INTO parks (identifier, name, description, location, circuit, highlights, activities) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)
                     ON DUPLICATE KEY UPDATE name = VALUES(name)`,
                    [
                        park.identifier,
                        park.name,
                        park.description,
                        park.location,
                        park.circuit,
                        park.highlights,
                        park.activities
                    ]
                );
                console.log(`Inserted/Updated park: ${park.name}`);
            } catch (error) {
                console.error(`Error inserting park ${park.name}:`, error);
                continue;
            }
        }

        // Get park IDs
        const [parkRows] = await db.execute('SELECT id, identifier FROM parks');
        const parkIdMap = {};
        parkRows.forEach(row => {
            parkIdMap[row.identifier] = row.id;
        });

        // Insert packages for each park
        for (const [parkIdentifier, packages] of Object.entries(parkPackages)) {
            const parkId = parkIdMap[parkIdentifier];
            
            if (!parkId) {
                console.log(`Warning: No park found for identifier ${parkIdentifier}`);
                continue;
            }

            for (const pkg of packages) {
                try {
                    const [result] = await db.execute(
                        `INSERT INTO packages (
                            title, description, image_url, price, duration,
                            group_size, categories, highlights, park_id,
                            itinerary, name
                        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        ON DUPLICATE KEY UPDATE
                            description = VALUES(description),
                            price = VALUES(price)`,
                        [
                            pkg.title || '',
                            pkg.description || '',
                            pkg.image || '',
                            pkg.price || 0,
                            pkg.duration || '',
                            pkg.groupSize || '',
                            JSON.stringify(pkg.categories || []),
                            JSON.stringify(pkg.highlights || []),
                            parkId,
                            JSON.stringify(pkg.itinerary || []),
                            pkg.title || '' // Using title as name
                        ]
                    );
                    console.log(`Inserted/Updated package: ${pkg.title}`);
                } catch (error) {
                    console.error(`Error inserting package ${pkg.title}:`, error);
                    continue; // Skip to next package if there's an error
                }
            }
        }

        console.log('Database seeding completed successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await db.end();
    }
}

seedDatabase(); 