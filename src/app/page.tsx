import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />

      
      <div id="work">
        <Projects />
      </div>

     
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
