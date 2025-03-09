/* eslint-disable @next/next/no-img-element */
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BreadcrumbList } from '@/components/ui/breadcrumb';


export default function WindowsServicePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="bg-black text-white py-10 px-5 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Istalgan turdagi windowsni o`rnatish</h1>
          <p className="mt-2">Istalgan turdagi Windows operatsion tizimini o`rnatib beramiz. Tez va sifatli xizmat ko`rsatish kafolatlanadi!</p>
        </div>
        <img src="/windows11.png" alt="Windows 11" className="w-48 mt-5 md:mt-0" />
      </header>

      {/* Brands */}
      <div className="flex flex-wrap justify-center gap-8 py-5">
        {['Samsung', 'Lenovo', 'Intel', 'Dell', 'DEXP', 'Samsung'].map((brand, index) => (
          <img key={index} src={`/${brand.toLowerCase()}.png`} alt={brand} className="h-10 object-contain" />
        ))}
      </div>

      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Asosiy</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        <BreadcrumbItem>
          <BreadcrumbLink href="/pages/home">Windows o`rnatish</BreadcrumbLink>
        </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Pricing Table */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Window o`rnatish narxlari</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Windows versiyasi</th>
              <th className="border p-2">Narx</th>
            </tr>
          </thead>
          <tbody>
            {[
              { versiya: 'Windows 7', narx: '50 000 so`m' },
              { versiya: 'Windows 8', narx: '50 000 so`m' },
              { versiya: 'Windows 10', narx: '50 000 so`m' },
              { versiya: 'Windows 11', narx: '50 000 so`m' },
            ].map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.versiya}</td>
                <td className="border p-2">{item.narx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Map & Contact */}
      <footer className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold mb-2">Bizning manzil</h3>
            <img src="/map.png" alt="Xarita" className="w-full rounded" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Asosiy</h3>
            <ul>
              <li>Xizmatlar</li>
              <li>Narxlar</li>
              <li>Biz haqimizda</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Kontaktlar</h3>
            <p>+998 (90) 200-21-22</p>
            <p>Du-Yak: 9:00-18:00</p>
            <p>Xorazm viloyati, Urganch shahar</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
