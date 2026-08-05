import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Carousel,
  type CarouselApi,
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryTriggerRef = useRef<HTMLButtonElement | null>(null);

  const activeProject = activeProjectIndex === null ? null : t.portfolio.items[activeProjectIndex];
  const activeGallery = activeProjectIndex === null ? null : portfolioGalleries[activeProjectIndex];

  useEffect(() => {
    if (!carouselApi) return;

    const updateCurrentSlide = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    updateCurrentSlide();
    carouselApi.on("select", updateCurrentSlide);
    carouselApi.on("reInit", updateCurrentSlide);

    return () => {
      carouselApi.off("select", updateCurrentSlide);
      carouselApi.off("reInit", updateCurrentSlide);
    };
  }, [carouselApi]);

  const openGallery = (index: number) => {
    setActiveProjectIndex(index);
    setCurrentSlide(0);
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

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.items.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              aria-label={`${t.portfolio.openGallery}: ${item.title}`}
              onClick={(event) => {
                galleryTriggerRef.current = event.currentTarget;
                openGallery(i);
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group h-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-md shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/40 dark:shadow-black/30 dark:hover:shadow-black/50 dark:focus-visible:ring-white/30 md:last:col-span-2 md:last:w-[calc(50%-0.75rem)] md:last:justify-self-center lg:last:col-span-1 lg:last:w-full"
            >
              <div className="relative h-[400px] overflow-hidden bg-slate-100 sm:h-[420px] dark:bg-slate-800">
                <img
                  src={portfolioGalleries[i][0]}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6">
                  <div className="min-w-0 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/85">{item.subtitle}</p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition-colors duration-200 group-hover:border-white group-hover:bg-white group-hover:text-slate-950">
                    <Images className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        {activeProject && activeGallery && (
          <DialogContent
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              galleryTriggerRef.current?.focus();
            }}
            className="w-[calc(100%-1rem)] max-w-5xl gap-0 overflow-hidden rounded-2xl border border-white/20 bg-transparent p-0 shadow-2xl sm:w-[calc(100%-2rem)] [&>button]:right-3 [&>button]:top-3 [&>button]:z-30 [&>button]:flex [&>button]:h-11 [&>button]:w-11 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:border [&>button]:border-white/25 [&>button]:bg-black/35 [&>button]:p-0 [&>button]:text-white [&>button]:opacity-100 [&>button]:shadow-md [&>button]:backdrop-blur-md [&>button]:transition-colors [&>button]:duration-200 [&>button:hover]:bg-black/55 [&>button:hover]:opacity-100 [&>button:focus-visible]:ring-2 [&>button:focus-visible]:ring-white [&>button:focus-visible]:ring-offset-2 [&>button:focus-visible]:ring-offset-slate-900 [&>button[data-state=open]]:bg-black/35 [&>button>svg]:h-5 [&>button>svg]:w-5"
          >
            <DialogTitle className="sr-only">{activeProject.title}</DialogTitle>
            <DialogDescription className="sr-only">{activeProject.subtitle}</DialogDescription>
            <Carousel
              key={activeProjectIndex}
              setApi={setCarouselApi}
              opts={{ loop: true }}
              aria-label={`${activeProject.title} gallery`}
              className="bg-black/15 backdrop-blur-sm"
            >
              <CarouselContent className="ml-0">
                {activeGallery.map((image, imageIndex) => (
                  <CarouselItem key={image} className="pl-0">
                    <div className="relative flex h-[56dvh] min-h-[240px] max-h-[680px] w-full items-center justify-center overflow-hidden sm:h-[68dvh]">
                      <div
                        aria-hidden="true"
                        style={{ backgroundImage: `url("${image}")` }}
                        className="absolute inset-0 scale-110 bg-cover bg-center opacity-35 blur-2xl"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-black/45"
                        aria-hidden="true"
                      />
                      <img
                        src={image}
                        alt={`${activeProject.title} — ${t.portfolio.imageLabel} ${imageIndex + 1}`}
                        loading={imageIndex === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="relative z-10 h-full w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Previous image"
                className="left-3 h-11 w-11 border-white/25 bg-black/35 text-white shadow-md backdrop-blur-md hover:bg-black/55 hover:text-white focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40 sm:left-5 sm:h-12 sm:w-12"
              />
              <CarouselNext
                aria-label="Next image"
                className="right-3 h-11 w-11 border-white/25 bg-black/35 text-white shadow-md backdrop-blur-md hover:bg-black/55 hover:text-white focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40 sm:right-5 sm:h-12 sm:w-12"
              />
            </Carousel>

            <div className="flex min-h-16 items-center justify-between gap-4 border-t border-white/15 bg-slate-950/55 px-5 py-4 text-white backdrop-blur-xl">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white sm:text-base">
                  {activeProject.title}
                </p>
                <p className="mt-0.5 text-xs text-white/70">{t.portfolio.openGallery}</p>
              </div>
              <p
                className="shrink-0 text-sm font-medium tabular-nums text-white/90"
                aria-live="polite"
              >
                {currentSlide + 1} <span className="text-white/40">/</span> {activeGallery.length}
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
