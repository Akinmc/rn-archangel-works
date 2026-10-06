import { prisma } from '@/lib/prisma';

export async function seedServices() {
  const defaultServices = [
    {
      code: 'RN-CON-01',
      category: '🏗️ กลุ่มก่อสร้าง-ออกแบบ',
      title: 'ออกแบบเบื้องต้น + แปลนร่าง',
      priceLabel: '300–500 บาท/ตร.ม.',
      description: 'ออกแบบแนวคิดเบื้องต้นพร้อมแปลนร่างสำหรับเริ่มต้นโครงการ',
      notes: 'ปรับตามขนาด-ประเภทอาคาร',
    },
    {
      code: 'RN-CON-02',
      category: '🏗️ กลุ่มก่อสร้าง-ออกแบบ',
      title: 'ออกแบบครบชุด + ขออนุญาต',
      priceLabel: '800–1,200 บาท/ตร.ม.',
      description: 'ออกแบบครบชุดและเสนอเอกสารขออนุญาตสำหรับเริ่มต้นการก่อสร้าง',
      notes: 'รวมแบบโครงสร้าง-ระบบ-เอกสาร',
    },
    {
      code: 'RN-CONS-01',
      category: '📊 กลุ่มที่ปรึกษา-ลงทุน',
      title: 'วิเคราะห์ที่ดินเบื้องต้น',
      priceLabel: '1,500 บาท/แปลง',
      description: 'ปรับแต่งความเหมาะสมของที่ดินและแผนการพัฒนาโครงการอย่างเบื้องต้น',
      notes: 'เหมาะสร้างอะไร? คุ้มไหม?',
    },
    {
      code: 'RN-MED-A1',
      category: '📱 กลุ่มสื่อ-พื้นที่โฆษณา',
      title: 'แบนเนอร์บนสุดแอป',
      priceLabel: '1,500 บาท/เดือน',
      description: 'พื้นที่โฆษณาแบนเนอร์หลักบนแอปเพื่อการเข้าถึงผู้ใช้แบบโดดเด่น',
      notes: '1 รายต่อช่วงเวลา',
    },
  ];

  for (const service of defaultServices) {
    const existing = await prisma.service.findUnique({
      where: { code: service.code },
    });

    if (!existing) {
      await prisma.service.create({
        data: service,
      });
    }
  }
}
