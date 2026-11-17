const plans = [
  {
    name: 'Starter',
    price: '฿4,900',
    description: 'สำหรับทีมเริ่มต้นที่ต้องการติดตามงานภาครัฐเบื้องต้น',
    features: ['แดชบอร์ดพื้นฐาน', 'กรองข้อมูล 3 จังหวัด', 'บันทึกรายการที่สนใจ', 'CSV Export 1 เดือน'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '฿12,900',
    description: 'สำหรับทีมธุรกิจที่ต้องการติดตามและวิเคราะห์โอกาสต่อเนื่อง',
    features: ['แดชบอร์ดแบบมีสถิติ', 'คำค้นและแจ้งเตือน', 'กรองข้อมูลหลายเงื่อนไข', 'รายงานประจำสัปดาห์'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'ปรับตามความต้องการ',
    description: 'สำหรับองค์กรที่ต้องการเชื่อมต่อข้อมูลจริงและเพิ่มฟีเจอร์เฉพาะทาง',
    features: ['ระบบต่อข้อมูลจริง', 'API & Integrations', 'Access Control', 'ทีมสนับสนุนและวิเคราะห์'],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="section-shell py-12 sm:py-16">
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">Pricing Plans</span>
        <h1 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-5xl">เลือกแผนที่เหมาะกับทีมของคุณ</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          สร้างแพลตฟอร์มติดตามงานภาครัฐให้ตอบโจทย์ทั้งความต้องการเริ่มต้นและการใช้งานจริงสำหรับธุรกิจที่ต้องวางแผนต่อเนื่อง
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className={`rounded-3xl border p-6 shadow-sm ${plan.highlight ? 'border-blue-200 bg-blue-950 text-white shadow-blue-900/10' : 'border-slate-200 bg-white text-slate-900'}`}>
            <p className={`text-sm font-semibold ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{plan.name}</p>
            <p className={`mt-4 text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-950'}`}>{plan.price}</p>
            <p className={`mt-3 text-sm leading-6 ${plan.highlight ? 'text-blue-100' : 'text-slate-600'}`}>{plan.description}</p>

            <ul className={`mt-6 space-y-3 text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-700'}`}>
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className={`mt-0.5 font-bold ${plan.highlight ? 'text-emerald-300' : 'text-emerald-600'}`}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-bold transition ${plan.highlight ? 'bg-white text-blue-950 hover:bg-blue-50' : 'bg-blue-900 text-white hover:bg-blue-800'}`}>
              {plan.highlight ? 'เริ่มใช้งานด้วยแผนนี้' : 'เลือกแผนนี้'}
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
