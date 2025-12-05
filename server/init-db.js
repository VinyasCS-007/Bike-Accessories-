const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function initDb() {
    try {
        // Connect to MySQL server (without database selected yet)
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || ''
        });

        console.log('Connected to MySQL server.');

        // Create database
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'bike_accessories'}`);
        console.log(`Database ${process.env.DB_NAME || 'bike_accessories'} created or already exists.`);

        // Use the database
        await connection.changeUser({ database: process.env.DB_NAME || 'bike_accessories' });

        // Read and execute schema.sql
        const schemaPath = path.join(__dirname, '../database/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');
        const schemaStatements = schemaSql.split(';').filter(stmt => stmt.trim());

        for (const statement of schemaStatements) {
            if (statement.trim()) {
                await connection.query(statement);
            }
        }
        console.log('Schema executed successfully.');

        // Read and execute seed.sql
        // Check if data exists first to avoid duplicates if run multiple times (simple check)
        const [rows] = await connection.query('SELECT COUNT(*) as count FROM products');
        if (rows[0].count === 0) {
            const seedPath = path.join(__dirname, '../database/seed.sql');
            const seedSql = fs.readFileSync(seedPath, 'utf8');
            const seedStatements = seedSql.split(';').filter(stmt => stmt.trim());

            for (const statement of seedStatements) {
                if (statement.trim()) {
                    await connection.query(statement);
                }
            }
            console.log('Seed data inserted successfully.');
        } else {
            console.log('Data already exists, skipping seed.');
        }

        await connection.end();
        console.log('Database initialization complete.');
        process.exit(0);
    } catch (err) {
        console.error('Error initializing database:', err);
        process.exit(1);
    }
}

initDb();
