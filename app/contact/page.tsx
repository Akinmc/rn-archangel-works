import Link from 'next/link';

const contactOptions = [
  { icon: '⌕', title: 'ทดลองแดชบอร์ด', text: 'เปิดหน้าทดลองเพื่อสำรวจตัวกรอง รายการตัวอย่าง และการส่งออก CSV', href: '/procurement-demo', action: 'เปิดแดชบอร์ด', external: false },
  { icon: '✉', title: 'อีเมล', text: 'contact@rn-archangel.com', href: 'mailto:contact@rn-archangel.com?subject=%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%20Procurement%20Insight', action: 'เขียนอีเมล', external: true },
  { icon: '⌖', title: 'พื้นที่ให้บริการ', text: 'อำเภอสุไหงปาดี จังหวัดนราธิวาส และพื้นที่จังหวัดชายแดนใต้', href: '/', action: 'กลับหน้าหลัก', external: false },
];

const discussionTopics = [
  'แหล่งประกาศภาครัฐที่ต้องการติดตาม',
  'จังหวัด หน่วยงาน และประเภทโครงการที่สนใจ',
  'ตัวกรอง รายงาน และช่องทางแจ้งเตือนที่ต้องการ',
  'สิทธิ์การใช้งานและรูปแบบการนำข้อมูลไปใช้',
];

export default function ContactPage() {
  return (
    <main className="min-h-[65vh] bg-slate-50">
      <section className="bg-slate-950 text-white">
        <div className="section-shell py-14 sm:py-20">
          <span className="inline-flex rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100">ติดต่อและสอบถามโครงการ</span>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">มาคุยกันว่าเครื่องมือติดตามงานภาครัฐแบบไหนเหมาะกับทีมคุณ</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">สอบถามแนวทางใช้งานหรือเสนอความต้องการสำหรับแพลตฟอร์มติดตามและวิเคราะห์ประกาศจัดซื้อจัดจ้างในนราธิวาส ปัตตานี และยะลา</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:contact@rn-archangel.com?subject=%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%20Procurement%20Insight" className="rounded-xl bg-blue-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-blue-200">ส่งอีเมลสอบถาม</a>
            <Link href="/procurement-demo" className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10">ดูแดชบอร์ดทดลอง</Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {contactOptions.map((option) => {
            const content = <>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-900">{option.icon}</span>
              <h2 className="mt-4 font-bold text-slate-900">{option.title}</h2>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{option.text}</p>
              <span className="mt-4 inline-block text-sm font-bold text-blue-800">{option.action} →</span>
            </>;
            return option.external ? (
              <a key={option.title} href={option.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">{content}</a>
            ) : (
              <Link key={option.title} href={option.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">{content}</Link>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold text-blue-800">เตรียมข้อมูลก่อนพูดคุย</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950">ช่วยให้เราเข้าใจความต้องการได้เร็วขึ้น</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">ระบุขอบเขตการใช้งานที่ต้องการ เช่น แหล่งข้อมูล พื้นที่ที่สนใจ และวิธีติดตามรายการ เพื่อใช้ประกอบการประเมินแนวทางพัฒนา</p>
            <ul className="mt-5 space-y-3">
              {discussionTopics.map((topic) => <li key={topic} className="flex gap-3 text-sm text-slate-700"><span className="font-bold text-emerald-600">✓</span><span>{topic}</span></li>)}
            </ul>
          </div>
          <aside className="rounded-2xl bg-slate-50 p-5 sm:p-6">
            <h3 className="font-bold text-slate-900">ข้อมูลติดต่อ</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div><dt className="text-slate-500">อีเมล</dt><dd className="mt-1 font-semibold text-blue-900"><a href="mailto:contact@rn-archangel.com">contact@rn-archangel.com</a></dd></div>
              <div><dt className="text-slate-500">ที่ตั้ง</dt><dd className="mt-1 font-medium text-slate-800">อำเภอสุไหงปาดี จังหวัดนราธิวาส</dd></div>
              <div><dt className="text-slate-500">เวลาทำการ</dt><dd className="mt-1 font-medium text-slate-800">จันทร์–เสาร์ 08:00–18:00 น.</dd></div>
            </dl>
            <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-950">หมายเลขโทรศัพท์อยู่ระหว่างยืนยัน จึงยังไม่แสดงเบอร์ที่ไม่สมบูรณ์บนหน้าเว็บ</p>
          </aside>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950">
          <strong>ขอบเขตข้อมูล:</strong> แนวทางโครงการมุ่งใช้ข้อมูลที่เปิดเผยต่อสาธารณะหรือได้รับอนุญาตเท่านั้น การทดลองปัจจุบันใช้ข้อมูลจำลอง ยังไม่มีการรวบรวมข้อมูลจริงหรือส่งการแจ้งเตือน
        </div>
      </section>
    </main>
  );
}
