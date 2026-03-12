import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Product from "@/components/Product";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import Patents from "@/components/Patents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Product />
      <Process />
      <Technology />
      <Patents />
      <Contact />
      <Footer />
    </main>
  );
}
