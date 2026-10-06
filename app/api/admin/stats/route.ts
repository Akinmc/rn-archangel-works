import { prisma } from '@/lib/prisma';
import { getSessionUserFromRequest } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์' }, { status: 403 });
    }

    const totalUsers = await prisma.user.count();
    const totalServices = await prisma.service.count();
    const totalRequests = await prisma.quoteRequest.count();
    const recentRequests = await prisma.quoteRequest.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      totalUsers,
      totalServices,
      totalRequests,
      recentRequests,
    });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาด' }, { status: 500 });
  }
}
