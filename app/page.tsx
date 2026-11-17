import Link from 'next/link';

const featureCards = [
  {
    icon: '⌕',
    title: 'ค้นหาประกาศได้แบบเรียลไทม์',
    description: 'กรองตามจังหวัด ประเภทงาน วงเงิน และสถานะ เพื่อช่วยให้ทีมติดตามโอกาสภาครัฐได้รวดเร็วขึ้น',
  },
  {
    icon: '▦',
    title: 'Dashboard แบบใช้งานจริง',
    description: 'ภาพรวมสถิติและโอกาสในพื้นที่เดียว ช่วยให้เห็นแนวโน้มและความเคลื่อนไหวของงานจัดซื้อจัดจ้างชัดเจน',
  },
  {
    icon: '⇩',
    title: 'รายงานและส่งออกข้อมูล',
    description: 'ส่งออกรายการที่สนใจเป็น CSV เพื่อใช้งานต่อใน Excel หรือระบบภายในของทีมได้ทันที',
  },
  {
    icon: '☆',
    title: 'ติดตามรายการที่สนใจ',
    description: 'บันทึกคำค้นและรายการสำคัญไว้ในตัวเอง เพื่อให้ทีมงานไม่พลาดโอกาสที่มีศักยภาพ',
  },
];

const processSteps = [
  { step: '01', title: 'รวบรวมข้อมูล', text: 'ติดตามแหล่งข้อมูลภาครัฐและช่องทางประกาศที่เปิดเผยหรือได้รับอนุญาต' },
  { step: '02', title: 'จัดระเบียบ', text: 'ปรับรูปแบบข้อมูลให้เป็นมาตรฐานเดียว เพื่อนำไปใช้ในแดชบอร์ดและรายงาน' },
  { step: '03', title: 'วิเคราะห์', text: 'ใช้ตัวกรองและสถิติเพื่อค้นหาโอกาสที่ตรงกับความต้องการของทีมธุรกิจ' },
  { step: '04', title: 'ติดตามต่อเนื่อง', text: 'บันทึกรายการสำคัญและติดตามข้อมูลที่เปลี่ยนแปลงอย่างต่อเนื่อง' },
];

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.35),_transparent_32%),radial-gradient(circle_at_left,_rgba(30,64,175,0.25),_transparent_28%)]" />
        <div className="section-shell relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100">
                Procurement Insight • รุ่นทดลองใช้งาน
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                ติดตามโอกาสภาครัฐ<br />แบบเห็นภาพรวม<br />ในพื้นที่เดียว
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                ระบบติดตามและวิเคราะห์งานจัดซื้อจัดจ้างในจังหวัดนราธิวาส ปัตตานี และยะลา
                โดยรวบรวมข้อมูลแบบอัตโนมัติเพื่อให้ทีมธุรกิจและผู้ประกอบการเห็นโอกาสได้เร็วขึ้น
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/procurement-demo" className="rounded-xl bg-blue-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-blue-950/30 transition hover:bg-blue-300">
                  ทดลองใช้งานแผงควบคุม
                </Link>
                <Link href="/pricing" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  ดูแผนใช้งาน
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
                <span>• 3 จังหวัดเป้าหมาย</span>
                <span>• อัปเดตข้อมูลแบบต่อเนื่อง</span>
                <span>• เห็นภาพรวมแบบ real-time</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
              <div className="rounded-2xl bg-slate-900 p-5 shadow-inner shadow-blue-950/20">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>ภาพรวมสถานะ</span>
                  <span>Today</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-blue-500/10 p-3">
                    <p className="text-xs text-blue-200">รายการเปิดรับ</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">128</p>
                  </div>
                  <div className="rounded-xl bg-emerald-500/10 p-3">
                    <p className="text-xs text-emerald-200">มูลค่ารวม</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">฿42M</p>
                  </div>
                  <div className="rounded-xl bg-amber-500/10 p-3">
                    <p className="text-xs text-amber-200">ใกล้สิ้นสุด</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">17</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-3">
                    <p className="text-xs text-slate-300">จังหวัด</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">3</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                    <span>ประกาศล่าสุด</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-1 font-medium text-emerald-300">เปิดรับ</span>
                  </div>
                  <p className="font-semibold text-white">ปรับปรุงถนนคอนกรีตและระบบระบายน้ำ</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>เทศบาลเมืองนราธิวาส</span>
                    <span>฿4.85M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-800">Core Features</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950">เริ่มจากข้อมูลที่เห็นได้ชัด แล้วค่อยขยายให้ลึกลง</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            เครื่องมือที่ออกแบบมาเพื่อให้ทีมงานติดตามโอกาสภาครัฐแบบมีโครงสร้าง
            จัดการข้อมูล ระบบแจ้งเตือน และรายงานได้ภายในหน้าเดียว
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-900">{feature.icon}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="section-shell py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-800">How It Works</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">ทำงานด้วยข้อมูลที่จัดระเบียบและเข้าใจง่าย</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                ระบบนี้มุ่งให้เห็นภาพรวมได้อย่างรวดเร็วตั้งแต่การรวบรวมข้อมูลจนถึงการติดตามและวิเคราะห์โอกาสต่อเนื่อง
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((item) => (
                <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">{item.step}</div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 p-7 text-white shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-200">Ready to Launch</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">ทดลองใช้งานหน้า Dashboard ที่ออกแบบมาเพื่อเป็น product preview</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                เริ่มจาก UX ที่ใช้งานง่าย ต่อด้วยข้อมูลจริงและฟีเจอร์แจ้งเตือน เพื่อให้ทีมสามารถนำเสนอแนวคิดระบบได้อย่างมีประสิทธิภาพ
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/procurement-demo" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-50">เปิด Dashboard</Link>
              <Link href="/pricing" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">ดู pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}









































































































































