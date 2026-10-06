"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserManagementPage() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const meRes = await fetch('/api/auth/me');
      if (!meRes.ok) {
        router.push('/login');
        return;
      }

      const meJson = await meRes.json();
      if (meJson.user?.role !== 'ADMIN') {
        router.push('/dashboard');
        return;
      }

      const res = await fetch('/api/admin/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [router]);

  const updateUser = async (userId: string, nextRole: string, nextStatus: string) => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, role: nextRole, status: nextStatus }),
      });

      if (response.ok) {
        await fetchUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="section-shell py-10 text-center text-slate-600">กำลังโหลดข้อมูลผู้ใช้...</div>;
  }

  return (
    <div className="section-shell py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-rn">👥 การจัดการผู้ใช้</h1>
        <p className="mt-2 text-slate-600">จัดการบทบาทและสถานะของผู้ใช้งานในระบบ</p>
      </div>

      <div className="card p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200">
              <tr>
                <th className="px-3 py-3">ชื่อ</th>
                <th className="px-3 py-3">อีเมล</th>
                <th className="px-3 py-3">บทบาท</th>
                <th className="px-3 py-3">สถานะ</th>
                <th className="px-3 py-3">วันที่สมัคร</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-200">
                  <td className="px-3 py-3 font-medium text-slate-800">{user.name}</td>
                  <td className="px-3 py-3 text-slate-600">{user.email}</td>
                  <td className="px-3 py-3">
                    <select
                      value={user.role}
                      onChange={(e) => updateUser(user.id, e.target.value, user.status)}
                      className="rounded-lg border border-slate-200 px-2 py-1 text-xs"
                    >
                      <option value="ADMIN">ADMIN</option>
                      <option value="USER">USER</option>
                      <option value="PARTNER">PARTNER</option>
                    </select>
                  </td>
                  <td className="px-3 py-3">
                    <select
                      value={user.status}
                      onChange={(e) => updateUser(user.id, user.role, e.target.value)}
                      className="rounded-lg border border-slate-200 px-2 py-1 text-xs"
                    >
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="INACTIVE">INACTIVE</option>
                      <option value="PENDING">PENDING</option>
                    </select>
                  </td>
                  <td className="px-3 py-3 text-slate-500">{new Date(user.createdAt).toLocaleDateString('th-TH')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
