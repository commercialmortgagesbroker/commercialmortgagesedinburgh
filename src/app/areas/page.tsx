import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AreaMap } from "@/components/AreaMap";
import { AreaCard } from "@/components/AreaCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SchemaInjector } from "@/components/SchemaInjector";
import { generateCollectionPageSchema } from "@/lib/schema";
import { AREAS } from "@/lib/constants";
import { AREAS_INDEX_IMAGE, getAreaImage } from "@/data/area-images";
import { homeContent } from "@/data/pages/home-content";
import { siteConfig } from "@/data/site-config";

const loc = siteConfig.locationName;

export const metadata: Metadata = {
  title: `${loc} Areas We Cover | Commercial Mortgages Across Edinburgh and the Lothians`,
  description: `Commercial mortgages across ${AREAS.length} ${loc} commercial sub-markets. From the Old Town and Royal Mile to Charlotte Square, Leith, Edinburgh Park and the Edinburgh BioQuarter, local lender knowledge for every EH postcode.`,
  alternates: { canonical: `https://${siteConfig.domain}/areas` },
};

export default function AreasPage() {
  return (
    <>
      <SchemaInjector
        schema={generateCollectionPageSchema(
          `${loc} Areas We Cover`,
          `Commercial mortgages across ${AREAS.length} sub-markets in Edinburgh and the Lothians. Area-specific lender appetite, valuation context and product mix for financial services tenants, life sciences operators, HMO landlords, hotel operators and trading businesses. Scotland-specific legal architecture (standard security, Registers of Scotland, LBTT) handled end-to-end.`,
          `https://${siteConfig.domain}/areas`,
        )}
      />
      <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas" }]} />

      {/* Hero with image */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-10">
              <Image
                src={`https://images.unsplash.com/photo-${AREAS_INDEX_IMAGE.id}?w=1400&h=600&fit=crop`}
                alt={AREAS_INDEX_IMAGE.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="font-heading text-3xl font-extrabold md:text-4xl lg:text-5xl">
                  {loc} Areas We Cover
                </h1>
                <p className="mt-2 max-w-2xl text-lg text-gray-200">
                  Commercial mortgages across {AREAS.length} sub-markets in Edinburgh and the Lothians
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-gray-700">
                Commercial Mortgages Edinburgh arranges commercial mortgages across the City of Edinburgh Council unitary and the wider Lothians and central Scotland. From <Link href="/areas/new-town-george-street" className="text-secondary hover:underline">Charlotte Square and George Street</Link> premium office, to <Link href="/areas/edinburgh-park-south-gyle" className="text-secondary hover:underline">Edinburgh Park</Link> Parabola business park anchored by Lloyds, abrdn and Diageo, <Link href="/areas/edinburgh-bioquarter-little-france" className="text-secondary hover:underline">Edinburgh BioQuarter</Link> life sciences at Little France, and <Link href="/areas/old-town-royal-mile" className="text-secondary hover:underline">Old Town</Link> heritage hospitality through the Festival season, our team has the local knowledge and lender relationships to secure competitive <Link href="/services" className="text-secondary hover:underline">commercial mortgage</Link> terms for your Edinburgh property.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Edinburgh is Scotland's financial capital and a UNESCO World Heritage city. Four forces shape its commercial property market: a financial services depth anchored by NatWest Group at Gogarburn, Lloyds Banking Group at Lothian Road and abrdn at St Andrew Square and Edinburgh Park; a life sciences cluster at the Edinburgh BioQuarter adjacent to the Royal Infirmary; around 75,000 combined students across the University of Edinburgh, Heriot-Watt and Napier, driving a dense HMO market in Marchmont and Southside; and a Festival hospitality economy attracting 13 million visitors a year through the Old Town and New Town. All commercial mortgages secure under Scottish law as standard securities registered with the Registers of Scotland, with LBTT (Land and Buildings Transaction Tax) replacing SDLT. The area pages below set out which lenders price keenly where.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full map */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <span className="accent-line-center mb-4" />
            <h2 className="text-center font-heading text-2xl font-bold text-primary md:text-3xl">
              {loc} Commercial Property Map
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Explore our coverage across Edinburgh and the Lothians. Each pin marks a sub-market we work in regularly, with notes on lender appetite for owner-occupier, investment, life sciences, hospitality, HMO, semi-commercial and trading-business mortgages in that postcode.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8">
              <AreaMap variant="full" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Area cards grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <span className="accent-line-center mb-4" />
            <h2 className="text-center font-heading text-2xl font-bold text-primary md:text-3xl">
              Key Edinburgh Sub-Markets
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Click any area below to explore local commercial property activity, recent commercial planning applications, named regeneration zones, and the types of commercial mortgage available.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area, index) => (
              <ScrollReveal key={area.slug} delay={index * 0.05}>
                <AreaCard
                  areaName={area.name}
                  description={homeContent.areaDescriptions[area.slug] || ""}
                  recentSchemes={area.activeSchemeCount}
                  linkUrl={`/areas/${area.slug}`}
                  imageId={getAreaImage(area.slug).id}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
