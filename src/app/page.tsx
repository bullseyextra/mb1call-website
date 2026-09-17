import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CategoryCard, CtaBand } from "@/components/CategoryCard";
import {
  Container,
  Eyebrow,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { categories, media, reasons, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 grid-texture" />
        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <Eyebrow>Winnipeg marking supplies</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              High quality marking paint, pin flags &amp; survey stakes
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              A no-nonsense crew that stocks Soppec paint—the pro favourite with
              the patented TP safety cap—plus responsibly sourced flags and
              stakes. Safe · Sustainable · Superior.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/shop">Browse the catalog</ButtonLink>
              <ButtonLink href={site.jotforms.order} variant="ghost" external>
                Order now
              </ButtonLink>
              <ButtonLink href="/price-list" variant="ghost">
                Price list
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white/5 p-4 ring-1 ring-white/10">
            <Image
              src={media.logo}
              alt="MB1Call marking supplies logo with Soppec paint cans"
              width={1200}
              height={568}
              priority
              className="h-auto w-full rounded-3xl bg-white object-contain"
            />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Three ways to mark a site</Eyebrow>
            <Heading className="mt-3">Paint, flags, and stakes</Heading>
            <p className="mt-4 text-ink-3">
              Pick a category, read the spec, then inquire or send an order
              request. There is no cart or checkout on this site.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                href={category.href}
                title={category.cardTitle}
                summary={category.summary}
                image={category.image}
                imageAlt={category.imageAlt}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-2">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Why MB1Call</Eyebrow>
            <Heading className="mt-3">Why crews call us</Heading>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl bg-cream p-6 ring-1 ring-line"
              >
                <h3 className="font-display text-2xl text-ink">{reason.title}</h3>
                <p className="mt-2 text-ink-3">{reason.body}</p>
              </article>
            ))}
          </div>
          <Prose className="mt-12">
            <p>
              At MB1Call we supply marking paint and professional marking
              solutions used by contractors, surveyors, and utility teams across
              Canada. The job is simple: clear marks, fair prices, and gear that
              shows up when the crew needs it.
            </p>
            <p>
              Our high-quality paint is sold on visibility, quick drying, and
              durability in Canadian weather—fluorescent and standard formulas
              that apply on grass, pavement, gravel, or concrete. Soppec
              positions the TP cap as drip-free and safer to handle than a
              breaking, leaking aerosol.
            </p>
            <p>
              We also carry pin flags, survey stakes, and applicators that work
              with the paint. Fast shipping is available nationwide. For prices,
              use the current retail sheet—not a guess on a product card.
            </p>
          </Prose>
        </Container>
      </Section>

      <CtaBand
        title="Need a pallet, a colour, or a wand?"
        body="Call the Winnipeg desk, email us, or send the order form. We’ll confirm what’s in stock and how it ships."
      />
    </>
  );
}
