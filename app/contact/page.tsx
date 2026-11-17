import { BusinessInquiryForm } from '@/components/BusinessInquiryForm';
import Link from 'next/link';

export default function ContactPage({ searchParams }: { searchParams?: { plan?: string; source?: string } }) {
  const validPlans = ['ทดลองใช้', 'Starter', 'Growth', 'Enterprise', 'ทีมธุรกิจ', 'องค์กร'];
  const selectedPlan = searchParams?.plan && validPlans.includes(searchParams.plan) ? searchParams.plan : '';
  const requestedSource = searchParams?.source || 'contact';
  const validSources = ['contact', 'website', 'website-home', 'website-hero', 'facebook', 'instagram', 'line', 'pricing', 'header'];
  const source = validSources.includes(requestedSource) ? requestedSource : 'contact';

  return (
    <main className="min-h-[65vh] bg-slate-50">
      <section className="bg-slate-950 text-white"><div className="section-shell py-14 sm:py-20"><span className="inline-flex rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100">ติดต่อและสอบถามโครงการ</span><h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">เริ่มต้นจากความต้องการของธุรกิจคุณ</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">ขอทดลองระบบ สอบถามแพ็กเกจ หรือคุยเรื่องการเชื่อมต่อช่องทางออนไลน์กับทีมงาน</p></div></section>
      <section className="section-shell grid gap-8 py-10 sm:py-14 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="space-y-5"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-900">ช่องทางติดต่อ</h2><p className="mt-3 text-sm text-slate-600">อีเมล: <a className="font-semibold text-blue-800" href="mailto:contact@rn-archangel.com">contact@rn-archangel.com</a></p><p className="mt-2 text-sm text-slate-600">พื้นที่: อำเภอสุไหงปาดี จังหวัดนราธิวาส</p><p className="mt-2 text-sm text-slate-600">เวลาทำการ: จันทร์–เสาร์ 08:00–18:00 น.</p></div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5"><h2 className="font-bold text-blue-950">มาจากช่องทางใด?</h2><p className="mt-2 text-sm leading-6 text-blue-900">ใช้ลิงก์เหล่านี้ใน Bio, โพสต์ หรือ rich menu เพื่อพาผู้สนใจมาที่แบบฟอร์มพร้อมบันทึกแหล่งที่มา</p><div className="mt-4 flex flex-wrap gap-2"><Link className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-blue-900" href="/contact?source=facebook#inquiry">Facebook form link</Link><Link className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-pink-800" href="/contact?source=instagram#inquiry">Instagram form link</Link><Link className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-emerald-800" href="/contact?source=line#inquiry">LINE form link</Link></div></div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-5 text-amber-950">ลิงก์สำหรับติดตามที่มาของ lead ไม่ใช่การเชื่อมต่อ DM, inbox หรือ API อัตโนมัติ การเชื่อมต่อจริงต้องมีบัญชีทางการ credentials และการอนุมัติจากผู้ให้บริการแพลตฟอร์ม</div>
        </aside>
        <section id="inquiry" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"><div className="mb-6"><p className="text-sm font-bold text-blue-800">Request a demo</p><h2 className="mt-2 text-2xl font-extrabold text-slate-950">ขอทดลองใช้ / ให้เราติดต่อกลับ</h2><p className="mt-2 text-sm text-slate-600">ช่องที่มีเครื่องหมาย * จำเป็นต้องกรอก</p></div><BusinessInquiryForm selectedPlan={selectedPlan} source={source} /></section>
      </section>
    </main>
  );
}
