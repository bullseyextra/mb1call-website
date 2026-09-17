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
import { site, stakeProducts } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.surveyStakes);

export default function SurveyStakesPage() {
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>Wooden lath</Eyebrow>
          <Heading as="h1" className="mt-3">
            Survey stakes
          </Heading>
          <Prose className="mt-6">
            <p>
              MB1Call supplies wooden survey stakes for professional layout
              across Canada. They are sold as high-grade, responsibly sourced
              lath for surveyors, contractors, and construction teams who need
              points that stay put.
            </p>
            <p>
              Lengths and finishes on the current retail sheet are listed below.
              Each starts as a bundle of 50. Pair them with pin flags and
              marking paint for a complete marking setup.
            </p>
          </Prose>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.jotforms.order} external>
              Order stakes
            </ButtonLink>
            <ButtonLink href="/price-list" variant="outline">
              Price list
            </ButtonLink>
          </div>
        </Container>
      </Section>
      <Section className="bg-paper-2 pt-0">
        <Container>
          <h2 className="font-display text-3xl">Our selection</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stakeProducts.map((stake) => (
              <article
                key={stake.name}
                className="overflow-hidden rounded-3xl bg-cream ring-1 ring-line card-shadow"
              >
                <div className="bg-paper-2 p-6">
                  <Image
                    src={stake.image}
                    alt={stake.imageAlt}
                    width={640}
                    height={480}
                    className="mx-auto h-44 w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{stake.name}</h3>
                  <p className="mt-2 text-sm text-ink-3">{stake.spec}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {stake.pack}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Need mixed pallets?"
        body="The retail sheet notes that pallets may contain multiple SKUs. Ask when you order."
      />
    </>
  );
}
