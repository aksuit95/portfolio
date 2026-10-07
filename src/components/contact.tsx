"use client";

import { useState } from "react";
import { contact, isHttpUrl, site } from "@/content/portfolio";

export function Contact() {
  const [status, setStatus] = useState("");
  const linkedInIsLink = isHttpUrl(contact.linkedin);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setStatus("이메일 주소가 복사되었습니다.");
    } catch {
      setStatus("복사에 실패했습니다. 주소를 직접 선택해 주세요.");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 bg-cream text-ink"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex items-baseline gap-4 md:mb-16">
          <span className="font-serif text-sm text-brass">04</span>
          <h2
            id="contact-title"
            className="font-serif text-3xl font-medium tracking-tight md:text-4xl"
          >
            연락처
          </h2>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-mist uppercase">Email</p>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-4 max-w-full text-left font-serif text-3xl leading-tight font-medium tracking-tight break-all transition-colors hover:text-brass md:text-5xl"
          >
            <span className="sr-only">이메일 주소 복사 </span>
            {contact.email}
          </button>
          <p className="mt-4 text-sm text-mist">클릭하면 클립보드에 복사됩니다.</p>
          <p role="status" className="mt-2 min-h-6 text-sm text-brass">
            {status}
          </p>
        </div>

        <dl className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
          <div>
            <dt className="text-xs tracking-[0.2em] text-mist uppercase">Phone</dt>
            <dd className="mt-3 text-xl">{contact.phone}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.2em] text-mist uppercase">
              LinkedIn
            </dt>
            <dd className="mt-3 text-xl break-all">
              {linkedInIsLink ? (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-brass"
                >
                  {contact.linkedin}
                </a>
              ) : (
                contact.linkedin
              )}
            </dd>
          </div>
        </dl>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-sm text-mist">
          <span>{site.name}</span>
          <span>{site.role}</span>
        </footer>
      </div>
    </section>
  );
}
