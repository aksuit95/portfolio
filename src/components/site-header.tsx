import { navigation, site } from "@/content/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 md:px-10">
        <a href="#top" className="font-serif text-lg tracking-tight text-ink">
          {site.name}
        </a>
        <nav aria-label="페이지 섹션">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mist">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
