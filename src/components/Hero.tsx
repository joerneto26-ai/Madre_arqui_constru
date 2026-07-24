import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, Star, Whatsapp } from "./icons";
import { avatarUrl, brand, trustAvatars, waLink } from "@/lib/content";

const HERO_POSTER = "/images/hero-poster.webp";
const HERO_VIDEO_DESKTOP = "/videos/hero-desktop.mp4";
const HERO_VIDEO_MOBILE = "/videos/hero-mobile.mp4";

const WA_MSG =
  "Hola ÁUREA, me gustaría una cotización sin compromiso para mi proyecto en Monterrey.";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData === true;
    if (reduce || saveData) {
      v.autoplay = false;
      v.pause();
      return;
    }
    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    const onInteract = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("scroll", onInteract, true);
    };
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, capture: true });
    return () => {
      v.removeEventListener("canplay", tryPlay);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("scroll", onInteract, true);
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ objectPosition: "65% center" }}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          aria-hidden="true"
        >
          <source
            src={HERO_VIDEO_MOBILE}
            type="video/mp4"
            media="(max-width: 767px)"
          />
          <source src={HERO_VIDEO_DESKTOP} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-forest-950/55 to-forest-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/10 to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-forest-500/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-sage-300/10 blur-3xl animate-float-slow" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
        <Reveal>
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-bone-100/90">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-300" />
            Monterrey, N.L. · Est. {brand.established}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-4xl font-display text-[2.25rem] font-light leading-[1.08] tracking-tight text-bone-50 sm:mt-6 sm:text-6xl lg:text-[4.4rem] lg:leading-[1.05]">
            Diseño y construcción en Monterrey que{" "}
            <span className="font-medium italic text-gradient-brass accent-underline">
              elevan el valor
            </span>{" "}
            de su patrimonio.
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-md text-[0.95rem] leading-snug text-bone-200/90 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-relaxed">
            Arquitectos y constructores en San Pedro Garza García, Cumbres y el
            Área Metropolitana. 18 años entregando residencias, oficinas y
            desarrollos llave en mano con presupuesto cerrado, DRO certificado y
            contrato formal.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center">
            <Button
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              variant="sand"
              size="lg"
              className="shadow-ivory-glow w-full justify-center sm:w-auto"
            >
              <Whatsapp className="h-5 w-5" /> Solicitar cotización
            </Button>
            <Button
              href="#proyectos"
              variant="lightOutline"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              Ver portafolio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-10 sm:gap-x-6 sm:gap-y-3">
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {trustAvatars.map((id) => (
                  <img
                    key={id}
                    src={avatarUrl(id)}
                    alt=""
                    loading="lazy"
                    className="h-9 w-9 rounded-full border-2 border-forest-950/60 object-cover sm:h-10 sm:w-10"
                  />
                ))}
              </div>
              <div className="ml-3 flex flex-col sm:ml-4">
                <div className="flex items-center gap-1 text-sage-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <span className="text-xs text-bone-200/80">
                  +140 proyectos entregados
                </span>
              </div>
            </div>
            <span className="hidden h-8 w-px bg-bone-50/15 sm:block" />
            <span className="text-xs text-bone-200/80 sm:text-sm">
              Respuesta en menos de{" "}
              <span className="font-semibold text-bone-50">24 horas</span> · Sin
              compromiso
            </span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-bone-50/30 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-bone-50/70"
          />
        </div>
      </div>
    </section>
  );
}
