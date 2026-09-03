import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site-config";
import { caseStudies } from "@/data/case-studies";

const loc = siteConfig.locationName;

export const metadata: Metadata = {
  title: `${loc} Commercial Mortgage Case Studies | Financial Services Office, Life Sciences, HMO, Hospitality`,
  description: `Real ${loc} commercial mortgage case studies, Edinburgh Park Grade A office investment, Marchmont HMO portfolio refinance, Old Town heritage hotel acquisition, Charlotte Square professional firm freehold, Edinburgh BioQuarter life sciences SME owner-occupier, Leith Walk mixed-use bridge-to-let, Morningside dental owner-occupier, St James Quarter retail tenant refinance, Portobello coastal regen mixed-use and RBS Gogarburn-adjacent office investment.`,
  alternates: { canonical: `https://${siteConfig.domain}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }]} />

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {loc} Commercial Mortgage Case Studies
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              Representative {loc}, Lothians and central-Scotland commercial
              mortgages illustrative of the deals we structure across Scottish financial
              services tenant offices on Lothian Road, Charlotte Square and
              Edinburgh Park, Edinburgh BioQuarter and Roslin life sciences
              SME owner-occupier, Marchmont, Bruntsfield and Southside HMO
              portfolio refinance, Old Town and New Town heritage hospitality,
              St James Quarter and Multrees Walk retail, Leith Walk mixed-use
              along the Trams to Newhaven extension and Portobello coastal
              regen. Product type, lender, pricing, Scottish-security
              architecture and the reason the file landed where it did.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.id} delay={i * 0.05}>
                  <div className="h-full rounded-lg border border-gray-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          {cs.borough}
                        </p>
                        <p className="mt-1 font-heading text-lg font-bold text-primary">
                          {cs.title}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {cs.financeType}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">{cs.schemeType}</p>
                    <p className="mt-5 font-heading text-xl font-bold text-secondary">
                      {cs.loanAmount} facility at {cs.ltv} LTV
                    </p>
                    <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                      {cs.keyStats.slice(0, 4).map((stat) => (
                        <li key={stat.label} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-secondary" />
                          <span>
                            <strong>{stat.label}:</strong> {stat.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 border-t border-gray-100 pt-3 text-[11px] uppercase tracking-wider text-gray-400">
                      Illustrative example &mdash; not a completed transaction
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="mt-8 text-xs text-gray-500">
              These case studies are illustrative examples built from typical deal structures and are not records of specific completed transactions. Names and identifying detail are composite and anonymised. Lender
              attributions reflect appetite active on the panel within the past 24 months.
              Standard security under the Conveyancing and Feudal Reform
              (Scotland) Act 1970, registered with Registers of Scotland on
              every Scottish file.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Want us to package your {loc} commercial mortgage?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            No cost for the initial assessment. Indicative terms in 48 hours.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Indicative Terms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
