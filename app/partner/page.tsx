import Link from 'next/link';

export default function PartnerPage() {
  return (
    <div className="section-shell py-8">
      <div className="mb-8">
        <div className="badge">ร่วมเป็นพาร์ทเนอร์</div>
        <h1 className="mt-4 text-3xl font-bold text-rn md:text-4xl">เปิดโอกาสให้ทุกคนร่วมขับเคลื่อนธุรกิจ</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-rn">แนะนำลูกค้า</h2>
          <p className="mt-3 text-sm text-slate-600">ส่งต่อข้อมูลลูกค้าผ่านระบบที่มีประสิทธิภาพ เพื่อสร้างโอกาสและรายได้ร่วมกัน</p>
          <div className="mt-4 font-semibold text-green-600">ได้รับ 50% ของค่าธรรมเนียม</div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-rn">ร่วมทำงาน</h2>
          <p className="mt-3 text-sm text-slate-600">รับงานภายใต้ทีม Rn ที่มีมาตรฐานและขั้นตอนที่ชัดเจน เพื่อให้การประสานงานคล่องตัว</p>
          <div className="mt-4 font-semibold text-green-600">ได้รับ 70% ของมูลค่างาน</div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-rn">จับคู่ลงทุน</h2>
          <p className="mt-3 text-sm text-slate-600">เชื่อมเจ้าของที่ดิน นักลงทุน และผู้พัฒนา เพื่อให้เกิดแผนธุรกิจที่มีความคุ้มค่า</p>
          <div className="mt-4 font-semibold text-green-600">ค่าธรรมเนียม 5% ตามสัญญา</div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-rn/20 bg-blue-50 p-6">
        <h3 className="text-xl font-bold text-rn">เงื่อนไขการร่วมงาน</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>• มีความสนใจในสินค้าและบริการที่เกี่ยวข้อง</li>
          <li>• ยอมรับหลักเกณฑ์การคำนวณรายได้และการแบ่งปันผลประโยชน์</li>
          <li>• ติดต่อเพื่อเข้าร่วมระบบและรับข้อมูลส่งต่อโอกาส</li>
        </ul>
        <Link href="/" className="mt-6 inline-flex rounded-xl bg-rn px-5 py-3 font-semibold text-white hover:bg-blue-900">
          สมัครเป็นพาร์ทเนอร์
        </Link>
      </div>
    </div>
  );
}
