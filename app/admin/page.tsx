"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { SessionUser } from '@/lib/auth';

type Service = {
  id: string;
  code: string;
  category: string;
  title: string;
  priceLabel: string;
  description: string;
  notes: string;
  createdAt: string;
};

type QuoteRequest = {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  details: string;
  createdAt: string;
  userId: string | null;
};

type Stats = {
  totalUsers: number;
  totalServices: number;
  totalRequests: number;
  recentRequests: QuoteRequest[];
};

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [form, setForm] = useState({
    code: '',
    category: '',
    title: '',
    priceLabel: '',
    description: '',
    notes: '',
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (!response.ok) {
          router.push('/login');
          return;
        }
        const data = await response.json();
        if (data.user.role !== 'ADMIN') {
          router.push('/dashboard');
          return;
        }
        setUser(data.user);
        await fetchData();
      } catch (error) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  const fetchData = async () => {
    try {
      const [statsRes, servicesRes, requestsRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/services'),
        fetch('/api/admin/quote-requests'),
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      if (servicesRes.ok) {
        const servicesData = await servicesRes.json();
        setServices(servicesData);
      }

      if (requestsRes.ok) {
        const requestsData = await requestsRes.json();
        setRequests(requestsData);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setForm({ code: '', category: '', title: '', priceLabel: '', description: '', notes: '' });
        setShowServiceForm(false);
        await fetchData();
      }
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('ยืนยันการลบบริการนี้?')) return;
    try {
      const response = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (response.ok) {
        await fetchData();
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  if (loading) {
    return <div className="section-shell py-10 text-center text-slate-600">กำลังโหลด...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="section-shell py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-rn">⚙️ Admin Dashboard</h1>
          <p className="mt-2 text-slate-600">ยินดีต้อนรับ, {user.name}</p>
        </div>
        <Link href="/dashboard" className="rounded-xl bg-slate-600 px-4 py-2 font-semibold text-white hover:bg-slate-700">
          กลับไป Dashboard
        </Link>
      </div>

      {stats && (
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="card p-6">
            <div className="text-3xl font-bold text-rn">{stats.totalUsers}</div>
            <div className="mt-2 text-sm text-slate-600">ผู้ใช้ทั้งหมด</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold text-rn">{stats.totalServices}</div>
            <div className="mt-2 text-sm text-slate-600">บริการทั้งหมด</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold text-rn">{stats.totalRequests}</div>
            <div className="mt-2 text-sm text-slate-600">คำขอทั้งหมด</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold text-green-600">{stats.recentRequests.length}</div>
            <div className="mt-2 text-sm text-slate-600">คำขอล่าสุด</div>
          </div>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-rn">เพิ่มบริการใหม่</h2>
            <button
              onClick={() => setShowServiceForm(!showServiceForm)}
              className="rounded-lg bg-rn px-3 py-1 text-sm text-white hover:bg-blue-900"
            >
              {showServiceForm ? 'ยกเลิก' : '+ เพิ่ม'}
            </button>
          </div>

          {showServiceForm && (
            <form onSubmit={handleAddService} className="space-y-3">
              <input
                type="text"
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                placeholder="รหัสบริการ เช่น RN-001"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                required
              />
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="หมวดหมู่"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                required
              />
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="ชื่อบริการ"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                required
              />
              <input
                type="text"
                value={form.priceLabel}
                onChange={(e) => setForm({ ...form, priceLabel: e.target.value })}
                placeholder="ราคา เช่น 1,500 บาท/เดือน"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="รายละเอียด"
                rows={2}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="หมายเหตุ"
                rows={2}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
              <button type="submit" className="w-full rounded-lg bg-green-600 py-2 font-semibold text-white hover:bg-green-700">
                บันทึกบริการ
              </button>
            </form>
          )}
        </div>

        <div className="card p-6">
          <h2 className="mb-4 text-xl font-bold text-rn">คำขอเสนอราคาล่าสุด</h2>
          <div className="space-y-3">
            {requests.slice(0, 5).map((req) => (
              <div key={req.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
                <div className="font-semibold text-slate-800">{req.name}</div>
                <div className="mt-1 text-xs text-slate-600">
                  <p>📞 {req.phone}</p>
                  <p>📋 {req.serviceType}</p>
                  <p>📅 {new Date(req.createdAt).toLocaleDateString('th-TH')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 card p-6">
        <h2 className="mb-4 text-xl font-bold text-rn">รายการบริการทั้งหมด ({services.length})</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-3 font-semibold">รหัส</th>
                <th className="text-left py-3 px-3 font-semibold">ชื่อบริการ</th>
                <th className="text-left py-3 px-3 font-semibold">หมวดหมู่</th>
                <th className="text-left py-3 px-3 font-semibold">ราคา</th>
                <th className="text-left py-3 px-3 font-semibold">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-3 px-3 font-mono text-xs text-slate-500">{service.code}</td>
                  <td className="py-3 px-3 font-medium">{service.title}</td>
                  <td className="py-3 px-3 text-slate-600">{service.category}</td>
                  <td className="py-3 px-3 font-bold text-rn">{service.priceLabel}</td>
                  <td className="py-3 px-3">
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="text-red-600 hover:text-red-800 font-semibold text-xs"
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 card p-6">
        <h2 className="mb-4 text-xl font-bold text-rn">รายการคำขอทั้งหมด ({requests.length})</h2>
        <div className="space-y-3">
          {requests.map((req) => (
            <div key={req.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">{req.name}</div>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-slate-600">
                    <div>📞 {req.phone}</div>
                    <div>📋 {req.serviceType}</div>
                    <div>📝 {req.details || '—'}</div>
                    <div>📅 {new Date(req.createdAt).toLocaleDateString('th-TH')}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
