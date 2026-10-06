"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { SessionUser } from '@/lib/auth';

type QuoteRequest = {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  details: string;
  createdAt: string;
};

export default function QuoteRequestsPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (!response.ok) {
          router.push('/login');
          return;
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    if (!user) return;

    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/quote-requests');
        if (response.ok) {
          const data = await response.json();
          setRequests(data);
        }
      } catch (error) {
        console.error('Failed to fetch requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user]);

  if (loading) {
    return <div className="section-shell py-10 text-center text-slate-600">กำลังโหลด...</div>;
  }

  return (
    <div className="section-shell py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-rn">📋 คำขอเสนอราคาของคุณ</h1>
        <p className="mt-2 text-slate-600">รวมทั้งหมด {requests.length} รายการ</p>
      </div>

      {requests.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-slate-600">ยังไม่มีคำขอใด</p>
        </div>
      ) : (
        <div className="grid gap-5">
          {requests.map((req) => (
            <div key={req.id} className="card p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-rn">{req.name}</h2>
                  <p className="text-sm text-slate-600">{new Date(req.createdAt).toLocaleString('th-TH')}</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <span className="text-sm font-semibold text-slate-700">เบอร์โทรศัพท์</span>
                  <p className="text-slate-800">{req.phone}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-700">ประเภทบริการ</span>
                  <p className="text-slate-800">{req.serviceType}</p>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-sm font-semibold text-slate-700">รายละเอียด</span>
                <p className="mt-1 text-slate-800">{req.details || '—'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
