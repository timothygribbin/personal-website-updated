import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [{ label: "Experience", href: "#experience" }, { label: "Projects", href: "#projects" }, { label: "About", href: "#about" }];

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md"><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2">Skip to content</a><div className="flex h-24 w-full items-center justify-between px-6 md:px-[5vw]"><a href="#main-content" className="font-mono text-lg font-semibold tracking-[-0.03em]">TJ<span className="text-[var(--signal)]">.</span></a><nav aria-label="Primary navigation" className="hidden items-center gap-10 sm:flex">{navigation.map((item) => <a key={item.href} href={item.href} className="text-lg text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>)}<a href="#contact" className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5 text-base")}>Contact</a></nav><a href="#projects" className="text-lg text-muted-foreground sm:hidden">Work</a></div></header>;
}
