import { hero, site } from "@/content/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-navy-deep text-cream"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-6xl flex-col justify-end px-5 pt-24 pb-14 md:px-10 md:pt-32 md:pb-16">
        <p className="mb-8 text-xs tracking-[0.28em] text-brass uppercase">
          {site.role}
        </p>
        <h1
          id="hero-title"
          className="max-w-[9em] font-serif text-[clamp(2.35rem,5.6vw,5.15rem)] leading-[1.22] font-medium tracking-[-0.035em] text-balance"
        >
          {hero.title}
        </h1>
        <h2 className="mt-8 max-w-xl text-lg leading-relaxed font-normal text-cream/75 md:text-xl">
          {hero.subtitle}
        </h2>
        <div className="mt-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 border border-cream/25 px-6 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-cream hover:text-navy-deep"
          >
            {hero.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-20 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-cream/15 pt-6 text-sm text-cream/65">
          <span>{site.name}</span>
          <span className="hidden h-3 w-px bg-cream/30 sm:block" aria-hidden="true" />
          <span>{site.role}</span>
        </div>
      </div>
    </section>
  );
}
