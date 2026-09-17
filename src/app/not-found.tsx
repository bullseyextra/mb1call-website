import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/LayoutBits";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl">That page is not here</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-3">
        The catalog lives under Shop. If you were looking for a cart or
        checkout, this site does not have one—send an order request instead.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/shop" variant="outline">
          Shop
        </ButtonLink>
      </div>
    </Container>
  );
}
