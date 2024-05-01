import { db } from '@/db';
import { notes } from '@/db/schema';
import { NextResponse } from 'next/server'
import { generate, count } from "random-words";
 
export async function GET(request: Request) {
    try {
        await db.insert(notes).values({
            title: generate({exactly: 3}).toString(),
            description: generate({exactly: 7}).toString()
        });
    
        return NextResponse.json({ msg: 'Random note inserted' })
    } catch (error) {
        console.log(error)
    }
}