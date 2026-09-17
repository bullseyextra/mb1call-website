import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import {
  Container,
  Eyebrow,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.contact);

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Winnipeg desk</Eyebrow>
        <Heading as="h1" className="mt-3">
          Contact us today
        </Heading>
        <Prose className="mt-6">
          <p>
            Get in touch with MB1Call. We’re here to help you find the right
            marking paint, pin flags, survey stakes, and professional marking
            supplies for the next project.
          </p>
          <p>
            Questions, colour help, or a bulk order—the team replies from the
            shop. We pride ourselves on fast, knowledgeable service. There is no
            online payment on this site.
          </p>
        </Prose>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={site.jotforms.info} external>
            Information request
          </ButtonLink>
          <ButtonLink href={site.jotforms.order} external>
            Make an order
          </ButtonLink>
          <ButtonLink href="/shop" variant="outline">
            Product information
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">We are located at</h2>
            <address className="mt-4 space-y-2 not-italic text-ink-3">
              <p>
                <a
                  href={site.mapUrl}
                  className="font-semibold text-ink hover:text-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.address.line}
                </a>
              </p>
              <p>Hours: {site.hours.display}</p>
              <p>
                <a href={`tel:${site.phoneTel}`} className="hover:text-brand">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-brand">
                  {site.email}
                </a>
              </p>
            </address>
            <p className="mt-6 max-w-md text-sm text-muted">
              Primary email in the header and footer is {site.email}. If you
              still have an older {site.email.replace(".com", ".ca")} address on
              file, it may still reach the same desk—please prefer .com on new
              messages.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl">Send a quick note</h2>
            <p className="mt-2 text-sm text-muted">
              Opens your email app. For line-item quantities and colours, the
              order form is clearer.
            </p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
