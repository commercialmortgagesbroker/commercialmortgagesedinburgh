/**
 * /services hub page content, Commercial Mortgages Edinburgh.
 *
 * Eight commercial mortgage products covering the full mainstream product set:
 * owner-occupier, commercial investment, semi-commercial, portfolio refinance,
 * trading-business, commercial remortgage, commercial bridging, second-charge.
 *
 * Voice: editorial, broker-led, diagnostic. Entity-distinct headings per Benner.
 * NeuronWriter target ~652 words for the `commercial mortgage broker edinburgh`
 * query, we run longer to seat the full diagnostic across eight products.
 *
 * Slugs match src/lib/constants.ts SERVICE_LINKS.
 */

export interface ServiceSection {
  slug: string; // matches /services/[slug] route
  eyebrow: string; // small pill text
  h2: string;
  paragraphs: string[]; // HTML allowed, inline links + figures
  learnMoreLabel: string;
}

export interface ServicesContent {
  hero: {
    h1: string;
    lede: string;
  };
  mapIntro: {
    h2: string;
    body: string; // HTML allowed
  };
  services: ServiceSection[];
  networkBand: {
    h2: string;
    paragraphs: string[];
  };
  finalCta: {
    h2: string;
    body: string;
  };
}

export const servicesContent: ServicesContent = {
  hero: {
    h1: "Commercial Mortgage Broker Edinburgh, 90+ Lenders",
    lede:
      "Owner-occupier freeholds. Commercial investment with ICR-led underwriting. Semi-commercial shop-with-flat. Portfolio refinance for landlords carrying five-plus assets. Trading-business mortgages for pubs, hotels, care homes, dental, MOT and nurseries. Commercial remortgage. Bridging-to-let. Second-charge behind a senior facility. Eight products, one broker, a 90+ lender panel. Indicative terms in 48 hours. Commercial mortgages are unregulated and fall outside the Financial Conduct Authority's regulated mortgage perimeter, where a deal would require regulated permissions, we refer to a regulated firm.",
  },

  mapIntro: {
    h2: "Where the deals are placed across Edinburgh and the Lothians",
    body:
      'From the <a href="/areas/old-town-royal-mile" class="text-secondary font-medium hover:underline">EH1/EH2 CBD</a> office investment market through the <a href="/areas/west-end-haymarket" class="text-secondary font-medium hover:underline">West End and Haymarket</a> creative-office estate, the <a href="/areas/princes-street-st-james" class="text-secondary font-medium hover:underline">Princes Street and St James</a> and <a href="/areas/leith-newhaven" class="text-secondary font-medium hover:underline">Leith and Newhaven</a> semi-commercial parades, the <a href="/areas/morningside-bruntsfield" class="text-secondary font-medium hover:underline">Morningside and Bruntsfield</a> and Morningside care-home cluster, and the <a href="/areas/edinburgh-bioquarter-little-france" class="text-secondary font-medium hover:underline">Edinburgh BioQuarter and Little France</a> and Newbridge industrial belt. Use the map below to see live placement activity across the City of Edinburgh.',
  },

  services: [
    {
      slug: "owner-occupier-commercial-mortgage",
      eyebrow: "Up to 75% LTV · EBITDA-driven",
      h2: "Owner-occupied commercial mortgages, buying your business's freehold",
      paragraphs: [
        "When the business buys the building it trades from, the lending test is <strong>EBITDA cover</strong>, trading profit measured against the monthly mortgage payment, with a typical comfort threshold of 1.3–1.5×. This is the dental partnership taking the EH17 surgery freehold off a retiring principal; the accountancy firm converting a Exchange Crescent lease into a floor purchase; the engineering business buying its Newbridge trade-counter unit off the landlord. Two years of clean filed accounts is the standard minimum. LTV runs to <strong>75%</strong>, deposits of 25–30% are typically funded from accumulated retained profit (and occasionally capital-released equity from a director's home).",
        'Allica Bank, <strong>Shawbrook</strong>, HTB (dedicated Edinburgh office), Cambridge & Counties and <strong>Cynergy Bank</strong> sit at the sweet spot for owner-occupier lending. <strong>Lloyds</strong> commercial banking, <strong>NatWest</strong> Park Row, <strong>Barclays</strong> East Parade and <strong>Santander</strong> price competitively where the covenant is strong and the sector is mainstream. Mid-2026 interest rates: <strong>6.0–7.5% pa</strong>. Term length is the lever that materially changes affordability, extending repayment from 15 to 20 years frequently clears the EBITDA test where rate alone will not. Owner-occupier sits outside FCA regulation in most cases (it is a business borrowing for business premises, not a residential mortgage).',
        'Sectors with the deepest lender appetite in Edinburgh: dental and GP practices (the EH17 cluster is a recognised sub-market), accountancy, legal and other professional services, light industrial and trade-counter (Newbridge, Newbridge, Sighthill) and pharmacy. Sector-specialist trades, care home, MOT, day nursery, route through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgages</a> instead.',
      ],
      learnMoreLabel: "Owner-occupier guide",
    },
    {
      slug: "commercial-investment-mortgage",
      eyebrow: "Up to 75% LTV · ICR-driven",
      h2: "Commercial investment mortgages, buying or refinancing let stock",
      paragraphs: [
        'A commercial investment mortgage is long-term debt against a let property held as an income-producing asset. The borrower is usually a limited company SPV, an LLP, or an individual investor; the security is the building; the affordability test is rent against the cost of borrowing. The headline metric is <strong>ICR (interest cover ratio)</strong>, gross rent divided by interest cost, typically required at <strong>140–160%</strong> stressed at a notional rate 1–2% above pay rate. Some lenders also test <strong>DSCR</strong> on a fully-amortising basis at 130–145% cover. LTVs of 65–75% are standard for income-producing assets with a clear lease.',
        'Tenant covenant and lease length carry as much weight as LTV. A 10-year unbroken FRI lease to a national covenant on a Exchange Crescent office prices materially better than three two-year leases to local independents on a secondary parade. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete hard on prime single-asset investment; <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and Together cover the trickier end (multi-let, short-WAULT, semi-commercial, vacant-with-refurb). Interest rates currently <strong>6.5–8.5% pa</strong>.',
        'Active areas: <a href="/areas/old-town-royal-mile" class="text-secondary font-medium hover:underline">city-centre office and retail</a>, <a href="/areas/princes-street-st-james" class="text-secondary font-medium hover:underline">Princes Street and St James</a> semi-commercial parades, <a href="/areas/west-end-haymarket" class="text-secondary font-medium hover:underline">West End and Haymarket</a> creative offices, and the Newbridge/Newbridge industrial belt.',
      ],
      learnMoreLabel: "Investment mortgage guide",
    },
    {
      slug: "semi-commercial-mortgage",
      eyebrow: "Up to 75% LTV · Blended cover",
      h2: "Semi-commercial, shop-with-flat and mixed-use stock",
      paragraphs: [
        'Semi-commercial finance funds mixed-use property where the residential element is at least 40% of total floorspace, the classic shop-with-flat-above archetype that defines Edinburgh high streets like <a href="/areas/princes-street-st-james" class="text-secondary font-medium hover:underline">Dalkeith Road</a> in EH6, Falkirk Road in <a href="/areas/southside-meadows" class="text-secondary font-medium hover:underline">Southside and the Meadows</a>, George Street in <a href="/areas/stockbridge" class="text-secondary font-medium hover:underline">Stockbridge</a> and Queen Street in <a href="/areas/edinburgh-bioquarter-little-france" class="text-secondary font-medium hover:underline">Edinburgh BioQuarter and Little France</a>. The flat above gives lenders residential security comfort, so semi-commercial routinely prices 50–100bps inside pure commercial investment.',
        '<strong>InterBay Commercial</strong> (part of OSB Group) and <strong>Shawbrook</strong> are the two most active named desks; <strong>LendInvest</strong>, Together, Aldermore, YBS Commercial and HTB also quote actively. The lending test combines commercial rent and residential AST income on a blended basis, with cover typically required at <strong>~145%</strong>. LTV to 75% is achievable on standard archetypes. Where the borrower will personally occupy one of the flats, the deal can fall under FCA-regulated mortgage rules, we flag that at outset and route to a regulated lender if it applies.',
        'Common Edinburgh archetypes: shop with one to three flats over (Princes Street and St James, Southside and the Meadows, Morningside and Bruntsfield, Linlithgow), pub or restaurant with operator flat above, and mixed-use conversions where consent is for ground-floor retail plus four to six apartments on upper floors. For HMO conversions see our <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block</a> page.',
      ],
      learnMoreLabel: "Semi-commercial guide",
    },
    {
      slug: "portfolio-refinance",
      eyebrow: "5+ assets · Single facility",
      h2: "Portfolio refinancing, five assets and up, one facility",
      paragraphs: [
        'Portfolio refinance is the right structure when you are carrying five or more commercial investment assets and the patchwork of individual mortgages, maturity dates and lender relationships has become operationally heavy. Consolidating into a single facility, secured as a blanket charge across the portfolio, or as individual charges aggregated against a single limit, gives you one interest rate, one renewal date, and one set of covenants to manage.',
        '<strong>Shawbrook</strong>, Cambridge & Counties, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> are the most active portfolio lenders for the £2M–£15M Edinburgh bracket. OakNorth and Reliance Bank cover larger facility sizes. Aggregate ICR is tested across the portfolio at <strong>140–150%</strong>; tenant concentration matters (more than 20–25% of income from one tenant tightens pricing); sector concentration matters; the Lothians geographic concentration is fine.',
        'Typical mid-2026 terms: LTV <strong>65–70%</strong> across the portfolio, term 5–25 years (most landlords take a 5-year fix inside a 20–25 year amortisation), pricing <strong>6.5–8.5% pa</strong>. We model the portfolio every which way before approaching lenders so the credit pack lands clean first time.',
      ],
      learnMoreLabel: "Portfolio refinance guide",
    },
    {
      slug: "trading-business-mortgage",
      eyebrow: "Sector-specialist · 60–70% LTV",
      h2: "Trading-business mortgages, pubs, care homes, dental, MOT, nurseries",
      paragraphs: [
        'Trading-business mortgages fund operational property where value is bound up with the business that runs from it. Pubs on Call Lane, Greek Street and the Linlithgow market spine; hotels on Wellington Street and around Princes Street and St James; care homes in <a href="/areas/morningside-bruntsfield" class="text-secondary font-medium hover:underline">Morningside and Bruntsfield</a>, Morningside and Drighlington; MOT and petrol forecourts in Bramley, Corstorphine and outer Edinburgh; day nurseries in Princes Street and St James, Morningside and Bruntsfield and Adel; dental practices across the Bruntsfield EH17 cluster; B&Bs around Linlithgow and the Dalkeith fringe.',
        'Underwriting is sector-specific. <strong>Pubs</strong>: barrelage, EBITDA, beer-tie status, license, <strong>Cynergy Bank</strong> and ASK Partners dominate. <strong>Hotels</strong>: occupancy, ADR, RevPAR. <strong>Care homes</strong>: CQC rating, occupancy, weighted-average bed value, council/private fee mix, <strong>Shawbrook</strong>, Cambridge & Counties and Hampshire Trust hold significant Edinburgh books. <strong>Dental</strong>: NHS UDA value plus private fee mix. <strong>MOT</strong>: VOSA approval, environmental due diligence. <strong>Nursery</strong>: Ofsted rating, registered places, occupancy.',
        'LTVs run <strong>60–70%</strong>, term 15–25 years, interest rates <strong>7.0–9.0% pa</strong>. Different sub-sectors route to different lenders, getting the right desk first time saves three weeks. Trade-specific landing pages: <a href="/property-types/pub-restaurant" class="text-secondary font-medium hover:underline">pub & restaurant</a>, <a href="/property-types/leisure-hospitality" class="text-secondary font-medium hover:underline">leisure & hospitality</a>, <a href="/property-types/healthcare-care-home" class="text-secondary font-medium hover:underline">care home & healthcare</a>, <a href="/property-types/mot-garage-petrol" class="text-secondary font-medium hover:underline">MOT / garage / petrol</a>, <a href="/property-types/nursery-school" class="text-secondary font-medium hover:underline">nursery & school</a>.',
      ],
      learnMoreLabel: "Trading-business guide",
    },
    {
      slug: "commercial-remortgage",
      eyebrow: "End-of-fix · Capital raise",
      h2: "Refinancing existing commercial debt, end-of-fix and capital raise",
      paragraphs: [
        'Commercial remortgage covers two distinct moments. End of a typical 5-year fix maturing into a different rate environment; or capital-raise refinancing that releases equity from a property that has appreciated since the original draw. With Bank of England base-rate trajectory through 2026 looking flatter than the 2023–24 cycle, refinancing demand into Edinburgh is strong, particularly on assets bought 2019–2021 where current valuations support a meaningfully better LTV than the original facility.',
        'The first conversation is always <strong>ERC (early repayment charge) handling</strong>. If you are inside an ERC window, the maths often still works, saving 1.5% on rate over a fresh five-year term outweighs an ERC of 3% of redemption on most £1M+ facilities. We model both sides before recommending. Some lenders pay-down ERC against new arrangement fees; we know which.',
        'For end-of-fix the underwriting story is usually clean, known asset, known borrower, known track record. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, <strong>Shawbrook</strong>, Allica, HTB Edinburgh, Cambridge & Counties and <strong>InterBay Commercial</strong> all compete on clean Edinburgh remortgage business. Pricing for owner-occupier remortgage at 65% LTV on a strong covenant: <strong>6.0–7.5% pa</strong>. Investment remortgage 6.5–8.5% pa.',
      ],
      learnMoreLabel: "Remortgage guide",
    },
    {
      slug: "commercial-bridge-to-let",
      eyebrow: "12–24m · Bridge to term",
      h2: "Commercial bridging, short-term debt with a clean term-out",
      paragraphs: [
        'Commercial bridging is the right route when you are acquiring a property that is not immediately fundable on a long-term mortgage, vacant, partly tenanted, mid-refurbishment, or acquired at auction with a 28-day completion clock. A 12–24 month bridge funds the acquisition (and any refurb / re-letting work), with an agreed exit onto a long-term commercial investment mortgage once the asset is income-producing.',
        '<strong>LendInvest</strong>, <strong>Shawbrook</strong>, Together, OakNorth and Hampshire Trust Bank are the most active commercial bridging desks for the Edinburgh £500K–£5M bracket. Bridge interest rates currently run <strong>0.70–0.95% pm</strong> (8.5–11.5% pa equivalent); term-out pricing back to mainstream <strong>6.5–8.5% pa</strong> once the property stabilises and the ICR test passes. Interest can be serviced monthly or rolled-up; LTVs to 70% on current value, sometimes 75% on day-one purchase price plus 100% of refurb costs against GDV.',
        'Where this works particularly well in Edinburgh: vacant EH1/EH2 office floorplates being refurbished for re-letting; semi-commercial conversions (shop+flat-above stock being upgraded); industrial units bought from receivers; trading businesses bought as going concerns where the new operator needs 12 months of accounts before a high-street remortgage will engage.',
      ],
      learnMoreLabel: "Commercial bridging guide",
    },
    {
      slug: "second-charge-commercial-mortgage",
      eyebrow: "Behind senior · £100K–£2M",
      h2: "Second-charge commercial, capital release without breaking the senior",
      paragraphs: [
        'A second-charge commercial mortgage sits behind your existing first-charge facility, secured against the same property. The senior lender retains priority; the second-charge lender takes a subordinated position. You keep the existing first-charge interest rate intact (and avoid breaking ERCs) while raising additional debt against the same security. The use case is narrow but valuable, typically a 3.5–4.5% legacy fix from the 2019–2021 era where breaking it would cost more than taking the second-charge route.',
        '<strong>InterBay Commercial</strong>, Together, United Trust Bank and select private-credit desks are the active second-charge commercial lenders for Edinburgh. Pricing reflects subordinated risk: <strong>10–14% pa</strong> typically, arrangement fees of 2–3%. Combined LTV (first plus second) usually capped at <strong>70–75%</strong>, occasionally flexed to 80% on strong investment cases.',
        'It is a niche product but the right answer when the alternative is breaking a 4% legacy fix to consolidate at 7.5%. The senior lender has to consent to the second charge being registered (a deed of consent at £500–£2K is standard); some high-street commercial desks refuse on policy. We confirm before formally applying.',
      ],
      learnMoreLabel: "Second-charge guide",
    },
  ],

  networkBand: {
    h2: "Available across the wider city network",
    paragraphs: [
      "Every commercial mortgage product on this page is also available across our regional sister sites, Manchester, Birmingham, Sheffield, Liverpool, Newcastle, Nottingham, Bristol and beyond. One broker relationship, the same 90+ lender panel, genuine local market knowledge in each city.",
      "Owner-occupier in Manchester, portfolio refinancing across Scotland and the Midlands, a trading-business mortgage in Newcastle, or a commercial remortgage on a Bristol office, the same panel, the same diagnostic process, the same unregulated commercial product set.",
    ],
  },

  finalCta: {
    h2: "Which product fits your Edinburgh deal?",
    body:
      "Not sure whether the right route is owner-occupier, commercial investment, semi-commercial, portfolio or trading-business? Send the property details, the LTV you are aiming for, and a rough sense of the trading position or rental income. We will tell you which lender route is sensible and what indicative pricing looks like, within 48 hours, no charge for the assessment.",
  },
};
