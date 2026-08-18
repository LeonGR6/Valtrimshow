import { useEffect } from "react";
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
  useEffect(() => {
    const navigateToHash = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
          : null;
      const section = link?.hash ? document.getElementById(link.hash.slice(1)) : null;
      if (!link || !section) return;

      event.preventDefault();
      if (window.location.hash !== link.hash) window.history.pushState(null, "", link.hash);

      const delay = document.getElementById("mobile-navigation") ? 300 : 0;
      window.setTimeout(() => {
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const top = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
        window.scrollTo(0, Math.max(0, top));
      }, delay);
    };

    document.addEventListener("click", navigateToHash, true);
    return () => document.removeEventListener("click", navigateToHash, true);
  }, []);

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
