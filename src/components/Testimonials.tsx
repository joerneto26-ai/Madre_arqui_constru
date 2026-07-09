import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { Quote, Star } from "./icons";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-forest-950 py-20 text-bone-50 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brass-500/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Reseñas verificadas"
          title="La opinión de quienes confiaron en ÁUREA"
          lead="Directores de constructoras, arquitectos y clientes particulares que ya construyeron con nosotros."
        />

        <Reveal delay={0.2}>
          <div className="mx-auto mt-6 flex w-fit items-center gap-2.5 rounded-full glass-dark px-4 py-2">
            <div className="flex text-brass-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="text-sm text-bone-100/90">
              <strong className="font-semibold text-bone-50">4.9/5</strong> ·
              +120 reseñas verificadas
            </span>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="group relative h-full overflow-hidden rounded-2xl glass-dark p-7 transition-colors duration-300 hover:border-brass-400/30">
                <Quote className="h-8 w-8 text-brass-400/50" />
                <div className="mt-3 flex gap-0.5 text-brass-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.98rem] leading-relaxed text-bone-100/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <img
                    src={t.avatar}
                    alt=""
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-brass-400/30"
                  />
                  <div>
                    <p className="font-medium text-bone-50">{t.name}</p>
                    <p className="text-xs text-bone-200/70">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
