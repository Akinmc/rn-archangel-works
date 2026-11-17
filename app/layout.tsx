import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Procurement Insight | Rn Archangel Works',
  description: 'ติดตามและจัดระเบียบประกาศจัดซื้อจัดจ้างภาครัฐในนราธิวาส ปัตตานี และยะลา พร้อมเดโมทดลองใช้งาน',
};

const navItems = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/procurement-demo', label: 'ทดลองใช้' },
  { href: '/pricing', label: 'แพ็กเกจธุรกิจ' },
  { href: '/faq', label: 'คำถามที่พบบ่อย' },
  { href: '/contact', label: 'ติดต่อเรา' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <header className="bg-rn text-white shadow-md"><div className="section-shell flex items-center justify-between py-4"><div><Link href="/" className="text-xl font-bold">Procurement Insight</Link><div className="text-xs text-slate-200">โดย Rn Archangel Works · พื้นที่เป้าหมาย นราธิวาส ปัตตานี ยะลา</div></div><Link href="/contact?source=header#inquiry" className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-rn transition hover:bg-blue-50">ขอทดลองใช้งาน</Link></div></header>
        <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur"><div className="section-shell flex flex-wrap gap-2 py-3">{navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-rn/5 hover:text-rn">{item.label}</Link>)}</div></nav>
        <main>{children}</main>
        <footer className="mt-16 bg-slate-900 py-8 text-white"><div className="section-shell text-center text-sm text-slate-300"><p className="mb-2 font-medium text-white">Procurement Insight — ข้อมูลสาธารณะ เพื่อการตัดสินใจที่มีข้อมูลประกอบ</p><p>© 2569 Rn Archangel Works | ใช้ข้อมูลสาธารณะหรือข้อมูลที่ได้รับอนุญาตเท่านั้น</p><div className="mt-3 flex justify-center gap-4"><Link href="/faq" className="hover:text-white">FAQ</Link><Link href="/contact" className="hover:text-white">ติดต่อ</Link><Link href="/pricing" className="hover:text-white">แพ็กเกจ</Link></div></div></footer>
      </body>
    </html>
  );
}
