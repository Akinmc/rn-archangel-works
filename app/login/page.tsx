import Link from 'next/link';
import { AuthForm } from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <div className="section-shell min-h-screen py-16">
      <div className="mx-auto max-w-md">
        <div className="card p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-rn">เข้าสู่ระบบ</h1>
            <p className="mt-2 text-sm text-slate-600">เข้าสู่บัญชีของคุณเพื่อใช้งาน Rn Archangel</p>
          </div>

          <AuthForm mode="login" />

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-center text-sm text-slate-600">
              ยังไม่มีบัญชี?{' '}
              <Link href="/register" className="font-semibold text-rn hover:underline">
                สมัครสมาชิกตอนนี้
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
