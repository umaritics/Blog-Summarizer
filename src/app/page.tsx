import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main id="top" className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      {/* Placeholder for Famous Blogs */}
      <section
        id="famous-blogs"
        className="h-screen flex items-center justify-center mt-150"
      >
        <h2 className="text-4xl font-semibold">Famous Blogs Coming Soon...</h2>
      </section>

      {/* Placeholder for About Us */}
      <section id="about" className=" flex items-center justify-center">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}
