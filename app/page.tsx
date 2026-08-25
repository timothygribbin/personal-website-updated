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
}: {
  href: string;
  label: string;
  external?: boolean;
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
        buttonVariants({ variant: "outline" }),
        "h-12 rounded-full px-6 text-lg",
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
        <section className="page-grid py-16 md:py-20 lg:py-24">
          <div className="lg:col-span-12">
            <p className="eyebrow">
              <span className="inline-block size-2 rounded-full bg-[var(--signal)]" />
              Software engineer · New York / Boston
            </p>
            <h1 className="mt-9 text-[clamp(4.5rem,9.5vw,12rem)] font-semibold leading-[0.84] tracking-[-0.075em] sm:whitespace-nowrap">
              TJ Gribbin
            </h1>
            <p className="mt-9 text-[clamp(1.65rem,2.3vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.035em] text-foreground/80">
              Software Engineer <span className="text-muted-foreground">/</span>{" "}
              Computer Science @ Northeastern University
            </p>
          </div>

          <div className="mt-12 lg:col-span-8 lg:mt-14 lg:pr-[4vw]">
            <p className="max-w-6xl text-xl leading-9 text-muted-foreground lg:text-2xl lg:leading-10">
              {portfolio.introduction}
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-end lg:col-span-4 lg:mt-14 lg:items-end">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {portfolio.heroLinks.map((link) => (
                <ActionLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <dl className="mt-16 grid bg-muted/40 px-6 sm:grid-cols-2 lg:col-span-12 lg:mt-20 lg:grid-cols-4 lg:px-8">
            {[
              ["Education", "Northeastern University"],
              ["Degree", "B.S. Computer Science · 2027"],
              ["Experience", "2 software engineering internships"],
              ["Focus", "Backend · Full-stack"],
            ].map(([term, detail]) => (
              <div
                key={term}
                className="py-6 sm:pr-6 lg:px-7 lg:first:pl-0 lg:last:pr-0"
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

        <section id="experience" className="section-shell scroll-mt-24 bg-muted/20">
          <SectionHeading
            eyebrow="01 / Experience"
            title="Production work, measurable reach."
            description="Engineering experience building full-stack tools, backend integrations, and real-time systems used in production."
          />

          <div className="divide-y divide-border">
            {portfolio.experience.map((role, index) => (
              <article
                key={role.company}
                className="grid gap-7 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
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

          <div className="divide-y divide-border">
            {portfolio.projects.map((project, index) => (
              <article
                key={project.name}
                className="project-row group grid gap-6 py-10 md:grid-cols-12 md:items-start md:gap-8 lg:py-14"
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

        <section className="bg-muted/40">
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
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="eyebrow lg:col-span-4">Suffolk County → Northeastern</p>
            <div className="space-y-7 text-xl leading-[1.6] tracking-[-0.015em] text-foreground/80 lg:col-span-8 lg:text-2xl">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section-shell scroll-mt-24">
          <SectionHeading
            eyebrow="04 / Résumé"
            title="Experience at a glance."
            description="A one-page overview of my education, engineering experience, projects, and technical skills."
          />
          <div className="grid gap-8 bg-muted/40 px-7 py-8 md:grid-cols-12 md:items-center md:px-9 md:py-10">
            <p className="text-lg leading-8 text-muted-foreground md:col-span-8">
              View the résumé in a dedicated reader or download the original PDF.
            </p>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <a
                href="/resume"
                className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-6 text-lg")}
              >
                View résumé <ArrowRight aria-hidden="true" />
              </a>
              <a
                href={portfolio.resumeHref}
                download
                className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-6 text-lg")}
              >
                Download <Download aria-hidden="true" />
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
