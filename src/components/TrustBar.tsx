import { cn } from "@/utils/cn";
import { Counter } from "./ui/Counter";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { Check } from "./icons";
import { badges, stats } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="relative border-y border-bone-200/70 bg-bone-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="text-center font-display text-xl font-light text-ink-800 sm:text-2xl">
            La confianza se construye proyecto tras proyecto.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem
              key={i}
              className={cn(
                "px-2 text-center sm:px-6",
                i !== 0 && "sm:border-l sm:border-bone-200/70"
              )}
            >
              <div className="font-display text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl">
                <Counter
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                />
              </div>
              <p className="mx-auto mt-2 max-w-[12rem] text-sm leading-snug text-stone-600">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-bone-200/70 pt-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Acreditaciones
            </span>
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 text-sm text-ink-700"
              >
                <Check className="h-4 w-4 text-brass-500" /> {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
