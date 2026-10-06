# Rn Archangel Works - ศูนย์กลางบริการธุรกิจแบบครบวงจร

## 📋 คุณสมบัติหลัก

✅ ระบบสมาชิก + เข้าสู่ระบบ (JWT Auth)
✅ ฐานข้อมูล SQLite ด้วย Prisma ORM
✅ API สำหรับจัดการสินค้า/บริการ
✅ ระบบจัดการคำขอใบเสนอราคา
✅ Admin Dashboard
✅ Frontend ที่สวยงามด้วย Tailwind CSS

## 🚀 เริ่มต้นใช้งาน

### ติดตั้ง
```bash
npm install
cp .env.example .env.local
npx prisma db push
npm run dev
```

### สร้างผู้ใช้ Admin ตัวแรก
```bash
# เข้าสู่หน้า /register
# สมัครสมาชิกใหม่
# ผู้ใช้แรกจะไดเปน ADMIN โดยอัตโนมัติ
```

## 🔗 URLs หลัก

- **หน้าหลัก**: http://localhost:3000/
- **สินค้า/บริการ**: http://localhost:3000/services
- **ขอเสนอราคา**: http://localhost:3000/ (แบบฟอร์ม)
- **ลงชื่อเข้า**: http://localhost:3000/login
- **สมัครสมาชิก**: http://localhost:3000/register
- **Dashboard**: http://localhost:3000/dashboard
- **Admin**: http://localhost:3000/admin

## 📁 โครงสร้างโปรเจค

```
rn-archangel-works/
├── app/
│   ├── api/                  # API endpoints
│   │   └── auth/            # ระบบยืนยันตัวตน
│   ├── admin/               # Admin Dashboard
│   ├── dashboard/           # User Dashboard
│   ├── login/               # หน้าเข้าสู่ระบบ
│   ├── register/            # หน้าสมัครสมาชิก
│   └── services/            # หน้าสินค้า/บริการ
├── components/              # React Components
├── lib/                     # Utilities
│   ├── auth.ts             # Authentication helpers
│   └── prisma.ts           # Database client
├── prisma/
│   └── schema.prisma       # Database schema
└── public/                 # Static files
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - สมัครสมาชิกใหม่
- `POST /api/auth/login` - เข้าสู่ระบบ
- `GET /api/auth/me` - ดูข้อมูลผู้ใช้ปัจจุบัน
- `POST /api/auth/logout` - ออกจากระบบ

## 🔐 ความปลอดภัย

- รหัสผ่านเข้ารหัสด้วย bcryptjs
- JWT tokens สำหรับ session management
- HttpOnly cookies ป้องกัน XSS attacks
- CORS ready สำหรับ mobile apps

## 📝 การใช้งาน

1. สมัครสมาชิก → /register
2. เข้าสู่ระบบ → /login
3. ดูสินค้า/บริการ → /services
4. ส่งคำขอเสนอราคา → ฟอร์มในหน้าแรก
5. จัดการ (เฉพาะ Admin) → /admin

## 🛠️ การพัฒนาต่อ

ขั้นตอนถัดไป:
- [ ] ระบบชำระเงิน (Payment Gateway)
- [ ] ระบบแจ้งเตือน (Email/SMS)
- [ ] ระบบพาร์ทเนอร์ (Partner Management)
- [ ] Real-time tracking
- [ ] Mobile app

## 📞 ติดต่อ

Rn Archangel Works
อำเภอสุไหงปาดี จังหวัดนราธิวาส
www.rn-archangel.com
