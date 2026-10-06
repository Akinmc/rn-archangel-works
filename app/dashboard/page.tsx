"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { SessionUser } from '@/lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
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
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
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
          <h1 className="text-3xl font-bold text-rn">สวัสดี, {user.name}! 👋</h1>
          <p className="mt-2 text-slate-600">{user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
        >
          ออกจากระบบ
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Link href="/services" className="card p-6 hover:shadow-md">
          <div className="mb-3 text-3xl">📦</div>
          <h2 className="font-bold text-rn">บริการของเรา</h2>
          <p className="mt-2 text-sm text-slate-600">ดูรายการสินค้าและบริการทั้งหมด</p>
        </Link>

        <Link href="/quote-requests" className="card p-6 hover:shadow-md">
          <div className="mb-3 text-3xl">📋</div>
          <h2 className="font-bold text-rn">คำขอเสนอราคา</h2>
          <p className="mt-2 text-sm text-slate-600">ดูแลและจัดการคำขอของคุณ</p>
        </Link>

        {user.role === 'ADMIN' && (
          <Link href="/admin" className="card p-6 hover:shadow-md">
            <div className="mb-3 text-3xl">⚙️</div>
            <h2 className="font-bold text-rn">ระบบจัดการ</h2>
            <p className="mt-2 text-sm text-slate-600">จัดการสินค้า และคำขอ</p>
          </Link>
        )}
      </div>
    </div>
  );
}
