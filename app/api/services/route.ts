import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUserFromRequest } from '@/lib/auth';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'ไม่สามารถดึงข้อมูลบริการได้' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์' }, { status: 403 });
    }

    const body = await request.json();
    const { code, category, title, priceLabel, description, notes } = body;

    if (!code || !category || !title) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลจำเป็น' }, { status: 400 });
    }

    const service = await prisma.service.create({
      data: {
        code,
        category,
        title,
        priceLabel,
        description,
        notes,
        createdById: user.id,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'ไม่สามารถสร้างบริการได้' }, { status: 500 });
  }
}
