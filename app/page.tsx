import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function ActionLink({ href, label, external = false, variant = "outline" }: { href: string; label: string; external?: boolean; variant?: "default" | "outline" | "ghost" }) {
  if (!href) return <span className={cn(buttonVariants({ variant }), "h-10 cursor-not-allowed px-4 opacity-45")} title={`${label} link needed`}>{label}</span>;
  return <a className={cn(buttonVariants({ variant }), "h-10 px-4")} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{label}{external && <ArrowUpRight aria-hidden="true" />}</a>;
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl flex-col justify-center px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Software engineer · New York / Boston</p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">TJ Gribbin</h1>
            <p className="mt-7 max-w-3xl text-balance text-xl font-medium leading-snug tracking-tight text-foreground/80 sm:text-2xl">Software Engineer <span className="text-muted-foreground">/</span> Computer Science @ Northeastern University</p>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{portfolio.introduction}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {portfolio.heroLinks.map((link, index) => <ActionLink key={link.label} {...link} variant={index === 0 ? "default" : "outline"} />)}
            </div>
          </div>
          <a href="#experience" className="mt-20 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">Selected work <ArrowDown className="size-3.5" aria-hidden="true" /></a>
        </section>

        <section id="experience" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow="01 / Experience" title="Engineering in practice." description="Professional software engineering experience across advertising technology and tournament software." />
          <div className="divide-y divide-border border-y border-border">
            {portfolio.experience.map((role) => (
              <article key={role.company} className="grid gap-5 py-9 md:grid-cols-[1fr_2fr] md:gap-12 md:py-12">
                <div><h3 className="text-xl font-semibold tracking-tight">{role.company}</h3><p className="mt-1 text-sm text-muted-foreground">{role.role}</p><p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">{role.dates}</p></div>
                <div><p className="max-w-2xl leading-7 text-foreground/80">{role.summary}</p><ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">{role.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/60" />{highlight}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow="02 / Projects" title="Selected projects." description="A mix of applied AI, full-stack product work, hackathon building, and computer vision research." />
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {portfolio.projects.map((project, index) => (
              <article key={project.name} className="group flex min-h-80 flex-col bg-background p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`} className="rounded-md p-1 text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ArrowUpRight className="size-5" /></a> : <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Link needed</span>}</div>
                <div className="mt-auto pt-16"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{project.category}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.name}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{project.summary}</p><div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-foreground/65">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow="03 / About" title="A nontraditional path into software." />
          <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-[1fr_2fr] md:gap-16"><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Suffolk County → Northeastern</p><div className="max-w-2xl space-y-5 text-lg leading-8 text-foreground/80">{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </section>

        <section id="resume" className="section-shell scroll-mt-24">
          <div className="rounded-2xl bg-foreground px-7 py-10 text-background sm:px-10 sm:py-12 md:flex md:items-center md:justify-between md:gap-12">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-background/60">Résumé</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The concise version.</h2><p className="mt-3 max-w-xl leading-7 text-background/65">Experience, education, and technical work in one page.</p></div>
            <div className="mt-7 shrink-0 md:mt-0">{portfolio.resumeHref ? <a className={cn(buttonVariants({ variant: "secondary" }), "h-11 px-5")} href={portfolio.resumeHref} target="_blank">View résumé <Download aria-hidden="true" /></a> : <span className="inline-flex h-11 items-center rounded-lg border border-background/20 px-5 text-sm text-background/60">PDF needed</span>}</div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border"><div className="mx-auto max-w-6xl px-6 py-12 md:flex md:items-end md:justify-between md:px-10 lg:px-12"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Let&apos;s connect</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">TJ Gribbin</h2></div><div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm md:mt-0">{portfolio.footerLinks.map((link) => link.href ? <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="text-muted-foreground transition-colors hover:text-foreground">{link.label}</a> : <span key={link.label} className="text-muted-foreground/45" title={`${link.label} link needed`}>{link.label}</span>)}</div></div></footer>
    </>
  );
}
