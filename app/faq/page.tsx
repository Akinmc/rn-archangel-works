import Link from 'next/link';

const faqGroups = [
  {
    title: 'เกี่ยวกับแพลตฟอร์ม',
    questions: [
      {
        question: 'Procurement Insight คืออะไร?',
        answer: 'เป็นแนวคิดแพลตฟอร์มสำหรับรวบรวม จัดหมวดหมู่ ค้นหา และติดตามประกาศจัดซื้อจัดจ้างภาครัฐ เพื่อช่วยให้ผู้ประกอบการและทีมธุรกิจเห็นข้อมูลที่เกี่ยวข้องได้สะดวกในจุดเดียว',
      },
      {
        question: 'ระบบครอบคลุมพื้นที่ใดบ้าง?',
        answer: 'ขอบเขตเบื้องต้นมุ่งที่จังหวัดนราธิวาส ปัตตานี และยะลา โดยสามารถพิจารณาขยายพื้นที่ได้ตามความต้องการและความพร้อมของแหล่งข้อมูล',
      },
      {
        question: 'ใครเหมาะกับการใช้งาน?',
        answer: 'ผู้ประกอบการที่ติดตามโครงการภาครัฐ ทีมพัฒนาธุรกิจ ฝ่ายวิเคราะห์ และองค์กรที่ต้องการจัดระเบียบข้อมูลประกาศเพื่อประกอบการวางแผน',
      },
    ],
  },
  {
    title: 'ข้อมูลและการอัปเดต',
    questions: [
      {
        question: 'ข้อมูลในหน้าแดชบอร์ดทดลองเป็นข้อมูลจริงหรือไม่?',
        answer: 'ไม่ใช่ รายการ หน่วยงาน วงเงิน สถานะ และสถิติในหน้า /procurement-demo เป็นข้อมูลจำลองเพื่อสาธิตหน้าจอและฟังก์ชันเท่านั้น ไม่ควรนำไปใช้ตัดสินใจหรืออ้างอิงเป็นประกาศจริง',
      },
      {
        question: 'ระบบจริงจะอัปเดตข้อมูลบ่อยแค่ไหน?',
        answer: 'รอบการอัปเดตต้องกำหนดหลังตรวจสอบแหล่งข้อมูลและเงื่อนไขการเข้าถึงของแต่ละแหล่ง โดยมีเป้าหมายให้ตรวจสอบเป็นประจำ ความถี่รายวันยังไม่ใช่การรับประกันจนกว่าจะยืนยันทางเทคนิคและสิทธิ์การใช้งาน',
      },
      {
        question: 'สามารถตรวจสอบแหล่งที่มาของประกาศได้หรือไม่?',
        answer: 'การออกแบบระบบจริงควรแสดงแหล่งที่มาและวันเวลาที่รวบรวม พร้อมลิงก์กลับไปยังประกาศต้นทาง เพื่อให้ผู้ใช้ตรวจสอบรายละเอียดและเงื่อนไขฉบับล่าสุดจากหน่วยงานได้',
      },
    ],
  },
  {
    title: 'ฟังก์ชันและการใช้งาน',
    questions: [
      {
        question: 'ทดลองใช้แดชบอร์ดได้อย่างไร?',
        answer: 'เปิดหน้าแดชบอร์ดทดลองเพื่อค้นหาและกรองข้อมูลจำลองตามจังหวัด ประเภทงาน สถานะ และช่วงวงเงิน ทดลองบันทึกรายการหรือส่งออก CSV ได้โดยไม่ต้องสมัครสมาชิก',
      },
      {
        question: 'คำค้นแจ้งเตือนและรายการที่บันทึกไว้ทำงานอย่างไรในรุ่นทดลอง?',
        answer: 'ข้อมูลเหล่านี้ถูกเก็บไว้ใน local storage ของเบราว์เซอร์เครื่องที่ใช้งานเท่านั้น ปัจจุบันยังไม่มีการส่งอีเมลหรือ LINE แจ้งเตือน และข้อมูลจะไม่ซิงก์ข้ามอุปกรณ์',
      },
      {
        question: 'สามารถส่งออกข้อมูลได้หรือไม่?',
        answer: 'รุ่นทดลองรองรับการส่งออกรายการจำลองที่ผ่านตัวกรองเป็นไฟล์ CSV ส่วนรูปแบบและสิทธิ์การส่งออกข้อมูลจริงจะกำหนดตามแหล่งข้อมูล เงื่อนไขการใช้งาน และขอบเขตบริการ',
      },
    ],
  },
  {
    title: 'ราคาและการติดต่อ',
    questions: [
      {
        question: 'ราคาบนหน้าแผนใช้งานเป็นราคายืนยันแล้วหรือไม่?',
        answer: 'โปรดใช้หน้าแผนใช้งานเป็นข้อมูลประกอบการพูดคุยเท่านั้น ราคาและขอบเขตบริการจริงต้องยืนยันเป็นลายลักษณ์อักษร หลังประเมินแหล่งข้อมูล ฟังก์ชัน จำนวนผู้ใช้ และค่าใช้จ่ายในการดูแลระบบ',
      },
      {
        question: 'ต้องการสอบถามหรือขอให้ประเมินโครงการ ทำอย่างไร?',
        answer: 'ส่งอีเมลถึงทีมงานพร้อมระบุพื้นที่ ประเภทข้อมูลที่สนใจ แหล่งประกาศเป้าหมาย และฟังก์ชันที่ต้องการ เพื่อช่วยประเมินแนวทางและขอบเขตงานเบื้องต้น',
      },
      {
        question: 'ระบบรวบรวมข่าวลับหรือข้อมูลที่ไม่ได้เปิดเผยหรือไม่?',
        answer: 'ไม่รวบรวมหรือนำเสนอข้อมูลลับ ข้อมูลที่ได้มาโดยไม่ได้รับอนุญาต หรือข้อมูลส่วนบุคคลที่ไม่มีฐานการใช้งานที่เหมาะสม แนวทางการพัฒนามุ่งใช้ข้อมูลสาธารณะหรือข้อมูลที่ได้รับอนุญาตเท่านั้น',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-[65vh] bg-slate-50">
      <section className="bg-slate-950 text-white">
        <div className="section-shell py-14 sm:py-20">
          <span className="inline-flex rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5 text-xs font-semibold text-blue-100">ศูนย์ช่วยเหลือ</span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">คำถามที่พบบ่อย</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">ข้อมูลเกี่ยวกับแพลตฟอร์ม ขอบเขตแดชบอร์ดทดลอง แหล่งข้อมูล และแนวทางการใช้งาน</p>
          <Link href="/procurement-demo" className="mt-7 inline-flex rounded-xl bg-blue-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-blue-200">ทดลองใช้แดชบอร์ด →</Link>
        </div>
      </section>

      <div className="section-shell py-10 sm:py-14">
        <div className="mx-auto max-w-4xl space-y-10">
          {faqGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-xl font-extrabold text-slate-950">{group.title}</h2>
              <div className="space-y-3">
                {group.questions.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-blue-200 open:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 marker:content-none">
                      <span>{item.question}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-blue-900 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 max-w-3xl border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl bg-blue-950 p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold">ยังมีคำถามเพิ่มเติม?</h2>
            <p className="mt-2 text-sm leading-6 text-blue-100">ติดต่อทีมงานเพื่อพูดคุยเรื่องแหล่งข้อมูลและขอบเขตการพัฒนาที่เหมาะกับคุณ</p>
          </div>
          <Link href="/contact" className="mt-5 inline-flex shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-50 sm:mt-0">ติดต่อทีมงาน →</Link>
        </section>
      </div>
    </main>
  );
}
