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
        <section className="flex min-h-[calc(100svh-5rem)] w-full flex-col justify-center px-6 py-20 md:px-[6vw]">
          <div className="w-full max-w-[min(88vw,120rem)]">
            <p className="mb-8 font-mono text-base font-medium uppercase tracking-[0.18em] text-muted-foreground">Software engineer · New York / Boston</p>
            <h1 className="text-balance text-6xl font-semibold leading-[0.86] tracking-[-0.065em] sm:text-8xl md:text-[clamp(8rem,11vw,18rem)]">TJ Gribbin</h1>
            <p className="mt-10 max-w-[70rem] text-balance text-2xl font-medium leading-snug tracking-tight text-foreground/80 sm:text-3xl md:text-[clamp(2rem,2.5vw,4rem)]">Software Engineer <span className="text-muted-foreground">/</span> Computer Science @ Northeastern University</p>
            <p className="mt-8 max-w-5xl text-pretty text-xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10 lg:text-3xl lg:leading-[1.45]">{portfolio.introduction}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {portfolio.heroLinks.map((link, index) => <ActionLink key={link.label} {...link} variant={index === 0 ? "default" : "outline"} />)}
            </div>
          </div>
          <a href="#experience" className="mt-16 inline-flex w-fit items-center gap-2 font-mono text-base uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground lg:mt-20">Selected work <ArrowDown className="size-4" aria-hidden="true" /></a>
        </section>

        <section id="experience" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow="01 / Experience" title="Engineering in practice." description="Professional software engineering experience across advertising technology and tournament software." />
          <div className="divide-y divide-border border-y border-border">
            {portfolio.experience.map((role) => (
              <article key={role.company} className="grid gap-6 py-11 md:grid-cols-[1fr_2fr] md:gap-16 md:py-16">
                <div><h3 className="text-2xl font-semibold tracking-tight lg:text-3xl">{role.company}</h3><p className="mt-2 text-lg text-muted-foreground">{role.role}</p><p className="mt-4 font-mono text-base uppercase tracking-wider text-muted-foreground">{role.dates}</p></div>
                <div><p className="max-w-4xl text-xl leading-9 text-foreground/85">{role.summary}</p><ul className="mt-7 max-w-4xl space-y-4 text-lg leading-8 text-muted-foreground">{role.highlights.map((highlight) => <li key={highlight} className="flex gap-4"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-foreground/60" />{highlight}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow="02 / Projects" title="Selected projects." description="A mix of applied AI, full-stack product work, hackathon building, and computer vision research." />
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {portfolio.projects.map((project, index) => (
              <article key={project.name} className="group flex min-h-[28rem] flex-col bg-background p-8 sm:p-11 lg:min-h-[32rem] lg:p-14">
                <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`} className="rounded-md p-1 text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ArrowUpRight className="size-5" /></a> : <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">Link needed</span>}</div>
                <div className="mt-auto pt-20"><p className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">{project.category}</p><h3 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl">{project.name}</h3><p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground lg:text-xl lg:leading-9">{project.summary}</p><div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-foreground/70">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow="03 / About" title="A nontraditional path into software." />
          <div className="grid gap-10 border-t border-border pt-12 md:grid-cols-[1fr_2fr] md:gap-16"><p className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">Suffolk County → Northeastern</p><div className="max-w-3xl space-y-6 text-xl leading-9 text-foreground/80 lg:text-2xl lg:leading-10">{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </section>

        <section id="resume" className="section-shell scroll-mt-24">
          <div className="rounded-2xl bg-foreground px-8 py-12 text-background sm:px-12 sm:py-16 md:flex md:items-center md:justify-between md:gap-12 lg:px-16 lg:py-20">
            <div><p className="font-mono text-sm uppercase tracking-[0.18em] text-background/60">Résumé</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">The concise version.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-background/65">Experience, education, and technical work in one page.</p></div>
            <div className="mt-7 shrink-0 md:mt-0">{portfolio.resumeHref ? <a className={cn(buttonVariants({ variant: "secondary" }), "h-11 px-5")} href={portfolio.resumeHref} target="_blank">View résumé <Download aria-hidden="true" /></a> : <span className="inline-flex h-11 items-center rounded-lg border border-background/20 px-5 text-sm text-background/60">PDF needed</span>}</div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border"><div className="w-full px-6 py-16 md:flex md:items-end md:justify-between md:px-[6vw]"><div><p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">Let&apos;s connect</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">TJ Gribbin</h2></div><div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base md:mt-0">{portfolio.footerLinks.map((link) => link.href ? <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="text-muted-foreground transition-colors hover:text-foreground">{link.label}</a> : <span key={link.label} className="text-muted-foreground/45" title={`${link.label} link needed`}>{link.label}</span>)}</div></div></footer>
    </>
  );
}
