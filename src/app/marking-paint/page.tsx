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
import { alsoAvailablePaint, media, paintLines, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.markingPaint);

export default function MarkingPaintPage() {
  return (
    <>
      <Section className="pb-10">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Soppec</Eyebrow>
              <Heading as="h1" className="mt-3">
                Soppec marking paint
              </Heading>
              <Prose className="mt-6">
                <p>
                  MB1Call supplies premium marking paint for construction,
                  surveying, and utility teams across Canada. Fluorescent and
                  standard inverted paints, including Fluo TP, Pro Marker, and
                  Ideal Spray 360°.
                </p>
                <p>
                  The patented TP safety cap is the reason crews stick with
                  Soppec: rugged protection and drip-free application. Formulas
                  are sold for grass, pavement, gravel, concrete, and wood.
                  Manufacturer sheets are linked below; we do not add claims that
                  are not on those sheets or the live catalog.
                </p>
              </Prose>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.jotforms.order} external>
                  Place an order
                </ButtonLink>
                <ButtonLink href="/price-list" variant="outline">
                  Price list
                </ButtonLink>
                <ButtonLink href={site.soppec} variant="outline" external>
                  Soppec
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-3xl bg-cream p-8 ring-1 ring-line card-shadow">
              <Image
                src={media.allCans}
                alt="Soppec Fluo TP, Pro Marker, Ideal Spray, and related cans"
                width={800}
                height={800}
                className="mx-auto h-auto w-full max-w-md object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {paintLines.map((line, index) => (
        <Section
          key={line.slug}
          id={line.slug}
          className={index % 2 === 0 ? "bg-paper-2" : ""}
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Eyebrow>{line.kind}</Eyebrow>
                <Heading as="h2" className="mt-3">
                  {line.name}
                </Heading>
                <Prose className="mt-5">
                  <p>{line.summary}</p>
                </Prose>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-ink-3">
                  {line.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <ColorDots colors={line.colors} />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={line.sheetHref} variant="outline" external>
                    {line.sheetLabel}
                  </ButtonLink>
                  <ButtonLink href={site.jotforms.order} size="sm" external>
                    Order this line
                  </ButtonLink>
                </div>
              </div>
              <div className="rounded-3xl bg-cream p-8 ring-1 ring-line card-shadow">
                <Image
                  src={line.image}
                  alt={line.imageAlt}
                  width={600}
                  height={900}
                  className="mx-auto h-80 w-auto object-contain"
                />
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container>
          <Eyebrow>Also available</Eyebrow>
          <Heading className="mt-3">Other Soppec lines—ask</Heading>
          <p className="mt-4 max-w-2xl text-ink-3">
            These appear on the {site.priceList.dated} retail sheet or the order
            form. They are not given full catalog pages here. If you need them,
            say so on the order or information request.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {alsoAvailablePaint.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-cream px-4 py-3 text-sm font-medium ring-1 ring-line"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand
        title="Need a colour or a pallet mix?"
        body="Fluo TP, Pro Marker, Ideal Spray, wands, and the PDF-only lines can go on one order request."
      />
    </>
  );
}
