import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ColorDots, CtaBand } from "@/components/CategoryCard";
import {
  Container,
  Eyebrow,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { flagSwatches, pinFlagProduct, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.pinFlags);

export default function PinFlagsPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Marking flags</Eyebrow>
              <Heading as="h1" className="mt-3">
                Pin flags for professional marking
              </Heading>
              <Prose className="mt-6">
                <p>
                  MB1Call supplies pin flags for construction, surveying, and
                  utility teams across Canada. They are sold as a high-grade,
                  responsibly sourced option that holds colour in wind, rain,
                  and field use.
                </p>
                <p>
                  The line on the current retail sheet is a {pinFlagProduct.spec}
                  , {pinFlagProduct.pack.toLowerCase()}. Pair them with marking
                  paint and survey stakes for a consistent site.
                </p>
              </Prose>
              <div className="mt-5">
                <ColorDots colors={pinFlagProduct.colors} />
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-ink-3">
                {pinFlagProduct.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.jotforms.order} external>
                  Order flags
                </ButtonLink>
                <ButtonLink href="/price-list" variant="outline">
                  Price list
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-3xl bg-cream p-8 ring-1 ring-line card-shadow">
              <Image
                src={flagSwatches[1].src}
                alt="Orange pin flag"
                width={700}
                height={700}
                className="mx-auto h-80 w-auto object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-paper-2">
        <Container>
          <Eyebrow>Colours</Eyebrow>
          <Heading className="mt-3">Selection of colours</Heading>
          <p className="mt-4 max-w-2xl text-ink-3">
            Six colours are shown on the catalog and the order form. Ask if you
            need a colour that is not listed here.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {flagSwatches.map((flag) => (
              <li
                key={flag.name}
                className="rounded-3xl bg-cream p-4 text-center ring-1 ring-line"
              >
                <Image
                  src={flag.src}
                  alt={`${flag.name} pin flag`}
                  width={320}
                  height={320}
                  className="mx-auto h-36 w-auto object-contain"
                />
                <p className="mt-3 text-sm font-semibold">{flag.name}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand
        title="Flags in bundles of 100"
        body="Tell us colours and how many bundles or cases. We’ll confirm from the Winnipeg shop."
      />
    </>
  );
}
