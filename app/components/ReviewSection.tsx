import Image from "next/image";

export default function PackagesAndReviews() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-14">
      
      {/* ================== Hajj and Umrah Packages ================== */}
      <section>
        <h2 id="packages" className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-8 p-10">
          FAZ HAJJ AND UMRAH PACKAGES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 space-y-3 bg-white  ${
                idx < 3
                ?
                "box-shadow-[0_8px_10px_-5px_#A0522D]"
                :
                "shadow-[0_8px_10px_-5px_#228B22]"
              }`}
            >
              <div className="w-full h-40 bg-gray-200 rounded-md relative overflow-hidden">
                <Image
                  src="/images/kaaba2.png" // Replace with real image later
                  alt="Kaaba"
                  fill
                  className="object-cover"
                  sizes = "(max-width: 768px ) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold">
                {idx < 3
                  ? ["Premium Hajj", "Standard Hajj", "Economy Hajj"][idx]
                  : ["Premium Umrah", "Standard Umrah", "Budget Umrah"][idx - 3]}{" "}
                Package
              </h3>
              <p className="text-sm text-gray-600">#0000000000</p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>🏨🛌🏾 Hotel Type: {idx % 2 === 0 ? "5-Star" : "Budget-friendly"}</li>
                <li> ✈🚉Transport: VIP or Shared Shuttle</li>
                <li>👳🏾‍♂️ Scholars: Experienced Scholars</li>
                <li>💳 Visa Services included</li>
              </ul>
              <button className="mt-2 w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold">
            All Package
          </button>
        </div>
      </section>

      {/* ================== Reviews Section ================== */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
            Take a look at the amazing review of our past hujaaj
          </h2>
          <a href="#" className="text-yellow-500 font-medium hover:underline">
            See all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Alhaja Danjuma",
              review:
                "Alhamdulillah, my hajj experience with Faz Hajj and Umrah travel was truly blessed. The team was professional, and the services were top-notch. Highly recommended!",
            },
            {
              name: "Alh & Alh Abdullah",
              review:
                "Faz Hajj and Umrah Travels provided excellent Umrah experience for my family. The staff were friendly and the package was well-organized. Highly recommended for families!",
            },
            {
              name: "Alhaji Taofeeq",
              review:
                "I was impressed with the attention to detail and care provided by Faz Hajj and Umrah Travels during my Hajj trip. The accommodations were comfortable and the guides were knowledgeable.",
            },
          ].map((rev, i) => (
            <div
              key={i}
              className="border-[3px] border-green-600 rounded-xl p-4 shadow-sm bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
              <h3 className="font-semibold text-gray-800 mb-1">{rev.name}</h3>
              <p className="text-yellow-500 text-sm mb-2"></p>
              <p className="text-sm text-gray-700">{rev.review}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
