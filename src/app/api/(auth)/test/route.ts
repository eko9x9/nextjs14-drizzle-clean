import { db } from '@/db';
import { insertNotesSchema, notes } from '@/db/schema';
import { NextResponse } from 'next/server'
import { generate, count } from "random-words";
import z from 'zod'
 
export async function GET(request: Request) {
    try {
        
        const insert = insertNotesSchema.parse({
            title: generate({exactly: 3}).toString(),
            description: generate({exactly: 7}).toString()
        });
        
        await db.insert(notes).values(insert);

        return NextResponse.json({ msg: 'Random note inserted' })
    } catch (error) {
        console.log(error)
    }
}