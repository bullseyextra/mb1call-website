import type { Metadata } from "next";
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
import { categories, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.shop);

export default function ShopPage() {
  return (
    <>
      <Section className="pb-8">
        <Container>
          <Eyebrow>Catalog</Eyebrow>
          <Heading as="h1" className="mt-3">
            Marking paint, pin flags &amp; survey stakes
          </Heading>
          <Prose className="mt-6">
            <p>
              Welcome to the MB1Call catalog—professional marking supplies for
              contractors, surveyors, utility crews, and landscapers across
              Canada. This is not an online storefront. Browse the lines, then
              inquire or send an order request.
            </p>
            <p>
              Paint is fluorescent and standard Soppec formulas. Flags and
              stakes are selected for Canadian field work. Prices live on the{" "}
              {site.priceList.dated} retail sheet so we do not invent numbers on
              these pages.
            </p>
          </Prose>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/price-list">Open the price list</ButtonLink>
            <ButtonLink href={site.jotforms.order} variant="outline" external>
              Place an order
            </ButtonLink>
          </div>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                href={category.href}
                title={category.name}
                summary={category.summary}
                image={category.image}
                imageAlt={category.imageAlt}
              />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Ready to mark?"
        body="Tell us the product line, colours, and quantity. We’ll reply from the Winnipeg shop."
      />
    </>
  );
}
