import type { Metadata } from "next";
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

        <div className="mx-auto max-w-[90rem] bg-muted/45 p-2 sm:p-4 lg:p-6">
          <iframe
            src={`${portfolio.resumeHref}#view=FitH`}
            title="TJ Gribbin résumé"
            className="resume-frame block h-[calc(100svh-17rem)] min-h-[42rem] w-full border-0 bg-neutral-200"
          />
        </div>
      </main>
    </>
  );
}
