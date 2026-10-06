import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUserFromRequest } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์' }, { status: 403 });
    }

    const payments = await prisma.payment.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(payments);
  } catch (error) {
    return NextResponse.json({ error: 'ไม่สามารถโหลดข้อมูลชำระเงิน' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: 'กรุณาเข้าสู่ระบบก่อน' }, { status: 401 });
    }

    const body = await request.json();
    const { amount, paymentMethod, customerName, customerEmail, notes } = body;

    if (!amount || !paymentMethod || !customerName || !customerEmail) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลการชำระเงินให้ครบ' }, { status: 400 });
    }

    const invoiceNumber = `PAY-${Date.now()}`;
    const payment = await prisma.payment.create({
      data: {
        invoiceNumber,
        amount: Number(amount),
        currency: 'THB',
        status: 'PENDING',
        paymentMethod,
        customerName,
        customerEmail,
        notes: notes || '',
        userId: user.id,
      },
    });

    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'ไม่สามารถสร้างรายการชำระเงิน' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์' }, { status: 403 });
    }

    const body = await request.json();
    const { paymentId, status } = body;

    if (!paymentId || !status) {
      return NextResponse.json({ error: 'ข้อมูลไม่ครบ' }, { status: 400 });
    }

    const payment = await prisma.payment.update({
      where: { id: paymentId },
      data: { status },
    });

    return NextResponse.json(payment);
  } catch (error) {
    return NextResponse.json({ error: 'ไม่สามารถอัปเดตสถานะชำระเงิน' }, { status: 500 });
  }
}
