import { prisma } from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = parseInt(params.id, 10)  // 👈 convert string to Int
    console.log("Restaurant id", id)

    const foods = await prisma.food.findUnique({
        where: { id }
    })

    return NextResponse.json({ result: foods, success: true })
}
