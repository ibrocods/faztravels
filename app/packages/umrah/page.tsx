
"use client";

import Image from "next/image";

const umrahPackages = [
  { name: "Basic Umrah Package", image: "/packages/umrah/basic.jpg" },
  { name: "Premium Umrah Package", image: "/packages/umrah/premium.jpg" },
  { name: "Children Umrah Package", image: "/packages/umrah/children.jpg" },
  { name: "Executive Umrah Package", image: "/packages/umrah/executive.jpg" },
  { name: "Ramadan Umrah Package", image: "/packages/umrah/ramadan.jpg" },
  { name: "VIP Umrah Package", image: "/packages/umrah/vip.jpg" },
];

export default function UmrahPackagesPage() {
  return (
    <div className="py-8 px-4 pt-24">
      <h2 className="text-2xl font-bold text-center mb-6">UMRAH PACKAGES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {umrahPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center border hover:shadow-lg transition"
          >
            <Image
              src={pkg.image}
              alt={pkg.name}
              width={300}
              height={200}
              className="object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold text-center">{pkg.name}</h3>
            <button className="mt-3 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900">
              Explore More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
