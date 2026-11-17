'use client';

import { useEffect, useMemo, useState } from 'react';

type Tender = {
  id: string;
  title: string;
  agency: string;
  province: 'นราธิวาส' | 'ปัตตานี' | 'ยะลา';
  category: string;
  budget: number;
  deadline: string;
  published: string;
  status: 'เปิดรับข้อเสนอ' | 'ใกล้ครบกำหนด' | 'ประกาศผู้ชนะ';
  method: string;
  description: string;
};

const tenders: Tender[] = [
  { id: 'DEMO-69001', title: 'ปรับปรุงถนนคอนกรีตเสริมเหล็กและระบบระบายน้ำ', agency: 'เทศบาลเมืองนราธิวาส', province: 'นราธิวาส', category: 'ก่อสร้าง', budget: 4850000, deadline: '2569-12-05', published: '2569-11-14', status: 'เปิดรับข้อเสนอ', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69002', title: 'จัดซื้อครุภัณฑ์คอมพิวเตอร์สำหรับสถานศึกษา', agency: 'สำนักงานเขตพื้นที่การศึกษาประถมศึกษาปัตตานี เขต 1', province: 'ปัตตานี', category: 'ครุภัณฑ์', budget: 1260000, deadline: '2569-11-29', published: '2569-11-13', status: 'ใกล้ครบกำหนด', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69003', title: 'จ้างซ่อมบำรุงระบบไฟฟ้าอาคารสำนักงาน', agency: 'โรงพยาบาลยะลา', province: 'ยะลา', category: 'บริการ', budget: 780000, deadline: '2569-12-12', published: '2569-11-12', status: 'เปิดรับข้อเสนอ', method: 'เฉพาะเจาะจง', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69004', title: 'จัดซื้อวัสดุและอุปกรณ์ทางการแพทย์', agency: 'สำนักงานสาธารณสุขจังหวัดนราธิวาส', province: 'นราธิวาส', category: 'เวชภัณฑ์', budget: 2340000, deadline: '2569-12-08', published: '2569-11-11', status: 'เปิดรับข้อเสนอ', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69005', title: 'ปรับปรุงอาคารอเนกประสงค์ประจำตำบล', agency: 'องค์การบริหารส่วนตำบลรูสะมิแล', province: 'ปัตตานี', category: 'ก่อสร้าง', budget: 3180000, deadline: '2569-11-25', published: '2569-11-10', status: 'ใกล้ครบกำหนด', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69006', title: 'จ้างเหมาบริการรักษาความปลอดภัยสถานที่ราชการ', agency: 'มหาวิทยาลัยราชภัฏยะลา', province: 'ยะลา', category: 'บริการ', budget: 960000, deadline: '2569-11-07', published: '2569-11-06', status: 'ประกาศผู้ชนะ', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69007', title: 'จัดซื้อวัสดุการเรียนการสอนและอุปกรณ์กีฬา', agency: 'สำนักงานเขตพื้นที่การศึกษาประถมศึกษานราธิวาส เขต 2', province: 'นราธิวาส', category: 'ครุภัณฑ์', budget: 645000, deadline: '2569-12-02', published: '2569-11-05', status: 'เปิดรับข้อเสนอ', method: 'วิธีคัดเลือก', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69008', title: 'ปรับปรุงระบบประปาหมู่บ้านและถังเก็บน้ำ', agency: 'องค์การบริหารส่วนจังหวัดปัตตานี', province: 'ปัตตานี', category: 'ก่อสร้าง', budget: 1720000, deadline: '2569-12-15', published: '2569-11-03', status: 'เปิดรับข้อเสนอ', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69009', title: 'จ้างพัฒนาระบบสารสนเทศงานบริการประชาชน', agency: 'สำนักงานจังหวัดยะลา', province: 'ยะลา', category: 'เทคโนโลยีสารสนเทศ', budget: 2150000, deadline: '2569-11-21', published: '2569-11-02', status: 'ใกล้ครบกำหนด', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69010', title: 'จัดซื้อวัสดุสำนักงานประจำปีงบประมาณ', agency: 'ที่ทำการปกครองอำเภอสุไหงโก-ลก', province: 'นราธิวาส', category: 'วัสดุสำนักงาน', budget: 285000, deadline: '2569-10-28', published: '2569-10-21', status: 'ประกาศผู้ชนะ', method: 'เฉพาะเจาะจง', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69011', title: 'ซ่อมแซมผิวจราจรและไฟส่องสว่างสาธารณะ', agency: 'เทศบาลเมืองปัตตานี', province: 'ปัตตานี', category: 'ก่อสร้าง', budget: 3920000, deadline: '2569-12-10', published: '2569-10-19', status: 'เปิดรับข้อเสนอ', method: 'ประกวดราคาอิเล็กทรอนิกส์ (e-bidding)', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
  { id: 'DEMO-69012', title: 'จัดซื้อเครื่องกำเนิดไฟฟ้าสำรองสำหรับหน่วยบริการ', agency: 'โรงพยาบาลธารโต', province: 'ยะลา', category: 'ครุภัณฑ์', budget: 890000, deadline: '2569-10-30', published: '2569-10-15', status: 'ประกาศผู้ชนะ', method: 'วิธีคัดเลือก', description: 'ตัวอย่างรายการเพื่อสาธิตการค้นหาและติดตามประกาศ กรุณาตรวจสอบรายละเอียดและเงื่อนไขจากแหล่งประกาศทางการก่อนดำเนินการ' },
];

const provinces = ['ทุกจังหวัด', 'นราธิวาส', 'ปัตตานี', 'ยะลา'];
const categories = ['ทุกประเภท', ...Array.from(new Set(tenders.map((item) => item.category)))];
const statuses = ['ทุกสถานะ', 'เปิดรับข้อเสนอ', 'ใกล้ครบกำหนด', 'ประกาศผู้ชนะ'];
const formatMoney = (amount: number) => new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(amount);
const formatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
const badgeStyle: Record<Tender['status'], string> = {
  'เปิดรับข้อเสนอ': 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  'ใกล้ครบกำหนด': 'bg-amber-50 text-amber-700 ring-amber-200',
  'ประกาศผู้ชนะ': 'bg-slate-100 text-slate-600 ring-slate-200',
};

export default function ProcurementDemoPage() {
  const [query, setQuery] = useState('');
  const [province, setProvince] = useState('ทุกจังหวัด');
  const [category, setCategory] = useState('ทุกประเภท');
  const [status, setStatus] = useState('ทุกสถานะ');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [saved, setSaved] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [selected, setSelected] = useState<Tender | null>(null);
  const [alertTerm, setAlertTerm] = useState('');
  const [alerts, setAlerts] = useState<string[]>([]);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    try {
      setSaved(JSON.parse(localStorage.getItem('procurement-demo-saved') || '[]'));
      setAlerts(JSON.parse(localStorage.getItem('procurement-demo-alerts') || '[]'));
    } catch { /* Ignore invalid local demo data. */ }
  }, []);

  const filtered = useMemo(() => tenders.filter((item) => {
    const text = `${item.title} ${item.agency} ${item.id} ${item.category}`.toLocaleLowerCase('th');
    return (!query || text.includes(query.toLocaleLowerCase('th')))
      && (province === 'ทุกจังหวัด' || item.province === province)
      && (category === 'ทุกประเภท' || item.category === category)
      && (status === 'ทุกสถานะ' || item.status === status)
      && (!minBudget || item.budget >= Number(minBudget))
      && (!maxBudget || item.budget <= Number(maxBudget))
      && (!savedOnly || saved.includes(item.id));
  }), [query, province, category, status, minBudget, maxBudget, savedOnly, saved]);

  const totalBudget = filtered.reduce((sum, item) => sum + item.budget, 0);
  const openCount = filtered.filter((item) => item.status !== 'ประกาศผู้ชนะ').length;
  const provinceCounts = provinces.slice(1).map((name) => ({ name, count: filtered.filter((item) => item.province === name).length }));
  const maxProvinceCount = Math.max(1, ...provinceCounts.map((item) => item.count));

  const toggleSaved = (id: string) => {
    const next = saved.includes(id) ? saved.filter((value) => value !== id) : [...saved, id];
    setSaved(next);
    localStorage.setItem('procurement-demo-saved', JSON.stringify(next));
  };

  const addAlert = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = alertTerm.trim();
    if (!term) return;
    const next = Array.from(new Set([...alerts, term]));
    setAlerts(next);
    localStorage.setItem('procurement-demo-alerts', JSON.stringify(next));
    setAlertTerm('');
    setNotice(`บันทึกคำค้นแจ้งเตือน “${term}” ในเครื่องนี้แล้ว (โหมดทดลอง)`);
    window.setTimeout(() => setNotice(''), 3500);
  };

  const removeAlert = (term: string) => {
    const next = alerts.filter((item) => item !== term);
    setAlerts(next);
    localStorage.setItem('procurement-demo-alerts', JSON.stringify(next));
  };

  const exportCsv = () => {
    const escape = (value: string | number) => `"${String(value).replaceAll('"', '""')}"`;
    const rows = [
      ['รหัสตัวอย่าง', 'ชื่อโครงการ', 'หน่วยงาน', 'จังหวัด', 'ประเภท', 'วงเงิน (บาท)', 'วันสิ้นสุด', 'สถานะ'],
      ...filtered.map((item) => [item.id, item.title, item.agency, item.province, item.category, item.budget, formatDate(item.deadline), item.status]),
    ];
    const csv = '\uFEFF' + rows.map((row) => row.map(escape).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'procurement-demo.csv';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const resetFilters = () => {
    setQuery(''); setProvince('ทุกจังหวัด'); setCategory('ทุกประเภท'); setStatus('ทุกสถานะ');
    setMinBudget(''); setMaxBudget(''); setSavedOnly(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="กลับหน้าหลัก">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-900 text-xl text-white">◈</span>
            <span><span className="block text-sm font-bold text-slate-900">Procurement Insight</span><span className="block text-xs text-slate-500">นราธิวาส · ปัตตานี · ยะลา</span></span>
          </a>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">โหมดทดลอง · ข้อมูลจำลอง</span>
            <a href="/" className="text-sm font-semibold text-blue-900 hover:underline">กลับหน้าหลัก</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          <strong>แดชบอร์ดสาธิต:</strong> รายการ ตัวเลข และหน่วยงานในหน้านี้เป็นข้อมูลตัวอย่างที่สร้างขึ้นเพื่อทดลองฟังก์ชันเท่านั้น ไม่ใช่ประกาศจัดซื้อจัดจ้างจริง และไม่มีการเชื่อมต่อหรือดึงข้อมูลจากเว็บไซต์ภาครัฐ โปรดตรวจสอบประกาศจริงจากแหล่งทางการก่อนดำเนินการ
        </div>

        <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-800">ศูนย์ติดตามโอกาสภาครัฐ · รุ่นทดลอง</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">ภาพรวมงานจัดซื้อจัดจ้าง</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">ค้นหา กรอง บันทึก และส่งออกรายการตัวอย่างในพื้นที่ชายแดนใต้ ทดลองประสบการณ์ใช้งานก่อนเชื่อมต่อแหล่งข้อมูลจริง</p>
          </div>
          <button onClick={exportCsv} className="rounded-xl bg-blue-900 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800">⇩ ดาวน์โหลด CSV</button>
        </section>

        <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="สรุปภาพรวม">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">รายการในชุดทดลอง</p><p className="mt-2 text-3xl font-extrabold">{filtered.length}<span className="ml-2 text-sm font-medium text-slate-500">รายการ</span></p><p className="mt-2 text-xs text-slate-400">จำนวนที่ตรงกับตัวกรองปัจจุบัน</p></article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">ยังไม่ประกาศผู้ชนะ</p><p className="mt-2 text-3xl font-extrabold text-emerald-700">{openCount}<span className="ml-2 text-sm font-medium text-slate-500">รายการ</span></p><p className="mt-2 text-xs text-slate-400">รวมสถานะเปิดรับและใกล้ครบกำหนด</p></article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">มูลค่ารวมชุดทดลอง</p><p className="mt-2 text-2xl font-extrabold">{formatMoney(totalBudget)}</p><p className="mt-2 text-xs text-slate-400">ผลรวมวงเงินตัวอย่างตามตัวกรอง</p></article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">บันทึกไว้ / คำค้นแจ้งเตือน</p><p className="mt-2 text-3xl font-extrabold text-blue-900">{saved.length}<span className="mx-2 text-slate-300">/</span>{alerts.length}</p><p className="mt-2 text-xs text-slate-400">จัดเก็บในเบราว์เซอร์เครื่องนี้</p></article>
        </section>

        <section className="mb-6 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-2"><div><h2 className="font-bold">ประกาศตามจังหวัด</h2><p className="mt-1 text-xs text-slate-500">จำนวนรายการตัวอย่างหลังใช้ตัวกรอง</p></div><span className="text-xs text-slate-400">ข้อมูลจำลอง</span></div>
            <div className="space-y-4">
              {provinceCounts.map((item) => <div key={item.name} className="grid grid-cols-[90px_1fr_34px] items-center gap-3 text-sm"><span className="text-slate-600">{item.name}</span><div className="h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-800 transition-all" style={{ width: `${(item.count / maxProvinceCount) * 100}%` }} /></div><span className="text-right font-bold">{item.count}</span></div>)}
            </div>
          </div>
          <form onSubmit={addAlert} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold">🔔 ทดลองบันทึกคำค้น</h2><p className="mt-1 text-xs leading-5 text-slate-500">ตั้งคำค้นที่สนใจ ระบบจะบันทึกไว้ในเบราว์เซอร์นี้เท่านั้น ยังไม่มีการส่งแจ้งเตือนจริง</p>
            <div className="mt-4 flex gap-2"><input value={alertTerm} onChange={(event) => setAlertTerm(event.target.value)} placeholder="เช่น ถนน, ครุภัณฑ์" className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"/><button className="rounded-xl bg-blue-900 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-800">บันทึก</button></div>
            {alerts.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{alerts.map((term) => <button type="button" key={term} onClick={() => removeAlert(term)} title="คลิกเพื่อลบคำค้น" className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">{term} ×</button>)}</div>}
          </form>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><div><h2 className="font-bold">ค้นหาและกรองรายการ</h2><p className="mt-1 text-xs text-slate-500">התוצאותอัปเดตทันทีตามเงื่อนไขที่เลือก</p></div><button onClick={resetFilters} className="text-sm font-semibold text-blue-800 hover:underline">ล้างตัวกรอง</button></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <label className="sm:col-span-2"><span className="mb-1 block text-xs font-semibold text-slate-600">ค้นหาคำ / หน่วยงาน / รหัส</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="พิมพ์คำที่ต้องการค้นหา" className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"/></label>
            <label><span className="mb-1 block text-xs font-semibold text-slate-600">จังหวัด</span><select value={province} onChange={(event) => setProvince(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm">{provinces.map((value) => <option key={value}>{value}</option>)}</select></label>
            <label><span className="mb-1 block text-xs font-semibold text-slate-600">ประเภทงาน</span><select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm">{categories.map((value) => <option key={value}>{value}</option>)}</select></label>
            <label><span className="mb-1 block text-xs font-semibold text-slate-600">สถานะ</span><select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm">{statuses.map((value) => <option key={value}>{value}</option>)}</select></label>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <label><span className="mb-1 block text-xs font-semibold text-slate-600">วงเงินขั้นต่ำ (บาท)</span><input type="number" min="0" value={minBudget} onChange={(event) => setMinBudget(event.target.value)} placeholder="ไม่กำหนด" className="w-40 rounded-xl border border-slate-300 px-3 py-2.5 text-sm"/></label>
            <label><span className="mb-1 block text-xs font-semibold text-slate-600">วงเงินสูงสุด (บาท)</span><input type="number" min="0" value={maxBudget} onChange={(event) => setMaxBudget(event.target.value)} placeholder="ไม่กำหนด" className="w-40 rounded-xl border border-slate-300 px-3 py-2.5 text-sm"/></label>
            <button onClick={() => setSavedOnly(!savedOnly)} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold ${savedOnly ? 'border-blue-900 bg-blue-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}>{savedOnly ? '★ แสดงที่บันทึกไว้' : '☆ เฉพาะที่บันทึกไว้'}</button>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-5 py-4"><div><h2 className="font-bold">รายการจัดซื้อจัดจ้างตัวอย่าง</h2><p className="mt-1 text-xs text-slate-500">แสดง {filtered.length} จาก {tenders.length} รายการจำลอง</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">ไม่ใช่ข้อมูลจริง</span></div>
          {filtered.length === 0 ? <div className="p-12 text-center"><p className="font-semibold text-slate-700">ไม่พบรายการที่ตรงกับตัวกรอง</p><button onClick={resetFilters} className="mt-2 text-sm font-semibold text-blue-800 hover:underline">ล้างตัวกรองแล้วลองใหม่</button></div> : <>
            <div className="hidden overflow-x-auto md:block"><table className="w-full min-w-[850px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-5 py-3 font-semibold">โครงการ / หน่วยงาน</th><th className="px-4 py-3 font-semibold">พื้นที่</th><th className="px-4 py-3 font-semibold">วงเงิน</th><th className="px-4 py-3 font-semibold">วันสิ้นสุด</th><th className="px-4 py-3 font-semibold">สถานะ</th><th className="px-4 py-3 font-semibold">รายละเอียด</th><th className="px-4 py-3" aria-label="บันทึก" /></tr></thead><tbody className="divide-y divide-slate-100">{filtered.map((item) => <tr key={item.id} className="transition hover:bg-slate-50"><td className="max-w-sm px-5 py-4"><p className="font-semibold text-slate-900">{item.title}</p><p className="mt-1 text-xs text-slate-500">{item.agency} · {item.id}</p></td><td className="px-4 py-4 text-slate-700">{item.province}<p className="mt-1 text-xs text-slate-400">{item.category}</p></td><td className="whitespace-nowrap px-4 py-4 font-semibold">{formatMoney(item.budget)}</td><td className="whitespace-nowrap px-4 py-4 text-slate-600">{formatDate(item.deadline)}</td><td className="px-4 py-4"><span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${badgeStyle[item.status]}`}>{item.status}</span></td><td className="px-4 py-4"><button onClick={() => setSelected(item)} className="font-semibold text-blue-800 hover:underline">ดูรายละเอียด</button></td><td className="px-4 py-4"><button onClick={() => toggleSaved(item.id)} aria-label={saved.includes(item.id) ? 'นำออกจากรายการบันทึก' : 'บันทึกรายการ'} className="text-xl text-amber-500">{saved.includes(item.id) ? '★' : '☆'}</button></td></tr>)}</tbody></table></div>
            <div className="divide-y divide-slate-100 md:hidden">{filtered.map((item) => <article key={item.id} className="p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-semibold">{item.title}</p><p className="mt-1 text-xs text-slate-500">{item.agency} · {item.id}</p></div><button onClick={() => toggleSaved(item.id)} aria-label="บันทึกรายการ" className="text-xl text-amber-500">{saved.includes(item.id) ? '★' : '☆'}</button></div><div className="mt-3 flex flex-wrap items-center gap-2 text-xs"><span className={`rounded-full px-2.5 py-1 font-semibold ring-1 ring-inset ${badgeStyle[item.status]}`}>{item.status}</span><span className="text-slate-600">{item.province} · {item.category}</span></div><div className="mt-3 flex items-center justify-between"><span className="font-bold">{formatMoney(item.budget)}</span><button onClick={() => setSelected(item)} className="text-sm font-semibold text-blue-800">รายละเอียด →</button></div><p className="mt-2 text-xs text-slate-500">สิ้นสุด {formatDate(item.deadline)}</p></article>)}</div>
          </>}
        </section>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">ข้อมูลทุกแถวในรุ่นทดลองนี้เป็นข้อมูลจำลองเพื่อสาธิตการทำงานเท่านั้น การบันทึกและคำค้นถูกเก็บใน local storage ของเบราว์เซอร์ ไม่ได้ส่งไปยังเซิร์ฟเวอร์หรือหน่วยงานภายนอก</p>
      </div>

      {notice && <div role="status" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-slate-900 px-5 py-3 text-sm text-white shadow-lg">{notice}</div>}

      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4" onClick={() => setSelected(null)} role="presentation"><section role="dialog" aria-modal="true" aria-labelledby="detail-title" onClick={(event) => event.stopPropagation()} className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold text-blue-800">รายละเอียดรายการตัวอย่าง · {selected.id}</p><h2 id="detail-title" className="mt-2 text-xl font-bold">{selected.title}</h2></div><button onClick={() => setSelected(null)} aria-label="ปิด" className="rounded-lg px-2 text-2xl leading-none text-slate-500 hover:bg-slate-100">×</button></div><dl className="mt-5 grid grid-cols-2 gap-4 text-sm"><div><dt className="text-slate-500">หน่วยงาน</dt><dd className="mt-1 font-medium">{selected.agency}</dd></div><div><dt className="text-slate-500">จังหวัด</dt><dd className="mt-1 font-medium">{selected.province}</dd></div><div><dt className="text-slate-500">ประเภท</dt><dd className="mt-1 font-medium">{selected.category}</dd></div><div><dt className="text-slate-500">วงเงินตัวอย่าง</dt><dd className="mt-1 font-medium">{formatMoney(selected.budget)}</dd></div><div><dt className="text-slate-500">วันที่เผยแพร่ตัวอย่าง</dt><dd className="mt-1 font-medium">{formatDate(selected.published)}</dd></div><div><dt className="text-slate-500">วันสิ้นสุดตัวอย่าง</dt><dd className="mt-1 font-medium">{formatDate(selected.deadline)}</dd></div><div className="col-span-2"><dt className="text-slate-500">วิธีจัดหา (ตัวอย่าง)</dt><dd className="mt-1 font-medium">{selected.method}</dd></div></dl><p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">{selected.description}</p><button onClick={() => setSelected(null)} className="mt-5 w-full rounded-xl bg-blue-900 px-4 py-3 font-semibold text-white hover:bg-blue-800">ปิดรายละเอียด</button></section></div>}
    </main>
  );
}
