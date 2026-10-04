import { NextResponse } from 'next/server';
import { getServices, saveServices } from '@/lib/data';

export async function GET() {
  const services = await getServices();
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const services = await getServices();

  const newService = {
    id: payload.code || `RN-${Date.now()}`,
    code: payload.code || `RN-${Date.now()}`,
    category: payload.category || 'สินค้าอื่นๆ',
    title: payload.title || 'บริการใหม่',
    priceLabel: payload.priceLabel || 'ราคาตามตกลง',
    description: payload.description || '',
    notes: payload.notes || 'ข้อมูลเพิ่มเติม',
  };

  const updated = [...services, newService];
  await saveServices(updated);

  return NextResponse.json(newService, { status: 201 });
}
