import Link from 'next/link';

const features = [
  {
    number: '01',
    icon: '⌕',
    title: 'ค้นหาและกรองประกาศ',
    description: 'ค้นหาด้วยคำสำคัญ พร้อมกรองจังหวัด ประเภทงาน สถานะ และช่วงวงเงิน เพื่อให้เจอรายการที่เกี่ยวข้องได้สะดวก',
  },
  {
    number: '02',
    icon: '▤',
    title: 'ดูภาพรวมในแดชบอร์ด',
    description: 'สรุปรายการและมูลค่าตามตัวกรอง พร้อมเปรียบเทียบภาพรวมระหว่างนราธิวาส ปัตตานี และยะลา',
  },
  {
    number: '03',
    icon: '☆',
    title: 'บันทึกโครงการที่สนใจ',
    description: 'เก็บรายการที่ต้องการติดตาม��ละทดลองสร้างคำค้นที่สนใจ เพื่อจัดระเบียบโอกาสสำหรับทีมของคุณ',
  },
  {
    number: '04',
    icon: '⇩',
    title: 'นำข้อมูลไปใช้งานต่อ',
    description: 'ทดลองส่งออกรายการที่กรองแล้วเป็น CSV สำหรับตรวจสอบและวิเคราะห์ต่อในเครื่องมือที่คุ้นเคย',
  },
];

const steps = [
  { title: 'รวบรวม', description: 'เชื่อมต่อแหล่งข้อมูลที่เปิดเผยต่อสาธารณะหรือได้รับอนุญาต' },
  { title: 'จัดระเบียบ', description: 'ปรับข้อมูลให้อยู่ในรูปแบบเดียว พร้อมระบุที่มาและวันอัปเดต' },
  { title: 'ค้นหาและวิเคราะห์', description: 'กรองตามพื้นที่ ประเภทงาน สถานะ และวงเงิน' },
  { title: 'ติดตามโอกาส', description: 'บันทึกรายการและนำข้อมูลไปประกอบการวางแผน' },
];

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/50 via-slate-950 to-slate-950" />
        <div className="section-shell relative py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              แพลตฟอร์มติดตามโอกาสภาครัฐ · รุ่นทดลอง
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              เห็นประกาศสำคัญ<br /><span className="text-blue-300">ในพื้นที่เดียว</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              แนวคิดแดชบอร์ดสำหรับค้นหาและติดตามงานภาครัฐและการจัดซื้อจัดจ้างในนราธิวาส ปัตตานี และยะลา ช่วยจัดข้อมูลให้อ่านง่าย เพื่อให้ผู้ประกอบการวางแผนและติดตามโอกาสได้สะดวกขึ้น
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/procurement-demo" className="rounded-xl bg-blue-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-blue-950/30 transition hover:bg-blue-300">
                ทดลองใช้แดชบอร์ด <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                ติดต่อเพื่อพูดคุย
              </Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">รุ่นทดลองใช้ข้อมูลจำลอง ยังไม่ได้เชื่อมต่อหรือดึงข้อมูลจากแหล่งภาครัฐ</p>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
            {['นราธิวาส', 'ปัตตานี', 'ยะลา'].map((province) => (
              <div key={province} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5">
                <span className="text-xs text-slate-400">พื้นที่เป้าหมาย</span>
                <p className="mt-1 text-sm font-bold text-white sm:text-base">{province}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-blue-800">เครื่องมือเพื่อการติดตามที่เป็นระบบ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">จากหลายประกาศ สู่ภาพรวมที่ค้นหาได้</h2>
          <p className="mt-4 leading-7 text-slate-600">เริ่มต้นทดลองประสบการณ์ใช้งานที่ออกแบบมาเพื่อรวมการค้นหา การกรอง และการจัดการรายการที่สนใจไว้ในหน้าจอเดียว</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.number} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-900">{feature.icon}</span>
                <span className="text-xs font-semibold text-slate-300">{feature.number}</span>
              </div>
              <h3 className="mt-5 font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="section-shell py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold text-blue-800">แนวทางการทำงาน</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">ข้อมูลพร้อมใช้<br />เริ่มจากแหล่งที่เชื่อถือได้</h2>
              <p className="mt-4 leading-7 text-slate-600">ระบบจริงจะพัฒนาบนข้อมูลสาธารณะหรือข้อมูลที่ได้รับอนุญาต โดยแสดงแหล่งที่มาและเวลาที่ตรวจพบ เพื่อให้ผู้ใช้ตรวจสอบรายละเอียดจากประกาศต้นทางได้</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">{index + 1}</div>
                  <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="overflow-hidden rounded-3xl bg-blue-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300">ลองใช้งานรุ่นทดลอง</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">สัมผัสรูปแบบการติดตามโครงการด้วยตัวเอง</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">ทดลองค้นหา กรอง บันทึกรายการ และดาวน์โหลด CSV ด้วยข้อมูลจำลอง โดยไม่ต้องสมัครสมาชิก</p>
          </div>
          <Link href="/procurement-demo" className="mt-6 inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-blue-950 transition hover:bg-blue-50 lg:mt-0">
            เปิดแดชบอร์ดทดลอง <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-slate-500">หมายเหตุ: รุ่นทดลองเป็นเพียงตัวอย่างหน้าจอและข้อมูลจำลอง ไม่ใช่ข้อมูลประกาศจริง การรวบรวมข้อมูลจริงและการอัปเดตรายวันเป็นขอบเขตการพัฒนาที่ต้องยืนยันแหล่งข้อมูลและสิทธิ์การใช้งานก่อน</p>
      </section>
    </div>
  );
}
