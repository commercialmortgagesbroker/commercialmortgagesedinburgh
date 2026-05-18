/**
 * Editorial flagship: the Edinburgh commercial property market in 2026.
 * Long-form market piece for the head term "Edinburgh commercial
 * property market 2026". Voice: broker-led, first-person plural,
 * no em dashes. Eight bolded lenders only (Shawbrook, InterBay
 * Commercial, LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays,
 * Santander). Scottish legal architecture: standard security under
 * the Conveyancing and Feudal Reform (Scotland) Act 1970 registered
 * with Registers of Scotland, LBTT in place of SDLT, Scottish
 * solicitor missives, Sheriff Court enforcement via calling-up notices.
 * Rates 6.0 to 9.0% pa. Not FCA-authorised (products unregulated).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const siteUrl = `https://${siteConfig.domain}`;
const articleUrl = `${siteUrl}/edinburgh-commercial-property-market`;
const publishDate = "2026-05-18";
const modifiedDate = "2026-05-18";

const scotlandBrokerUrl =
  "https://commercialmortgagesbroker.co.uk/locations/scotland/edinburgh";

const title = "Edinburgh Commercial Property Market 2026";
const description =
  "An editorial read on the Edinburgh commercial property market at mid-2026: the financial services labour shed anchored by NatWest Group at Gogarburn, Lloyds Banking Group on Lothian Road and abrdn at St Andrew Square; the Nuveen St James Quarter retail flagship; the Parabola Edinburgh Park masterplan; the Edinburgh BioQuarter life-sciences cluster at Little France; the Old Town and Royal Mile heritage hospitality spine; the 75,000-student three-university HMO belt across EH9 Marchmont and EH8 Southside; and where commercial mortgage rates sit for Scottish-security deals heading into 2027.";

export const metadata: Metadata = {
  title: `${title} | Commercial Mortgages Edinburgh`,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    siteName: siteConfig.name,
  },
};

// Edinburgh regeneration anchors and commercial-mortgage-relevant
// planning highlights, drawn from the master brief at mid-2026. Each
// entry reflects a publicly-documented commercial-relevant scheme
// or cluster inside the city footprint. The City of Edinburgh
// Council Public Access feed is not yet in the network data lake,
// so these are anchored on the named regeneration schemes rather
// than live application IDs.
const planningHighlights = [
  {
    ref: "St James Quarter, EH1",
    address: "St James Quarter, Nuveen retail-led flagship",
    proposal:
      "The Nuveen flagship retail, leisure and hotel scheme opened June 2021 anchoring the north end of Princes Street. Around 850,000 sq ft of floor plate, the W Edinburgh hotel and residential above. The largest single addition to Edinburgh prime retail this decade.",
  },
  {
    ref: "Edinburgh Park, EH12",
    address: "Edinburgh Park, Parabola office and life-sciences masterplan",
    proposal:
      "The Parabola office, residential and life-sciences masterplan adjacent to Edinburgh Gateway station and the tram line. Anchor tenants include Lloyds Banking Group, abrdn and Diageo. The structural anchor of the out-of-town financial services office cluster.",
  },
  {
    ref: "Edinburgh BioQuarter, EH16",
    address: "Edinburgh BioQuarter, Little France life-sciences campus",
    proposal:
      "The JV between NHS Lothian, the University of Edinburgh, Scottish Enterprise and City of Edinburgh Council at Little France adjacent to the Royal Infirmary. Hosts the MRC Centre for Regenerative Medicine and a deep biotech occupier base. Phase 3 delivery continues through 2026 and 2027.",
  },
  {
    ref: "Quartermile, EH3",
    address: "Quartermile, the former Royal Infirmary mixed-use site",
    proposal:
      "The 19-acre former Royal Infirmary site adjacent to the Meadows. The Edinburgh Futures Institute opened in 2024 as the University of Edinburgh redevelopment of the old Royal Infirmary buildings. Mixed office, residential and ground-floor retail floor plate.",
  },
  {
    ref: "Granton Waterfront, EH5",
    address: "Granton Waterfront regeneration, north coast",
    proposal:
      "The long-running mixed-use regeneration of the north coast plate, with City of Edinburgh Council leading the housing-led masterplan alongside ground-floor commercial plate. A multi-decade delivery programme through 2030 and beyond.",
  },
  {
    ref: "Trams to Newhaven, EH6",
    address: "Trams to Newhaven extension, Leith Walk corridor",
    proposal:
      "The tram extension from York Place to Newhaven opened June 2023, materially shifting commercial yields and retail rents along Leith Walk into Newhaven and the Shore. Class 1a, 2 and 3 conversion application volume has picked up along the corridor.",
  },
  {
    ref: "Fountainbridge, EH3",
    address: "Fountainbridge, former Scottish & Newcastle brewery site",
    proposal:
      "The former Scottish & Newcastle brewery site running phased delivery of office, residential, hotel and ground-floor commercial floor plate adjacent to the Edinburgh Quay canal frontage.",
  },
];

const comparables = [
  {
    headline: "Lothian Road Class E office investment refinance",
    detail:
      "An investor holding a 42,000 sq ft Class E office investment on Lothian Road adjacent to the Lloyds Banking Group headquarters, refinancing off a 2021 five-year fix. Stabilised multi-tenant base on regional professional services and financial services support covenants, standard security on the Land Register of Scotland.",
    terms: "65% LTV · 7.25% pa · 5-year fix · 20-year term · Cynergy Bank",
  },
  {
    headline: "Old Town Royal Mile heritage hotel refinance",
    detail:
      "An independent operator holding a 46-bed heritage hotel freehold on the Royal Mile EH1 footprint refinancing off a 2021 five-year fix. Three years of clean trading accounts through the Festival cycle, with the August Fringe peak and Hogmanay shoulder driving stabilised year-round occupancy.",
    terms: "60% LTV · 7.85% pa · 5-year fix · 20-year term · Santander",
  },
  {
    headline: "Marchmont EH9 large-format student HMO portfolio refinance",
    detail:
      "An investor refinancing five sui generis seven and eight-bedroom HMO freeholds across Marchmont EH9 and Southside EH8 onto a single portfolio loan. Stabilised University of Edinburgh catchment, three years of HMO trading on the Edinburgh licensing regime.",
    terms: "70% LTV · 7.45% pa · 5-year fix · 25-year term · InterBay Commercial",
  },
];

export default function EdinburghCommercialPropertyMarket2026() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          title,
          description,
          articleUrl,
          publishDate,
          modifiedDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          {
            label: "Edinburgh commercial property market 2026",
            href: "/edinburgh-commercial-property-market",
          },
        ]}
      />

      {/* Editorial hero */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Market read &middot; May 2026</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-8 font-editorial text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Edinburgh Commercial Property Market{" "}
                <em className="not-italic text-[color:var(--color-accent)]">
                  2026
                </em>
                .
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
                A working broker read on the Edinburgh commercial
                property market at mid-2026. The financial
                services labour shed anchored by NatWest Group
                at Gogarburn, Lloyds on Lothian Road and abrdn
                at St Andrew Square. The Nuveen St James Quarter
                flagship at the north end of Princes Street. The
                Parabola Edinburgh Park masterplan along the
                western tram corridor. The Edinburgh BioQuarter
                at Little France. The Quartermile redevelopment.
                The Granton Waterfront regeneration. The Trams
                to Newhaven extension. The heritage hospitality
                spine across the Old Town and Royal Mile feeding
                the Festival and Fringe visitor base. The
                75,000-student three-university footprint driving
                the EH9 Marchmont and EH8 Southside HMO belt.
                The lender pool that funds it all under Scottish
                standard security. Where rates sit now and what
                we are watching into 2027.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--color-rule)] py-5 text-sm text-[color:var(--color-muted)]">
                <span>
                  By the desk at{" "}
                  <span className="text-[color:var(--color-ink)]">
                    Commercial Mortgages Edinburgh
                  </span>
                </span>
                <span aria-hidden>&middot;</span>
                <time dateTime={publishDate}>18 May 2026</time>
                <span aria-hidden>&middot;</span>
                <span>22 min read</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TL;DR callout */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                TL;DR
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    01
                  </span>
                  <span>
                    Edinburgh is Scotland&apos;s capital and the
                    second-largest UK financial centre after the
                    City of London. City population sits at
                    roughly{" "}
                    <span className="figure-inline">530,000</span>,
                    with a Lothians travel-to-work area of around{" "}
                    <span className="figure-inline">1.5 million</span>.
                    The economy is anchored by financial services
                    depth, the August Festival and Fringe visitor
                    base, the three-university student footprint
                    and the Edinburgh BioQuarter life-sciences
                    cluster.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    02
                  </span>
                  <span>
                    The financial services labour shed is the
                    deepest in the network outside the City of
                    London. NatWest Group at Gogarburn carries
                    around{" "}
                    <span className="figure-inline">8,000</span>{" "}
                    staff as the registered office of NatWest
                    Group plc. Lloyds Banking Group runs Lothian
                    Road and Edinburgh Park. abrdn anchors the St
                    Andrew Square cluster. The covenant depth
                    underpins prime office rents on Charlotte
                    Square, George Street, Lothian Road and
                    Edinburgh Park.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    03
                  </span>
                  <span>
                    The combined three-university roll sits at
                    around{" "}
                    <span className="figure-inline">75,000</span>{" "}
                    students: University of Edinburgh ~45,000,
                    Heriot-Watt ~10,000 and Edinburgh Napier
                    ~20,000. The EH9 Marchmont belt carries the
                    densest student-let stock, with EH8 Southside
                    picking up the central HMO conversion flow.
                    Edinburgh HMO licensing is materially stricter
                    than England, with licences mandatory at
                    three or more unrelated occupants.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    04
                  </span>
                  <span>
                    The Edinburgh Festival and Fringe drives
                    around{" "}
                    <span className="figure-inline">13 million</span>{" "}
                    visitors a year, peaked through July and
                    August with a secondary Hogmanay peak. The
                    Old Town heritage spine, the Charlotte Square
                    boutique cluster, the Grassmarket and Cowgate
                    late-night flank and the George Street
                    premium hotels including The Balmoral and the
                    Caledonian carry the central hospitality
                    base.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    05
                  </span>
                  <span>
                    St James Quarter, Edinburgh Park, the
                    BioQuarter, Quartermile, Granton Waterfront,
                    the Trams to Newhaven extension and
                    Fountainbridge are the seven anchors of the
                    Edinburgh regeneration spine through to 2027.
                    The St James Quarter (June 2021) and Trams
                    to Newhaven (June 2023) are the two recent
                    capital events that reset central commercial
                    values.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    06
                  </span>
                  <span>
                    Mid-2026 Edinburgh commercial mortgage rates
                    sit at{" "}
                    <span className="figure-inline">6.0 to 9.0%</span>{" "}
                    pa. Prime central office runs 60 to 70
                    percent LTV at the stronger end. Retail and
                    mixed-use across Princes Street, George
                    Street and Multrees Walk runs 60 to 70
                    percent LTV. Old Town hospitality
                    trading-business runs 60 to 70 percent LTV at
                    the higher pricing end. Student HMO on the
                    EH9 and EH8 belt runs 65 to 75 percent LTV.{" "}
                    <strong>Shawbrook</strong>,{" "}
                    <strong>InterBay Commercial</strong>,{" "}
                    <strong>LendInvest</strong>,{" "}
                    <strong>Cynergy Bank</strong>,{" "}
                    <strong>Lloyds</strong>,{" "}
                    <strong>NatWest</strong>,{" "}
                    <strong>Barclays</strong> and{" "}
                    <strong>Santander</strong> are the eight on
                    our active panel, with Clydesdale Bank /
                    Virgin Money UK and Bank of Scotland on the
                    Scottish-presence flank.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    07
                  </span>
                  <span>
                    Every Edinburgh commercial mortgage runs on
                    Scottish legal architecture: a standard
                    security under the Conveyancing and Feudal
                    Reform (Scotland) Act 1970 registered with
                    Registers of Scotland, missives between
                    Scottish solicitors, LBTT in place of SDLT
                    and enforcement through the Sheriff Court
                    using calling-up notices.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats grid, Edinburgh economy */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">The numbers under the market</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                Edinburgh in eight figures.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                The macro backdrop that drives lender appetite.
                Drawn from City of Edinburgh Council, the
                published NatWest Group, Lloyds and abrdn
                employment base, the three-university student
                roll, VisitScotland tourism data, ONS indicators
                and Registers of Scotland house price statistics
                for the EH footprint.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  530K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  City population
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Inside the City of Edinburgh unitary boundary at
                  the latest mid-year estimate. The wider Lothians
                  travel-to-work area runs at around 1.5 million,
                  the labour shed that underpins the city centre
                  office and retail occupier base.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  75K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Combined student roll
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  University of Edinburgh at around 45,000,
                  Heriot-Watt at around 10,000 and Edinburgh
                  Napier at around 20,000. The densest
                  university-driven HMO demand pool in the Scottish
                  network and one of the deepest in the wider
                  network.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  13M
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Visitors a year
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Combined annual visitor count, heavily peaked
                  through the August Festival and Fringe and the
                  secondary Hogmanay peak. The structural driver
                  of Old Town and Royal Mile hospitality
                  trading-business demand.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  &pound;330K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Median res price
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month median across the EH postcode
                  footprint on the Registers of Scotland house
                  price statistics. A proxy for general residential
                  market temperature on a market sitting
                  flat-to-positive year on year.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  3,500
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Res transactions
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Approximate twelve-month residential turnover
                  across the City of Edinburgh footprint. Active
                  churn through the EH3 New Town flatted stock,
                  the EH9 Marchmont tenement belt, the EH6 Leith
                  regeneration corridor and the EH10 Morningside
                  villa belt.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  +1.5%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Year on year
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Year-on-year change in median residential price
                  on the Registers of Scotland series, broadly in
                  line with the wider Scottish market and
                  noticeably steadier than the southern English
                  coastal markets in the network this cycle.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  8,000
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  NatWest Group staff
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Approximate NatWest Group headcount at
                  Gogarburn. Edinburgh is the registered office of
                  NatWest Group plc and one of the structural
                  anchors of the central financial services office
                  rental tone.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  4h 20m
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  By train to London
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  LNER service from Edinburgh Waverley to London
                  Kings Cross on the East Coast Main Line.
                  Edinburgh Airport on the western edge of the
                  city carries the international and domestic
                  air corridor for the financial services
                  occupier base.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
            Sources: City of Edinburgh Council, NatWest Group,
            Lloyds and abrdn employment data, the University of
            Edinburgh, Heriot-Watt and Edinburgh Napier student
            roll, VisitScotland tourism data, ONS sub-national
            indicators, the 2022 Scottish census and Registers
            of Scotland house price statistics for the EH
            footprint.
          </p>
        </div>
      </section>

      {/* Section 1: Edinburgh at a glance */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">01 &middot; Context</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Edinburgh at a glance: Scotland&apos;s capital, the
                second-largest UK financial centre, a 75,000-student
                three-university footprint, the Edinburgh
                BioQuarter life-sciences cluster and a 13 million
                visitor heritage tourism economy.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  This is the working broker read on the Edinburgh
                  commercial property market at mid-2026. We have
                  written it for owner-occupiers and investors
                  across financial services office stock on
                  Charlotte Square, George Street, Lothian Road,
                  St Andrew Square and the Parabola Edinburgh Park
                  masterplan, hospitality operators on the Old
                  Town heritage spine and the New Town premium
                  hotel cluster, investors holding student HMO
                  stock through the EH9 Marchmont and EH8
                  Southside belt, retail and food and beverage
                  operators on the Nuveen St James Quarter and
                  the Princes Street and George Street central
                  spine, life-sciences occupiers watching the
                  Edinburgh BioQuarter at Little France and
                  developer-investors watching the Granton
                  Waterfront, Fountainbridge and Quartermile
                  follow-on lots. The aim is practical: what is
                  happening in each part of the market, where
                  lender appetite sits in 2026, what the rate
                  range is across each product, how the Scottish
                  legal architecture shapes the underwrite and
                  how we read the Edinburgh pipeline through to
                  the end of 2027. The voice is first-person
                  plural because we sit across deals every week.
                  Where we name a lender, it is one of the eight
                  on our active panel that we quote against
                  routinely on Edinburgh deals, with the wider
                  ninety-strong network sitting behind that.
                </p>
                <p>
                  Edinburgh is the capital of Scotland, the seat
                  of the Scottish Government at St Andrew&apos;s
                  House and Victoria Quay, and the second-largest
                  financial centre in the United Kingdom after
                  the City of London. The local authority is
                  City of Edinburgh Council, a unitary covering a
                  population of roughly 530,000, with a wider
                  Lothians travel-to-work area of around 1.5
                  million. Edinburgh sits across the M8 from
                  Glasgow and shares much of its commercial
                  banking covenant book with Glasgow lender
                  desks, but reads quite differently on the
                  ground: less industrial, more financial
                  services head-office, more tourism, more
                  premium retail and more heritage-constrained
                  stock in the Old Town and New Town World
                  Heritage core. Edinburgh Waverley sits on the
                  East Coast Main Line with LNER services to
                  London Kings Cross in around 4 hours 20
                  minutes, and Edinburgh Airport on the western
                  edge of the city sits adjacent to the tram
                  line and the Edinburgh Park employment
                  cluster.
                </p>
                <p>
                  The economy is anchored by four structural
                  pillars. Financial services is the first and
                  most structurally important. NatWest Group has
                  its registered office at Gogarburn on the
                  western flank, carrying around 8,000 staff and
                  the residual Royal Bank of Scotland back-office
                  footprint. Lloyds Banking Group runs the
                  Lothian Road headquarters in the central
                  Exchange district alongside the Edinburgh
                  International Conference Centre, with a major
                  Edinburgh Park plate alongside. abrdn, the
                  rebranded Standard Life Aberdeen, anchors the
                  St Andrew Square cluster. Bank of Scotland, the
                  Scottish brand of Lloyds Banking Group, runs
                  its head office on The Mound. The covenant
                  depth underpins prime office rents on Charlotte
                  Square, George Street, Lothian Road, St Andrew
                  Square and Edinburgh Park, and is the deepest
                  financial services labour shed in our network.
                </p>
                <p>
                  Higher education is the second pillar. The
                  University of Edinburgh carries around 45,000
                  students across the central George Square,
                  Bristo Square, Holyrood Road and King&apos;s
                  Buildings campuses. Heriot-Watt at Riccarton
                  carries around 10,000 students. Edinburgh
                  Napier carries around 20,000 students across
                  Sighthill, Merchiston and Craiglockhart. The
                  combined 75,000 student footprint is the
                  densest university-driven commercial mortgage
                  demand pool in the Scottish network. The EH9
                  Marchmont and Bruntsfield belt carries the
                  densest student-let tenement stock around the
                  University of Edinburgh, with EH8 Southside
                  and Newington picking up the central student
                  HMO flow. Edinburgh HMO licensing is
                  materially stricter than the English Housing
                  Act 2004 default, with licences mandatory at
                  three or more unrelated occupants rather than
                  the English five-plus threshold.
                </p>
                <p>
                  Heritage tourism is the third pillar. The
                  Edinburgh Festival and Fringe in July and
                  August draws around 13 million visitors a year
                  across the combined cultural calendar, with a
                  secondary peak at Hogmanay. The Old Town runs
                  from Edinburgh Castle down the Royal Mile to
                  Holyrood Palace and carries the dominant
                  heritage hospitality spine. The New Town,
                  Charlotte Square, George Street and St Andrew
                  Square carry the premium hotel cluster
                  including The Balmoral, the Waldorf Astoria
                  Caledonian, the Kimpton Charlotte Square and
                  the Gleneagles Townhouse. The Old Town and New
                  Town together form a UNESCO World Heritage
                  site that materially constrains the conversion
                  pipeline. Life sciences is the fourth pillar,
                  anchored by the Edinburgh BioQuarter at Little
                  France adjacent to the Royal Infirmary, the
                  MRC Centre for Regenerative Medicine and the
                  Roslin Innovation Centre south of the city. We
                  pull the threads together in the sector
                  deep-dives below.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The NatWest Group, Lloyds Banking Group and abrdn
                covenant depth, the 75,000-student three-university
                roll, the 13 million annual visitor heritage tourism
                base and the Edinburgh BioQuarter life-sciences
                cluster are the four pillars that lenders read very
                differently to any other Scottish city.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Where the market is in 2026 */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">02 &middot; The 2026 picture</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Where the Edinburgh commercial market sits in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Two and a half years on from the 2023 rate
                  peak, the Edinburgh commercial market has reset
                  around five defining shapes. The financial
                  services office depth across Charlotte Square,
                  George Street, Lothian Road, St Andrew Square
                  and Parabola Edinburgh Park. The heritage
                  retail and Nuveen St James Quarter flagship
                  across the Princes Street spine. The Festival
                  and Fringe hospitality plate across the Old
                  Town, Royal Mile, Grassmarket and George
                  Street. The emerging Edinburgh BioQuarter
                  life-sciences occupier base at Little France.
                  And the three-university 75,000-student HMO
                  belt across EH9 Marchmont, EH8 Southside and
                  the wider Newington and Bruntsfield catchment.
                  Together they produce a commercial market with
                  a structurally deep financial services covenant
                  floor, a heritage tourism ceiling, a
                  regeneration pipeline anchored on three major
                  schemes and a semi-commercial and HMO
                  refinance flow built on the densest Scottish
                  student catchment.
                </p>
                <p>
                  Office is the first defining shape and the
                  structural anchor of the central commercial
                  market. Prime Charlotte Square, St Andrew
                  Square and George Street office investment
                  trades on the deepest financial services
                  covenant pool in the network outside the City
                  of London. The Lothian Road Exchange district
                  carries the Lloyds Banking Group headquarters,
                  the Standard Life building (now abrdn) and the
                  Edinburgh International Conference Centre.
                  Parabola Edinburgh Park on the western tram
                  corridor carries Lloyds, abrdn and Diageo as
                  anchor occupiers. Quartermile picks up the
                  mixed office plate adjacent to the Meadows.
                  Haymarket and the West End pick up the
                  secondary cluster. Lender appetite on prime
                  central and Edinburgh Park investment with
                  strong unexpired sits with the clearing-bank
                  corporate desks; secondary multi-let on the
                  Haymarket and West End flanks sits with the
                  SME challenger panel.
                </p>
                <p>
                  Retail is the second defining shape. The
                  Nuveen St James Quarter flagship opened June
                  2021 at the north end of Princes Street and
                  anchors the central retail plate, carrying the
                  John Lewis anchor, the W Edinburgh hotel and a
                  deep luxury floor plate. Princes Street itself
                  carries the working department store and
                  multiple-retailer spine. George Street carries
                  the premium independent and food and beverage
                  flank. Multrees Walk picks up the luxury
                  cluster with Harvey Nichols, Louis Vuitton and
                  Mulberry. Ocean Terminal at Leith carries the
                  suburban shopping centre anchor, with the
                  Trams to Newhaven extension reshaping the
                  surrounding Leith Walk retail mix since the
                  2023 opening. Morningside and Bruntsfield carry
                  the premium suburban retail and professional
                  services freehold flow. Lender appetite is
                  strongest on the central New Town premium
                  retail with strong unexpired and on the
                  stabilised semi-commercial shop-with-flats
                  archetype.
                </p>
                <p>
                  Hospitality is the third defining shape and the
                  most distinctive feature of the Edinburgh
                  trading-business market. The Festival and
                  Fringe in July and August produces an annual
                  visitor peak materially larger than any other
                  city in our network outside London. The
                  Charlotte Square boutique cluster, George
                  Street premium hotels including The Balmoral
                  and the Waldorf Astoria Caledonian, the
                  Grassmarket and Cowgate late-night corridor and
                  the Leith Shore food and beverage spine carry
                  the wider plate. Lender appetite is steady, with
                  the underwrite split between Festival-peaked
                  seasonal cases and the year-round business
                  tourism base driven by the financial services
                  and conference occupier mix.
                </p>
                <p>
                  Yields across the city held through 2025 and
                  into the first half of 2026 broadly in line
                  with the prime UK regional cities. Prime
                  Charlotte Square and St Andrew Square office
                  investment with strong unexpired sits at 6.5
                  to 7.5 percent net, the tightest priced office
                  asset class in the city. Lothian Road and
                  Edinburgh Park multi-let office investment
                  runs 7.0 to 8.0 percent gross. Princes Street
                  and George Street retail with strong unexpired
                  runs 6.75 to 7.75 percent net. Trading-business
                  hospitality on the Old Town and Royal Mile
                  heritage spine runs 7.5 to 9.0 percent gross.
                  Semi-commercial mixed-use on the Stockbridge,
                  Bruntsfield, Morningside and Portobello village
                  parades runs 7.0 to 8.0 percent gross.
                  Stabilised sui generis HMO portfolio across the
                  EH9 and EH8 belt runs 7.0 to 8.0 percent gross
                  on three-year rent rolls. BioQuarter
                  life-sciences lab and office investment with
                  strong covenant runs 7.0 to 8.0 percent gross.
                  The pricing reflects a
                  financial-services-anchored,
                  heritage-tourism-flanked and life-sciences-emerging
                  market with a deep three-university floor
                  underpinning the freehold yield stack.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live regeneration and planning callout */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Live regeneration spine</span>
                <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                  Seven anchors worth knowing about.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                  Drawn from the City of Edinburgh Council
                  regeneration pipeline and the public-domain
                  Edinburgh capital schemes at mid-2026. A
                  market-temperature read on what is being
                  delivered, what is rotating and what is being
                  absorbed across the central, western, southern
                  and coastal flanks.
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                Updated 2026-05-18
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planningHighlights.map((app, i) => (
              <ScrollReveal key={app.ref} delay={i * 0.04}>
                <li className="flex h-full flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    {app.ref}
                  </span>
                  <p className="font-editorial text-base text-[color:var(--color-paper)]">
                    {app.address}
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {app.proposal}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Regeneration spine */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">03 &middot; Regeneration spine</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The regeneration spine: Nuveen St James Quarter,
                Parabola Edinburgh Park, the Edinburgh BioQuarter,
                Quartermile, Granton Waterfront, the Trams to
                Newhaven extension and the Fountainbridge former
                brewery footprint.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  The Edinburgh regeneration spine runs across
                  the EH1, EH3, EH6, EH12 and EH16 postcodes,
                  with the central retail plate at St James
                  Quarter bolted onto the western financial
                  services cluster at Edinburgh Park, the
                  southern life-sciences cluster at the
                  BioQuarter, the central former Royal Infirmary
                  site at Quartermile, the coastal regeneration
                  at Granton Waterfront and the Leith Walk
                  corridor reshaped by the Trams to Newhaven
                  extension. Together they make up the most
                  significant addition to Edinburgh commercial,
                  retail, office and life-sciences supply this
                  decade. We cover them in the order that matters
                  most for lenders watching pipeline.
                </p>
                <p>
                  The Nuveen St James Quarter at the north end
                  of Princes Street is the single largest
                  addition to central Edinburgh retail this
                  century. The roughly one billion pound scheme
                  opened June 2021, carrying around 850,000 sq
                  ft of floor plate alongside the W Edinburgh
                  hotel and a residential element above. The
                  scheme reset the reference point for prime
                  central Edinburgh retail and lifted the
                  Princes Street and St Andrew Square footfall
                  halo. Stabilised investment sits with
                  institutional capital; ancillary retail and
                  hospitality refinance on the surrounding
                  Princes Street and Multrees Walk flank sits
                  with the clearing-bank corporate desks and the
                  larger SME challengers.
                </p>
                <p>
                  Parabola Edinburgh Park, sitting on the western
                  tram corridor adjacent to Edinburgh Gateway
                  station, is the structural anchor of the
                  Edinburgh out-of-town financial services office
                  cluster and the most significant non-central
                  commercial regeneration in the city. The
                  masterplan covers a large-scale office,
                  residential and life-sciences floor plate, with
                  Lloyds Banking Group, abrdn and Diageo as
                  anchor occupiers. The estate sits on the tram
                  line into the city centre and adjacent to
                  Edinburgh Airport. Stabilised investment sits
                  with the clearing-bank corporate desks alongside
                  the larger SME challengers; owner-occupier
                  acquisition on smaller plates sits with the SME
                  and specialist challenger panel.
                </p>
                <p>
                  The Edinburgh BioQuarter at Little France is
                  one of the larger European life-sciences
                  clusters and the emerging commercial story of
                  the city. The JV between NHS Lothian, the
                  University of Edinburgh, Scottish Enterprise
                  and City of Edinburgh Council sits adjacent to
                  the Royal Infirmary, hosts the MRC Centre for
                  Regenerative Medicine and runs phased delivery
                  through 2026 and 2027 alongside the Roslin
                  Innovation Centre satellite. Lender appetite
                  on lab and office investment is steady where
                  the covenant reads institutional or
                  university-anchored; on smaller incubator
                  plates the underwrite sits with the specialist
                  life-sciences and SME challenger panel. The
                  cluster is the largest single addition to
                  Edinburgh non-central commercial supply through
                  to 2027.
                </p>
                <p>
                  Quartermile, on the former Royal Infirmary
                  site on the EH3 footprint adjacent to the
                  Meadows and Lothian Road, carries the central
                  mixed-use redevelopment plate across the
                  19-acre former hospital footprint. The
                  University of Edinburgh delivered the
                  Edinburgh Futures Institute at the old Royal
                  Infirmary buildings in 2024, completing the
                  institutional anchor of the wider Quartermile
                  plate. Stabilised investment sits with the
                  clearing-bank corporate desks alongside the
                  larger SME challengers; owner-occupier
                  acquisition on smaller plates sits with the
                  SME and specialist challenger panel.
                </p>
                <p>
                  Granton Waterfront, the long-running mixed-use
                  regeneration of the north coast plate, is the
                  largest housing-led regeneration in the city
                  and a multi-decade delivery programme through
                  2030 and beyond. City of Edinburgh Council is
                  leading the masterplan, with phased delivery
                  of housing, commercial and community floor
                  plate alongside reshaped public realm.
                  Commercial floor plate on the coastal plate is
                  opening refinance windows on stabilised lots
                  through the second half of the decade. Lender
                  appetite on the coastal commercial plate sits
                  with the SME and specialist challenger panel,
                  with the clearing-bank corporate desks engaged
                  on the institutional housing development
                  finance picture.
                </p>
                <p>
                  The Trams to Newhaven extension opened in June
                  2023, extending the original 2014 tram line
                  from York Place down through Leith and on to
                  Newhaven. The extension materially shifted
                  commercial yields and retail rents along Leith
                  Walk, into Leith and Newhaven, with Class 1a,
                  2 and 3 conversion application volume picking
                  up along the corridor. The Shore food and
                  beverage spine, Constitution Street and Ocean
                  Terminal sit inside the corridor footprint,
                  and the wider Leith and Newhaven plate has
                  emerged as the most active conversion and
                  refinance corridor in the city. Fountainbridge,
                  on the former Scottish & Newcastle brewery
                  site on the EH3 footprint, picks up the
                  western central regeneration plate with phased
                  delivery of office, residential, hotel and
                  ground-floor commercial floor plate adjacent
                  to the Edinburgh Quay canal frontage.
                </p>
                <p>
                  Lender stance is positioned as follows.
                  Stabilised investment with strong unexpired on
                  the St James Quarter halo, Edinburgh Park, the
                  BioQuarter institutional plate and Quartermile
                  sits with the clearing-bank corporate desks
                  alongside the larger SME challengers, with{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> all carrying
                  Edinburgh appetite into the 2 million to 25
                  million pound lot size band. Owner-occupier
                  acquisition across the central New Town, West
                  End, Haymarket, Leith and EH9 Marchmont sits
                  with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>Cynergy Bank</strong> and{" "}
                  <strong>LendInvest</strong>. Clydesdale Bank /
                  Virgin Money UK and Bank of Scotland sit
                  alongside as the strongest Scottish-presence
                  relationship names, with decision-making rooted
                  in Glasgow and Edinburgh desks and deep
                  familiarity with the standard security
                  architecture and Scottish solicitor process.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Nuveen St James Quarter flagship, the Parabola
                Edinburgh Park masterplan and the Edinburgh
                BioQuarter at Little France are the three anchors
                that have done the most to reset central, western
                and southern Edinburgh commercial values this
                decade.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Sector deep-dives */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">04 &middot; Sector deep-dives</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Office and financial services, retail, hospitality,
                life sciences and student HMO.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Office and financial services: Charlotte
                    Square, George Street, St Andrew Square,
                    Lothian Road Exchange district, Edinburgh
                    Park, Quartermile and Haymarket.
                  </strong>{" "}
                  Edinburgh carries the deepest financial
                  services office labour shed in the network
                  outside the City of London, anchored by NatWest
                  Group at Gogarburn, Lloyds Banking Group on
                  Lothian Road, abrdn at St Andrew Square and
                  the wider Edinburgh Park plate carrying Lloyds,
                  abrdn and Diageo. Charlotte Square and St
                  Andrew Square carry the premium townhouse
                  office plate, George Street picks up the
                  premium serviced office cluster, Quartermile
                  picks up the central mixed plate and Haymarket
                  carries the secondary west-end flank. Lot
                  sizes on prime Charlotte Square and St Andrew
                  Square investment run 5 million to 35 million
                  pounds; Edinburgh Park multi-let runs 3 million
                  to 20 million; secondary office on Haymarket,
                  Quartermile and West End runs 750,000 to 5
                  million. Prime investment prices 6.5 to 7.5
                  percent net at 60 to 70 percent LTV through{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong>, with Bank of
                  Scotland and Clydesdale Bank / Virgin Money UK
                  consistently competitive on the
                  Scottish-presence relationship flank.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Retail: Princes Street, the Nuveen St James
                    Quarter flagship, George Street, Multrees
                    Walk, Ocean Terminal Leith and Morningside.
                  </strong>{" "}
                  Edinburgh retail trades on the Princes Street
                  central spine alongside the Nuveen St James
                  Quarter flagship at the north end of the
                  street, opened June 2021. George Street picks
                  up the premium independent flank, Multrees
                  Walk the luxury cluster with Harvey Nichols,
                  Louis Vuitton and Mulberry, Ocean Terminal at
                  Leith the suburban shopping centre anchor and
                  Morningside the premium suburban retail and
                  professional services freehold flow. Lot sizes
                  on prime Princes Street and Multrees Walk
                  investment run 2 million to 15 million pounds;
                  semi-commercial shop-with-flats across George
                  Street, Stockbridge, Bruntsfield, Morningside
                  and Portobello runs 350,000 to 1.5 million.
                  Retail investment prices 6.75 to 8.0 percent
                  pa at 60 to 70 percent LTV through{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>Santander</strong>,{" "}
                  <strong>Shawbrook</strong> and{" "}
                  <strong>InterBay Commercial</strong>, with HTB
                  and YBS Commercial consistently competitive on
                  the semi-commercial mixed-use flank.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Hospitality: Old Town and Royal Mile heritage,
                    Charlotte Square boutique, Grassmarket and
                    Cowgate, George Street premium hotels, the
                    Festival and Fringe 13 million visitor base.
                  </strong>{" "}
                  Edinburgh hospitality runs on the heritage
                  spine from Edinburgh Castle down the Royal
                  Mile to Holyrood Palace alongside the New Town
                  premium hotel cluster on George Street and
                  Charlotte Square. The Balmoral at the east
                  end of Princes Street, the Waldorf Astoria
                  Caledonian at the west end, the Kimpton
                  Charlotte Square and the Gleneagles Townhouse
                  on St Andrew Square carry the central premium
                  plate. The Grassmarket and Cowgate late-night
                  corridor and the Leith Shore food and beverage
                  spine pick up the wider plate. The Festival
                  and Fringe drives around 13 million visitors a
                  year, with a secondary Hogmanay peak. Lot
                  sizes on central hotel freehold run 1.5
                  million to 25 million pounds. Independent
                  hotel freehold prices 7.5 to 8.75 percent pa
                  at 60 to 65 percent LTV through{" "}
                  <strong>Cynergy Bank</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Santander</strong>; branded hotel
                  investment with strong covenant sits with the
                  clearing-bank corporate desks at{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong>.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Life sciences and student HMO: Edinburgh
                    BioQuarter at Little France, Royal Infirmary
                    halo, MRC Centre for Regenerative Medicine,
                    the EH9 Marchmont and EH8 Southside student
                    belt, University of Edinburgh 45,000-student
                    catchment.
                  </strong>{" "}
                  The Edinburgh BioQuarter at Little France sits
                  on the southern flank adjacent to the Royal
                  Infirmary as the joint venture between NHS
                  Lothian, the University of Edinburgh, Scottish
                  Enterprise and City of Edinburgh Council. The
                  cluster hosts the MRC Centre for Regenerative
                  Medicine and a deep biotech occupier base,
                  with phased delivery through 2026 and 2027.
                  The Roslin Innovation Centre satellite plate
                  to the south picks up the agricultural and
                  animal-sciences occupier base. Lab and office
                  investment prices 7.0 to 8.5 percent pa at 60
                  to 70 percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>Lloyds</strong> and{" "}
                  <strong>Santander</strong>, with OakNorth
                  writing into the larger life-sciences cases.
                  The EH9 Marchmont and Bruntsfield belt carries
                  the densest student-let tenement stock on the
                  University of Edinburgh catchment; EH8
                  Southside and Newington picks up the central
                  HMO conversion flow. Edinburgh HMO licensing
                  is stricter than the English Housing Act 2004
                  default, with licences mandatory at three or
                  more unrelated occupants. HMO acquisition or
                  refinance prices 7.0 to 8.5 percent pa at 65
                  to 75 percent LTV through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong>, with Paragon,
                  Together and Foundation Home Loans on the
                  wider HMO portfolio panel.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Central financial services office investment, Old
                Town and Royal Mile heritage hospitality, the EH9
                Marchmont and EH8 Southside student HMO belt and
                the emerging Edinburgh BioQuarter life-sciences
                cluster carry the four most active commercial
                mortgage conversations on Edinburgh desks in 2026.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Mortgage market */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">05 &middot; The mortgage market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                What is available in Edinburgh in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Commercial mortgage product across Edinburgh
                  runs between{" "}
                  <span className="figure-inline">6.0 and 9.0%</span>{" "}
                  pa at mid-2026, depending on sector, covenant,
                  LTV and term. Prime office investment on
                  Charlotte Square, St Andrew Square and George
                  Street with institutional covenant sits at the
                  strongest end of the range, 6.0 to 7.25 percent
                  pa at 60 to 70 percent LTV. Lothian Road and
                  Edinburgh Park multi-let office investment
                  runs similar pricing where the unexpired and
                  covenant base read clean, 6.5 to 7.5 percent
                  pa at 65 to 70 percent LTV. Investment
                  commercial mortgages on stabilised retail and
                  mixed-use product across Princes Street, George
                  Street, Multrees Walk and the suburban village
                  parades sit at 6.75 to 7.75 percent pa at 60
                  to 70 percent LTV on the cleanest cases.
                </p>
                <p>
                  Hospitality trading-business is the toughest
                  segment: typically 7.5 to 9.0 percent pa at 60
                  to 70 percent LTV, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> the most active
                  trading-business names on the Old Town and
                  Royal Mile heritage hotel cluster, the
                  Charlotte Square boutique flank and the Leith
                  Shore food and beverage spine. Independent
                  hotel freeholds on the Old Town plate price
                  7.5 to 8.5 percent pa at 60 to 65 percent LTV
                  on three years of clean accounts. Branded
                  hotel investment with strong covenant sits
                  with the clearing-bank corporate desks at{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong>. The Festival and
                  Fringe peaked seasonality underwrite is a
                  recurring conversation on the Old Town
                  short-let plate, where the trading shape on
                  twelve-month rolling accounts has to read
                  clean across the August peak and shoulder
                  months.
                </p>
                <p>
                  HMO acquisition or refinance on the student
                  and professional sharer stock through the EH9
                  Marchmont and Bruntsfield belt, the EH8
                  Southside and Newington footprint and the
                  wider Tollcross and West End student catchment
                  runs 7.0 to 8.5 percent pa at 65 to 75 percent
                  LTV.{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> anchor the HMO
                  specialist panel alongside Paragon, Together
                  and Foundation Home Loans. Seven and
                  eight-bedroom HMO product is the recurring
                  application shape on the combined University
                  of Edinburgh and Edinburgh Napier catchment.
                  Semi-commercial shop-with-flats across the
                  Stockbridge, Bruntsfield, Morningside, Leith
                  Walk and Portobello village parades runs up to
                  75 percent LTV at 7.0 to 8.0 percent pa with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> consistently
                  competitive. Bridging sits at 0.75 to 1.10
                  percent per month on the mainstream specialist
                  desks.
                </p>
                <p>
                  A note on Scottish legal architecture, because
                  every Edinburgh commercial mortgage runs on a
                  different security framework to England. The
                  security instrument is a standard security
                  under the Conveyancing and Feudal Reform
                  (Scotland) Act 1970, registered in the Land
                  Register of Scotland by Registers of Scotland,
                  not a legal charge at HM Land Registry. The
                  contract for sale is created through missives
                  between Scottish solicitors, which creates a
                  binding contract earlier than the English
                  exchange model. Land and Buildings Transaction
                  Tax administered by Revenue Scotland replaces
                  Stamp Duty Land Tax, with non-residential
                  commercial thresholds set separately to
                  England. Enforcement on default proceeds
                  through a calling-up notice under the 1970 Act
                  and, if necessary, action in the Sheriff
                  Court, not the County Court. Most
                  English-headquartered challenger and specialist
                  lenders on the active panel will lend against
                  Scottish security but route the file to a
                  Scottish solicitor on their approved panel; a
                  small minority do not lend in Scotland at all,
                  and we flag that on the placement conversation
                  up front.
                </p>
                <p>
                  Lender appetite splits by sector. Prime central
                  office investment on Charlotte Square, St
                  Andrew Square, George Street and the Lothian
                  Road Exchange district is the most contested
                  asset class, with{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong>,{" "}
                  <strong>Santander</strong> and{" "}
                  <strong>Shawbrook</strong> all bidding into the
                  institutional and financial services covenant
                  cases alongside Bank of Scotland and Clydesdale
                  Bank / Virgin Money UK on the Scottish-presence
                  relationship flank. HMO and portfolio is the
                  second most active segment, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> writing the bulk of
                  the EH9, EH8 and EH3 sui generis pipeline
                  alongside Paragon and Together on the wider
                  portfolio panel. The challenger SME panel
                  writes the bulk of the mid-market:{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>LendInvest</strong> and{" "}
                  <strong>Cynergy Bank</strong> sit at the
                  centre of the specialist pool, with Allica
                  Bank, HTB, Cambridge and Counties, YBS
                  Commercial, Aldermore, Paragon, Together,
                  Foundation Home Loans and OakNorth on the
                  wider 90-strong network. Clydesdale Bank /
                  Virgin Money UK and Bank of Scotland sit
                  inside the wider panel as the strongest
                  Scottish-presence relationship names with
                  decision-making rooted in Glasgow and Edinburgh
                  desks.
                </p>
                <p>
                  We are part of a broader UK commercial mortgage
                  brokerage network. For the wider regional view
                  across Scotland, taking in Glasgow, Aberdeen,
                  Dundee, Stirling and the wider central belt
                  alongside the Edinburgh catchment, see{" "}
                  <a
                    href={scotlandBrokerUrl}
                    rel="external noopener noreferrer"
                    target="_blank"
                    className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    our Scotland commercial mortgage broker hub
                  </a>
                  , which sets out the parent brokerage Edinburgh
                  desk and the panel coverage across the wider
                  Scottish footprint.
                </p>
              </div>
            </ScrollReveal>

            {/* Lender table */}
            <ScrollReveal delay={0.1}>
              <div className="mt-12 overflow-hidden border border-[color:var(--color-rule)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)] font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      <th className="px-5 py-4">Lender</th>
                      <th className="px-5 py-4">Sweet spot</th>
                      <th className="px-5 py-4">Typical LTV</th>
                      <th className="px-5 py-4">Indicative rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--color-rule)]">
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Shawbrook
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, large HMO, owner-occupier industrial
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">6.95 to 8.25%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        InterBay Commercial
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, HMO, hospitality
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        LendInvest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        HMO, BTL portfolio, refurb-to-term
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Cynergy Bank
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, hospitality, healthcare
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.25%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Lloyds
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, owner-occupier
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        NatWest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, financial services
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Barclays
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, prime investment, corporate
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.0 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Santander
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Clearing bank, hospitality, healthcare, investment
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">6.25 to 7.75%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-5 py-4 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  Plus Clydesdale Bank / Virgin Money UK and Bank
                  of Scotland (the Scottish brand of Lloyds
                  Banking Group) sitting on the wider panel as
                  the strongest Scottish-presence relationship
                  names. Plus Allica Bank, HTB, Cambridge and
                  Counties, YBS Commercial, Aldermore, Paragon,
                  Together, Foundation Home Loans and OakNorth
                  on the wider HMO, portfolio and SME challenger
                  panel. Plus another 80 panel members across
                  challenger banks, specialists and private
                  credit. Rates indicative for mid-2026 Edinburgh
                  primary product. Actual offers depend on
                  covenant, LTV, sector, term and Scottish
                  solicitor panel routing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent comparables */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Recent comparables</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Three deals from the desk this quarter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                Anonymised. Representative rate, LTV, term and
                lender across three of the most common Edinburgh
                case shapes, all on Scottish standard security.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {comparables.map((c, i) => (
              <ScrollReveal key={c.headline} delay={i * 0.08}>
                <div className="card h-full">
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-editorial text-xl leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {c.detail}
                  </p>
                  <p className="mt-6 fig text-base text-[color:var(--color-accent)]">
                    {c.terms}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five recent deal flavours */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">06 &middot; Deal flavours</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Five recent deal shapes from across Edinburgh.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five anonymised composite deal flavours from
                  the recurring shapes we see across Edinburgh.
                  Names removed, terms representative of the
                  range we are pricing through Q1 and Q2 2026,
                  all running on Scottish standard security.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Charlotte Square EH2 townhouse office
                    refinance.
                  </strong>{" "}
                  An investor holding a 12,000 sq ft Georgian
                  townhouse office investment on Charlotte Square
                  refinancing off a 2021 five-year fix.
                  Stabilised multi-tenant base with regional
                  professional services and financial services
                  support covenants underpinning the rent roll.
                  65% LTV at 6.95% pa with{" "}
                  <strong>Lloyds</strong>, five-year fix, 20-year
                  amortisation, standard security on the Land
                  Register of Scotland.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Royal Mile EH1 heritage hotel refinance.
                  </strong>{" "}
                  An independent operator holding a 46-bed
                  heritage hotel freehold on the Royal Mile
                  refinancing off a 2021 five-year fix into a
                  trading-business facility with{" "}
                  <strong>Santander</strong>. 60% LTV at 7.85%
                  pa, five-year fix, 20-year amortisation. Three
                  years of clean trading accounts through the
                  Festival and Fringe peak supported the
                  underwrite, with the August cycle and Hogmanay
                  shoulder driving stabilised year-round
                  occupancy.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Marchmont EH9 large-format student HMO
                    portfolio refinance.
                  </strong>{" "}
                  An investor refinancing five sui generis seven
                  and eight-bedroom HMO freeholds across
                  Marchmont EH9 and the wider Southside EH8
                  University of Edinburgh belt onto a single
                  portfolio loan with{" "}
                  <strong>InterBay Commercial</strong>. 70% LTV
                  at 7.45% pa, five-year fix, 25-year
                  amortisation. Stabilised University of
                  Edinburgh catchment and three years of HMO
                  trading on the Edinburgh HMO licensing regime
                  supported the underwrite at the upper LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Edinburgh Park EH12 multi-let office
                    refinance.
                  </strong>{" "}
                  An investor holding a 38,000 sq ft multi-let
                  Class E office investment on Parabola
                  Edinburgh Park adjacent to the tram line and
                  Edinburgh Gateway station, refinancing off a
                  2021 five-year fix. Stabilised multi-tenant
                  base on a financial services and corporate
                  covenant mix. 65% LTV at 7.25% pa with{" "}
                  <strong>NatWest</strong>, five-year fix,
                  20-year amortisation, standard security on the
                  Land Register of Scotland.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Edinburgh BioQuarter EH16 lab and office
                    acquisition.
                  </strong>{" "}
                  An owner-occupier life-sciences operator
                  acquiring a 22,000 sq ft lab and office unit
                  on the BioQuarter Little France plate adjacent
                  to the Royal Infirmary. Three years of clean
                  trading accounts on the operator and a credible
                  NHS Lothian and University of Edinburgh
                  research-grant pipeline underpinning the
                  covenant. 65% LTV at 7.45% pa with{" "}
                  <strong>Shawbrook</strong>, five-year fix,
                  20-year amortisation, standard security on the
                  Land Register of Scotland.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 4 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Edinburgh BioQuarter Phase 3 delivery, the
                Granton Waterfront progression, the post-RBS
                NatWest Group consolidation, the Festival pricing
                dynamic and the 2020 to 2022 refinance wave sit
                at the centre of our Edinburgh watching brief
                through to the end of 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Outlook */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">07 &middot; Outlook</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Outlook for late 2026 and 2027.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five structural factors sit at the centre of
                  the Edinburgh market watching brief through
                  late 2026 and 2027. The first is Edinburgh
                  BioQuarter Phase 3 delivery. Continued phased
                  lab and office delivery at Little France
                  alongside the MRC Centre for Regenerative
                  Medicine and University of Edinburgh research
                  estate feeds the most active non-central
                  commercial supply pipeline in the city. We
                  read BioQuarter Phase 3 absorption as a
                  structurally positive driver of Edinburgh
                  life-sciences freehold pricing through 2027.
                  The second is Granton Waterfront progression.
                  Phased delivery on the north coast plate
                  continues to open refinance windows on
                  stabilised commercial floor plate alongside
                  the housing-led masterplan, with the EH5 and
                  EH6 corridor picking up steady commercial
                  mortgage application volume on ground-floor
                  retail and food and beverage plate.
                </p>
                <p>
                  The third is the post-RBS NatWest Group
                  consolidation cycle. NatWest Group has
                  rebranded the residual Royal Bank of Scotland
                  customer-facing book, retained the Gogarburn
                  registered office and continued to consolidate
                  the central financial services footprint. The
                  Lloyds Banking Group Lothian Road and Edinburgh
                  Park plate alongside abrdn at St Andrew Square
                  carries the wider central occupier base.
                  Continued consolidation feeds refurbishment and
                  Cat A office floor plate delivery on the
                  central plate. The fourth is the Festival
                  pricing dynamic. The Edinburgh Festival and
                  Fringe drives an annual August visitor peak
                  that materially shapes Old Town and Royal Mile
                  hospitality trading-business pricing alongside
                  the central short-let plate, producing a
                  structural seasonal underwrite conversation
                  that recurs on every Old Town hotel and
                  serviced-apartment refinance.
                </p>
                <p>
                  The fifth is the structural refinancing wave
                  from the 2020 to 2022 vintage of five-year
                  fixed commercial mortgage debt. Borrowers who
                  locked at 3 to 4.5 percent pa five years ago
                  are refinancing into a 6 to 9 percent world.
                  For Edinburgh assets the maths usually works
                  because rents and yields have held: prime
                  central office on the financial services
                  covenant pool, retail on the Princes Street,
                  George Street and Multrees Walk spine,
                  hospitality on the Festival-anchored Old Town
                  plate, HMO and portfolio on the University of
                  Edinburgh and Edinburgh Napier catchment,
                  semi-commercial on the shop-with-flats
                  archetype across the suburban village parades,
                  and life sciences on the emerging BioQuarter
                  institutional plate. The conversation is
                  structural rather than distressed. The
                  trading-business hospitality flank on the Old
                  Town and Royal Mile carries the most
                  case-by-case underwrite work; prime central
                  office and BioQuarter institutional investment
                  carry the cleanest refinance pipeline.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">08 &middot; How to talk to us</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Buying, refinancing or holding through 2026?{" "}
                    <span className="text-[color:var(--color-accent)]">
                      Send the deal.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Whether you are looking at a Charlotte Square
                    or St Andrew Square office investment
                    refinance, a Lothian Road or Edinburgh Park
                    multi-let office, an Old Town or Royal Mile
                    heritage hotel refinance, a Princes Street or
                    Multrees Walk retail investment, a Marchmont
                    EH9 or Southside EH8 sui generis HMO
                    portfolio refinance, an Edinburgh BioQuarter
                    lab and office freehold or a Leith Shore
                    trading-business refinance, the working
                    method is the same. Send through the property
                    details, the LTV target and a rough sense of
                    the trading position or rental income, and we
                    will take it from there. We shortlist three
                    to five lenders from the eight on our active
                    panel,{" "}
                    <strong>Shawbrook</strong>,{" "}
                    <strong>InterBay Commercial</strong>,{" "}
                    <strong>LendInvest</strong>,{" "}
                    <strong>Cynergy Bank</strong>,{" "}
                    <strong>Lloyds</strong>,{" "}
                    <strong>NatWest</strong>,{" "}
                    <strong>Barclays</strong> and{" "}
                    <strong>Santander</strong>, plus the wider
                    ninety-strong network including Clydesdale
                    Bank / Virgin Money UK and Bank of Scotland
                    on the Scottish-presence relationship flank,
                    Allica Bank, HTB, Cambridge and Counties,
                    YBS Commercial and Aldermore on the SME
                    challenger flank, Paragon, Together and
                    Foundation Home Loans on the HMO portfolio
                    flank and OakNorth on the larger SME and
                    life-sciences flank. We run live appetite
                    and come back with structured terms inside
                    48 hours, with Scottish solicitor panel
                    routing flagged up front. If the numbers do
                    not work, you will know inside two business
                    hours. Phone, email or send through the site
                    contact form.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <Link
                    href="/calculator"
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    Run the calculator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footnote */}
      <section className="section-tight">
        <div className="container-editorial">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--color-muted)]">
            Rate ranges and lender positioning quoted reflect
            the Edinburgh commercial mortgage market in May
            2026. Indicative only; actual offers depend on
            individual deal characteristics and Scottish
            solicitor panel routing. Edinburgh commercial
            mortgages run on Scottish standard security under
            the Conveyancing and Feudal Reform (Scotland) Act
            1970 registered with Registers of Scotland, with
            LBTT administered by Revenue Scotland in place of
            SDLT and enforcement through the Sheriff Court using
            calling-up notices. Commercial mortgages on
            non-dwelling property are unregulated lending. We
            are not FCA-authorised because the products we
            arrange are unregulated. Where a deal would require
            FCA authorisation, we refer to a regulated firm.
          </p>
        </div>
      </section>
    </>
  );
}
