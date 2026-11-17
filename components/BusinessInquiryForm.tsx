'use client';

import { useState } from 'react';

type InquiryFormProps = { selectedPlan?: string; source?: string };

export function BusinessInquiryForm({ selectedPlan = '', source = 'website' }: InquiryFormProps) {
  const initialService = selectedPlan ? `แพ็กเกจ ${selectedPlan}` : 'ขอทดลองใช้ระบบ';
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', serviceType: initialService, preferredChannel: 'โทรศัพท์', details: '', website: '', consent: false });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch('/api/quote-requests', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'ไม่สามารถส่งคำขอได้');
      setStatus({ type: 'success', message: 'รับคำขอเรียบร้อยแล้ว ทีมงานจะติดต่อกลับตามช่องทางที่เลือก' });
      setForm({ name: '', phone: '', email: '', company: '', serviceType: initialService, preferredChannel: 'โทรศัพท์', details: '', website: '', consent: false });
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด กรุณาลองใหม่' });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = 'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100';
  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">ชื่อผู้ติดต่อ *<input required maxLength={100} autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="ชื่อ-นามสกุล" /></label>
        <label className="block text-sm font-medium text-slate-700">เบอร์โทรศัพท์ *<input required maxLength={30} type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="08X-XXX-XXXX" /></label>
        <label className="block text-sm font-medium text-slate-700">อีเมล (ถ้ามี)<input maxLength={160} type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@company.co.th" /></label>
        <label className="block text-sm font-medium text-slate-700">บริษัท / หน่วยงาน (ถ้ามี)<input maxLength={160} autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} placeholder="ชื่อบริษัทหรือหน่วยงาน" /></label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">หัวข้อที่สนใจ<select value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })} className={inputClass}><option value="ขอทดลองใช้ระบบ">ขอทดลองใช้ระบบ</option><option value="แพ็กเกจ Starter">แพ็กเกจ Starter</option><option value="แพ็กเกจ Growth">แพ็กเกจ Growth</option><option value="แพ็กเกจ Enterprise">แพ็กเกจ Enterprise</option><option value="แพ็กเกจ ทีมธุรกิจ">แพ็กเกจทีมธุรกิจ</option><option value="แพ็กเกจ องค์กร">แพ็กเกจองค์กร</option><option value="เชื่อมต่อช่องทางดิจิทัล">เชื่อมต่อช่องทางดิจิทัล</option><option value="ปรึกษาโครงการ">ปรึกษาโครงการ</option></select></label>
        <label className="block text-sm font-medium text-slate-700">ช่องทางให้ติดต่อกลับ<select value={form.preferredChannel} onChange={(e) => setForm({ ...form, preferredChannel: e.target.value })} className={inputClass}><option>โทรศัพท์</option><option>อีเมล</option><option>LINE</option><option>Facebook</option><option>Instagram</option></select></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">รายละเอียดความต้องการ<textarea rows={3} maxLength={2000} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className={inputClass} placeholder="จังหวัดที่สนใจ จำนวนผู้ใช้ และช่องทางที่ต้องการเชื่อมต่อ" /></label>
      <label className="hidden" aria-hidden="true">เว็บไซต์<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></label>
      <label className="flex items-start gap-3 text-xs leading-5 text-slate-600"><input required type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-800" /><span>ยินยอมให้ทีมงานเก็บและใช้ข้อมูลที่กรอกเพื่อประสานงานและตอบคำขอนี้เท่านั้น *</span></label>
      <button disabled={submitting} className="w-full rounded-xl bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? 'กำลังส่งคำขอ…' : 'ส่งคำขอให้ทีมงานติดต่อกลับ'}</button>
      {status && <p role="status" className={`rounded-xl p-3 text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}>{status.message}</p>}
    </form>
  );
}
