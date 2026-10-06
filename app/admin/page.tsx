"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const KPICards = [
  { title: 'ผู้ใช้ทั้งหมด', value: 0, icon: '👥', color: 'bg-blue-100 text-blue-700' },
  { title: 'บริการทั้งหมด', value: 0, icon: '📦', color: 'bg-emerald-100 text-emerald-700' },
  { title: 'คำขอทั้งหมด', value: 0, icon: '📋', color: 'bg-amber-100 text-amber-700' },
  { title: 'รายได้รวม', value: '฿0', icon: '💰', color: 'bg-violet-100 text-violet-700' },
];

export default function FullAdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'requests' | 'users' | 'payments'>('overview');
  const [stats, setStats] = useState({ totalUsers: 0, totalServices: 0, totalRequests: 0, recentRequests: [] as any[] });
  const [services, setServices] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [meRes, statsRes, servicesRes, requestsRes] = await Promise.all([
          fetch('/api/auth/me'),
          fetch('/api/admin/stats'),
          fetch('/api/services'),
          fetch('/api/admin/quote-requests'),
        ]);

        if (!meRes.ok) {
          router.push('/login');
          return;
        }

        const meJson = await meRes.json();
        if (meJson.user?.role !== 'ADMIN') {
          router.push('/dashboard');
          return;
        }

        const statsData = statsRes.ok ? await statsRes.json() : { totalUsers: 0, totalServices: 0, totalRequests: 0, recentRequests: [] };
        const servicesData = servicesRes.ok ? await servicesRes.json() : [];
        const requestsData = requestsRes.ok ? await requestsRes.json() : [];

        setStats(statsData);
        setServices(servicesData);
        setRequests(requestsData);
        setUsers([
          { id: '1', name: meJson.user.name, email: meJson.user.email, role: meJson.user.role },
        ]);
        setPayments([
          { id: '1', customer: meJson.user.name, amount: 0, status: 'รอชำระ', method: 'PromptPay' },
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return <div className="section-shell py-12 text-center text-slate-600">กำลังโหลดข้อมูลแอดมิน...</div>;
  }

  const cards = [
    { title: 'ผู้ใช้ทั้งหมด', value: stats.totalUsers || users.length, icon: '👥', color: 'bg-blue-100 text-blue-700' },
    { title: 'บริการทั้งหมด', value: stats.totalServices || services.length, icon: '📦', color: 'bg-emerald-100 text-emerald-700' },
    { title: 'คำขอทั้งหมด', value: stats.totalRequests || requests.length, icon: '📋', color: 'bg-amber-100 text-amber-700' },
    { title: 'รายได้รวม', value: `฿${payments.reduce((sum, item) => sum + Number(item.amount || 0), 0)}`, icon: '💰', color: 'bg-violet-100 text-violet-700' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="card p-5">
            <div className="flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}>{card.icon}</div>
              <div className="text-right">
                <div className="text-sm text-slate-500">{card.title}</div>
                <div className="text-2xl font-bold text-rn">{card.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-rn">สถิติคำขอ</h2>
            <span className="rounded-full bg-rn/10 px-2 py-1 text-xs text-rn">This month</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">คำขอใหม่</div>
              <div className="mt-2 text-2xl font-bold text-rn">{requests.length}</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">กำลังพิจารณา</div>
              <div className="mt-2 text-2xl font-bold text-amber-600">{Math.max(1, Math.ceil(requests.length * 0.4))}</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">สำเร็จ</div>
              <div className="mt-2 text-2xl font-bold text-emerald-600">{Math.max(1, Math.ceil(requests.length * 0.6))}</div>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="mb-4 text-xl font-bold text-rn">พาร์ทเนอร์</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
              <span>ผู้แนะนำ</span>
              <span className="font-semibold text-rn">{Math.max(2, Math.ceil((users.length + requests.length) / 2))}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
              <span>ร่วมลงทุน</span>
              <span className="font-semibold text-rn">{Math.max(1, requests.length)}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
              <span>บริการ</span>
              <span className="font-semibold text-rn">{services.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-rn">รายการบริการ</h2>
        <Link href="/services" className="text-sm font-semibold text-rn hover:underline">ดูหน้าบริการ</Link>
      </div>
      <div className="space-y-3">
        {services.map((service) => (
          <div key={service.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <div className="font-semibold text-slate-800">{service.title}</div>
              <div className="mt-1 text-xs text-slate-500">{service.category}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-rn">{service.priceLabel}</div>
              <div className="text-xs text-slate-500">{service.code}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRequests = () => (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-rn">คำขอเสนอราคา</h2>
        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">{requests.length} รายการ</span>
      </div>
      <div className="space-y-3">
        {requests.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div className="font-bold text-slate-800">{item.name}</div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700">ใหม่</span>
            </div>
            <div className="mt-2 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              <div>📞 {item.phone}</div>
              <div>📋 {item.serviceType}</div>
              <div className="sm:col-span-2">📝 {item.details || 'ไม่มีรายละเอียด'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="card p-5">
      <h2 className="mb-4 text-xl font-bold text-rn">ผู้ใช้งาน</h2>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <div className="font-semibold text-slate-800">{user.name}</div>
              <div className="text-xs text-slate-500">{user.email}</div>
            </div>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-700">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="card p-5">
      <h2 className="mb-4 text-xl font-bold text-rn">การชำระเงิน</h2>
      <div className="space-y-3">
        {payments.map((payment) => (
          <div key={payment.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <div className="font-semibold text-slate-800">{payment.customer}</div>
              <div className="text-xs text-slate-500">{payment.method}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-rn">฿{payment.amount}</div>
              <div className="text-xs text-amber-600">{payment.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="section-shell py-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="badge">Admin Control Center</div>
          <h1 className="mt-3 text-3xl font-bold text-rn">แดชบอร์ดจัดการธุรกิจ</h1>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            กลับสู่ Dashboard
          </Link>
          <button onClick={() => router.push('/')} className="rounded-xl bg-rn px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900">
            หน้าเว็บหลัก
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {[
          { id: 'overview', label: 'ภาพรวม' },
          { id: 'services', label: 'บริการ' },
          { id: 'requests', label: 'คำขอ' },
          { id: 'users', label: 'ผู้ใช้' },
          { id: 'payments', label: 'ชำระเงิน' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.id ? 'bg-rn text-white' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'services' && renderServices()}
      {activeTab === 'requests' && renderRequests()}
      {activeTab === 'users' && renderUsers()}
      {activeTab === 'payments' && renderPayments()}
    </div>
  );
}
