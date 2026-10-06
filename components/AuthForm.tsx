"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type AuthFormProps = {
  mode: 'login' | 'register';
  onSuccess?: () => void;
};

export function AuthForm({ mode, onSuccess }: AuthFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
    const payload = mode === 'login' ? { email: form.email, password: form.password } : form;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'ข้อผิดพลาด');
      }

      onSuccess?.();
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ข้อผิดพลาด');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === 'register' && (
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">ชื่อ-นามสกุล</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
            placeholder="กรอกชื่อของคุณ"
          />
        </label>
      )}

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">อีเมล</span>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
          placeholder="example@email.com"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">รหัสผ่าน</span>
        <input
          type="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-rn"
          placeholder="รหัสผ่านแบบมั่นคง"
        />
      </label>

      {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-rn px-5 py-3 font-semibold text-white hover:bg-blue-900 disabled:opacity-50"
      >
        {loading ? 'กำลังดำเนินการ...' : mode === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
      </button>
    </form>
  );
}
