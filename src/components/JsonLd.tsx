import { categories, site } from "@/lib/site";

export function JsonLd() {
  const businessId = `${site.url}/#business`;
  const websiteId = `${site.url}/#website`;
  const logoUrl = new URL("/media/logos/MB1Call-MarkingPaints.png", site.url).toString();

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": businessId,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        image: [logoUrl],
        logo: logoUrl,
        telephone: site.phoneTel,
        email: site.email,
        slogan: site.tagline,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postal,
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hasMap: site.mapUrl,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: site.hours.opens,
          closes: site.hours.closes,
        },
        areaServed: {
          "@type": "Country",
          name: "Canada",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneTel,
          email: site.email,
          contactType: "sales",
          areaServed: "CA",
          availableLanguage: ["en"],
        },
        knowsAbout: [
          "Marking paint",
          "Soppec Fluo TP",
          "Soppec Pro Marker",
          "Soppec Ideal Spray",
          "Pin flags",
          "Survey stakes",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Marking supplies",
          itemListElement: categories.map((category) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: category.name,
              description: category.summary,
              url: new URL(category.href, site.url).toString(),
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: "en-CA",
        publisher: { "@id": businessId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
