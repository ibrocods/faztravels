import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 space-y-14 bg-white">
      {/* ========= VISION + MISSION SECTION ========= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start pt-10"> 
     
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">Our Vision</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              At Faz travels, our vision is to be the leading provider of exceptional Hajj and Umrah services,
              renowned for our unwavering commitment to quality, integrity, and customer satisfaction. We envision
              a future where every pilgrim can embark on their sacred journey with confidence, knowing that they
              are in the hands of a trusted and compassionate partner. We strive to be the bridge that connects the
              Muslim community to the Holy cities of Makkah and Madinah, facilitating a spiritually enriching experience
              that fosters growth, peace and tranquility
            </p>
          </div>
          </div>
          <div className="w-auto h-auto max-w-[500px] min-h-[300px] md:h-full relative rounded-xl p-2">
          <Image
            src="/images/kaaba2.png" // Replace with real Kaaba image
            alt="Kaaba"
            fill
            className="object-fit rounded-md"
          />
        </div>
        </section>
        <section className=" items-start w-full">
        <div className="space-y-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h2>
            <p className="text-gray-700 text-sm leading-relaxed w-full">
              At Faz travels, our mission is to provide exceptional Hajj and Umrah services that exceed the expectations
              of our pilgrims. We are dedicated to delivering unparalleled quality, integrity and customer satisfaction,
              ensuring that every aspect of our pilgrims' journey is handled with care and attention to detail. We envision
              to empower our pilgrims to focus on the spiritual significance of their journey, while we take care of the
              logistics, allowing them to return home with unforgettable memories and a deeper connection to their faith.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 mt-3 space-y-1">
              <li>Providing personalized and compassionate service to every pilgrim</li>
              <li>Ensuring the highest standards of integrity, transparency and accountability</li>
              <li>Guiding and communicating with our pilgrims based on knowledge and mutual respect</li>
            </ul>
          </div>
        </div> 
      </section>

      {/* ========= WHY CHOOSE US SECTION ========= */}
      <section className="bg-[#F2F7F8] py-16 px-6 md:px-20" >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-10">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
          {[
            {
              title: "Experienced and Knowledgeable Guides",
              desc: "Our guides are well-versed in the rituals and history of Hajj and Umrah, ensuring that you have a spiritually enriching experience.",
              icon: "?",
            },
            {
              title: "Comfortable and Convenient Accommodation",
              desc: "We offer a range of accommodation options to suit your needs and budget, all carefully selected for their proximity to the Holy sites and their comfort.",
              icon: "??",
            },
            {
              title: "Proven Track Records",
              desc: "We have a proven track record of delivering exceptional Hajj and Umrah services, with countless satisfied pilgrims who have trusted us with their journeys.",
              icon: "?",
            },
            {
              title: "24/7 Support",
              desc: "Our support team is available 24/7 to assist you with any questions or concerns you may have during your journey.",
              icon: "?",
            },
            {
              title: "Personalized Services",
              desc: "Our team is dedicated to providing personalized service to every pilgrim, ensuring that your needs are met and your questions are answered.",
              icon: "?",
            },
            {
              title: "Transparent Pricing",
              desc: "We believe in transparency and fairness in our pricing, ensuring that you know exactly what you're getting for your money.",
              icon: "?",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 p-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

