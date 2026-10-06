"use client";

import { useState } from 'react';

export function PaymentRequestForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    amount: '',
    paymentMethod: 'PromptPay',
    customerName: '',
    customerEmail: '',
    notes: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('กำลังสร้างรายการชำระเงิน...');

    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      const data = await response.json();
      setStatus(`✅ สร้างใบแจ้งหนี้เรียบร้อยแล้ว เลขที่ ${data.invoiceNumber}`);
      setForm({ amount: '', paymentMethod: 'PromptPay', customerName: '', customerEmail: '', notes: '' });
    } catch (error) {
      setStatus('❌ ' + (error instanceof Error ? error.message : 'เกิดข้อผิดพลาด'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-bold text-rn">สร้างใบแจ้งหนี้</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">ยอดชำระ</span>
          <input
            type="number"
            required
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
            placeholder="5000"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">ช่องทางชำระ</span>
          <select
            value={form.paymentMethod}
            onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
          >
            <option value="PromptPay">PromptPay</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">ชื่อผู้ชำระ</span>
          <input
            type="text"
            required
            value={form.customerName}
            onChange={(e) => setForm({ ...form, customerName: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
            placeholder="ชื่อ-นามสกุล"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">อีเมล</span>
          <input
            type="email"
            required
            value={form.customerEmail}
            onChange={(e) => setForm({ ...form, customerEmail: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
            placeholder="customer@email.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">หมายเหตุ</span>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-3 py-2.5"
          placeholder="รายละเอียดเพิ่มเติม"
        />
      </label>

      <button type="submit" className="rounded-xl bg-rn px-5 py-3 font-semibold text-white hover:bg-blue-900">
        สร้างใบแจ้งหนี้
      </button>

      {status && (
        <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{status}</div>
      )}
    </form>
  );
}
