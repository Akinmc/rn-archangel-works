import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const requests = await prisma.quoteRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(requests);
  } catch (error) {
    return NextResponse.json({ error: 'ไม่สามารถดึงข้อมูลได้' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, serviceType, details } = body;

    if (!name || !phone || !serviceType) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลจำเป็น' }, { status: 400 });
    }

    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        name,
        phone,
        serviceType,
        details: details || '',
      },
    });

    return NextResponse.json(quoteRequest, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'ไม่สามารถสร้างคำขอได้' }, { status: 500 });
  }
}
