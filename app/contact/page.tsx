import { BusinessInquiryForm } from '@/components/BusinessInquiryForm';

export default function ContactPage({ searchParams }: { searchParams?: { plan?: string; source?: string } }) {
  const validPlans = ['ทดลองใช้', 'Starter', 'Growth', 'Enterprise', 'ทีมธุรกิจ', 'องค์กร'];
  const selectedPlan = searchParams?.plan && validPlans.includes(searchParams.plan) ? searchParams.plan : '';
  const source = searchParams?.source?.slice(0, 80) || 'contact';

  return (
    <main className="min-h-[65vh] bg-slate-50">
      <section className="bg-slate-950 text-white"><div className="section-shell py-14 sm:py-20"><span className="inline-flex rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100">ติดต่อและสอบถามโครงการ</span><h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">เริ่มต้นจากความต้องการของธุรกิจคุณ</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">ขอทดลองระบบ สอบถามแพ็กเกจ หรือคุยเรื่องการเชื่อมต่อช่องทางออนไลน์กับทีมงาน</p></div></section>
      <section className="section-shell grid gap-8 py-10 sm:py-14 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="space-y-5"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-900">ช่องทางติดต่อ</h2><p className="mt-3 text-sm text-slate-600">อีเมล: <a className="font-semibold text-blue-800" href="mailto:contact@rn-archangel.com">contact@rn-archangel.com</a></p><p className="mt-2 text-sm text-slate-600">พื้นที่: อำเภอสุไหงปาดี จังหวัดนราธิวาส</p><p className="mt-2 text-sm text-slate-600">เวลาทำการ: จันทร์–เสาร์ 08:00–18:00 น.</p></div><div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950"><strong>รองรับ lead จากโซเชียล:</strong> นำลิงก์หน้านี้ไปวางใน Facebook, Instagram หรือ LINE OA ได้ และระบุ source ใน URL เช่น <code className="break-all">?source=line</code> เพื่อวัดช่องทางที่มาของคำขอ</div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-5 text-amber-950">แบบฟอร์มนี้ใช้ข้อมูลติดต่อเพื่อประสานงานตามคำขอเท่านั้น ระบบส่ง DM หรือแจ้งเตือนอัตโนมัติผ่านแพลตฟอร์มภายนอกยังต้องพัฒนาและตั้งค่าบัญชีทางการเพิ่มเติม</div></aside>
        <section id="inquiry" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"><div className="mb-6"><p className="text-sm font-bold text-blue-800">Request a demo</p><h2 className="mt-2 text-2xl font-extrabold text-slate-950">ขอทดลองใช้ / ให้เราติดต่อกลับ</h2><p className="mt-2 text-sm text-slate-600">ช่องที่มีเครื่องหมาย * จำเป็นต้องกรอก</p></div><BusinessInquiryForm selectedPlan={selectedPlan} source={source} /></section>
      </section>
    </main>
  );
}
