import Hero from "./components/heroSection"
import FaqSection from "./components/FaqSection";
import ReviewsSection from "./components/ReviewSection";
// app/page.tsx
export default function Home() {
  return (
    <main>
      <Hero/>
      <ReviewsSection/>
      <FaqSection/>
      
    </main>
  );
}
