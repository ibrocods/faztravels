"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is included in a typical Hajj and Umrah package?",
    answer:
      "A typical package usually includes accommodation, transportation, meals, and guidance for the pilgrimage.",
  },
  {
    question: "Are there any specific health requirements for Hajj or Umrah?",
    answer:
      "Yes, pilgrims may need to provide proof of vaccinations and may be required to undergo medical screenings before travelling.",
  },
  {
    question: "How do I choose the right Hajj or Umrah package for my needs?",
    answer:
      "Consider factors such as budget, accommodation preferences, duration of stay and services e.g guided tours, meal plan and so on.",
  },
  {
    question: "What should I pack for Hajj and Umrah?",
    answer:
      "Essential items such as ihram clothings, comfortable shoes, medication, personal hygiene items and warm clothing for cooler months.",
  },
  {
    question: "What are the requirements for performing Hajj or Umrah?",
    answer:
      "Requirements include being a Muslim, having a valid passport, obtaining a visa and meeting health and financial requirements.",
  },
  {
    question: "Can I perform Hajj and Umrah without a travel agency?",
    answer:
      "While it is possible to organize independently, many pilgrims prefer to use travel agencies for convenience, guidance and logistic support.",
  },
  {
    question: "What is the difference between Hajj and Umrah?",
    answer:
      "Hajj is a mandatory pilgrimage to Makkah performed once in a lifetime during specific dates in the Islamic months of Dhul-Hijjah. Umrah is a voluntary pilgrimage that can be performed at any time of the year.",
  },
  {
    question: "What happens if I need medical assistance during Hajj or Umrah?",
    answer:
      "We offer medical assistance and have partnership with local healthcare providers. You can inquire about medical support when booking your package.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 pt-24 bg-white text-gray-800">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-md shadow-sm bg-white p-4"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-center w-full font-medium text-left"
            >
              <span className="text-md text-gray-900">{faq.question}</span>
              <span>{openIndex === idx ? "?" : "+"}</span>
            </button>
            {openIndex === idx && (
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
