import { SectionHeading } from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import { featureIcons } from "./icons";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section
      id="diferencia"
      className="relative bg-bone-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Por qué ÁUREA"
          title="Un estándar que muy pocos despachos pueden ofrecer"
          lead="No es un constructor más. Somos un despacho que asume el diseño, la dirección y la construcción bajo un mismo sello de calidad."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = featureIcons[f.icon as keyof typeof featureIcons];
            return (
              <StaggerItem key={f.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-bone-200/80 bg-white/60 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brass-500/40 hover:shadow-card">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brass-300 to-brass-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-brass-500/25 bg-brass-500/10 text-brass-600 transition-all duration-300 group-hover:bg-brass-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink-900">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                    {f.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
