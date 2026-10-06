"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const meRes = await fetch('/api/auth/me');
        if (!meRes.ok) {
          router.push('/login');
          return;
        }

        const me = await meRes.json();
        if (me.user?.role !== 'ADMIN') {
          router.push('/dashboard');
          return;
        }

        const res = await fetch('/api/payments');
        if (res.ok) {
          setPayments(await res.json());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [router]);

  const updateStatus = async (paymentId: string, status: string) => {
    try {
      const response = await fetch('/api/payments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId, status }),
      });

      if (response.ok) {
        const updated = await response.json();
        setPayments((current) => current.map((item) => item.id === updated.id ? updated : item));
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="section-shell py-10 text-center text-slate-600">กำลังโหลดข้อมูลการชำระเงิน...</div>;
  }

  return (
    <div className="section-shell py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-rn">💳 การชำระเงิน</h1>
        <p className="mt-2 text-slate-600">ติดตามสถานะ การชำระเงิน และเอกสารใบแจ้งหนี้</p>
      </div>

      <div className="card p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200">
              <tr>
                <th className="px-3 py-3">เลขใบแจ้งหนี้</th>
                <th className="px-3 py-3">ลูกค้า</th>
                <th className="px-3 py-3">จำนวนเงิน</th>
                <th className="px-3 py-3">วิธีชำระ</th>
                <th className="px-3 py-3">สถานะ</th>
                <th className="px-3 py-3">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-slate-200">
                  <td className="px-3 py-3 font-mono text-xs text-slate-600">{payment.invoiceNumber}</td>
                  <td className="px-3 py-3">{payment.customerName}</td>
                  <td className="px-3 py-3 font-bold text-rn">฿{Number(payment.amount).toLocaleString()}</td>
                  <td className="px-3 py-3">{payment.paymentMethod}</td>
                  <td className="px-3 py-3">
                    <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold text-amber-700">{payment.status}</span>
                  </td>
                  <td className="px-3 py-3">
                    <select
                      value={payment.status}
                      onChange={(e) => updateStatus(payment.id, e.target.value)}
                      className="rounded-lg border border-slate-200 px-2 py-1 text-xs"
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="PAID">PAID</option>
                      <option value="FAILED">FAILED</option>
                      <option value="REFUNDED">REFUNDED</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
