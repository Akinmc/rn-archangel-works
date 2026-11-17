import Link from 'next/link';
import { BusinessInquiryForm } from '@/components/BusinessInquiryForm';

const plans = [
  {
    name: 'ทดลองใช้', price: 'ฟรี', period: 'ทดลองระบบ',
    description: 'ลองประสบการณ์ใช้งานด้วยข้อมูลจำลอง ก่อนตัดสินใจ',
    features: ['แดชบอร์ดตัวอย่าง', 'ค้นหาและกรองข้อมูลจำลอง', 'บันทึกรายการในเบราว์เซอร์', 'ส่งออก CSV ตัวอย่าง'],
    highlight: false,
  },
  {
    name: 'ทีมธุรกิจ', price: 'สอบถามราคา', period: 'แพ็กเกจนำร่อง',
    description: 'สำหรับทีมที่ต้องการติดตามข้อมูลสาธารณะในพื้นที่และประเภทงานที่สนใจ',
    features: ['กำหนดแหล่งข้อมูลร่วมกัน', 'ตัวกรองตามพื้นที่และประเภทธุรกิจ', 'รายงานและรายการที่บันทึก', 'กำหนดรอบอัปเดตหลังตรวจสอบแหล่งข้อมูล'],
    highlight: true,
  },
  {
    name: 'องค์กร', price: 'ออกแบบเฉพาะ', period: 'ประเมินตามขอบเขต',
    description: 'สำหรับองค์กรที่ต้องการ workspace, การเชื่อมต่อ และ workflow เฉพาะ',
    features: ['สิทธิ์ผู้ใช้และทีม', 'API / webhook ตามข้อตกลง', 'รายงานหรือ white-label ตามขอบเขต', 'แผนดูแลระบบและ SLA ที่ตกลงกัน'],
    highlight: false,
  },
];

const revenueLayers = [
  { layer: '01', title: 'แพลตฟอร์มสมาชิก', text: 'รายได้ประจำจากสมาชิกหรือทีม โดยแบ่งตามจำนวนผู้ใช้ ฟังก์ชัน และขอบเขตข้อมูลที่มีสิทธิ์ใช้งาน' },
  { layer: '02', title: 'รายงานและบริการวิเคราะห์', text: 'รายงานตามประเภทธุรกิจหรือพื้นที่ โดยแสดงแหล่งที่มา ขอบเขตข้อมูล และวันที่จัดทำอย่างชัดเจน' },
  { layer: '03', title: 'โซลูชันองค์กรและพาร์ทเนอร์', text: 'ค่าติดตั้ง เชื่อมต่อระบบ API หรือปรับแต่ง workflow เมื่อยืนยันความต้องการและสิทธิ์ข้อมูลแล้ว' },
];

const integrations = [
  { name: 'เว็บไซต์', label: 'แบบฟอร์ม / ลิงก์ทดลอง', detail: 'รับคำขอทดลองและระบุแหล่งที่มาจากหน้าเว็บ' },
  { name: 'LINE', label: 'LINE OA / rich menu', detail: 'เชื่อมต่อผ่านบัญชีทางการและ Messaging API หลังตั้งค่าบัญชีและ token' },
  { name: 'Facebook', label: 'Page / Messenger', detail: 'เริ่มจากลิงก์เข้าสู่แบบฟอร์ม; การรับข้อความอัตโนมัติต้อ��ใช้ Meta app และสิทธิ์ที่อนุมัติ' },
  { name: 'Instagram', label: 'โปรไฟล์ธุรกิจ / DM', detail: 'ใช้ลิงก์แคมเปญเก็บ lead; ระบบ DM อัตโนมัติต้องผ่านเงื่อนไขบัญชีและ API ของ Meta' },
];

export default function PricingPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 text-white">
        <div className="section-shell py-14 sm:py-20">
          <span className="inline-flex rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100">แพ็กเกจและโมเดลธุรกิจ</span>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">เริ่มทดลองให้เห็นคุณค่า ก่อนขยายเป็นระบบธุรกิจ</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">ออกแบบรายได้จากแพลตฟอร์มสมาชิก บริการข้อมูล และโซลูชันองค์กร โดยยึดข้อมูลที่เปิดเผยต่อสาธารณะหรือได้รับอนุญาต</p>
          <Link href="/procurement-demo" className="mt-7 inline-flex rounded-xl bg-blue-300 px-5 py-3 font-bold text-slate-950 hover:bg-blue-200">ทดลองแดชบอร์ดฟรี →</Link>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-2xl"><p className="text-sm font-bold text-blue-800">Pricing framework</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">แพ็กเกจตามระดับการใช้งาน</h2><p className="mt-3 text-sm leading-6 text-slate-600">ราคาเชิงพาณิชย์ยังไม่ประกาศ แพ็กเกจด้านล่างเป็นกรอบสำหรับทดลองตลาดและต้องประเมินต้นทุนข้อมูล โครงสร้างพื้นฐาน และการสนับสนุนก่อนเสนอราคา</p></div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => <article key={plan.name} className={`flex flex-col rounded-3xl border p-6 shadow-sm ${plan.highlight ? 'border-blue-200 bg-blue-950 text-white shadow-lg shadow-blue-950/10' : 'border-slate-200 bg-white text-slate-900'}`}>
            <p className={`text-sm font-semibold ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{plan.name}</p><p className={`mt-4 text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-950'}`}>{plan.price}</p><p className={`mt-1 text-xs ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{plan.period}</p><p className={`mt-4 min-h-12 text-sm leading-6 ${plan.highlight ? 'text-blue-100' : 'text-slate-600'}`}>{plan.description}</p>
            <ul className={`mt-6 flex-1 space-y-3 text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-700'}`}>{plan.features.map((feature) => <li key={feature} className="flex gap-3"><span className="font-bold text-emerald-500">✓</span><span>{feature}</span></li>)}</ul>
            <Link href={`/contact?plan=${encodeURIComponent(plan.name)}#inquiry`} className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-bold transition ${plan.highlight ? 'bg-white text-blue-950 hover:bg-blue-50' : 'bg-blue-900 text-white hover:bg-blue-800'}`}>{plan.name === 'ทดลองใช้' ? 'ขอทดลอง / สอบถาม' : 'สอบถามแพ็กเกจ'}</Link>
          </article>)}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white"><div className="section-shell py-12 sm:py-16"><div className="max-w-2xl"><p className="text-sm font-bold text-blue-800">Revenue model</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">โครงสร้างธุรกิจ 3 ชั้น</h2></div><div className="mt-7 grid gap-4 md:grid-cols-3">{revenueLayers.map((item) => <article key={item.layer} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-xs font-bold tracking-widest text-blue-800">ชั้น {item.layer}</span><h3 className="mt-3 font-bold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></article>)}</div></div></section>

      <section className="section-shell py-12 sm:py-16"><div className="max-w-2xl"><p className="text-sm font-bold text-blue-800">Omnichannel roadmap</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">เว็บไซต์เป็นศูนย์กลาง เชื่อมช่องทางที่ลูกค้าใช้อยู่</h2><p className="mt-3 text-sm leading-6 text-slate-600">การเชื่อมต่อ Facebook, Instagram และ LINE ต้องตั้งค่าบัญชีธุรกิจ แอป และสิทธิ์ตามข้อกำหนดของแต่ละแพลตฟอร์ม หน้านี้ยังไม่อ้างว่ารับ DM หรือส่งแจ้งเตือนอัตโนมัติแล้ว</p></div><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{integrations.map((item) => <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-900">{item.name}</span><h3 className="mt-4 font-bold text-slate-900">{item.label}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p></article>)}</div></section>

      <section id="inquiry" className="scroll-mt-24 bg-white"><div className="section-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold text-blue-800">ขอทดลอง / ประเมินโครงการ</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">เล่าความต้องการของทีมคุณ</h2><p className="mt-4 text-sm leading-7 text-slate-600">ส่งข้อมูลเพื่อขอทดลองหรือให้ทีมงานติดต่อกลับ แบบฟอร์มจะบันทึกช่องทางที่เข้ามาและหัวข้อสนใจเพื่อช่วยติดตามคำขอ</p><p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-950">ข้อมูลแดชบอร์ดขณะนี้เป็นข้อมูลจำลอง แผนราคาและการเชื่อมต่อช่องทางจะยืนยันหลังประเมินความต้องการและต้นทุน</p></div><div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-7"><BusinessInquiryForm source="pricing" /></div></div></section>
    </main>
  );
}
