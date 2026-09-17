import type { Metadata } from "next";
import {
  Container,
  Eyebrow,
  Heading,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.privacy);

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Eyebrow>Policy</Eyebrow>
        <Heading as="h1" className="mt-3">
          Privacy policy
        </Heading>
        <p className="mt-4 text-sm text-muted">Effective date: July 17, 2026</p>
        <div className="mt-8 space-y-8 text-[1.05rem] leading-relaxed text-ink-3">
          <p>
            This privacy policy applies to the website {site.url.replace("https://", "")}{" "}
            operated by {site.legalName}.
          </p>
          <section>
            <h2 className="font-display text-2xl text-ink">Contact</h2>
            <p className="mt-2">
              Mailing address: {site.address.line}, Canada
              <br />
              Email: {site.email}
              <br />
              Phone: {site.phoneDisplay}
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">
              Information we collect
            </h2>
            <p className="mt-2">
              We may collect personal information when you interact with this
              website, including when you:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Fill out a contact, information, or order-request form</li>
              <li>Email or call us</li>
              <li>Request a price list or product information</li>
            </ul>
            <p className="mt-3">
              That can include your name, email address, phone number, shipping
              address, company name, and any other details you choose to send.
              This site does not run an account, cart, or online payment flow.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">
              How we use your information
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>To respond to inquiries and process order requests</li>
              <li>To ship products you have asked us to supply</li>
              <li>To improve the website and customer service</li>
              <li>
                To send order confirmations, updates, and important notices
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">
              Protection of your information
            </h2>
            <p className="mt-2">
              We use reasonable safeguards, including HTTPS, to protect
              information in transit. Access is limited to people who need it to
              answer you or fill an order. We do not sell, trade, or rent your
              personal information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">
              Sharing of information
            </h2>
            <p className="mt-2">
              We may share information with trusted processors who help run the
              website or forms (for example, form hosting used for order and
              information requests), with shipping partners when you place an
              order, and with authorities when the law requires it. Those
              parties are expected to keep the information confidential.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Cookies</h2>
            <p className="mt-2">
              This marketing site does not depend on advertising cookies. Your
              browser may still store a small amount of technical data needed to
              load pages. You can control cookies in your browser settings.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Third-party links</h2>
            <p className="mt-2">
              Order and information requests currently open on Jotform. Product
              sheets and the price list are PDFs. We are not responsible for the
              privacy practices of those third-party sites. Review their
              policies if you submit information there.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Your rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of personal
              information we hold, and you may withdraw consent where
              applicable. Email {site.email} to make a request.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Changes</h2>
            <p className="mt-2">
              We may update this policy. Changes will be posted on this page
              with a new effective date. Using the website means you agree to
              the policy as posted.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
