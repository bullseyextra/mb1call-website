"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`MB1Call inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl bg-cream p-6 ring-1 ring-line card-shadow"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Company" name="company" autoComplete="organization" />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <label className="block text-sm font-semibold text-ink">
        How can we help?
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-line bg-white px-3 py-2 font-normal text-ink"
        />
      </label>
      <p className="text-sm text-muted">
        This opens an email to {site.email}. No payment is collected on this
        site. For a structured order, use the order form.
      </p>
      <button
        type="submit"
        className="inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Email MB1Call
      </button>
      {status === "opened" ? (
        <p className="text-sm text-ink-3" role="status">
          Your email app should open with the message ready to send.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-2xl border border-line bg-white px-3 py-2 font-normal text-ink"
      />
    </label>
  );
}
