import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateContactPageSchema, generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { PHONE_NUMBER, EMAIL } from "@/lib/constants";

const loc = siteConfig.locationName;
const phoneDigits = PHONE_NUMBER.replace(/\s/g, "");

export const metadata: Metadata = {
  title: `Contact ${loc} Commercial Mortgages | Free Quote in 48 Hours`,
  description: `Contact ${loc}'s specialist commercial mortgage broker. Free quote within 48 hours across the EH postcode footprint and the wider Lothians and central Scotland. Standard security under Scottish law handled end-to-end. Call ${PHONE_NUMBER} or submit your deal online.`,
  alternates: {
    canonical: `https://${siteConfig.domain}/contact`,
  },
};

const contactFaqs = [
  {
    question: `How quickly will I hear back after contacting ${loc} Commercial Mortgages?`,
    answer: `We respond to all enquiries within 2 hours during business hours (Monday to Friday, 8am to 6pm). Initial deal feedback and indicative terms are typically delivered within 48 hours of receiving full property and trading details. Most ${loc} cases run from first call to indicative terms inside two business days, including confirmation of which lenders on the panel lend cleanly against Scottish security on day one.`,
  },
  {
    question: "What information do you need to give me an indicative quote?",
    answer:
      "At minimum: property address and type (owner-occupier, investment, semi-commercial, trading-business), purchase price or current value, your deposit or existing equity, the rental income or trading EBITDA, and a brief borrower background. For investment deals we also want the lease summary; for owner-occupiers and trading businesses we want the last 2 to 3 years of accounts. Sector-specific evidence helps speed indicative pricing across Edinburgh Park and Lothian Road financial services tenant offices, Edinburgh BioQuarter and Roslin life sciences SME owner-occupier, Marchmont, Bruntsfield, Newington and Southside HMO portfolios with current City of Edinburgh Council HMO licences, Old Town and New Town heritage hospitality, and short-term-let portfolios under the Scottish STL licensing regime.",
  },
  {
    question: "Is there a cost for the initial consultation?",
    answer:
      "No. The initial deal assessment, indicative terms and lender shortlisting are always free. We are only paid by the lender on successful completion of your mortgage. Our fee is included in the arrangement fee shown on the term sheet, no separate broker fee on the vast majority of cases.",
  },
  {
    question: "Do you cover the whole Edinburgh area and the wider Lothians and central Scotland?",
    answer:
      'Yes. The full EH1 to EH17 city footprint (including <a href="/areas/old-town-royal-mile">Old Town and Royal Mile</a>, <a href="/areas/new-town-george-street">New Town, George Street and Charlotte Square</a>, <a href="/areas/leith-newhaven">Leith and Newhaven</a>, <a href="/areas/southside-meadows">Southside and The Meadows</a>, <a href="/areas/morningside-bruntsfield">Morningside and Bruntsfield</a>, <a href="/areas/edinburgh-park-south-gyle">Edinburgh Park and South Gyle</a>, <a href="/areas/edinburgh-bioquarter-little-france">Edinburgh BioQuarter and Little France</a>) plus the wider Lothians and central-Scotland catchment including East Lothian, Midlothian, West Lothian and the Fife coast, all of which sit inside the same regional lender pool.',
  },
  {
    question: "What loan sizes do you work on?",
    answer:
      "Commercial mortgage facilities from £150K to £10M+ across the eight commercial mortgage product lines. Smaller deals below £150K are typically better served by high-street SME products; we can still refer those where appropriate. Larger lots above £5M go to the specialist mid-market and private-credit desks on the panel.",
  },
  {
    question: "How do you handle the Scottish security and legal architecture differently to English deals?",
    answer:
      "We arrange commercial mortgages secured by standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered with Registers of Scotland, with Scottish solicitors handling conveyancing via the missives process. Land and Buildings Transaction Tax (LBTT), administered by Revenue Scotland, replaces Stamp Duty Land Tax with different commercial thresholds. We confirm Scottish-security appetite with each lender on the panel at first call so the shortlist is workable from day one, a small minority of English-headquartered lenders do not lend in Scotland at all and we flag that immediately rather than mid-process.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaInjector schema={generateContactPageSchema()} />
      <SchemaInjector
        schema={generateFAQSchema(
          contactFaqs.map((f) => ({
            question: f.question,
            answer: f.answer.replace(/<[^>]+>/g, ""),
          })),
        )}
      />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Send us your {loc} commercial mortgage enquiry
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              Indicative terms within 48 hours across the EH postcode footprint
              and the wider Lothians and central Scotland. Standard security
              under Scottish law handled end-to-end. No cost for the initial
              assessment. Your deal stays confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact block */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="accent-line mb-4" />
                <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  Deal enquiry
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Tell us about the property and the borrower. We&apos;ll come
                  back to you within 2 business hours to discuss.
                </p>
                <div className="mt-8">
                  <LeadCaptureForm />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <span className="accent-line mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                    Get in touch
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Phone
                      </p>
                      <a
                        href={`tel:${phoneDigits}`}
                        className="text-xl font-bold text-primary hover:text-secondary"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-lg font-bold text-primary hover:text-secondary"
                      >
                        {EMAIL}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Hours
                      </p>
                      <p className="text-base text-gray-700">
                        Monday to Friday, 8am to 6pm
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Coverage
                      </p>
                      <p className="text-base text-gray-700">
                        Full EH1 to EH17 Edinburgh city footprint, wider
                        Lothians and central Scotland including East Lothian,
                        Midlothian, West Lothian and the Fife coast.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <p className="font-heading text-lg font-bold text-primary">
                    Prefer to explore first?
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>
                      &gt; <Link href="/calculator" className="text-secondary hover:underline">Model your repayments</Link> with our commercial mortgage calculator
                    </li>
                    <li>
                      &gt; <Link href="/services" className="text-secondary hover:underline">Review mortgage products</Link> owner-occupier / investment / semi-commercial / portfolio / trading-business
                    </li>
                    <li>
                      &gt; <Link href="/areas" className="text-secondary hover:underline">Browse {loc} areas we cover</Link>
                    </li>
                    <li>
                      &gt; <Link href="/how-it-works" className="text-secondary hover:underline">How the process works</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="accent-line mb-4" />
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
              Contact FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {contactFaqs.map((f) => (
                <div key={f.question} className="rounded-lg border border-gray-200 bg-white p-5">
                  <p className="font-heading text-base font-bold text-primary">
                    {f.question}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: f.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
