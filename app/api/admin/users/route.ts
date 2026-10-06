import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUserFromRequest } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์' }, { status: 403 });
    }

    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'ไม่สามารถโหลดข้อมูลผู้ใช้' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์' }, { status: 403 });
    }

    const body = await request.json();
    const { userId, role, status } = body;

    if (!userId) {
      return NextResponse.json({ error: 'กรุณาระบุผู้ใช้' }, { status: 400 });
    }

    const updated = await prisma.user.update({
      where: { id: userId },
      data: {
        role,
        status,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'ไม่สามารถอัปเดตข้อมูลผู้ใช้' }, { status: 500 });
  }
}
