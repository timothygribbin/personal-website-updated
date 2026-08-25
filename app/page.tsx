import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function ActionLink({
  href,
  label,
  external = false,
  primary = false,
}: {
  href: string;
  label: string;
  external?: boolean;
  primary?: boolean;
}) {
  if (!href) {
    return (
      <span className="font-mono text-sm text-muted-foreground/50">
        {label} unavailable
      </span>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        buttonVariants({ variant: primary ? "default" : "outline" }),
        "h-11 rounded-full px-5 text-base",
      )}
    >
      {label}
      {external && <ArrowUpRight aria-hidden="true" />}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="page-grid border-b border-border py-16 md:py-20 lg:py-24">
          <div className="lg:col-span-12">
            <p className="eyebrow">
              <span className="inline-block size-2 rounded-full bg-[var(--signal)]" />
              Software engineer · New York / Boston
            </p>
            <h1 className="mt-9 text-[clamp(4.5rem,9.5vw,12rem)] font-semibold leading-[0.84] tracking-[-0.075em] sm:whitespace-nowrap">
              TJ Gribbin
            </h1>
          </div>

          <div className="mt-14 border-t border-border pt-9 lg:col-span-7 lg:mt-16 lg:pr-[4vw]">
            <p className="max-w-[22ch] text-[clamp(2.25rem,3.35vw,4.75rem)] font-medium leading-[1.03] tracking-[-0.05em] text-foreground/88">
              I build dependable software for real people.
            </p>
          </div>

          <div className="mt-10 flex flex-col justify-start lg:col-span-5 lg:mt-16 lg:border-l lg:border-t lg:border-border lg:pl-[4vw] lg:pt-9">
            <p className="max-w-4xl text-xl leading-9 text-muted-foreground lg:text-2xl lg:leading-10">
              {portfolio.introduction}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {portfolio.heroLinks.map((link, index) => (
                <ActionLink key={link.label} {...link} primary={index === 0} />
              ))}
            </div>
          </div>

          <dl className="mt-16 grid border-y border-border sm:grid-cols-2 lg:col-span-12 lg:mt-20 lg:grid-cols-4">
            {[
              ["Education", "Northeastern University"],
              ["Degree", "B.S. Computer Science · 2027"],
              ["Experience", "2 software engineering internships"],
              ["Focus", "Backend · Full-stack"],
            ].map(([term, detail]) => (
              <div
                key={term}
                className="border-b border-border py-6 last:border-b-0 sm:nth-[2]:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:not-last:px-7 lg:first:pl-0"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {term}
                </dt>
                <dd className="mt-2 text-lg font-medium">{detail}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#experience"
            className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground lg:col-span-12"
          >
            Selected work <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </section>

        <section id="experience" className="section-shell scroll-mt-24">
          <SectionHeading
            eyebrow="01 / Experience"
            title="Production work, measurable reach."
            description="Engineering experience building full-stack tools, backend integrations, and real-time systems used in production."
          />

          <div className="border-t border-border">
            {portfolio.experience.map((role, index) => (
              <article
                key={role.company}
                className="grid gap-7 border-b border-border py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
              >
                <p className="font-mono text-sm text-[var(--signal)] lg:col-span-1">
                  0{index + 1}
                </p>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] lg:text-4xl">
                    {role.company}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-muted-foreground">
                    {role.role}
                  </p>
                  <p className="mt-5 font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground">
                    {role.dates}
                  </p>
                </div>
                <div className="lg:col-span-7 lg:pl-[3vw]">
                  <p className="max-w-4xl text-xl font-medium leading-9 text-foreground/85 lg:text-2xl lg:leading-10">
                    {role.summary}
                  </p>
                  <ul className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-muted-foreground">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="grid grid-cols-[1rem_1fr] gap-3">
                        <ArrowRight className="mt-2 size-4 text-[var(--signal)]" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell scroll-mt-24">
          <SectionHeading
            eyebrow="02 / Selected projects"
            title="Built to solve something specific."
            description="Product engineering, applied AI, hackathon work, and computer vision research."
          />

          <div className="border-t border-border">
            {portfolio.projects.map((project, index) => (
              <article
                key={project.name}
                className="project-row group grid gap-6 border-b border-border py-10 md:grid-cols-12 md:items-start md:gap-8 lg:py-14"
              >
                <p className="font-mono text-sm text-muted-foreground md:col-span-1">
                  0{index + 1}
                </p>
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--signal)]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] lg:text-4xl">
                    {project.name}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="max-w-3xl text-lg leading-8 text-muted-foreground lg:text-xl lg:leading-9">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-foreground/65">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start md:col-span-2 md:justify-end">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-base font-medium transition-colors group-hover:text-[var(--signal)]"
                    >
                      View project <ArrowUpRight className="size-4" />
                    </a>
                  ) : (
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/50">
                      Details soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/40">
          <div className="page-grid py-20 md:py-24">
            <div className="lg:col-span-3">
              <p className="eyebrow">Technical toolkit</p>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:col-span-9 lg:mt-0 lg:grid-cols-3">
              {portfolio.skills.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {group.label}
                  </h3>
                  <p className="mt-4 text-xl leading-9">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow="03 / About" title="A path built through momentum." />
          <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-12 lg:gap-8">
            <p className="eyebrow lg:col-span-4">Suffolk County → Northeastern</p>
            <div className="space-y-7 text-xl leading-[1.6] tracking-[-0.015em] text-foreground/80 lg:col-span-8 lg:text-2xl">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="px-6 py-16 md:px-[5vw] md:py-20">
          <div className="grid gap-12 border border-border bg-muted/45 px-8 py-12 text-foreground sm:px-12 sm:py-16 lg:grid-cols-12 lg:items-end lg:px-[5vw] lg:py-20">
            <div className="lg:col-span-8">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--signal)]">
                Résumé / PDF
              </p>
              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                The complete one-page version.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="mb-7 text-lg leading-8 text-muted-foreground">
                Experience, education, projects, and technical skills.
              </p>
              <a
                href={portfolio.resumeHref}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 rounded-full px-6 text-base",
                )}
              >
                View résumé <Download aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border">
        <div className="flex w-full flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-[5vw]">
          <div>
            <p className="eyebrow">Let&apos;s connect</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">TJ Gribbin</h2>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-lg">
            {portfolio.footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
