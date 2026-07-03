import React from "react";

const SITE_URL = "https://ueniagency.com";
const SITE_LOGO = `${SITE_URL}/new-header-logo.png`;

const Schema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Ueni",
    url: SITE_URL,
    logo: SITE_LOGO,
    description:
      "Ueni is a custom web development and SEO agency specializing in Next.js, React, custom websites, and organic SEO.",
    sameAs: [
      "https://www.linkedin.com/in/ueni-io-b03923410/",
      "https://www.facebook.com/profile.php?id=61589778596884",
      "https://www.instagram.com/ueni.io/",
      "https://x.com/uenidev",
    ],
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#taha-awan`,
      name: "Taha Awan",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "reach.ueni@gmail.com",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Ueni",
    url: SITE_URL,
    description:
      "Ueni builds custom websites, web applications, and SEO-focused digital experiences for modern businesses.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
};

export default Schema;