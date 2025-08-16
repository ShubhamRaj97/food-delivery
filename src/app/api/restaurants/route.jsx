import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    const { name, email, password, contact, city, address, login } = body;

    let result;

    if (login) {
      // LOGIN
      result = await prisma.restaurant.findFirst({
        where: {
          email: email,
          password: password
        }
      });

      if (!result) {
        return NextResponse.json(
          { success: false, error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      return NextResponse.json({ success: true, restaurant: result });
    } else {
      // SIGNUP
      if (!name || !email || !password) {
        return NextResponse.json(
          { error: 'Name, Email, and Password are required.' },
          { status: 400 }
        );
      }

      const existing = await prisma.restaurant.findUnique({
        where: { email }
      });

      if (existing) {
        return NextResponse.json(
          { error: 'Email already registered.' },
          { status: 409 }
        );
      }

      const newRestaurant = await prisma.restaurant.create({
        data: {
          name,
          email,
          password, // ⚠️ Should be hashed in real apps
          contact,
          city,
          address
        }
      });

      return NextResponse.json(
        { success: true, restaurant: newRestaurant },
        { status: 201 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}


export async function GET(req) {
  try {
    const id = req.nextUrl.searchParams.get('id')

    if (id) {
      // Fetch one
      const restaurant = await prisma.restaurant.findUnique({
        where: { id: Number(id) },
      })

      if (!restaurant) {
        return NextResponse.json({ error: 'Restaurant not found' }, { status: 404 })
      }

      return NextResponse.json({ success: true, restaurant })
    } else {
      // Fetch all
      const restaurants = await prisma.restaurant.findMany()
      return NextResponse.json({ success: true, restaurants })
    }
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}






