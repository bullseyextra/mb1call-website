import Image from "next/image";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] text-brand ${className}`}
    >
      {children}
    </p>
  );
}

export function Heading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={900}
      priority={priority}
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}

export function MediaSplit({
  imageSrc,
  imageAlt,
  reverse = false,
  children,
  caption,
  imageClassName = "",
}: {
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children: React.ReactNode;
  caption?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <figure className="rounded-3xl bg-cream p-6 ring-1 ring-line card-shadow">
        <Photo src={imageSrc} alt={imageAlt} className={imageClassName} />
        {caption ? (
          <figcaption className="mt-4 text-sm text-muted">{caption}</figcaption>
        ) : null}
      </figure>
      <div>{children}</div>
    </div>
  );
}

export function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-prose space-y-4 text-[1.05rem] leading-relaxed text-ink-3 ${className}`}
    >
      {children}
    </div>
  );
}
