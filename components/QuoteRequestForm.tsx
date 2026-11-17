"use client";

import { useState } from 'react';

export function QuoteRequestForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', serviceType: '', details: '', consent: false });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('กำลังส่งข้อมูล...');
    try {
      const response = await fetch('/api/quote-requests', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'เกิดข้อผิดพลาด');
      setStatus('✅ ส่งข้อมูลเรี���บร้อยแล้ว ทีมงานจะติดต่อกลับเร็ว ๆ นี้');
      setForm({ name: '', phone: '', serviceType: '', details: '', consent: false });
    } catch (error) {
      setStatus('❌ ' + (error instanceof Error ? error.message : 'เกิดข้อผิดพลาด'));
    }
  };

  const inputClass = 'w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn';
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block"><span className="mb-1 block text-sm font-medium text-slate-700">ชื่อ-นามสกุล *</span><input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="กรุณากรอกชื่อของคุณ" /></label>
        <label className="block"><span className="mb-1 block text-sm font-medium text-slate-700">เบอร์โทรศัพท์ *</span><input type="tel" required maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="0812345678" /></label>
      </div>
      <label className="block"><span className="mb-1 block text-sm font-medium text-slate-700">ประเภทบริการที่สนใจ *</span><select required value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })} className={inputClass}><option value="">-- เลือกประเภท --</option><option value="ก่อสร้าง-ออกแบบ">ก่อสร้าง-ออกแบบ</option><option value="ปรึกษาการลงทุน">ปรึกษาการลงทุน</option><option value="พื้นที่โฆษณา/ข่าวสาร">พื้นที่โฆษณา/ข่าวสาร</option><option value="ร่วมเป็นพาร์ทเนอร์">ร่วมเป็นพาร์ทเนอร์</option><option value="Procurement Insight">Procurement Insight / ทดลองระบบ</option></select></label>
      <label className="block"><span className="mb-1 block text-sm font-medium text-slate-700">รายละเอียด</span><textarea rows={4} maxLength={2000} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className={inputClass} placeholder="รายละเอียดที่ต้องการให้ทีมงานทราบ" /></label>
      <label className="flex items-start gap-2 text-xs leading-5 text-slate-600"><input required type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1" /><span>ยินยอมให้ใช้ข้อมูลติดต่อเพื่อประสานงานและตอบคำขอนี้ *</span></label>
      <button type="submit" className="w-full rounded-xl bg-rn px-5 py-3 font-semibold text-white hover:bg-blue-900">ส่งคำขอ</button>
      {status && <div role="status" className={`rounded-lg p-3 text-sm ${status.startsWith('✅') ? 'bg-green-50 text-green-700' : status.startsWith('❌') ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>{status}</div>}
    </form>
  );
}
