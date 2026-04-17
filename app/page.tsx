import Hero from "../components/hero";
import Markets from "../components/markets"; 
import Features from "../components/features";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Markets />
      <Features />
      <Footer />
    </main>
  );
}