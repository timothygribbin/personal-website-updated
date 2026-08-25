import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [{ label: "Experience", href: "/#experience" }, { label: "Projects", href: "/#projects" }, { label: "About", href: "/#about" }];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="flex min-h-20 w-full flex-col gap-4 px-4 py-4 sm:h-24 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-[5vw]">
        <div className="flex items-center justify-between gap-4 sm:contents">
          <Link
            href="/"
            className="font-mono text-2xl font-semibold tracking-[-0.03em] sm:text-xl"
          >
            TJ<span className="text-[var(--signal)]">.</span>
          </Link>
          <nav aria-label="Mobile navigation" className="flex items-center gap-2 sm:hidden">
            <Link
              href="/#projects"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-10 rounded-full px-4 text-sm text-muted-foreground",
              )}
            >
              Work
            </Link>
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-10 rounded-full px-4 text-sm",
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-10 sm:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 rounded-full px-6 text-lg",
            )}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
