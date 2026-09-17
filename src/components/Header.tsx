"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { shopLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const shopId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-1 lg:flex"
        >
          <NavLink href="/" current={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" current={pathname.startsWith("/about")}>
            About
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <div className="flex items-center">
              <Link
                href="/shop"
                className={`rounded-full px-3 py-2 text-sm font-semibold ${
                  pathname.startsWith("/shop") ||
                  pathname.startsWith("/marking-paint") ||
                  pathname.startsWith("/pin-flags") ||
                  pathname.startsWith("/survey-stakes")
                    ? "text-brand"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setShopOpen(false)}
              >
                Shop
              </Link>
              <button
                type="button"
                className="rounded-full p-2 text-white/80 hover:text-white"
                aria-expanded={shopOpen}
                aria-controls={shopId}
                onClick={() => setShopOpen((value) => !value)}
              >
                <span className="sr-only">Shop categories</span>
                <Chevron />
              </button>
            </div>
            {shopOpen ? (
              <ul
                id={shopId}
                className="absolute left-0 top-full z-20 min-w-52 rounded-2xl bg-cream py-2 text-ink shadow-xl ring-1 ring-line"
              >
                {shopLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium hover:bg-brand-soft hover:text-brand"
                      onClick={() => setShopOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <NavLink href="/contact" current={pathname.startsWith("/contact")}>
            Contact
          </NavLink>
        </nav>
        <div className="ml-auto hidden items-center gap-2 lg:ml-6 lg:flex">
          <Link
            href="/price-list"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Price list
          </Link>
          <a
            href={site.jotforms.order}
            className="rounded-full border border-brand bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now
          </a>
        </div>
        <button
          type="button"
          className="ml-auto rounded-full border border-white/20 px-3 py-2 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-ink-2 px-4 py-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            <MobileLink href="/" onNavigate={() => setOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/about" onNavigate={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="/shop" onNavigate={() => setOpen(false)}>
              Shop
            </MobileLink>
            {shopLinks.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                nested
                onNavigate={() => setOpen(false)}
              >
                {item.label}
              </MobileLink>
            ))}
            <MobileLink href="/contact" onNavigate={() => setOpen(false)}>
              Contact
            </MobileLink>
            <MobileLink href="/price-list" onNavigate={() => setOpen(false)}>
              Price list
            </MobileLink>
            <a
              href={site.jotforms.order}
              className="mt-3 rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order now
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold"
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-2 text-sm font-semibold ${
        current ? "text-brand" : "text-white/90 hover:text-white"
      }`}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  nested = false,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  nested?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      className={`rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5 ${nested ? "pl-6 text-white/80" : ""}`}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M5.2 7.5a.75.75 0 0 1 1.06.02L10 11.17l3.74-3.65a.75.75 0 1 1 1.04 1.08l-4.26 4.15a.75.75 0 0 1-1.04 0L5.22 8.6a.75.75 0 0 1-.02-1.1Z" />
    </svg>
  );
}
