import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUserFromRequest } from '@/lib/auth';

const MAX_BODY_BYTES = 12_000;

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function GET(request: Request) {
  try {
    const user = getSessionUserFromRequest(request);
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'ไม่มีสิทธิ์' }, { status: 403, headers: { 'Cache-Control': 'no-store' } });
    }

    const requests = await prisma.quoteRequest.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(requests, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ error: 'ไม่สามารถดึงข้อมูลได้' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
  }
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'ข้อมูลมีขนาดใหญ่เกินกำหนด' }, { status: 413 });
    }

    const body = await request.json();
    // Honeypot field for basic bot filtering. Real users leave it empty.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true }, { status: 201 });

    const name = clean(body.name, 100);
    const phone = clean(body.phone, 30);
    const email = clean(body.email, 160);
    const company = clean(body.company, 160);
    const serviceType = clean(body.serviceType, 100);
    const details = clean(body.details, 2000);
    const preferredChannel = clean(body.preferredChannel, 30);
    const source = clean(body.source, 80);

    if (!name || !phone || !serviceType || body.consent !== true) {
      return NextResponse.json({ error: 'กรุณากรอกชื่อ เบอร์โทร หัวข้อที่สนใจ และยินยอมให้ใช้ข้อมูลเพื่อติดต่อกลับ' }, { status: 400 });
    }
    if (!/^[0-9+()\-\s]{8,30}$/.test(phone)) {
      return NextResponse.json({ error: 'กรุณาตรวจสอบรูปแบบเบอร์โทรศัพท์' }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'กรุณาตรวจสอบรูปแบบอีเมล' }, { status: 400 });
    }
    if (preferredChannel && !['โทรศัพท์', 'อีเมล', 'LINE', 'Facebook', 'Instagram'].includes(preferredChannel)) {
      return NextResponse.json({ error: 'ช่องทางติดต่อไม่ถูกต้อง' }, { status: 400 });
    }

    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        name,
        phone,
        email: email || null,
        company: company || null,
        preferredChannel: preferredChannel || null,
        source: source || 'เว็บไซต์',
        consentAt: new Date(),
        serviceType,
        details,
      },
    });

    return NextResponse.json({ id: quoteRequest.id, message: 'รับคำขอเรียบร้อยแล้ว' }, { status: 201, headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ error: 'ไม่สามารถรับคำขอได้ กรุณาลองใหม่อีกครั้ง' }, { status: 500 });
  }
}
