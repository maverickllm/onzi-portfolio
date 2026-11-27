import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />

      
      <div id="work">
        <Projects />
      </div>

      <About />

     
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
