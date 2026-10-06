import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [totalUsers, totalServices, totalRequests, recentRequests] = await Promise.all([
      prisma.user.count(),
      prisma.service.count(),
      prisma.quoteRequest.count(),
      prisma.quoteRequest.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);

    return NextResponse.json({
      totalUsers,
      totalServices,
      totalRequests,
      recentRequests,
    });
  } catch (error) {
    return NextResponse.json({ error: 'ไม่สามารถโหลดสถิติได้' }, { status: 500 });
  }
}

