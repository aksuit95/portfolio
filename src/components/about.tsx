import { about } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-b border-line"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <div>
          <SectionHeading index="01" title="소개" titleId="about-title" />
          <p className="font-serif text-4xl font-medium tracking-tight text-ink md:text-5xl">
            {about.name}
          </p>
          <p className="mt-3 text-sm tracking-[0.18em] text-mist uppercase">
            {about.role}
          </p>
          <p className="mt-8 max-w-xl text-base leading-8 text-ink/80 md:text-lg">
            {about.summary}
          </p>
        </div>
        <div className="lg:pt-28">
          <p className="mb-6 text-xs tracking-[0.22em] text-mist uppercase">
            주요 연혁
          </p>
          <ol className="border-t border-line">
            {about.timeline.map((item) => (
              <li key={item.organization} className="border-b border-line py-7">
                <h3 className="font-serif text-2xl font-medium tracking-tight">
                  {item.organization}
                </h3>
                <p className="mt-2 leading-7 text-mist">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
