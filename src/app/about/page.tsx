import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CategoryCard";
import {
  Container,
  Eyebrow,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { media, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.about);

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Winnipeg</Eyebrow>
              <Heading as="h1" className="mt-3">
                About MB1Call
              </Heading>
              <Prose className="mt-6">
                <p>
                  We’re a no-nonsense crew in Winnipeg that cuts out the markups
                  so you can get premium marking supplies without the corporate
                  price tag. We specialize in Soppec paints—the pro favourite
                  with the patented TP safety cap that won’t break, drip, or
                  make a mess.
                </p>
                <p>
                  These deliver bright, long-lasting fluorescent marks (weeks to
                  years depending on the formula) on pretty much any surface,
                  with low odor compared with older solvent-heavy marking
                  paints. We also carry responsibly sourced, high-grade pin
                  flags and survey stakes at prices that actually make sense.
                </p>
                <p>
                  We keep things simple because hardworking surveyors,
                  contractors, and field crews deserve top gear at fair
                  prices—without the greed. It’s a serious supplies business
                  built on quality and reliability. Grab what you need and get
                  back to work.
                </p>
              </Prose>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Cut the markup", "Real quality", "No corporate greed"].map(
                  (item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-brand-soft px-4 py-3 text-center text-sm font-semibold text-brand-dark"
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-6 font-display text-2xl text-brand">
                {site.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/shop">See our products</ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Contact
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-3xl bg-cream p-6 ring-1 ring-line card-shadow">
              <Image
                src={media.logo}
                alt="MB1Call marking supplies brand lockup"
                width={1200}
                height={568}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Supplies, not services"
        body="MB1Call is the marking-supplies counter. For paint, flags, and stakes, this is the catalog. Call the same Winnipeg number if you already know the desk."
      />
    </>
  );
}
