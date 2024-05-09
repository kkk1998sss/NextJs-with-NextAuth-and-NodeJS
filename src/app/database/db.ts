import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432, // You can set your default port or provide it via environment variable
    database: process.env.DB_NAME, // Use your own env variable here
//   ssl: {
//     rejectUnauthorized: false, 
//   },
});

export default pool;