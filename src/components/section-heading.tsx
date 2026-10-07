type SectionHeadingProps = {
  index: string;
  title: string;
  titleId: string;
};

export function SectionHeading({ index, title, titleId }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-baseline gap-4 md:mb-16">
      <span className="font-serif text-sm text-brass">{index}</span>
      <h2
        id={titleId}
        className="font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
