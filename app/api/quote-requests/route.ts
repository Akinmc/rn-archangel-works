import { NextResponse } from 'next/server';
import { getQuoteRequests, saveQuoteRequests } from '@/lib/data';

export async function GET() {
  const requests = await getQuoteRequests();
  return NextResponse.json(requests);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const requests = await getQuoteRequests();

  const entry = {
    id: `RQ-${Date.now()}`,
    name: payload.name || 'ไม่ระบุชื่อ',
    phone: payload.phone || '',
    serviceType: payload.serviceType || 'ไม่ระบุ',
    details: payload.details || '',
    createdAt: new Date().toISOString(),
  };

  const updated = [entry, ...requests];
  await saveQuoteRequests(updated);

  return NextResponse.json(entry, { status: 201 });
}
