import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Check, Whatsapp } from "./icons";
import { services, waLink } from "@/lib/content";

export function Services() {
  return (
    <section
      id="servicios"
      className="relative bg-bone-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Modelos de servicio"
          title="Elija el alcance que su proyecto necesita"
          lead="Tres formas de trabajar con nosotros. Todo es cotizable y sin compromiso."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className="h-full">
              <div className="relative flex h-full flex-col rounded-3xl border border-bone-200/80 bg-white/60 p-8 text-ink-900 transition-all duration-300 hover:border-sand-500/30 hover:shadow-card">
                {s.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-sand-500/30 bg-bone-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sand-600">
                    {s.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl text-ink-900">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-stone-600">
                  {s.tagline}
                </p>

                <div className="mt-6">
                  <p className="font-display text-3xl text-ink-900">
                    {s.price}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    {s.priceNote}
                  </p>
                </div>

                <ul className="mt-7 space-y-3">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sand-500/15 text-sand-600">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-ink-800">
                        {inc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                    href={waLink(
                      `Hola ÁUREA, me interesa el plan "${s.name}". ¿Me pueden dar más información y una cotización?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full"
                  >
                    <Whatsapp className="h-4 w-4" /> {s.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-stone-500">
            Los montos son referenciales y se confirman tras una primera
            conversación. La cotización final se entrega en menos de 7 días
            hábiles, sin compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
