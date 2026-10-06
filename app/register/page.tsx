import Link from 'next/link';
import { AuthForm } from '@/components/AuthForm';

export default function RegisterPage() {
  return (
    <div className="section-shell min-h-screen py-16">
      <div className="mx-auto max-w-md">
        <div className="card p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-rn">สมัครสมาชิก</h1>
            <p className="mt-2 text-sm text-slate-600">สร้างบัญชีใหม่เพื่อเริ่มใช้งาน Rn Archangel</p>
          </div>

          <AuthForm mode="register" />

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-center text-sm text-slate-600">
              มีบัญชีแล้ว?{' '}
              <Link href="/login" className="font-semibold text-rn hover:underline">
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
