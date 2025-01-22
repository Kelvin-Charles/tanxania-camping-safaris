const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function initDatabase() {
    try {
        // Create connection without database selected
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root', // Replace with your MySQL username
            password: '' // Replace with your MySQL password
        });

        // Create database if it doesn't exist
        await connection.query('CREATE DATABASE IF NOT EXISTS tanzania_camping');
        
        // Use the database
        await connection.query('USE tanzania_camping');

        // Read schema.sql
        const schemaPath = path.join(__dirname, '../config/schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        // Split the schema into individual statements
        const statements = schema
            .split(';')
            .map(statement => statement.trim())
            .filter(statement => statement.length > 0);

        // Execute each statement
        for (let statement of statements) {
            try {
                await connection.query(statement);
                console.log('Successfully executed:', statement.substring(0, 50) + '...');
            } catch (error) {
                // Log the error but continue with other statements
                if (error.code === 'ER_TABLE_EXISTS_ERROR') {
                    console.log('Table already exists, skipping:', error.sqlMessage);
                } else {
                    console.error('Error executing statement:', error);
                }
            }
        }

        console.log('Database initialized successfully');
        await connection.end();
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

// Drop all tables first (optional, uncomment if needed)
async function dropAllTables() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tanzania_camping'
        });

        // Disable foreign key checks
        await connection.query('SET FOREIGN_KEY_CHECKS = 0');

        // Get all tables
        const [tables] = await connection.query('SHOW TABLES');
        
        // Drop each table
        for (let table of tables) {
            const tableName = table[`Tables_in_tanzania_camping`];
            await connection.query(`DROP TABLE IF EXISTS ${tableName}`);
            console.log(`Dropped table: ${tableName}`);
        }

        // Re-enable foreign key checks
        await connection.query('SET FOREIGN_KEY_CHECKS = 1');

        await connection.end();
        console.log('All tables dropped successfully');
    } catch (error) {
        console.error('Error dropping tables:', error);
        process.exit(1);
    }
}

// If you want to start fresh, uncomment the next line
dropAllTables().then(() => initDatabase());

// If you want to keep existing tables and just add missing ones
// initDatabase(); 