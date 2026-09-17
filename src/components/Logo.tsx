import Image from "next/image";
import Link from "next/link";
import { media, site } from "@/lib/site";

export function Logo({
  className = "",
  variant = "wordmark",
}: {
  className?: string;
  variant?: "wordmark" | "lockup" | "icon";
}) {
  if (variant === "icon") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <Image
          src={media.icon}
          alt={`${site.name} home`}
          width={48}
          height={48}
          className="h-11 w-11 rounded-full object-cover"
          priority
        />
      </Link>
    );
  }

  if (variant === "lockup") {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <Image
          src={media.logo}
          alt={`${site.name} home`}
          width={280}
          height={133}
          className="h-11 w-auto max-w-[210px] object-contain sm:h-12 sm:max-w-[240px]"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src={media.icon}
        alt=""
        width={48}
        height={48}
        className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20"
        priority
      />
      <span className="font-display text-2xl tracking-wide text-white">
        MB<span className="text-brand">1</span>Call
      </span>
      <span className="sr-only">{site.name} home</span>
    </Link>
  );
}
