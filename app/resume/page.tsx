import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Résumé | TJ Gribbin",
  description: "View or download TJ Gribbin's software engineering résumé.",
};

const resumeLinks = [
  { label: "Visit TJ Gribbin's website", href: "https://tjgribbin.com", left: "21.9%", top: "7.1%", width: "14.6%", height: "1.4%" },
  { label: "Email TJ Gribbin", href: "mailto:timothyjgribbin@gmail.com", left: "37.5%", top: "7.1%", width: "22.8%", height: "1.4%" },
  { label: "View TJ Gribbin on GitHub", href: "https://github.com/timothygribbin", left: "62.3%", top: "7.1%", width: "6.2%", height: "1.4%" },
  { label: "View TJ Gribbin on LinkedIn", href: "https://www.linkedin.com/in/timothy-gribbin/", left: "70.1%", top: "7.1%", width: "7.5%", height: "1.4%" },
  { label: "Visit Scrapper MMA", href: "https://scrappermma.com", left: "6.0%", top: "48.1%", width: "13.1%", height: "1.5%" },
  { label: "View the PITSTOP repository", href: "https://github.com/timothygribbin/Pitstop", left: "23.5%", top: "64.3%", width: "15.2%", height: "1.5%" },
  { label: "View the HopperHelps repository", href: "https://github.com/Algoltea/hopperhacksx", left: "47.8%", top: "77.4%", width: "15.2%", height: "1.5%" },
];

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto w-full max-w-[90rem] px-6 py-12 md:px-[5vw] md:py-16 lg:py-20">
        <div className="mx-auto max-w-[74.5rem]">
          <Link href="/" className="inline-flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to portfolio
          </Link>

          <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--signal)]">
                PDF / One page
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Résumé
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Education, engineering experience, selected projects, and technical skills.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <a
                  href={portfolio.resumeHref}
                  download
                  className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-6 text-lg")}
                >
                  Download PDF <Download aria-hidden="true" />
                </a>
                <a
                  href={portfolio.resumeHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-2 py-2 text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  Open original <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground/75 md:ml-auto md:text-right">
                Preview links open separately. Downloads retain the original formatting.
              </p>
            </div>
          </div>
        </div>

        <section aria-label="Résumé preview" className="mx-auto mt-12 max-w-[78rem] bg-muted/35 p-2 sm:p-4 lg:p-5">
          <div className="relative mx-auto w-full max-w-[74.5rem] shadow-2xl shadow-black/25">
            <Image
              src="/resume-preview-2026-10.png"
              alt="TJ Gribbin's one-page software engineering résumé"
              width={1788}
              height={2526}
              priority
              className="resume-preview h-auto w-full"
            />
            {resumeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={link.label}
                title={link.label}
                className="absolute z-10 rounded-sm transition-colors hover:bg-[var(--signal)]/15 focus-visible:bg-[var(--signal)]/20 focus-visible:outline-2 focus-visible:outline-[var(--signal)]"
                style={{ left: link.left, top: link.top, width: link.width, height: link.height }}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
