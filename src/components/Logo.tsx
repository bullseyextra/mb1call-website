import Image from "next/image";
import Link from "next/link";
import { media, site } from "@/lib/site";

export function Logo({
  className = "",
  variant = "lockup",
}: {
  className?: string;
  variant?: "lockup" | "icon";
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
