import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rn Archangel Works',
  description: 'ระบบบริการธุรกิจครบวงจรสำหรับก่อสร้าง ออกแบบ และบริการที่ปรึกษา',
};

const navItems = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/services', label: 'สินค้า & บริการ' },
  { href: '/partner', label: 'พาร์ทเนอร์' },
  { href: '/contact', label: 'ติดต่อ' },
  { href: '/admin', label: 'จัดการระบบ' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <header className="bg-rn text-white shadow-md">
          <div className="section-shell flex items-center justify-between py-4">
            <div>
              <div className="text-xl font-bold">Rn Archangel Works</div>
              <div className="text-xs text-slate-200">สร้างมาตรฐาน • สร้างความไว้วางใจ • สร้างคุณค่าที่ยั่งยืน</div>
            </div>
            <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium">
              v.03102569
            </div>
          </div>
        </header>

        <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="section-shell flex flex-wrap gap-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-rn/5 hover:text-rn"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <main>{children}</main>

        <footer className="mt-16 bg-slate-900 py-8 text-white">
          <div className="section-shell text-center text-sm text-slate-300">
            <p className="mb-2 font-medium text-white">Rn Archangel Works — สร้างมาตรฐาน สร้างความไว้วางใจ</p>
            <p>© 2569 ทุกสิทธิ์สงวนไว้ | ดำเนินงานตามหลักกฎหมายและจริยธรรม</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
