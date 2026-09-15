"use client";

import Image from "next/image";
import ApplicationForm from "./ApplicationForm";
import ScrollReveal from "./ScrollReveal";
import StickyCtaBar from "./StickyCtaBar";
import FaqAccordion from "./FaqAccordion";

export default function Home() {
  const curriculum = [
    { week: "01", title: "Your memoir concept", outcome: "Clear premise, audience, and promise" },
    { week: "02", title: "Structure & arc", outcome: "Working chapter outline" },
    { week: "03", title: "Voice & opening", outcome: "One polished sample chapter" },
    { week: "04", title: "Truth & tension", outcome: "Feedback on stakes and emotional engine" },
    { week: "05", title: "Platform & positioning", outcome: "Your author marketing plan" },
    { week: "06", title: "Publishing path", outcome: "Traditional, hybrid, or indie decision" },
  ];

  const faqItems = [
    { question: "Do I need a finished manuscript?", answer: "No. You need a story and a willingness to work. This course builds your proposal from idea to sample chapter." },
    { question: "Will Regina help me find an agent?", answer: "This course teaches you how to position your memoir for agents and editors. It does not guarantee representation." },
    { question: "What if I miss a live session?", answer: "All sessions are recorded and shared with participants." },
    { question: "Is this only for traditional publishing?", answer: "No. We cover traditional, hybrid, and indie paths so you can choose what fits your book." },
    { question: "Why an application?", answer: "This cohort is small and serious. The application helps us make sure the group is right for each other." },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] manuscript-bg pb-20">
      <div className="grain" />

      {/* Header */}
      <header className="fixed top-0 z-40 w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <div className="font-[family-name:var(--font-playfair)] text-base font-semibold tracking-wide text-[var(--accent-gold)] md:text-xl">
            Regina Brooks
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-xs uppercase tracking-widest text-[var(--text-muted)] lg:inline">Memoir Writing Cohort</span>
            <a
              href="#apply"
              className="rounded-full border border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-4 py-2 text-xs font-semibold text-[var(--accent-gold)] transition hover:bg-[var(--accent-gold)] hover:text-[var(--ink)] md:px-5 md:text-sm"
            >
              Apply Now
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-36">
        {/* Hero */}
        <section className="mb-16 md:mb-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-gold)] fade-in-up">
                Founding cohort · 12 writers only
              </div>

              <h1 className="mb-5 font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] text-[var(--text-primary)] md:mb-6 md:text-5xl lg:text-6xl">
                You Have the Story.
                <br />
                Now{" "}
                <span className="gold-underline italic text-[var(--accent-cream)]">Write the Memoir</span>.
              </h1>

              <p className="mb-7 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                A 6-week live course with literary agent Regina Brooks. Build your concept, outline, sample chapter, and publishing path — with agent-level feedback on every step.
              </p>

              <a
                href="#apply"
                className="inline-flex rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-bright)] px-7 py-3.5 text-base font-semibold text-[var(--ink)] shadow-lg shadow-amber-500/25 transition hover:-translate-y-0.5 hover:shadow-xl md:px-8 md:py-4 md:text-lg"
              >
                Apply for the Founding Cohort
              </a>

              <div className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--text-muted)] md:mt-10 md:gap-6 md:text-sm">
                <span className="flex items-center gap-2">
                  <span className="text-[var(--accent-gold)]">✦</span> Founder & CEO, Serendipity Literary Agency
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[var(--accent-gold)]">✦</span> Author, You Should Really Write a Book
                </span>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative w-full max-w-xs md:max-w-sm">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent blur-2xl md:-inset-4"></div>
                <Image
                  src="/regina-brooks.jpg"
                  alt="Regina Brooks"
                  width={360}
                  height={360}
                  className="relative w-full rounded-2xl border border-[var(--accent-gold)]/30 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <ScrollReveal>
          <section className="mb-16 border-y border-[var(--border-color)] bg-[var(--bg-surface)]/50 py-14 md:mb-24 md:py-20">
            <div className="mx-auto max-w-3xl px-2 text-center md:px-0">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">The real problem</p>
              <blockquote className="mb-6 font-[family-name:var(--font-playfair)] text-2xl italic leading-tight text-[var(--text-primary)] md:text-4xl">
                “Most memoir writers never finish — not because they lack talent, but because they lack structure.”
              </blockquote>
              <p className="text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                You have lived the story. This course helps you shape it into a book someone wants to buy.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Who it's for */}
        <ScrollReveal>
          <section className="mb-16 md:mb-24">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">Is this for you?</p>
              <h2 className="mb-10 text-center font-[family-name:var(--font-playfair)] text-3xl text-[var(--text-primary)] md:mb-12 md:text-4xl">This cohort is for writers who...</h2>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Have a personal story that won't leave them alone.",
                  "Have started writing but feel stuck or scattered.",
                  "Want memoir structure, not just templates.",
                  "Are serious enough to invest time, money, and effort.",
                  "Want the real publishing path, not internet myths.",
                  "Are ready to work with a working literary agent.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]/50 p-5 transition hover:border-[var(--accent-gold)]/40 md:p-6"
                  >
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent-gold)]/40 text-sm text-[var(--accent-gold)]">✓</span>
                    <span className="text-[var(--text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Transformation */}
        <ScrollReveal>
          <section className="mb-16 md:mb-24">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">The transformation</p>
              <h2 className="mb-10 text-center font-[family-name:var(--font-playfair)] text-3xl text-[var(--text-primary)] md:mb-12 md:text-4xl">From scattered idea to publishable proposal</h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]/50 p-6 md:p-8">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">Before the cohort</div>
                  <ul className="space-y-3 text-[var(--text-muted)]">
                    <li>A folder of disconnected notes</li>
                    <li>No clear structure or arc</li>
                    <li>Unsure what agents actually want</li>
                    <li>Stuck rewriting the first chapter</li>
                  </ul>
                </div>

                <div className="relative rounded-xl border border-[var(--accent-gold)]/40 bg-gradient-to-br from-[var(--accent-gold)]/10 to-[var(--bg-surface)] p-6 md:p-8">
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-gold)] text-sm font-bold text-[var(--ink)] md:-right-3 md:-top-3">→</div>
                  <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--accent-gold)]">After six weeks</div>
                  <ul className="space-y-3 text-[var(--text-primary)]">
                    <li>A clear memoir concept and audience</li>
                    <li>A working chapter outline</li>
                    <li>A polished sample chapter</li>
                    <li>A publishing path that fits your book</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Curriculum timeline */}
        <ScrollReveal>
          <section className="mb-16 border-y border-[var(--border-color)] bg-[var(--bg-surface)]/50 py-14 md:mb-24 md:py-20">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">The curriculum</p>
              <h2 className="mb-10 text-center font-[family-name:var(--font-playfair)] text-3xl text-[var(--text-primary)] md:mb-12 md:text-4xl">Six weeks. One finished proposal.</h2>

              <div className="space-y-0">
                {curriculum.map((item, i) => (
                  <div key={i} className="group flex items-start gap-4 border-b border-[var(--border-color)] py-5 transition hover:bg-[var(--bg-primary)]/30 md:gap-8 md:py-7"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent-gold)]/30 font-[family-name:var(--font-playfair)] text-base font-semibold text-[var(--accent-gold)] transition group-hover:border-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)] group-hover:text-[var(--ink)] md:h-12 md:w-12 md:text-lg">
                      {item.week}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
                      <p className="text-sm text-[var(--text-muted)] md:text-base">{item.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 text-sm text-[var(--text-muted)] md:mt-10 md:grid-cols-2">
                <span className="flex items-center gap-2">
                  <span className="text-[var(--accent-gold)]">✦</span> Weekly 90-minute live session with Regina
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[var(--accent-gold)]">✦</span> Weekly exercises and templates
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[var(--accent-gold)]">✦</span> Private peer group
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[var(--accent-gold)]">✦</span> Two group office hours
                </span>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Offer box */}
        <ScrollReveal>
          <section className="mb-16 md:mb-24">
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--accent-gold)]/30 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-surface)] p-8 text-center md:p-14">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent-gold)]/10 blur-3xl"></div>
                <div className="relative">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">Founding cohort offer</p>
                  <h2 className="mb-8 font-[family-name:var(--font-playfair)] text-3xl text-[var(--text-primary)] md:mb-10 md:text-4xl">Be one of the first twelve.</h2>

                  <div className="mb-8 grid gap-6 md:mb-10 md:grid-cols-3">
                    <div>
                      <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--accent-gold)] md:text-4xl">$1,295</div>
                      <div className="mt-1 text-sm text-[var(--text-muted)]">Founding price</div>
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--accent-gold)] md:text-4xl">12–15</div>
                      <div className="mt-1 text-sm text-[var(--text-muted)]">Writers only</div>
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--accent-gold)] md:text-4xl">6 weeks</div>
                      <div className="mt-1 text-sm text-[var(--text-muted)]">Live sessions</div>
                    </div>
                  </div>

                  <p className="mx-auto mb-7 max-w-2xl text-[var(--text-muted)] md:mb-8">
                    Founding cohort writers get Regina's closest attention, direct input on the course, and lifetime alumni status. Applications are reviewed personally.
                  </p>

                  <a
                    href="#apply"
                    className="inline-flex rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-bright)] px-7 py-3.5 text-base font-semibold text-[var(--ink)] shadow-lg shadow-amber-500/25 transition hover:-translate-y-0.5 hover:shadow-xl md:px-8 md:py-4 md:text-lg"
                  >
                    Apply for the Founding Cohort
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* About Regina */}
        <ScrollReveal>
          <section className="mb-16 border-y border-[var(--border-color)] bg-[var(--bg-surface)]/50 py-14 md:mb-24 md:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="items-center gap-10 md:flex md:gap-12">
                <div className="mb-8 flex-shrink-0 md:mb-0">
                  <div className="relative mx-auto w-fit md:mx-0">
                    <div className="absolute -inset-3 rounded-2xl bg-[var(--accent-gold)]/10 blur-xl md:-inset-4"></div>
                    <Image
                      src="/regina-brooks.jpg"
                      alt="Regina Brooks"
                      width={280}
                      height={280}
                      className="relative rounded-2xl border border-[var(--accent-gold)]/30 shadow-2xl"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">Your instructor</p>
                  <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-3xl text-[var(--text-primary)] md:mb-5 md:text-4xl">Taught by a working literary agent.</h2>
                  <p className="mb-4 text-[var(--text-muted)]">
                    Regina Brooks is the founder and CEO of Serendipity Literary Agency, the largest African American owned literary agency in the US. She is the author of{" "}
                    <span className="text-[var(--accent-cream)]">You Should Really Write a Book</span>, teaches in the Harvard University publishing program, and has spoken at 20+ writing conferences worldwide.
                  </p>
                  <p className="mb-5 text-[var(--text-muted)]">
                    Her authors have appeared in the New York Times, Washington Post, Oprah, ABC, NBC, CBS, CNN, FOX, and more.
                  </p>
                  <a
                    href="https://www.serendipitylit.com/our_team/regina-brooks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-gold)] transition hover:text-[var(--accent-gold-bright)]"
                  >
                    Visit Serendipity Literary Agency →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <section className="mb-16 md:mb-24">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[var(--accent-gold)]">Questions</p>
              <h2 className="mb-8 text-center font-[family-name:var(--font-playfair)] text-3xl text-[var(--text-primary)] md:mb-10 md:text-4xl">Frequently asked</h2>
              <FaqAccordion items={faqItems} />
            </div>
          </section>
        </ScrollReveal>

        {/* Application */}
        <ScrollReveal>
          <section id="apply" className="mb-12 border-y border-[var(--border-color)] bg-[var(--bg-surface)]/50 py-14 md:mb-16 md:py-20">
            <div className="mx-auto max-w-2xl">
              <div className="mb-10 text-center md:mb-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-gold)]">
                  Step 1 of 1
                </div>
                <h2 className="mb-3 font-[family-name:var(--font-playfair)] text-3xl text-[var(--text-primary)] md:text-4xl">2-minute application.</h2>
                <p className="text-[var(--text-muted)]">Founding cohort applications are open. We review every submission personally.</p>
              </div>

              <ApplicationForm />
            </div>
          </section>
        </ScrollReveal>

        {/* Footer */}
        <footer className="py-8 text-center md:py-10">
          <p className="text-sm text-[var(--text-muted)]">
            Prepared by{" "}
            <a
              href="https://www.brandops.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-gold)] transition hover:text-[var(--accent-gold-bright)]"
            >
              Rajesh Kumar
            </a>
            , Founder of{" "}
            <a
              href="https://www.brandops.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-gold)] transition hover:text-[var(--accent-gold-bright)]"
            >
              BrandOps Site
            </a>
          </p>
        </footer>
      </main>

      <StickyCtaBar />
    </div>
  );
}
