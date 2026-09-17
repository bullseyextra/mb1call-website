import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand disabled:opacity-60";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3 text-base",
};

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark border border-brand",
  dark: "bg-ink text-white border-2 border-brand hover:bg-ink-2",
  outline:
    "border border-ink/15 bg-cream text-ink hover:border-brand hover:text-brand",
  ghost: "text-white border border-white/70 hover:bg-white hover:text-ink",
  cream: "bg-cream text-ink border border-cream hover:bg-white",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
