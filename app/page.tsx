import Link from 'next/link';
import { BusinessInquiryForm } from '@/components/BusinessInquiryForm';

const features = [
  { icon: '⌕', title: 'ค้นหาให้ตรงโอกาส', description: 'กรองรายการตามพื้นที่ ประเภทงาน สถานะ และช่วงวงเงิน พร้อมเก็บรายการที่สนใจไว้ติดตาม' },
  { icon: '▦', title: 'เห็นภาพรวมในจุดเดียว', description: 'แดชบอร์ดช่วยจัดระเบียบข้อมูลเพื่อให้ทีมเห็นรายการและแนวโน้มที่เกี่ยวข้องได้สะดวกขึ้น' },
  { icon: '⇩', title: 'ส่งต่อข้อมูลให้ทีม', description: 'ส่งออกรายการที่กรองแล้วเป็น CSV เพื่อนำไปตรวจสอบและทำงานต่อในเครื่องมือขององค์กร' },
  { icon: '◎', title: 'ออกแบบเพื่อการตรวจสอบ', description: 'แนวทางระบบจริงแสดงแหล่งที่มาและวันเวลาของข้อมูล ให้ตรวจรายละเอียดจากประกาศต้นทางได้' },
];

const steps = [
  { number: '01', title: 'เลือกพื้นที่และหมวดงาน', detail: 'กำหนดจังหวัดและประเภทโครงการที่ทีมติดตาม' },
  { number: '02', title: 'ค้นหาและคัดกรอง', detail: 'ลดรายการให้เหลือประกาศที่ตรงกับความสนใจ' },
  { number: '03', title: 'บันทึกและส่งต่อ', detail: 'จัดรายการที่สนใจและส่งออกเพื่อทำงานร่วมกัน' },
];

const trustPoints = [
  'ยึดข้อมูลสาธารณะหรือข้อมูลที่ได้รับอนุญาต',
  'ไม่ใช้ข้อมูลลับหรืออ้างว่ารับประกันผลการประมูล',
  'ระบุชัดเจนว่าหน้าทดลองใช้ข้อมูลจำลอง',
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.3),_transparent_35%),radial-gradient(ellipse_at_bottom_left,_rgba(30,64,175,0.25),_transparent_35%)]" />
        <div className="section-shell relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Procurement Insight · รุ่นทดลอง</span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">ติดตามโอกาสภาครัฐ<br /><span className="text-blue-300">อย่างเป็นระบบ</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">แพลตฟอร์มแนวคิดสำหรับค้นหาและจัดระเบียบประกาศจัดซื้อจัดจ้างในนราธิวาส ปัตตานี และยะลา ให้ทีมธุรกิจเริ่มต้นจากข้อมูลที่ตรวจสอบแหล่งที่มาได้</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/procurement-demo" className="rounded-xl bg-blue-300 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-200">ทดลองแดชบอร์ดฟรี <span aria-hidden="true">→</span></Link>
              <Link href="/contact?source=website-hero#inquiry" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">ขอให้ติดต่อกลับ</Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">ไม่ต้องสมัครสมาชิกเพื่อทดลอง · ข้อมูลในแดชบอร์ดทดลองเป็นข้อมูลจำลอง ไม่ใช่ประกาศจริง</p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300"><span>พื้นที่นำร่อง: 3 จังหวัด</span><span>ออกแบบสำหรับทีมธุรกิจ</span><span>ตรวจสอบข้อมูลต้นทางได้</span></div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-5">
            <div className="rounded-2xl bg-slate-900 p-5 sm:p-6">
              <div className="flex items-center justify-between"><div><p className="text-sm font-bold">ภาพตัวอย่างแดชบอร์ด</p><p className="mt-1 text-xs text-slate-400">ข้อมูลจำลองเพื่อสาธิตหน้าจอ</p></div><span className="rounded-full bg-amber-300/10 px-2.5 py-1 text-[11px] font-semibold text-amber-200">DEMO DATA</span></div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[['รายการตัวอย่าง', '12'], ['พื้นที่', '3 จังหวัด'], ['ตัวกรอง', '6 แบบ'], ['ส่งออก', 'CSV']].map(([label, value]) => <div key={label} className="rounded-xl border border-slate-700 bg-slate-800/80 p-4"><p className="text-xs text-slate-400">{label}</p><p className="mt-2 text-xl font-extrabold text-white">{value}</p></div>)}
              </div>
              <div className="mt-4 rounded-xl border border-slate-700 bg-slate-800/70 p-4"><div className="flex items-center justify-between text-xs"><span className="font-semibold text-slate-200">ขั้นตอนที่ทดลองได้</span><span className="text-blue-300">ค้นหา → กรอง → บันทึก</span></div><div className="mt-4 flex gap-1.5">{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => <span key={item} className={`h-2 flex-1 rounded-full ${item < 9 ? 'bg-blue-400' : 'bg-slate-600'}`} />)}</div><p className="mt-3 text-xs leading-5 text-slate-400">หน้าตัวอย่างนี้ยังไม่ได้เชื่อมต่อฐานข้อมูลประกาศจริงหรือระบบแจ้งเตือน</p></div>
              <Link href="/procurement-demo" className="mt-4 flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50">เปิดตัวอย่างการใช้งาน <span className="ml-2" aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white"><div className="section-shell grid gap-4 py-7 sm:grid-cols-3">{[['3 จังหวัด', 'พื้นที่เป้าหมายระยะเริ่มต้น'], ['ข้อมูลตรวจสอบได้', 'ออกแบบให้แสดงแหล่งที่มา'], ['ทดลองได้ทันที', 'ใช้ข้อมูลจำลอง ไม่ต้องสมัคร']].map(([value, label]) => <div key={value} className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-900">✓</span><div><p className="font-bold text-slate-900">{value}</p><p className="text-xs text-slate-500">{label}</p></div></div>)}</div></section>

      <section className="section-shell py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-800">ความสามารถของแพลตฟอร์ม</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">เครื่องมือที่ช่วยให้ทีมติดตามข้อมูลได้เป็นระบบ</h2><p className="mt-4 leading-7 text-slate-600">เริ่มจากประสบการณ์ทดลอง แล้วค่อยต่อยอดเป็นบริการจริงตามแหล่งข้อมูลและความต้องการของธุรกิจ</p></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature) => <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-900">{feature.icon}</span><h3 className="mt-5 font-bold text-slate-900">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>)}</div>
      </section>

      <section className="border-y border-slate-200 bg-white"><div className="section-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-800">เริ่มต้นใช้งาน</p><h2 className="mt-3 text-3xl font-extrabold text-slate-950">จากการค้นหา สู่การติดตามที่ต่อเนื่อง</h2><p className="mt-4 text-sm leading-7 text-slate-600">ลดขั้นตอนการไล่ค้นหาหลายหน้าและช่วยให้ทีมคัดรายการที่เกี่ยวข้องได้เป็นระบบมากขึ้น</p><Link href="/procurement-demo" className="mt-6 inline-flex font-bold text-blue-900 hover:underline">ดูการทำงานในหน้าเดโม →</Link></div><div className="grid gap-4 sm:grid-cols-3">{steps.map((step) => <article key={step.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-xs font-extrabold tracking-widest text-blue-800">{step.number}</span><h3 className="mt-3 font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p></article>)}</div></div></section>

      <section className="section-shell py-14 sm:py-20"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-800">ความโปร่งใสและความน่าเชื่อถือ</p><h2 className="mt-3 text-3xl font-extrabold text-slate-950">สร้างบนข้อมูลที่ตรวจสอบได้</h2><p className="mt-4 text-sm leading-7 text-slate-600">เราแยกให้ชัดระหว่างตัวอย่างผลิตภัณฑ์กับบริการจริง และจะยืนยันแหล่งข้อมูล รอบอัปเดต และเงื่อนไขการใช้งานก่อนเปิดบริการเชิงพาณิชย์</p><Link href="/faq" className="mt-5 inline-flex font-semibold text-blue-900 hover:underline">อ่านคำถามที่พบบ่อย →</Link></div><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="font-bold text-slate-900">หลักการของเรา</h3><ul className="mt-4 space-y-3">{trustPoints.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="font-bold text-emerald-600">✓</span><span>{point}</span></li>)}</ul><p className="mt-5 rounded-xl bg-amber-50 p-4 text-xs leading-5 text-amber-950">แดชบอร์ดรุ่นทดลองใช้ข้อมูลที่สร้างขึ้นเพื่อสาธิตเท่านั้น ตัวเลขไม่ใช่สถิติหรือประกาศภาครัฐจริง</p></div></div></section>

      <section className="bg-blue-950 text-white"><div className="section-shell grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-sm font-bold text-blue-300">ขอทดลองใช้ / ปรึกษาโครงการ</p><h2 className="mt-3 text-3xl font-extrabold">เริ่มจากความต้องการของธุรกิจคุณ</h2><p className="mt-4 text-sm leading-7 text-blue-100">กรอกข้อมูลเพื่อขอทดลองหรือให้ทีมงานติดต่อกลับ ไม่มีการเรียกเก็บเงินจากการส่งคำขอนี้</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/pricing" className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold hover:bg-white/10">ดูแพ็กเกจและโมเดลธุรกิจ</Link><Link href="/faq" className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold hover:bg-white/10">อ่าน FAQ</Link></div><p className="mt-6 text-xs leading-5 text-blue-200">เราใช้ข้อมูลติดต่อเพื่อประสานงานตามคำขอเท่านั้น โดยจะไม่ใช้ข้อมูลที่ไม่ได้รับอนุญาต</p></div><div className="rounded-3xl bg-white p-5 text-slate-900 shadow-xl sm:p-7"><BusinessInquiryForm source="website-home" /></div></div></section>

      <section className="section-shell py-8"><div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold">มาจาก Facebook, Instagram หรือ LINE?</p><p className="mt-1 text-sm text-slate-600">นำลิงก์ฟอร์มนี้ไปใส่ใน Bio, โพสต์ หรือเมนูของช่องทางธุรกิจ แล้วกำหนด source เพื่อวัดที่มาของคำขอ</p></div><div className="flex flex-wrap gap-2 text-xs font-semibold"><Link className="rounded-full bg-blue-50 px-3 py-2 text-blue-900" href="/contact?source=facebook#inquiry">Facebook</Link><Link className="rounded-full bg-pink-50 px-3 py-2 text-pink-800" href="/contact?source=instagram#inquiry">Instagram</Link><Link className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-800" href="/contact?source=line#inquiry">LINE</Link></div></div><p className="mt-3 text-xs leading-5 text-slate-500">ลิงก์เหล่านี้ช่วยติดตามแหล่งที่มาของแบบฟอร์ม ไม่ใช่การเชื่อมต่อข้อความ DM หรือ API อัตโนมัติของแพลตฟอร์ม</p></section>
    </main>
  );
}
