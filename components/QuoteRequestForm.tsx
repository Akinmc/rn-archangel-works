"use client";

import { useState } from 'react';

export function QuoteRequestForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    serviceType: '',
    details: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('กำลังส่งข้อมูล...');

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      setStatus('✅ ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับเร็ว ๆ นี้');
      setForm({ name: '', phone: '', serviceType: '', details: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus('❌ ' + (error instanceof Error ? error.message : 'เกิดข้อผิดพลาด'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">ชื่อ-นามสกุล *</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
            placeholder="กรุณากรอกชื่อของคุณ"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">เบอร์โทรศัพท์ *</span>
          <input
            type="tel"
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
          <option value="🏗️ ก่อสร้าง-ออกแบบ">🏗️ ก่อสร้าง-ออกแบบ</option>
          <option value="📊 ปรึกษาการลงทุน">📊 ปรึกษาการลงทุน</option>
          <option value="📱 พื้นที่โฆษณา/ข่าวสาร">📱 พื้นที่โฆษณา/ข่าวสาร</option>
          <option value="🤝 ร่วมเป็นพาร์ทเนอร์">🤝 ร่วมเป็นพาร์ทเนอร์</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">รายละเอียดโครงการ</span>
        <textarea
          rows={4}
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
          placeholder="ขนาด พื้นที่ งบประมาณโดยประมาณ สิ่งที่ต้องการ..."
        />
      </label>

      <button type="submit" className="w-full rounded-xl bg-rn px-5 py-3 font-semibold text-white hover:bg-blue-900">
        📤 ส่งข้อมูลเพื่อเสนอราคา
      </button>

      {status && (
        <div className={`rounded-lg p-3 text-sm ${
          status.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {status}
        </div>
      )}
    </form>
  );
}
