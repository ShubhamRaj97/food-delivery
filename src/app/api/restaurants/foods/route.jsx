import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const payload = await req.json()
        let { name, price, path, description, resto_id } = payload
        price = parseInt(price)
        const food = await prisma.food.create({
            data: {
                name,
                price,
                path,
                description,
                resto_id: parseInt(resto_id)
            }
        })
        return NextResponse.json(
            { success: true, food: food, message: 'Food created successfully' },
            { status: 200 }
        )
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        );

    }
}