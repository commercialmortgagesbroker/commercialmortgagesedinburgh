import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { StickyContactCTA } from "@/components/StickyContactCTA";
import { SchemaInjector } from "@/components/SchemaInjector";
import {
  generateFinancialServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const kw = siteConfig.keyword;
const loc = siteConfig.locationName;
const brand = siteConfig.name;

export const metadata: Metadata = {
  title: {
    default: `${brand} | Scottish Capital Commercial Mortgage Broker`,
    template: `%s | ${brand}`,
  },
  description:
    "Specialist commercial mortgage broker for Edinburgh, the Lothians and central Scotland. Financial-services office investment at Edinburgh Park and Lothian Road, life-sciences and laboratory at the Edinburgh BioQuarter, St James Quarter retail, Royal Mile and New Town hospitality, Marchmont and Newington student HMO portfolio refinance. Standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland. LBTT replaces SDLT. 90+ lender panel. Indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.",
  keywords: [
    kw,
    `commercial mortgage broker ${loc}`,
    `${loc} commercial mortgages`,
    `${loc} commercial property finance`,
    `${loc} commercial investment mortgage`,
    `${loc} owner-occupier mortgage`,
    `${loc} semi-commercial mortgage`,
    `${loc} hotel mortgage`,
    `${loc} hmo portfolio mortgage`,
    `${loc} life sciences mortgage`,
    "scotland standard security commercial mortgage",
    "edinburgh park office investment mortgage",
    "edinburgh bioquarter laboratory mortgage",
    "lothians commercial mortgages",
    "scottish commercial finance broker",
  ],
  authors: [{ name: "Matt", url: `https://${siteConfig.domain}/about` }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `https://${siteConfig.domain}`,
    siteName: brand,
    title: `${brand} | Scottish Capital Commercial Mortgage Broker`,
    description:
      "Specialist commercial mortgage broker for Edinburgh, the UK's second-largest financial services centre. Owner-occupier, investment, life-sciences, semi-commercial, HMO portfolio and trading-business commercial mortgages across a 90+ lender panel. Scottish law standard-security architecture. Indicative terms in 48 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: brand,
    description:
      "Specialist Edinburgh commercial mortgage broker. 90+ lender panel, 6.0 to 9.0% pa, 75% max LTV. Standard security under Scots law. Indicative terms in 48 hours.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `https://${siteConfig.domain}` },
};

/** Per-site accent, overrides the default declared in globals.css `@theme`. */
const accentOverride = `:root { --color-accent: ${siteConfig.accent.hex}; }`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: accentOverride }} />
      </head>
      <body className="font-sans antialiased">
        <SchemaInjector schema={generateFinancialServiceSchema()} />
        <SchemaInjector schema={generateLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContactCTA />
        <CookieConsent />
              {/* GHL Chat Widget, populate data-widget-id for Liverpool when GHL widget is provisioned */}
      </body>
    </html>
  );
}
