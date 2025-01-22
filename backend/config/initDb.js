const fs = require('fs');
const path = require('path');
const db = require('./database');

async function initializeDatabase() {
    try {
        console.log('Starting database initialization...');

        // Read the schema file
        const schemaPath = path.join(__dirname, 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        // Split the schema into individual statements
        const statements = schema
            .split(';')
            .filter(statement => statement.trim())
            .map(statement => statement.trim() + ';');

        // Execute each statement
        for (const statement of statements) {
            try {
                await db.execute(statement);
                console.log('Executed statement successfully');
            } catch (error) {
                console.error('Error executing statement:', error.message);
                console.error('Statement:', statement);
            }
        }

        console.log('Database initialization completed successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

// Run if this file is executed directly
if (require.main === module) {
    initializeDatabase()
        .then(() => process.exit(0))
        .catch(error => {
            console.error('Fatal error:', error);
            process.exit(1);
        });
}

module.exports = initializeDatabase; 