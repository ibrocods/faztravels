// components/Hero.tsx
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Hero() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative w-full h-[90vh] overflow-hidden items-center " >
      <Image src = "/images/homepage.png" alt = "Home Page Banner" layout = "fill" objectFit = "cover" className = "object-cover brightness-75" priority />
        <div className="mx-auto absolute inset-0 flex flex-col items-center justify-center px-4 text-white z-10 text-center max-w-3xl pt-24">
          <h1 className="text-3xl md:text-4xl font-bold">
            Perform Hajj and Umrah with ease. <br /> Embark on a spiritual journey with <span className="text-red-400">FAZ TRAVEL AGENCY</span>
          </h1>
          <p className="mt-4 text-lg font-large">
            "Experience the spiritual rejuvenation and divine connection that comes with performing these blessed pilgrimages"
          </p>
          <a href="#packages">
          <button className="mt-6 bg-[#dc4141] text-white py-2 px-6 rounded font-semibold hover:bg-[#dc4120] transition-all">        
            Explore Packages 
          </button></a>
          
        </div>
      </section>

      {/* AGENCY INFO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 py-16 bg-white">
        {/* Left: Kaaba Image */}
        <div className="border border-green-600 rounded-lg p-2">
          {/* <Image src={kaaba1} alt="Kaaba" className="w-60 md:w-80 h-auto object-contain" /> */}
          <Image src = "/images/kaaba1.png" width = {300} height= {300}alt="Kaaba" className="object-contain  w-auto h-auto max-w-[300px] min-h-[300px]" />
        </div>

        {/* Right: Text & Points */}
        <div className="max-w-xl">
          <h2 className="text-blue-600 text-xl font-bold mb-2">A Wonderful Agency to fulfill your dreams</h2>
          <p className="text-black-700 mb-6">
            We have got everything you need for a memorable pilgrimage. Book now and enjoy special discounts,
            complimentary services and expert guidance to make your journey truly unforgettable
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              "Hotel Booking",
              "Experienced Guides",
              "Visa Processing",
              "Comfortable accommodation",
              "Ziyaarat Tours",
              "Dedicated Support",
            ].map((item, i) => (
              <p key={i} className="flex items-start gap-2 text-gray-800 font-bold">
                <span className="text-white bg-[#dc4141] rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                {item}
              </p>
            ))}
          </div>

          <button className="mt-6 bg-green-700 text-white py-2 px-5 rounded hover:bg-green-800 transition-all">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
