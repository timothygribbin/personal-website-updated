export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mb-12 grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12"><p className="pt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p><div><h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{title}</h2>{description && <p className="mt-5 max-w-2xl text-pretty leading-7 text-muted-foreground">{description}</p>}</div></div>;
}
