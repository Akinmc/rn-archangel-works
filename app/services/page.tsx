import Link from 'next/link';
import { getServices } from '@/lib/data';

export default async function ServicesPage() {
  const services = await getServices();

  const grouped = services.reduce<Record<string, typeof services>>((acc, service) => {
    acc[service.category] = [...(acc[service.category] || []), service];
    return acc;
  }, {});

  return (
    <div className="section-shell py-8">
      <div className="mb-8">
        <div className="badge">สินค้าและบริการ</div>
        <h1 className="mt-4 text-3xl font-bold text-rn md:text-4xl">บริการครบวงจรสำหรับธุรกิจและการพัฒนา</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          เรานำเสนอผลิตภัณฑ์และบริการที่ครอบคลุมเพื่อรองรับการลงทุน การก่อสร้าง การออกแบบ และการขยายโอกาสทางธุรกิจอย่างมีประสิทธิภาพ
        </p>
      </div>

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-rn">{category}</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">รหัส</th>
                  <th className="px-4 py-3">รายการ</th>
                  <th className="px-4 py-3 text-right">ราคา</th>
                  <th className="px-4 py-3">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                {items.map((service) => (
                  <tr key={service.id} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">{service.code}</td>
                    <td className="px-4 py-3 font-medium text-slate-800">{service.title}</td>
                    <td className="px-4 py-3 text-right font-bold text-rn">{service.priceLabel}</td>
                    <td className="px-4 py-3 text-slate-500">{service.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <div className="mt-10 rounded-2xl bg-rn p-8 text-white">
        <h3 className="text-2xl font-bold">ต้องการใบเสนอราคาส่วนตัว?</h3>
        <p className="mt-2 text-blue-100">กรอกข้อมูล เราจะติดต่อกลับเพื่อให้คำปรึกษาและเสนอราคาอย่างเหมาะสม</p>
        <Link href="/" className="mt-5 inline-flex rounded-xl bg-secondary px-5 py-3 font-semibold text-white hover:bg-yellow-500">
          ส่งข้อมูลขอใบเสนอราคา
        </Link>
      </div>
    </div>
  );
}
