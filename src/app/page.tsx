import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Product from "@/components/Product";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import Traction from "@/components/Traction";
import Revenue from "@/components/Revenue";
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
        <Problem />
        <Solution />
        <Product />
        <Process />
        <Technology />
        <Traction />
        <Revenue />
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
            url: "https://website-cyan-three-79.vercel.app",
            description:
              "Next generation virtual production platform enabling filmmakers to capture real actors inside 3D digital environments in real-time.",
            foundingDate: "2019",
            numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vancouver",
              addressCountry: "CA",
            },
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
