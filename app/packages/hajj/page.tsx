"use client";
import Image from "next/image";

const hajjPackages = [
  { name: "Basic Package", image: "/images/kaaba2.png" },
  { name: "Premium Hajj Package", image: "/images/premium_HP.png" },
  { name: "Economy Hajj Package", image: "/packages/hajj/economy.jpg" },
  { name: "Upgraded Basic Package", image: "/packages/hajj/upgrade.jpg" },
  { name: "Private Hajj Package", image: "/packages/hajj/private.jpg" },
  { name: "VIP Package", image: "/packages/hajj/vip.jpg" },
];

export default function HajjPackagesPage() {
  return (
    <div className="py-8 px-4 pt-24">
      <h2 className="text-2xl font-bold text-center mb-6">HAJJ PACKAGES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hajjPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center border hover:shadow-lg transition"
          >
            <Image
              src={pkg.image}
              alt={pkg.name}
              height={300}
              width={300}
              className="rounded mb-3"
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

