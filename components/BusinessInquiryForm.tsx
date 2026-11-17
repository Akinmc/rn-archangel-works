'use client';

import { useState } from 'react';

type InquiryFormProps = { selectedPlan?: string };

export function BusinessInquiryForm({ selectedPlan = '' }: InquiryFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', serviceType: selectedPlan ? `แพ็กเกจ ${selectedPlan}` : 'ขอทดลองใช้ระบบ', details: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'ไม่สามารถส่งคำขอได้');
      setStatus({ type: 'success', message: 'ส่งคำขอเรียบร้อยแล้ว ทีมงานจะติดต่อกลับตามหมายเลขที่ให้ไว้' });
      setForm({ name: '', phone: '', serviceType: selectedPlan ? `แพ็กเกจ ${selectedPlan}` : 'ขอทดลองใช้ระบบ', details: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด กรุณาลองใหม่' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">ชื่อผู้ติดต่อ *
          <input required maxLength={100} autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="ชื่อ-นามสกุล" />
        </label>
        <label className="block text-sm font-medium text-slate-700">เบอร์โทรศัพท์ *
          <input required maxLength={30} type="tel" autoComplete="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="08X-XXX-XXXX" />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700">หัวข้อที่สนใจ
        <select value={form.serviceType} onChange={(event) => setForm({ ...form, serviceType: event.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-blue-700">
          <option value="ขอทดลองใช้ระบบ">ขอทดลองใช้ระบบ</option>
          <option value="แพ็กเกจ Starter">แพ็กเกจ Starter</option>
          <option value="แพ็กเกจ Growth">แพ็กเกจ Growth</option>
          <option value="แพ็กเกจ Enterprise">แพ็กเกจ Enterprise</option>
          <option value="เชื่อมต่อช่องทางดิจิทัล">เชื่อมต่อช่องทางดิจิทัล</option>
          <option value="ปรึกษาโครงการ">ปรึกษาโครงการ</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700">รายละเอียดเพิ่มเติม
        <textarea rows={4} maxLength={2000} value={form.details} onChange={(event) => setForm({ ...form, details: event.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="เล่าความต้องการ เช่น จังหวัดที่สนใจ จำนวนผู้ใช้ หรือช่องทางที่ต้องการเชื่อมต่อ" />
      </label>
      <p className="text-xs leading-5 text-slate-500">เมื่อส่งแบบฟอร์ม คุณยินยอมให้ทีมงานใช้ข้อมูลติดต่อเพื่อดำเนินการตอบกลับคำขอนี้เท่านั้น</p>
      <button disabled={submitting} className="w-full rounded-xl bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? 'กำลังส่งคำขอ…' : 'ส่งคำขอให้ทีมงานติดต่อกลับ'}</button>
      {status && <p role="status" className={`rounded-xl p-3 text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}>{status.message}</p>}
    </form>
  );
}
