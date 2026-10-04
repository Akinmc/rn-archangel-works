export default function ContactPage() {
  return (
    <div className="section-shell py-8">
      <div className="mb-8">
        <div className="badge">ติดต่อเรา</div>
        <h1 className="mt-4 text-3xl font-bold text-rn md:text-4xl">สื่อสารกับทีมงาน Rn</h1>
      </div>

      <div className="card p-6 md:p-8">
        <div className="grid gap-4 text-slate-700 md:grid-cols-2">
          <p>📍 อำเภอสุไหงปาดี จังหวัดนราธิวาส</p>
          <p>📞 0xx-xxxx-xxxx</p>
          <p>✉️ contact@rn-archangel.com</p>
          <p>🕒 จันทร์-เสาร์ 08:00–18:00 น.</p>
        </div>
      </div>
    </div>
  );
}
