"use client";

import { useEffect, useState } from 'react';

type Service = {
  id: string;
  code: string;
  category: string;
  title: string;
  priceLabel: string;
  description: string;
  notes: string;
};

export default function AdminPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    code: '',
    category: '',
    title: '',
    priceLabel: '',
    description: '',
    notes: '',
  });

  const fetchData = async () => {
    const [serviceRes, requestRes] = await Promise.all([
      fetch('/api/services'),
      fetch('/api/quote-requests'),
    ]);

    const [serviceData, requestData] = await Promise.all([
      serviceRes.json(),
      requestRes.json(),
    ]);

    setServices(serviceData);
    setRequests(requestData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setForm({ code: '', category: '', title: '', priceLabel: '', description: '', notes: '' });
      fetchData();
    }
  };

  if (loading) {
    return <div className="section-shell py-10 text-center text-slate-600">กำลังโหลดข้อมูล...</div>;
  }

  return (
    <div className="section-shell py-8">
      <div className="mb-8">
        <div className="badge">ระบบหลังบ้าน</div>
        <h1 className="mt-4 text-3xl font-bold text-rn">Dashboard จัดการบริการและคำขอ</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card p-6">
          <h2 className="mb-4 text-xl font-bold text-rn">เพิ่มสินค้า/บริการ</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                placeholder="รหัสสินค้า"
                className="rounded-xl border border-slate-200 px-3 py-2.5"
              />
              <input
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="หมวดหมู่"
                className="rounded-xl border border-slate-200 px-3 py-2.5"
              />
            </div>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="ชื่อบริการ"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
            />
            <input
              value={form.priceLabel}
              onChange={(e) => setForm({ ...form, priceLabel: e.target.value })}
              placeholder="ราคา เช่น 1,500 บาท/เดือน"
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
            />
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="คำอธิบาย"
              rows={3}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
            />
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="หมายเหตุ"
              rows={2}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
            />
            <button type="submit" className="rounded-xl bg-rn px-5 py-3 font-semibold text-white hover:bg-blue-900">
              บันทึกข้อมูล
            </button>
          </form>
        </div>

        <div className="card p-6">
          <h2 className="mb-4 text-xl font-bold text-rn">คำขอใบเสนอราคา</h2>
          <div className="space-y-4">
            {requests.length === 0 ? (
              <p className="text-sm text-slate-500">ยังไม่มีคำขอใดๆ</p>
            ) : (
              requests.map((request) => (
                <div key={request.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-slate-800">{request.name}</div>
                    <div className="text-xs text-slate-500">{new Date(request.createdAt).toLocaleDateString('th-TH')}</div>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    <p>โทร: {request.phone}</p>
                    <p>บริการ: {request.serviceType}</p>
                    <p>รายละเอียด: {request.details || '—'}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 card p-6">
        <h2 className="mb-4 text-xl font-bold text-rn">รายการสินค้าทั้งหมด</h2>
        <div className="space-y-3">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div>
                <div className="font-semibold text-slate-800">{service.title}</div>
                <div className="text-xs text-slate-500">{service.category}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-rn">{service.priceLabel}</div>
                <div className="text-xs text-slate-500">{service.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
