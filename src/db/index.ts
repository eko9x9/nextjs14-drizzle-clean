import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import * as schema from './schema/index';

const mysql2 = mysql.createPool(process.env.DB_URL!);

export const db: MySql2Database<typeof schema> = drizzle(mysql2, {
    schema,
    mode: "planetscale"
});

migrate(db, { migrationsFolder: 'drizzle' });
