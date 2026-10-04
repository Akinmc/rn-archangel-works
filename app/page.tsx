import Link from 'next/link';
import { QuoteRequestForm } from '@/components/QuoteRequestForm';
import { getServices } from '@/lib/data';

export default async function HomePage() {
  const services = await getServices();
  const highlightServices = services.slice(0, 3);

  return (
    <div className="section-shell py-8">
      <section className="rounded-3xl bg-gradient-to-r from-rn to-blue-900 p-8 text-white shadow-soft">
        <div className="max-w-2xl">
          <div className="badge border-white/20 bg-white/10 text-white">ศูนย์กลางบริการธุรกิจ</div>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">ยินดีต้อนรับสู่ระบบ Rn ✨</h1>
          <p className="mt-4 text-base text-blue-100 md:text-lg">
            บริการก่อสร้าง ออกแบบ ปรึกษาการลงทุน และการร่วมธุรกิจแบบครบวงจร โดยทีมงานที่ให้ความสำคัญกับมาตรฐานและความไว้วางใจ
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-xl bg-secondary px-5 py-3 font-semibold text-white hover:bg-yellow-500">
              ดูสินค้าและบริการ
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/30 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="card p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-rn">🏗️</div>
          <h2 className="mb-2 text-xl font-bold">ก่อสร้างครบวงจร</h2>
          <p className="text-sm text-slate-600">
            ออกแบบ → ขออนุญาต → ก่อสร้าง → ส่งมอบ โดยทีมวิศวกรและสถาปนิกที่มีคุณภาพและความรับผิดชอบ
          </p>
        </div>

        <div className="card p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-leaf">📊</div>
          <h2 className="mb-2 text-xl font-bold">ปรึกษาการลงทุน</h2>
          <p className="text-sm text-slate-600">
            วิเคราะห์ที่ดิน วางแผนพัฒนาโครงการ และประเมินความคุ้มค่าเพื่อให้การลงทุนมีความปลอดภัยและยั่งยืน
          </p>
        </div>

        <div className="card p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-xl text-secondary">🤝</div>
          <h2 className="mb-2 text-xl font-bold">ร่วมทำงาน</h2>
          <p className="text-sm text-slate-600">
            แนะนำลูกค้า ร่วมลงทุน และร่วมทำงานตามแผนกลยุทธ์เพื่อผลลัพธ์ที่เป็นประโยชน์ร่วมกัน
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-sm font-medium text-rn">หลักการของเรา</p>
        <p className="mt-2 text-slate-700">
          ตั้งราคาเป็นธรรม — ลูกค้าพอใจ คู่ค้าพอใจ เราดำเนินงานอย่างยั่งยืน ด้วยหลักการโปร่งใสและคำนึงถึงผลประโยชน์ร่วมกัน
        </p>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-rn">บริการยอดนิยม</h2>
          <Link href="/services" className="text-sm font-semibold text-rn underline-offset-4 hover:underline">
            ดูบริการทั้งหมด →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlightServices.map((service) => (
            <div key={service.id} className="card p-5">
              <div className="badge">{service.code}</div>
              <h3 className="mt-3 text-lg font-bold text-slate-800">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <div className="mt-4 text-base font-bold text-rn">{service.priceLabel}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-6">
          <h2 className="mb-4 text-2xl font-bold text-rn">📋 ขอใบเสนอราคา</h2>
          <QuoteRequestForm />
        </div>

        <div className="space-y-5">
          <div className="card p-6">
            <h3 className="mb-3 text-lg font-bold text-rn">✅ การรับประกันผลงาน</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• โครงสร้างหลัก 5 ปี</li>
              <li>• ระบบไฟฟ้า-ประปา 2 ปี</li>
              <li>• งานปิดผนัง-ทาสี-รอยรั่ว 1 ปี</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="mb-3 text-lg font-bold text-rn">💰 การชำระเงิน</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• งวด 1: 30%</li>
              <li>• งวด 2: 30%</li>
              <li>• งวด 3: 25%</li>
              <li>• งวด 4: 15%</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
