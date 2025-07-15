
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar'




export default function Home() {
  return (
    <main id="top" className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      
     

      {/* Placeholder for Summarizer */}
      <section id="summarizer" className="h-screen flex items-center justify-center mt-150">
        <h2 className="text-4xl font-semibold">Summarizer Coming Soon...</h2>
      </section>

      {/* Placeholder for About Us */}
      <section id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl font-semibold">About Us Section</h2>
      </section>
    </main>
  );
}






 