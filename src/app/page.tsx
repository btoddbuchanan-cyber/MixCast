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
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Product />
        <Process />
        <Technology />
        <Patents />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MixCast Studios",
            description:
              "Next generation virtual production platform enabling filmmakers to capture real actors inside 3D digital environments in real-time.",
            foundingDate: "2019",
            knowsAbout: [
              "Virtual Production",
              "Real-Time Compositing",
              "Volumetric Capture",
              "Green Screen Technology",
            ],
          }),
        }}
      />
    </>
  );
}
