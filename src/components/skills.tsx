import { skills } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 border-b border-line bg-cream"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeading index="02" title="핵심 역량" titleId="skills-title" />
        <ul className="border-t border-line">
          {skills.map((skill, index) => (
            <li
              key={skill.name}
              className="grid gap-3 border-b border-line py-7 md:grid-cols-[7rem_minmax(0,16rem)_minmax(0,1fr)] md:items-baseline md:gap-8"
            >
              <span className="font-serif text-sm text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl font-medium tracking-tight">
                {skill.name}
              </h3>
              <p className="leading-7 text-mist">{skill.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
