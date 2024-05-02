import { InferModel } from 'drizzle-orm';
import { mysqlTable, text, int } from 'drizzle-orm/mysql-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const notes = mysqlTable('notes', {
    id: int('id').primaryKey().autoincrement(),
    title: text('title').notNull(),
    description: text('description').notNull(),
});

export const selectNotesSchema = createSelectSchema(notes);
export const insertNotesSchema = createInsertSchema(notes, {
    id: (schema) => schema.id.positive(),
    title: (schema) => schema.title,
    description: z.string(),
});

export type Note = InferModel<typeof notes>;
