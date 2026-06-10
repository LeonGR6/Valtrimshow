import { ThemeProvider } from "@/lib/theme";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Suppliers } from "@/components/sections/Suppliers";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-[#f5f1ea] text-[#020617] transition-colors duration-300 dark:bg-[#0b1220] dark:text-[#f1f5f9]">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Services />
            <HowWeWork />
            <Portfolio />
            <Testimonials />
            <Suppliers />
            <WhyUs />
            <Contact />
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
