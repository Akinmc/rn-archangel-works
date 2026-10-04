"use client";

import { FormEvent, useState } from 'react';

export function QuoteRequestForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    serviceType: '',
    details: '',
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('กำลังส่งข้อมูล...');

    const response = await fetch('/api/quote-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      setStatus('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
      return;
    }

    setStatus('ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับเร็วที่สุด');
    setForm({ name: '', phone: '', serviceType: '', details: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">ชื่อ-นามสกุล *</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
            placeholder="กรอกชื่อของคุณ"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">เบอร์โทรศัพท์ *</span>
          <input
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
            placeholder="0812345678"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">ประเภทบริการที่สนใจ *</span>
        <select
          required
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
        >
          <option value="">-- เลือกประเภท --</option>
          <option value="ก่อสร้าง-ออกแบบ">🏗️ ก่อสร้าง-ออกแบบ</option>
          <option value="ปรึกษาการลงทุน">📊 ปรึกษาการลงทุน</option>
          <option value="สื่อ-พื้นที่โฆษณา">📱 สื่อ-พื้นที่โฆษณา</option>
          <option value="ร่วมเป็นพาร์ทเนอร์">🤝 ร่วมเป็นพาร์ทเนอร์</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">รายละเอียดโครงการ</span>
        <textarea
          rows={4}
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
          placeholder="ขนาดพื้นที่ งบประมาณ รายละเอียดที่ต้องการ"
        />
      </label>

      <button type="submit" className="rounded-xl bg-rn px-5 py-3 font-semibold text-white hover:bg-blue-900">
        ส่งข้อมูลเพื่อเสนอราคา
      </button>

      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}
