import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export function CategoryCard({
  href,
  title,
  summary,
  image,
  imageAlt,
}: {
  href: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-cream ring-1 ring-line card-shadow">
      <Link href={href} className="block bg-paper-2 p-6">
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={480}
          className="mx-auto h-44 w-auto object-contain"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-3">
          {summary}
        </p>
        <div className="mt-5">
          <ButtonLink href={href} size="sm" variant="outline">
            View {title.toLowerCase()}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function ColorDots({ colors }: { colors: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Available colours">
      {colors.map((color) => (
        <li
          key={color}
          className="rounded-full bg-paper-2 px-3 py-1 text-xs font-semibold text-ink-3"
        >
          {color}
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-3 text-white/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="primary">
            Inquire
          </ButtonLink>
          <ButtonLink
            href="https://form.jotform.com/261818054816057"
            variant="ghost"
            external
          >
            Place an order
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
