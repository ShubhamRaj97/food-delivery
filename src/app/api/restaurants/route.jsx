import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, password, contact, city, address } = body

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, Email, and Password are required.' }, { status: 400 })
    }

    // Check if restaurant already exists
    const existing = await prisma.restaurant.findUnique({
      where: { email }
    })

    if (existing) {
      return NextResponse.json({ error: 'Email already registered.' }, { status: 409 })
    }

    // Create new restaurant
    const newRestaurant = await prisma.restaurant.create({
      data: {
        name,
        email,
        password, // 🔐 You should hash this before saving!
        contact,
        name,
        city,
        address
      }
    })

    return NextResponse.json({ success: true, restaurant: newRestaurant }, { status: 201 })

  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
