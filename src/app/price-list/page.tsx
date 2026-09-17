import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import {
  Container,
  Eyebrow,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.priceList);

export default function PriceListPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Retail sheet</Eyebrow>
        <Heading as="h1" className="mt-3">
          Price list
        </Heading>
        <Prose className="mt-6">
          <p>
            Marking-supplies retail prices are published on a one-page PDF dated{" "}
            {site.priceList.dated}. Product pages on this site do not list
            prices so we do not invent or drift from that sheet.
          </p>
          <p>
            The sheet covers Soppec paint lines (including Fluo TP, Pro Marker,
            Ideal Spray, and additional SKUs), marking flags, and wooden survey
            stakes, plus pallet shipping notes. Open the PDF for the current
            numbers.
          </p>
        </Prose>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={site.priceList.href} external>
            Download the {site.priceList.dated} PDF
          </ButtonLink>
          <ButtonLink href={site.jotforms.order} variant="outline" external>
            Order request
          </ButtonLink>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl bg-cream ring-1 ring-line">
          <iframe
            title={site.priceList.label}
            src={`${site.priceList.href}#view=FitH`}
            className="h-[80vh] w-full"
          />
        </div>
      </Container>
    </Section>
  );
}
