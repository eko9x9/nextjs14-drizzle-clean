import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({
    path: ".env.local"
});

// We need to make sure the in the tsconfig.json file, we need to change the target at least to 'ES6'
export default {
    schema: './src/db/schema/index.ts',
    out: './outs/drizzle',
    driver: 'mysql2',
    dbCredentials: {
        uri: process.env.DB_URL!
    },
} satisfies Config;