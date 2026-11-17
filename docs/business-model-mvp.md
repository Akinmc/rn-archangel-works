# Procurement Insight — แนวทางธุรกิจและการเริ่มต้น MVP

## แนวทางธุรกิจ 3 ชั้น

1. **Self-service SaaS** — สมาชิกติดตามประกาศสาธารณะด้วย dashboard, search, saved items, export และ alerts ตามสิทธิ์ใช้งาน
2. **บริการข้อมูลและรายงาน** — รายงานรายพื้นที่/ประเภทธุรกิจและการช่วยตั้งค่าคำค้น โดยระบุแหล่งที่มา วันเก็บข้อมูล และข้อจำกัดเสมอ
3. **Enterprise & partner** — workspace หลายผู้ใช้, API/webhook, white-label และ integration ตามข้อตกลงและสิทธิ์ของแหล่งข้อมูล

## Pricing ที่ใช้ทดสอบตลาด (ยังไม่ใช่ข้อเสนอราคายืนยัน)

- **ทดลองใช้:** ฟรี, ข้อมูลจำลอง, ทดสอบ UX และ CSV
- **ทีมธุรกิจ:** เสนอราคาเป็นแพ็กเกจนำร่องหลังสัมภาษณ์ลูกค้าและคำนวณต้นทุนข้อมูล/infra/support
- **องค์กร:** ประเมินตามจำนวนผู้ใช้, integration, SLA, ปริมาณข้อมูล และสิทธิ์การนำข้อมูลไปใช้

อย่ารับชำระเงินหรือรับประกันการอัปเดต/ผลการประมูลก่อนมีข้อมูลจริง ข้อกำหนดแหล่งข้อมูล ระบบบริการลูกค้า และเงื่อนไขราคาเป็นลายลักษณ์อักษร

## Lead capture และ social channels

เว็บใช้แบบฟอร์มที่ขอชื่อและโทรศัพท์เป็นข้อมูลจำเป็น พร้อมอีเมล/บริษัท/ช่องทางติดต่อกลับเป็นตัวเลือก และบันทึก source เช่น `website`, `facebook`, `instagram`, `line` ใน QuoteRequest. แชร์ URL พร้อม `?source=facebook` หรือ `?source=line` เพื่อดูที่มาของ lead.

การรับข้อความอัตโนมัติจาก Facebook/Instagram ต้องใช้ Meta Business account, app review/permissions และ webhook ที่ตั้งค่าอย่างถูกต้อง; LINE ต้องใช้ LINE Official Account และ Messaging API. ยังไม่เปิดใช้งาน integration เหล่านี้จนกว่าจะมีบัญชี/credentials และทดสอบ consent, retries, security และ platform policy.

## MVP เริ่มขายได้แบบเป็นขั้นตอน

- **สัปดาห์ 1–2: Discovery** — สัมภาษณ์ผู้ประกอบการ 10–15 ราย, เลือกหมวดธุรกิจ/พื้นที่, ตรวจแหล่งข้อมูลและเงื่อนไขการใช้
- **สัปดาห์ 3–4: Concierge pilot** — ส่งรายงานตัวอย่างด้วยข้อมูลจากแหล่งที่อนุญาต, เก็บ feedback และวัด willingness-to-pay ก่อนทำ automation
- **สัปดาห์ 5–8: MVP** — บัญชีผู้ใช้, data provenance, ingestion ที่สุภาพตามข้อกำหนด, search/filter, saved items, admin review, alerts และ export
- **หลัง pilot:** เชื่อม payment provider, LINE/Meta integrations, tenant/team access, audit, backup, monitoring และ support SLA หลังผ่านทดสอบด้าน privacy/security

เกณฑ์ go/no-go: มีลูกค้าทดลองใช้อย่างน้อย 5 ราย, ผู้ใช้กลับมาใช้งานเป็นประจำ, คุณภาพ/ความสดของข้อมูลตรวจสอบได้, และมีผู้ยืนยัน willingness-to-pay ก่อนลงทุนระบบอัตโนมัติเต็มรูปแบบ

## การเริ่มต้นสำหรับนักพัฒนา

หลังเปลี่ยน Prisma schema ให้รัน `npx prisma db push` และ `npx prisma generate` ก่อน `npm run dev`. คำขอ lead ถูกเก็บใน QuoteRequest; endpoint อ่านรายการ lead ต้องยืนยันสิทธิ์ ADMIN.
