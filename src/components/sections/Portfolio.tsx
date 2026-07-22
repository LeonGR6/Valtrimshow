import { useState } from "react";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { portfolioGalleries } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function Portfolio() {
  const { t } = useI18n();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const activeProject = activeProjectIndex === null ? null : t.portfolio.items[activeProjectIndex];
  const activeGallery = activeProjectIndex === null ? null : portfolioGalleries[activeProjectIndex];

  const openGallery = (index: number) => {
    setActiveProjectIndex(index);
    setGalleryOpen(true);
  };

  return (
    <section id="portfolio" className="bg-white transition-colors duration-300 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.portfolio.items.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              aria-label={`${t.portfolio.openGallery}: ${item.title}`}
              onClick={() => openGallery(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/50 dark:border-white/10 dark:bg-white/[0.04] dark:focus-visible:ring-white/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={portfolioGalleries[i][0]}
                  alt={item.title}
                  loading="lazy"
                  className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[320px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-300 group-hover:from-black/85" />
                <div className="absolute right-4 top-4 flex translate-y-1 items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <Images className="h-4 w-4" aria-hidden="true" />
                  {t.portfolio.openGallery}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-white/80">{item.subtitle}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        {activeProject && activeGallery && (
          <DialogContent className="w-[calc(100%-1.5rem)] max-w-6xl gap-0 border-0 bg-transparent p-0 shadow-none sm:w-[calc(100%-3rem)] [&>button]:right-4 [&>button]:top-4 [&>button]:z-20 [&>button]:rounded-none [&>button]:bg-transparent [&>button]:p-0 [&>button]:text-white [&>button]:opacity-100 [&>button]:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [&>button]:ring-0 [&>button]:ring-offset-0 [&>button]:transition-all [&>button]:duration-200 [&>button:hover]:scale-110 [&>button:hover]:bg-transparent [&>button:hover]:opacity-75 [&>button:focus]:outline-none [&>button:focus]:ring-0 [&>button:focus]:ring-offset-0 [&>button:focus-visible]:outline-none [&>button:focus-visible]:ring-0 [&>button:focus-visible]:ring-offset-0 [&>button[data-state=open]]:bg-transparent [&>button>svg]:h-6 [&>button>svg]:w-6">
            <DialogTitle className="sr-only">{activeProject.title}</DialogTitle>
            <DialogDescription className="sr-only">{activeProject.subtitle}</DialogDescription>

            <Carousel
              key={activeProjectIndex}
              opts={{ loop: true }}
              className="overflow-hidden rounded-[22px] shadow-2xl"
            >
              <CarouselContent className="ml-0">
                {activeGallery.map((image, imageIndex) => (
                  <CarouselItem key={image} className="pl-0">
                    <img
                      src={image}
                      alt={`${activeProject.title} — ${t.portfolio.imageLabel} ${imageIndex + 1}`}
                      className="h-[58vh] min-h-[280px] w-full object-cover sm:h-[68vh] sm:min-h-[420px]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Previous image"
                className="left-3 h-11 w-11 border-white/25 bg-black/50 text-white hover:bg-black/80 hover:text-white disabled:opacity-40 sm:left-5"
              />
              <CarouselNext
                aria-label="Next image"
                className="right-3 h-11 w-11 border-white/25 bg-black/50 text-white hover:bg-black/80 hover:text-white disabled:opacity-40 sm:right-5"
              />
            </Carousel>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
