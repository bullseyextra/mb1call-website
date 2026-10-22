import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ColorDots } from "@/components/CategoryCard";
import {
  Container,
  Eyebrow,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { canonicalUrl, pageMeta, pageSeo } from "@/lib/seo";
import { media, paintLines, site } from "@/lib/site";

const pagePath = pageSeo.whereToBuySoppec.path;
const pageUrl = canonicalUrl(pagePath);
const openingHours = `Mo-Fr ${site.hours.opens}-${site.hours.closes}`;

const linkClass =
  "font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:decoration-brand";

export const metadata: Metadata = pageMeta(pageSeo.whereToBuySoppec);

type FaqSegment = {
  text: string;
  href?: string;
  external?: boolean;
};

type Faq = {
  question: string;
  segments: readonly FaqSegment[];
};

const faqs = [
  {
    question: "Where can I buy Soppec marking paint in Winnipeg?",
    segments: [
      {
        text: `${site.name} sells Soppec marking paint from ${site.address.street}, ${site.address.city}, ${site.address.region} (${site.phoneDisplay}). We are open Monday to Friday, 8 am to 4 pm. You can order with our online request form, by phone or by email at ${site.email}.`,
      },
    ],
  },
  {
    question: "Is Soppec Fluo TP still available in Canada?",
    segments: [
      {
        text: "Yes, MB1Call stocks Soppec Fluo TP in seven fluorescent colours. The colours are pink, red, orange, yellow, blue, green and purple, and we ship across Canada.",
      },
    ],
  },
  {
    question: "Can I pick up my order in Winnipeg?",
    segments: [
      {
        text: `Yes, you can pick up at ${site.address.street}, Monday to Friday, 8 am to 4 pm. Stock is available right away when you pick up.`,
      },
    ],
  },
  {
    question: "Do you deliver across Manitoba and Canada?",
    segments: [
      {
        text: "MB1Call ships Soppec paint across Canada. In the Winnipeg area, orders of 20 cases or fewer can typically be delivered free within two days. Pallet orders are drop-shipped to your door with about a two-week turnaround, and shipping cost depends on order size.",
      },
    ],
  },
  {
    question: "How many cans are in a case?",
    segments: [
      {
        text: "A case of Soppec marking paint holds 12 cans, and a pallet holds 76 cases. The minimum order is one case.",
      },
    ],
  },
  {
    question: "Can I mix colours or lines on a pallet?",
    segments: [
      {
        text: "Yes, pallets may contain multiple SKUs. You can combine colours and lines, and add pin flags or survey stakes.",
      },
    ],
  },
  {
    question: "How do I get pricing or an estimate?",
    segments: [
      {
        text: `Current prices are on ${site.name}'s 2026 retail price list, with lower per-case pricing at 10+ cases, pallet and 5+ pallet levels. See the `,
      },
      { text: "price list", href: "/price-list" },
      {
        text: ". For an estimate that includes shipping, send an ",
      },
      { text: "order request", href: site.jotforms.order, external: true },
      { text: "." },
    ],
  },
  {
    question: "Is MB1Call an authorized Soppec distributor?",
    segments: [
      {
        text: "Yes, MB1Call has been an authorized Soppec distributor since 2024. You can buy Soppec marking paint directly from us in Winnipeg or have it shipped across Canada.",
      },
    ],
  },
] as const satisfies readonly Faq[];

function faqAnswerText(faq: Faq) {
  return faq.segments.map((segment) => segment.text).join("");
}

const carriedLines = [
  {
    slug: "fluo-tp",
    body: "Fluo TP is Soppec's fluorescent inverted marking paint. It comes in seven colours: pink, red, orange, yellow, blue, green and purple. The manufacturer rates it for use down to \u221215\u00B0C, says marks can last up to 12 months depending on conditions, and says marks are visible from more than 50 m.",
  },
  {
    slug: "pro-marker",
    body: "Pro Marker comes in red, yellow, white, black and grey.",
  },
  {
    slug: "ideal-spray-360",
    body: "Ideal Spray 360\u00B0 comes in pink and orange.",
  },
] as const;

const requestLines = [
  {
    name: "Fluo Marker",
    description: "Soppec Fluo Marker for forestry, supplied on request.",
  },
  {
    name: "Line tracer paint",
    description: "Soppec line tracer paint, supplied on request.",
  },
  {
    name: "Galva Zinc",
    description: "Soppec Galva Zinc, supplied on request.",
  },
  {
    name: "RAL Premium Acrylic",
    description: "Soppec RAL Premium Acrylic, supplied on request.",
  },
  {
    name: "Primer",
    description: "Soppec Primer, supplied on request.",
  },
  {
    name: "Duo",
    description: "Soppec Duo, supplied on request.",
  },
  {
    name: "Long and short marking wands",
    description: "Soppec long and short marking wands, supplied on request.",
  },
  {
    name: "Pin flags",
    description:
      'Standard 21" pin flags with a 4\u00D75" flag, in bundles of 100 and cases of 10 bundles. 30" pin flags are available on request.',
  },
  {
    name: "Survey stakes",
    description:
      'Survey stakes in bundles of 50: 48" unpainted, 24" unpainted, and 48" pink-dipped.',
  },
] as const;

function paintLine(slug: (typeof carriedLines)[number]["slug"]) {
  const line = paintLines.find((item) => item.slug === slug);
  if (!line) {
    throw new Error(`Unknown paint line: ${slug}`);
  }
  return line;
}

const catalogItems = [
  ...carriedLines.map((item) => ({
    name: paintLine(item.slug).name,
    description: item.body,
  })),
  ...requestLines,
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Marking paint", path: "/marking-paint" },
  {
    name: "Where to Buy Soppec Marking Paint in Winnipeg and Manitoba",
    path: pagePath,
  },
] as const;

const fulfillment = [
  {
    title: "In-store pickup.",
    body: `Pick up at ${site.address.street}, ${site.address.city}, Monday to Friday, 8 am to 4 pm. Stock is available right away when you pick up.`,
  },
  {
    title: "Local delivery.",
    body: "Orders of 20 cases or fewer can typically be delivered free within two days in the Winnipeg area.",
  },
  {
    title: "Pallet shipping across Canada.",
    body: "Pallet orders are drop-shipped to your door anywhere in Canada, with a turnaround of about two weeks. Shipping cost depends on order size, and we include it in your estimate.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": `${pageUrl}#store`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      telephone: site.phoneTel,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postal,
        addressCountry: "CA",
      },
      openingHours,
      areaServed: {
        "@type": "Country",
        name: site.address.country,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soppec marking paint",
        itemListElement: catalogItems.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: item.name,
            description: item.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faqAnswerText(faq),
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: canonicalUrl(crumb.path),
      })),
    },
  ],
};

function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={linkClass}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

function FaqAnswer({ faq }: { faq: Faq }) {
  return (
    <>
      {faq.segments.map((segment) =>
        segment.href ? (
          <TextLink
            key={`${faq.question}-${segment.text}`}
            href={segment.href}
            external={segment.external}
          >
            {segment.text}
          </TextLink>
        ) : (
          <span key={`${faq.question}-${segment.text}`}>{segment.text}</span>
        ),
      )}
    </>
  );
}

function OrderActions({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <ButtonLink href={site.jotforms.order} external>
        Send an order request
      </ButtonLink>
      <ButtonLink
        href={`tel:${site.phoneTel}`}
        variant={onDark ? "ghost" : "outline"}
        external
      >
        Call the Winnipeg desk {site.phoneDisplay}
      </ButtonLink>
      <ButtonLink
        href={site.priceList.href}
        variant={onDark ? "ghost" : "outline"}
        external
      >
        Download the 2026 price list
      </ButtonLink>
    </div>
  );
}

export default function WhereToBuySoppecPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Section className="pb-10">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {last ? (
                      <span className="text-ink" aria-current="page">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link href={crumb.path} className="hover:text-brand">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Winnipeg supplier</Eyebrow>
              <Heading as="h1" className="mt-3 text-balance">
                Where to Buy Soppec Marking Paint in Winnipeg and Manitoba
              </Heading>
              <Prose className="mt-6">
                <p>
                  {site.name} sells Soppec marking paint from{" "}
                  {site.address.street} in {site.address.city},{" "}
                  {site.address.region} {site.address.postal}. We have been an
                  authorized Soppec distributor since 2024. To order, send an
                  order request, call {site.phoneDisplay} or email {site.email},
                  Monday to Friday, 8 am to 4 pm. You can pick up in store,
                  get local delivery or have it shipped across Canada.
                </p>
                <p>
                  We keep plenty of inventory in every colour we carry. The
                  minimum order is one case.
                </p>
              </Prose>
              <div className="mt-8">
                <OrderActions />
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

      <Section className="bg-paper-2">
        <Container>
          <Eyebrow>Soppec</Eyebrow>
          <Heading className="mt-3">Soppec lines we carry</Heading>
          <Prose className="mt-5">
            <p>
              Every can uses Soppec&apos;s patented TP safety cap. Full details
              are on our{" "}
              <TextLink href="/marking-paint">marking paint page</TextLink>.
            </p>
          </Prose>
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            {carriedLines.map((item) => {
              const line = paintLine(item.slug);
              return (
                <li
                  key={line.slug}
                  className="flex flex-col rounded-3xl bg-cream p-6 ring-1 ring-line card-shadow"
                >
                  <Image
                    src={line.image}
                    alt={line.imageAlt}
                    width={600}
                    height={900}
                    className="mx-auto h-40 w-auto object-contain"
                  />
                  <h3 className="mt-4 font-display text-2xl">{line.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-3">
                    {item.body}
                  </p>
                  <div className="mt-4">
                    <ColorDots colors={line.colors} />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 rounded-3xl bg-cream p-6 ring-1 ring-line">
            <h3 className="font-display text-2xl">
              Other Soppec lines on request
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink-3">
              We can also supply other Soppec products, including Fluo Marker
              for forestry, line tracer paint, Galva Zinc, RAL Premium Acrylic,
              Primer, and Duo, long and short marking wands. Ask us about these
              when you send your request.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-16">
          <div>
            <Heading>Is Soppec Fluo TP still available?</Heading>
            <Prose className="mt-5">
              <p>
                Yes. MB1Call stocks Soppec Fluo TP in all seven fluorescent
                colours, and you can order it today.
              </p>
              <p>
                You can order it by the case for a single crew or by the pallet
                for a full season.
              </p>
            </Prose>
          </div>

          <div>
            <Heading>Buying by the case or pallet</Heading>
            <Prose className="mt-5">
              <p>
                A case of Soppec marking paint holds 12 cans. A pallet holds 76
                cases.
              </p>
              <p>
                The minimum order is one case. Pallets can mix products and
                colours, so one pallet can hold Fluo TP, Pro Marker and Ideal
                Spray 360&deg; together.
              </p>
              <p>
                Pricing is tiered by quantity on a single order: per case, 10
                or more cases, per pallet, and 5 or more pallets. The more you
                order at once, the lower the per-case price.
              </p>
              <p>
                We don&apos;t list prices on this page so they never go out of
                date. Current figures are on the{" "}
                <TextLink href="/price-list">2026 retail price list</TextLink>.
              </p>
            </Prose>
          </div>

          <div>
            <Heading>Pickup or delivery in Winnipeg and Manitoba</Heading>
            <p className="mt-5 text-[1.05rem] text-ink-3">
              You have three ways to get your paint.
            </p>
            <ul className="mt-6 grid gap-4 lg:grid-cols-3">
              {fulfillment.map((option) => (
                <li
                  key={option.title}
                  className="rounded-3xl bg-cream p-6 ring-1 ring-line"
                >
                  <h3 className="font-display text-2xl">{option.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-3">
                    {option.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading>How to order</Heading>
            <Prose className="mt-5">
              <p>We don&apos;t have an online cart. Ordering takes three steps.</p>
            </Prose>
            <ol className="mt-6 max-w-3xl list-decimal space-y-4 pl-5 text-ink-3">
              <li>
                <strong className="text-ink">Choose what you need.</strong> Pick
                the line, colours and number of cases or pallets.
              </li>
              <li>
                <strong className="text-ink">Send your request.</strong> Use the{" "}
                <TextLink href={site.jotforms.order} external>
                  order request form
                </TextLink>
                , call{" "}
                <TextLink href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </TextLink>{" "}
                or email{" "}
                <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>.
              </li>
              <li>
                <strong className="text-ink">Get your estimate.</strong> We
                confirm stock and send an estimate that includes shipping or
                delivery.
              </li>
            </ol>
            <Prose className="mt-6">
              <p>
                If you have questions before you order, use the information
                request form on our{" "}
                <TextLink href="/contact">contact page</TextLink>.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-2">
        <Container>
          <Heading>Add flags and stakes to the same order</Heading>
          <Prose className="mt-5">
            <p>
              You can add them to your paint order and they can share a pallet.
            </p>
            <p>
              <strong className="text-ink">Pin flags</strong> come in the
              standard 21&quot; size, with a 4&times;5&quot; flag, in bundles of
              100 and cases of 10 bundles. We can bring in 30&quot; pin flags
              on request. See <TextLink href="/pin-flags">pin flags</TextLink>.
            </p>
            <p>
              <strong className="text-ink">Survey stakes</strong> come in
              bundles of 50, in three options: 48&quot; unpainted, 24&quot;
              unpainted and 48&quot; pink-dipped. See{" "}
              <TextLink href="/survey-stakes">survey stakes</TextLink>.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>FAQ</Heading>
          <ul className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <li
                key={faq.question}
                className="rounded-3xl bg-cream p-6 ring-1 ring-line"
              >
                <h3 className="font-display text-2xl text-ink">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-ink-3">
                  <FaqAnswer faq={faq} />
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section className="bg-night text-white">
        <Container className="py-14">
          <Heading className="text-white">
            Ready to order Soppec marking paint?
          </Heading>
          <p className="mt-4 max-w-2xl text-white/75">
            Tell us the line, colours and quantity, and we&apos;ll confirm stock
            and send your estimate.
          </p>
          <div className="mt-8">
            <OrderActions onDark />
          </div>
          <address className="mt-10 text-sm not-italic text-white/70">
            {site.legalName}
            {" · "}
            {site.address.line}
            {" · "}
            <a href={`tel:${site.phoneTel}`} className="hover:text-white">
              {site.phoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            {" · "}
            <Link href="/" className="hover:text-white">
              mb1call.ca
            </Link>
          </address>
        </Container>
      </section>
    </>
  );
}
