import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [{ label: "Experience", href: "/#experience" }, { label: "Projects", href: "/#projects" }, { label: "About", href: "/#about" }];

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md"><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2">Skip to content</a><div className="flex h-24 w-full items-center justify-between px-6 md:px-[5vw]"><Link href="/" className="font-mono text-xl font-semibold tracking-[-0.03em]">TJ<span className="text-[var(--signal)]">.</span></Link><nav aria-label="Primary navigation" className="hidden items-center gap-10 sm:flex">{navigation.map((item) => <Link key={item.href} href={item.href} className="text-xl text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}<Link href="/#contact" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-6 text-lg")}>Contact</Link></nav><nav aria-label="Mobile navigation" className="flex items-center gap-6 text-lg sm:hidden"><Link href="/#projects" className="text-muted-foreground">Work</Link><Link href="/#contact" className="text-muted-foreground">Contact</Link></nav></div></header>;
}
