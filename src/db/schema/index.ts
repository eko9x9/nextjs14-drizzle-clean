import { InferModel } from 'drizzle-orm';
import { mysqlTable, text, int } from 'drizzle-orm/mysql-core';

export const notes = mysqlTable('notes', {
    id: int('id').primaryKey().autoincrement(),
    title: text('title').notNull(),
    description: text('description').notNull(),
});

export type Note = InferModel<typeof notes>;
