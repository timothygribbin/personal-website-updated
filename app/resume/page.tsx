import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Résumé | TJ Gribbin",
  description: "View or download TJ Gribbin's software engineering résumé.",
};

const resumeLinks = [
  { label: "Email TJ Gribbin", href: "mailto:timothyjgribbin@gmail.com", left: "36.2265%", top: "6.5972%", width: "21.1134%", height: "1.5022%" },
  { label: "View TJ Gribbin on GitHub", href: "https://github.com/timothygribbin", left: "58.9077%", top: "6.5972%", width: "5.5330%", height: "1.5022%" },
  { label: "View TJ Gribbin on LinkedIn", href: "https://www.linkedin.com/in/timothy-gribbin/", left: "66.0086%", top: "6.5972%", width: "6.7604%", height: "1.5022%" },
  { label: "View the PITSTOP repository", href: "https://github.com/timothygribbin/Pitstop", left: "23.3927%", top: "65.6702%", width: "15.1139%", height: "1.5022%" },
  { label: "View the HopperHelps repository", href: "https://github.com/Algoltea/hopperhacksx", left: "47.7779%", top: "77.7831%", width: "15.1139%", height: "1.5022%" },
];

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="px-6 py-12 md:px-[5vw] md:py-16">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="size-4" aria-hidden="true" /> Back to portfolio
            </Link>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">Résumé</h1>
          </div>
          <a
            href={portfolio.resumeHref}
            download
            className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-6 text-lg")}
          >
            Download PDF <Download aria-hidden="true" />
          </a>
        </div>

        <div className="mx-auto max-w-[74rem] bg-muted/45 p-2 sm:p-4 lg:p-6">
          <div className="relative mx-auto max-w-[59.6rem] shadow-2xl shadow-black/20">
            <Image
              src="/resume-preview.png"
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
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className="absolute z-10 rounded-sm transition-colors hover:bg-[var(--signal)]/15 focus-visible:bg-[var(--signal)]/20 focus-visible:outline-2 focus-visible:outline-[var(--signal)]"
                style={{ left: link.left, top: link.top, width: link.width, height: link.height }}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
