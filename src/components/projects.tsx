"use client";

import { useEffect, useId, useRef, useState } from "react";
import { projects, type Project } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const active = projects.find((project) => project.id === activeId) ?? null;
  const activeIndex = projects.findIndex((project) => project.id === activeId);

  function closeDialog() {
    const trigger = triggerRef.current;
    setActiveId(null);
    requestAnimationFrame(() => trigger?.focus());
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 border-b border-line"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeading index="03" title="주요 성과" titleId="projects-title" />
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveId(project.id);
                }}
                className="flex h-full w-full flex-col border border-line bg-paper p-7 text-left transition-colors hover:border-navy hover:bg-white md:p-9"
              >
                <span className="font-serif text-sm text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-2xl leading-snug font-medium tracking-tight md:text-[1.7rem]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm tracking-wide text-navy">{project.role}</p>
                <p className="mt-5 leading-7 text-mist">{project.summary}</p>
                <span className="mt-8 text-sm text-ink">상세 보기</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {active ? (
        <ProjectDialog
          project={active}
          index={activeIndex}
          onClose={closeDialog}
        />
      ) : null}
    </section>
  );
}

type ProjectDialogProps = {
  project: Project;
  index: number;
  onClose: () => void;
};

function ProjectDialog({ project, index, onClose }: ProjectDialogProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-ink/30"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-xl bg-cream px-7 py-8 text-ink shadow-[0_16px_40px_rgba(36,48,68,0.12)] md:px-10 md:py-12"
      >
        <div className="flex items-start justify-between gap-6">
          <p className="font-serif text-sm text-brass">
            {String(index + 1).padStart(2, "0")}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="text-sm text-mist transition-colors hover:text-ink"
          >
            닫기
          </button>
        </div>
        <h2
          id={titleId}
          className="mt-8 font-serif text-3xl leading-snug font-medium tracking-tight"
        >
          {project.title}
        </h2>
        <dl className="mt-8 space-y-6 border-t border-line pt-8">
          <div>
            <dt className="text-xs tracking-[0.18em] text-mist uppercase">역할</dt>
            <dd className="mt-2 text-lg">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.18em] text-mist uppercase">요약</dt>
            <dd className="mt-2 leading-8 text-ink/85">{project.summary}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
