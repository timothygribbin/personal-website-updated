export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mb-16 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16"><p className="pt-2 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p><div><h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">{title}</h2>{description && <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground lg:text-xl lg:leading-9">{description}</p>}</div></div>;
}
