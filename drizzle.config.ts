import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({
    path: ".env.local"
});

export default {
    schema: './src/db/schema/index.ts',
    out: './outs/drizzle',
    driver: 'mysql2',
    dbCredentials: {
        uri: process.env.DB_URL!
    },
} satisfies Config;