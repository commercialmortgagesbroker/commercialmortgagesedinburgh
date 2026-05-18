/**
 * Property-type / asset-class commercial mortgage pages, Edinburgh.
 *
 * Twelve sector pages plus a hub. Each sector covers the lender-appetite
 * realities, cover tests (ICR / DSCR / EBITDA), sector-specific underwriting
 * concerns, and Edinburgh-specific examples. Voice matches the home page,
 * editorial, broker-led, specifics over slogans, real lender names where
 * defensible per NAMED-LENDERS.md.
 *
 * Slugs match src/lib/constants.ts and are used as /property-types/[slug] routes.
 */

export interface AssetTypeFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface AssetTypeDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    metrics: Array<{ label: string; value: string }>;
  };
  overview: { h2: string; body: string[] };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  financeStructures: {
    h2: string;
    intro: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  edinburghContext: { h2: string; body: string };
  lenderAppetite: { h2: string; body: string };
  faqs: AssetTypeFaq[];
}

export interface PropertyTypesHubContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: { h2: string; body: string[] };
  underwriting: {
    h2: string;
    body: string;
    items: Array<{ label: string; detail: string }>;
  };
  closingCta: { h2: string; body: string };
}

const standardStructures = [
  { product: "Owner-occupier commercial mortgage", applicability: "Where the borrower's business trades from the property, EBITDA cover at 1.3 to 1.5x. In Scotland the security taken is a standard security registered in the Land Register of Scotland." },
  { product: "Commercial investment mortgage", applicability: "Let assets, ICR-led underwriting at 140 to 160% stressed cover. Scottish security on Scottish title; solicitors on the lender's Scottish panel." },
  { product: "Commercial bridge-to-let", applicability: "Vacant or value-add acquisition with agreed term-out onto investment mortgage." },
  { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing assets. Refinance discharges the existing standard security and registers a new one." },
];

// Hub page content
export const propertyTypesHubContent: PropertyTypesHubContent = {
  metaTitle: "Commercial Mortgages Edinburgh by Property Type | 12 Sectors, 90+ Lenders",
  metaDescription:
    "Commercial mortgage finance for Edinburgh property, twelve sector pages covering retail, office, industrial, leisure, healthcare, pubs, MOT, nurseries, mixed-use, semi-commercial, HMO and holiday-let. Sector-specific lender appetite, real mid-2026 rates. Standard security in the Land Register of Scotland.",
  hero: {
    eyebrow: "Twelve sectors",
    h1: "Commercial Mortgages by Property Type Edinburgh",
    lede:
      "An Edinburgh commercial mortgage on a Charlotte Square professional office prices nothing like an Old Town Royal Mile hotel or a Marchmont student HMO block. The asset class drives the lender list, the LTV band, the cover test and the rate. Twelve sector pages, each with the underwriting that actually applies, the lenders that actually write the deal, and the Scottish legal overlay (standard security in the Land Register of Scotland, LBTT not SDLT, missives not English exchange) that English-only desks sometimes miss.",
  },
  intro: {
    h2: "The asset class is the first variable a commercial mortgage lender prices.",
    body: [
      "Borrowers often start with the geography, the LTV they want, or the rate they have read about. Lenders start with the property type. A commercial mortgage on a Charlotte Square Grade A office runs through a different desk to one on a Grassmarket pub freehold or a Marchmont converted HMO. Different cover test, different LTV cap, different valuation methodology, different rate.",
      "Across the broker panel, the practical division splits twelve ways. Three pure investment classes (<a href=\"/property-types/retail\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">retail</a>, <a href=\"/property-types/office\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">office</a>, <a href=\"/property-types/industrial-warehouse\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">industrial and warehouse</a>) underwritten on ICR against a tenant covenant. Five trading-business classes (<a href=\"/property-types/leisure-hospitality\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">leisure and hospitality</a>, <a href=\"/property-types/healthcare-care-home\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">healthcare and care homes</a>, <a href=\"/property-types/pub-restaurant\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">pubs and restaurants</a>, <a href=\"/property-types/mot-garage-petrol\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">MOT and forecourt</a>, <a href=\"/property-types/nursery-school\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">nurseries and schools</a>) underwritten on EBITDA cover with sector-specialist regulators (Care Inspectorate, VOSA) feeding the credit decision. Four mixed-tenure or hybrid classes (<a href=\"/property-types/mixed-use\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">mixed-use</a>, <a href=\"/property-types/semi-commercial\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">semi-commercial</a>, <a href=\"/property-types/hmo-block\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">HMO blocks</a>, <a href=\"/property-types/holiday-let-portfolio\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">holiday-let portfolios</a>) where lender appetite varies dramatically with the residential proportion or the operating model.",
      "Edinburgh is financial-services-office heavy, festival-hospitality dominant, student-HMO deep and World Heritage constrained. The Lothian Road, Charlotte Square, St Andrew Square and Edinburgh Park axis carries one of the deepest prime office markets in the United Kingdom. The Old Town and Royal Mile spine plus the 13 million annual visitors built around the Edinburgh Festival generate the most active urban hospitality market north of the border. Marchmont, Bruntsfield, Tollcross and the Southside carry the densest student-HMO belt in Scotland on the back of around 75,000 combined students at the University of Edinburgh, Heriot-Watt and Edinburgh Napier. The Edinburgh BioQuarter at Little France anchors a growing life-sciences cluster. Each page below sets out the LTV band, the cover test, the sector-specific underwriting concerns, the rate range in mid-2026, the lenders most active on the panel, and worked Edinburgh examples, all with Scottish-aware legal copy where it matters (standard security, missives, LBTT, calling-up notice).",
    ],
  },
  underwriting: {
    h2: "Three cover tests, twelve sectors. Which test applies to you decides the lender.",
    body:
      "The single most important variable on a commercial mortgage is which cover test the lender uses to size the loan. Get this wrong at outset and the offer either prices materially down at credit committee or falls over. Three tests dominate.",
    items: [
      {
        label: "ICR, interest cover ratio",
        detail:
          "Used on let investment property, retail, office, industrial, semi-commercial, mixed-use. Tests rent against interest only at a stressed notional rate, typically 140 to 160%. The driver is the lease and the tenant covenant, not the borrower's income.",
      },
      {
        label: "DSCR, debt-service cover ratio",
        detail:
          "Used on portfolios and on assets where capital amortisation matters to the lender. Tests net rent against the full mortgage payment (interest plus capital), typically 130 to 145%. Common on portfolio refinance and on larger HMO and FHL portfolios, particularly relevant given the Edinburgh student-HMO and festival short-let portfolio market.",
      },
      {
        label: "EBITDA cover",
        detail:
          "Used on owner-occupier and trading-business mortgages, pubs, care homes, MOT centres, nurseries, dental practices, hotels. Tests business operating profit against the mortgage payment, typically 1.3 to 1.5x for mainstream sectors and 1.5 to 2.0x for higher-risk trading sectors. Filed accounts and a credible forward-looking forecast both matter.",
      },
      {
        label: "Sector overlays",
        detail:
          "On top of the cover test, sector-specific overlays drive the credit decision: Care Inspectorate grade on care homes and nurseries, VOSA approval on MOT centres, barrelage on pubs, lease length on retail, occupancy and ADR on hotels and FHLs. Scottish overlays also matter: Edinburgh HMO licence on student blocks, Scottish short-term lets licence on holiday-let portfolios, listed-building consent on Old Town and New Town stock.",
      },
    ],
  },
  closingCta: {
    h2: "Send the property, the LTV target and the trading or rental income.",
    body:
      "We will tell you which sector the deal sits in, which lender desks will look at it, which cover test will apply, and what indicative terms look like across the panel. Indicative numbers in 48 hours. If the deal does not work, wrong sector for the LTV, cover test fails, Scottish security outside the lender's panel, we say so up front rather than burning weeks at valuation.",
  },
};

export const assetTypeDetails: Record<string, AssetTypeDetail> = {
  // Retail
  retail: {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail Commercial Mortgages Edinburgh | Princes Street, St James Quarter, George Street, Multrees Walk, Charlotte Square, Ocean Terminal",
    metaDescription:
      "Commercial mortgage finance for retail property in Edinburgh, Princes Street and St James Quarter (Nuveen flagship), George Street and Multrees Walk premium, Charlotte Square heritage, Ocean Terminal Leith, Cameron Toll, Morningside Road, Stockbridge boutique. Investment LTVs to 75%, ICR 140 to 160%, mid-2026 rates 6.5 to 8.5% pa. Standard security in the Land Register of Scotland.",
    hero: {
      eyebrow: "Retail",
      h1: "Retail Commercial Mortgages Edinburgh",
      lede:
        "Investment finance for let retail property and owner-occupier finance for independent retailers buying their unit. Edinburgh retail is structurally strong, Princes Street and the St James Quarter (Nuveen's flagship scheme) anchor the prime spine, George Street and Multrees Walk carry the luxury and premium pitch, Charlotte Square holds the heritage retail freeholds, Ocean Terminal serves the Leith waterfront, Cameron Toll covers the southern catchment, and Morningside Road plus Stockbridge run the dominant suburban boutique parades. Investment LTV 65 to 75%, ICR 140 to 160% stressed, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "Investment LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh retail commercial mortgage",
      body: [
        "The Edinburgh retail estate splits into five practical brackets and lenders price each one differently. <strong>Prime EH2 Princes Street and St James Quarter</strong> covers the primary national-multiple spine plus Nuveen's flagship St James Quarter scheme at the north end, institutional-grade pitches dominated by national fashion and F&B covenants. <strong>Premium EH2 George Street and Multrees Walk</strong> carries the luxury and premium-independents pitch (Harvey Nichols, Louis Vuitton, Mulberry on Multrees Walk; premium independents and high-end F&B on George Street). <strong>Charlotte Square heritage retail (EH2)</strong> holds the New Town townhouse retail freeholds, listed and conservation-area stock. <strong>Leith and Ocean Terminal (EH6)</strong> covers the Ocean Terminal shopping centre and the Leith Walk regeneration corridor on the back of the Trams to Newhaven extension. <strong>Suburban high-street parade</strong> runs through Morningside Road (EH10), Bruntsfield Place, Stockbridge (EH3/EH4), Corstorphine High Street (EH12) and Cameron Toll (EH16) covering the southern catchment.",
        "Investment underwriting tests <strong>ICR</strong>, rent versus stressed interest, at typically 140 to 160%. The two drivers a credit committee reads first are <strong>unexpired lease term</strong> and <strong>tenant covenant</strong>. A 10-year FRI to a national covenant on Princes Street prices materially better than three two-year leases to local independents on the same Stockbridge pitch. WAULT (weighted-average unexpired lease term) under five years pulls LTV down 5 to 10 percentage points and pricing 50 to 75bps wider. The Scottish security overlay is straightforward, a <strong>standard security</strong> registered in the Land Register of Scotland under the Conveyancing and Feudal Reform (Scotland) Act 1970, taken by the lender's nominated Scottish solicitors.",
        "Worked example: a Princes Street retail unit on a 10-year FRI to a national fashion covenant, £1.4M valuation, £98K passing rent. ICR at 145% on a 7.6% pa stressed rate sizes the loan to roughly £1.0M, about 71% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong>, Bank of Scotland and <strong>Barclays</strong> all compete on prime CBD investment of this profile. Worked example two: a Morningside Road parade unit let to two independent operators on shorter leases, £465K valuation, two-year tail to the lead tenant. Same ICR test sizes the loan to roughly 60% LTV; <strong>InterBay Commercial</strong>, Together and <strong>LendInvest</strong> are the realistic desks at 8.5 to 9.0% pa.",
        'For shop-with-flat semi-commercial archetypes, see the <a href="/property-types/semi-commercial">semi-commercial commercial mortgage page</a>; for retail-led mixed-use blocks, see <a href="/property-types/mixed-use">mixed-use</a>. Vacant retail acquisition routes through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> with refurb and re-let exit onto term investment.',
      ],
    },
    schemeTypes: {
      h2: "Retail asset types we fund",
      items: [
        { label: "Princes Street and St James Quarter (EH1/EH2)", detail: "The primary retail spine plus Nuveen's flagship St James Quarter scheme. National-multiple covenants dominate the let stock; institutional investment territory on long FRI leases." },
        { label: "George Street and Multrees Walk premium (EH2)", detail: "Premium independents and luxury (Harvey Nichols, Louis Vuitton, Mulberry on Multrees Walk; premium independents and high-end F&B on George Street). Strong covenants, premium rents." },
        { label: "Charlotte Square heritage retail (EH2)", detail: "New Town listed townhouse retail freeholds, conservation-area stock. Heritage-comfortable lenders only; LTV typically 5 percentage points tighter than non-listed CBD stock." },
        { label: "Ocean Terminal and Leith Walk regen (EH6)", detail: "Ocean Terminal shopping centre and Leith Walk retail on the back of the Trams to Newhaven extension. Mixed independent and mid-covenant; regeneration-led pricing." },
        { label: "Suburban high-street parade", detail: "Morningside Road (EH10), Bruntsfield Place, Stockbridge (EH3/EH4), Corstorphine High Street (EH12). Premium suburban professional-class pitches; independent retail and F&B combined." },
        { label: "Out-of-town and convenience", detail: "Cameron Toll (EH16) covering the southern catchment, Fort Kinnaird retail park on the east side, plus convenience-led neighbourhood retail anchored by Tesco, Sainsbury's, Co-op and the discounters." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh retail",
      intro:
        "Most retail deals route as investment (let asset, ICR-led) or owner-occupier (independent retailer buying their unit, EBITDA-led). Vacant or short-lease assets route through commercial bridge-to-let with an agreed exit. Multi-asset retail portfolios consolidate via portfolio refinance. The security taken is a standard security in the Land Register of Scotland.",
      structures: standardStructures,
    },
    edinburghContext: {
      h2: "The Edinburgh retail estate",
      body: 'Edinburgh retail has materially repositioned over the past five years on the back of the St James Quarter delivery. Nuveen\'s flagship scheme at the north end of Princes Street, opened June 2021, has reset the prime CBD benchmark, drawn institutional capital back into Edinburgh retail and absorbed national-multiple demand that previously sat on weaker Princes Street pitches. Multrees Walk runs adjacent as the dominant luxury pitch (Harvey Nichols flagship, Louis Vuitton, Mulberry). George Street carries the premium-independent and high-end F&B pitch through the heart of the New Town. Charlotte Square holds the listed heritage retail freeholds at the western end of the New Town with conservation-area constraints on alteration. Ocean Terminal at Leith plus the Leith Walk corridor have benefited materially from the Trams to Newhaven extension opened in June 2023, with retail yields tightening into a redefined regeneration market. Morningside Road runs the dominant southern suburban professional-class parade, with Bruntsfield Place feeding it. Stockbridge (EH3/EH4) holds the densest boutique retail and independent F&B cluster outside the central CBD. Corstorphine High Street (EH12) covers the western suburban catchment, and Cameron Toll (EH16) provides the southern indoor shopping centre with strong supermarket and family-multiple anchor. The change-of-use pipeline continues, listed-building consent through Edinburgh World Heritage runs alongside Edinburgh Council planning on Old Town and New Town stock, generating refinance flow as units re-let.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh retail",
      body: 'Strongest pricing on convenience and food-led retail with national covenants and on the St James Quarter and Princes Street prime investment let on long FRI leases. Mid-strength on George Street and Multrees Walk premium investment where rents are strong and covenants are deep. Tighter on suburban high-street pure-comparison units, particularly where WAULT is under five years. <strong>NatWest</strong>, <strong>Lloyds</strong>, Bank of Scotland (the Scottish brand of Lloyds Banking Group, retained for Scottish covenant), <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment with strong covenants, typical 7.0 to 7.75% pa at 65 to 70% LTV; Edinburgh deals route via Scottish desks on Lothian Road, St Andrew Square or Gogarburn. Mid-market and challenger appetite from Allica Bank, <strong>Shawbrook</strong>, HTB, Cambridge & Counties (active in Scotland on selective deals) and Clydesdale Bank / Virgin Money UK (Glasgow HQ but Edinburgh-active across SME and mid-market) on Morningside, Stockbridge and Bruntsfield investment at 8.0 to 8.75% pa. <strong>InterBay Commercial</strong> (OSB Group) and <strong>LendInvest</strong> take the harder cases, short lease tail, secondary covenant, semi-commercial overlap, at 8.5 to 9.0% pa. High-street desks routinely decline retail with WAULT under three years; Together and InterBay Commercial are the realistic desks for that profile. A small minority of English-only challengers do not lend in Scotland at all; we filter those out at outset.',
    },
    faqs: [
      {
        question: "What LTV can I get on an Edinburgh retail investment mortgage?",
        answer: "Up to 75% LTV on let retail with strong national covenants and a long FRI lease. Semi-commercial shop-with-flat reaches 75% on the right archetype, common across Morningside, Bruntsfield and Stockbridge. Vacant retail or short leases (under three years tail) typically cap at 60 to 65%. Convenience-led with a supermarket covenant prices at the keenest end of the band.",
      },
      {
        question: "What ICR do retail lenders need?",
        answer: "Typical 140 to 160% stressed at a notional rate 1 to 2% above pay rate. Prime St James Quarter or Princes Street with a 10-year FRI to a national covenant sometimes funds at 130%. Morningside Road independent parade with mid-covenant sits at 150 to 160%. The stressed rate is the variable that catches borrowers out, the headline ICR on the actual rate often looks fine, but stressed it pulls the loan size down materially.",
      },
      {
        question: "Are retail rates wider than office or industrial investment in Edinburgh?",
        answer: "Retail typically prices 25 to 50bps wider than equivalent office investment in mid-2026, and 50 to 75bps wider than industrial. Convenience and food-led close that gap, supermarket-anchored retail prices closer to industrial than to comparison high-street. The St James Quarter prime stock prices at the keenest end of any Edinburgh retail bracket on the strength of the scheme covenant and national-multiple lettings.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant Edinburgh retail unit?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition plus refurbishment plus the re-letting period; exit is onto a term investment mortgage once the new lease is in place. The lender for the bridge will normally also be the term-out lender. We model both legs at outset so you know the all-in cost of the strategy before exchange of missives.',
      },
      {
        question: "How does the Scottish security framework affect retail lending?",
        answer: "The lender takes a <strong>standard security</strong> registered in the Land Register of Scotland under the Conveyancing and Feudal Reform (Scotland) Act 1970, rather than an English-style mortgage. Most major UK commercial lenders are perfectly happy with Scottish security and route the file to Scottish solicitors on their panel. A small minority of English-only challengers do not lend in Scotland; we identify those at outset rather than discovering them at credit. LBTT replaces SDLT on the purchase, with different commercial thresholds administered by Revenue Scotland.",
      },
    ],
  },

  // Office
  office: {
    slug: "office",
    name: "Office",
    metaTitle: "Office Commercial Mortgages Edinburgh | Charlotte Square, George Street, St Andrew Square, Lothian Road, Edinburgh Park, Quartermile",
    metaDescription:
      "Commercial mortgage finance for office property in Edinburgh, Charlotte Square premium townhouse, George Street, St Andrew Square (NatWest Group, abrdn), Lothian Road (Lloyds), Edinburgh Park (Parabola, Lloyds, abrdn, Diageo), Quartermile professional services, Haymarket West End. The deepest financial-services labour shed in the UK outside London. LTVs 65 to 75%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Office",
      h1: "Office Commercial Mortgages Edinburgh",
      lede:
        "Investment and owner-occupier mortgage finance for Edinburgh office property. Edinburgh is the second-largest financial centre in the United Kingdom after the City of London, and the office market reflects that. Charlotte Square holds the premium New Town townhouse stock, George Street the serviced and premium-independent freeholds, St Andrew Square the NatWest Group and abrdn cluster, Lothian Road the Lloyds Banking Group HQ, Edinburgh Park (Parabola) the institutional out-of-town stock anchored by Lloyds, abrdn and Diageo, Quartermile the professional-services and tech cluster, and Haymarket the West End office spine. Investment LTV 65 to 75%, owner-occupier to 75% on EBITDA cover, mid-2026 rates 7.0 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh office commercial mortgage",
      body: [
        "Edinburgh office is the deepest sector in the city's commercial mortgage market and the single strongest office market in the UK outside the City of London. The occupier base is dominated by financial services, NatWest Group at Gogarburn (around 8,000 staff) is registered in Edinburgh, Lloyds Banking Group occupies Lothian Road and Edinburgh Park, abrdn (Standard Life Aberdeen) anchors the St Andrew Square cluster, Diageo sits at Edinburgh Park, the Scottish Government occupies St Andrew's House and Victoria Quay, and Tesco Bank, Sky and a long professional-services tail fill out the demand layer. The commercial mortgage market splits seven ways. <strong>Charlotte Square (EH2)</strong> premium New Town townhouse offices, the highest small-cap office rents in Scotland. <strong>George Street (EH2)</strong> the New Town professional-services and serviced-office spine. <strong>St Andrew Square (EH2)</strong> NatWest Group registered office and the abrdn cluster around the square. <strong>Lothian Road and Exchange district (EH3)</strong> Lloyds Banking Group HQ, Standard Life building, Edinburgh International Conference Centre, the densest CBD financial-services tower stock. <strong>Edinburgh Park and South Gyle (EH12)</strong> Parabola's institutional out-of-town masterplan anchored by Lloyds, abrdn and Diageo, adjacent to Edinburgh Gateway tram-and-rail station. <strong>Quartermile (EH3)</strong> the former Royal Infirmary site redeveloped as mixed office, residential and academic (Edinburgh Futures Institute opened 2024). <strong>Haymarket and West End (EH3/EH12)</strong> West End professional-services freeholds plus the Haymarket station catchment.",
        "Investment underwriting tests <strong>ICR</strong> at 140 to 155% on let office stock. Tenant covenant carries even more weight than on retail, a five-year unbroken lease to a banking, asset-management or professional-services covenant prices materially better than the same building let on three two-year leases. Multi-let assets with rolling renewals price at the wider end. Owner-occupier office routes through the EBITDA-cover product at 1.3 to 1.5x, the law firm buying its Charlotte Square townhouse, the accountancy taking the freehold of its George Street office, the asset-management firm buying its St Andrew Square unit.",
        "<strong>Edinburgh Park</strong> is a discrete sub-pool. Parabola's masterplan adjacent to Edinburgh Gateway and the tram line combines large institutional office (Lloyds, abrdn, Diageo) with residential and life-sciences delivery in train. Valuations and lender comfort reflect the institutional-grade modern stock and the financial-services covenant strength. <strong>Charlotte Square</strong> needs heritage-comfortable lenders given the listed-building and conservation-area constraints on alteration, the New Town is part of the Edinburgh World Heritage site. <strong>Quartermile</strong> blends professional-services and tech occupier covenant with the University of Edinburgh academic anchor at the Edinburgh Futures Institute.",
        "Worked example: a George Street 5,600 sq ft office investment, £1.85M valuation, let on a 7-year FRI to a regional law firm at £125K passing rent. ICR at 145% sizes a £1.18M loan at 64% LTV; <strong>Lloyds</strong>, <strong>NatWest</strong>, Bank of Scotland and <strong>Santander</strong> all price this profile at 7.5 to 8.0% pa on a five-year fix. Worked example two: a Charlotte Square heritage office freehold purchase by an asset-management firm, £950K, EBITDA cover 1.4x. Owner-occupier route at 70% LTV places with Allica Bank or <strong>Shawbrook</strong> at 7.5 to 8.25% pa.",
      ],
    },
    schemeTypes: {
      h2: "Office asset types we fund",
      items: [
        { label: "Charlotte Square premium townhouse (EH2)", detail: "Listed New Town townhouse offices, the highest small-cap office rents in Scotland. Premium law, asset-management and professional-services occupier base; heritage-comfortable lenders only." },
        { label: "George Street and St Andrew Square (EH2)", detail: "George Street New Town professional-services freeholds and serviced-office spine; St Andrew Square the NatWest Group and abrdn cluster. Premium and institutional stock combined." },
        { label: "Lothian Road and Exchange district (EH3)", detail: "Lloyds Banking Group HQ, Standard Life building, Edinburgh International Conference Centre. The densest CBD financial-services tower stock in Scotland." },
        { label: "Edinburgh Park and South Gyle (EH12)", detail: "Parabola's institutional out-of-town masterplan adjacent to Edinburgh Gateway tram-and-rail station. Anchored by Lloyds, abrdn and Diageo." },
        { label: "Quartermile (EH3)", detail: "Former Royal Infirmary site redeveloped as mixed office, residential and academic. Professional-services, tech and the Edinburgh Futures Institute anchor." },
        { label: "Haymarket and West End (EH3/EH12)", detail: "West End professional-services freeholds plus the Haymarket station catchment. Mid-cap office bracket; £400K to £2M typical." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh office",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant or value-add via bridge-to-let with an agreed term-out. Serviced and licence-let stock routes through specialist desks. Security is a standard security in the Land Register of Scotland.",
      structures: standardStructures,
    },
    edinburghContext: {
      h2: "The Edinburgh office estate",
      body: 'Edinburgh office is shaped by the second-deepest financial-services labour shed in the United Kingdom. NatWest Group is registered in Edinburgh (Gogarburn HQ, around 8,000 staff), Lloyds Banking Group occupies Lothian Road and Edinburgh Park, abrdn (Standard Life Aberdeen) anchors the St Andrew Square cluster, Diageo sits at Edinburgh Park, and a long tail of asset managers, life and pensions firms, law firms and professional services fills out the demand layer. <strong>Charlotte Square (EH2)</strong> carries the premium New Town townhouse stock with the highest small-cap office rents in Scotland; the listed Georgian terraces sit within the Edinburgh World Heritage site. <strong>George Street and St Andrew Square (EH2)</strong> run the New Town professional-services and financial-services spine, with the NatWest Group registered office and the abrdn cluster around the square. <strong>Lothian Road and the Exchange district (EH3)</strong> hold the densest CBD financial-services tower stock anchored by the Lloyds Banking Group HQ, the Standard Life building and the Edinburgh International Conference Centre. <strong>Edinburgh Park and South Gyle (EH12)</strong> at Parabola\'s out-of-town masterplan combine institutional office (Lloyds, abrdn, Diageo) with the tram-and-rail Edinburgh Gateway station, life-sciences delivery and a maturing mixed-use pipeline. <strong>Quartermile (EH3)</strong> redevelops the former Royal Infirmary site as mixed office, residential and academic, with the University of Edinburgh\'s Edinburgh Futures Institute (opened 2024) anchoring the academic side. <strong>Haymarket and West End (EH3/EH12)</strong> covers West End freeholds and the Haymarket station catchment. The structural supply position is steady, central CBD owner-occupier demand outstrips speculative supply, and refinancing flow across the financial-services stock is a meaningful share of total commercial mortgage volume. The Scottish security overlay (standard security in the Land Register of Scotland) is well understood by all major UK commercial desks lending in Scotland.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh office",
      body: 'Strong on prime let stock with financial-services and professional-services covenants and unexpired lease term over five years, particularly Charlotte Square, George Street and Edinburgh Park institutional profile. Mid-strength on secondary CBD with mid-covenant tenants on shorter leases. Tighter, but still fundable, on vacant or part-let secondary office routed through bridge-to-let with a credible refurbishment story. <strong>NatWest</strong>, <strong>Lloyds</strong>, Bank of Scotland, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment at 7.0 to 7.75% pa for 65% LTV with strong covenants, all running Scottish desks on Lothian Road, St Andrew Square or Gogarburn. Clydesdale Bank / Virgin Money UK (Glasgow HQ, Edinburgh-active across SME and mid-market) holds a notable Scottish challenger book. Allica Bank, <strong>Shawbrook</strong>, HTB, YBS Commercial and Cambridge & Counties cover mid-market at 7.75 to 8.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> handle secondary, short-lease and refurb-to-let stories at 8.25 to 9.0% pa. Edinburgh Park institutional stock with conventional FRI lettings sits on the standard panel; Charlotte Square heritage stock routes through heritage-comfortable lenders only.',
    },
    faqs: [
      {
        question: "What LTV can I get on an Edinburgh office investment?",
        answer: "Up to 75% LTV on strong-covenant let stock with five-plus years unexpired. ICR cover tested at 140 to 155% stressed. Vacant or short-lease assets cap at 60 to 65% LTV. WAULT under three years usually pulls the loan to 60% even where the building is otherwise well-let. Charlotte Square and St Andrew Square premium freeholds with a financial-services or professional-services covenant price at the keenest end of the band.",
      },
      {
        question: "Is post-Covid Edinburgh office stock still fundable?",
        answer: "Yes. Edinburgh's financial-services labour shed has held up better than English regional cities through the post-Covid working-pattern shift, the back-office, asset-management and life-and-pensions occupier base maintained four-and-five-day office attendance more consistently than equivalent occupiers elsewhere. Edinburgh Park, Lothian Road and the New Town spine continue to absorb demand. Bridge-to-let funds acquisition plus refurbishment plus re-letting where stock needs reposition; specialists like Shawbrook, LendInvest and HTB have appetite for genuine refurbishment stories with credible exit lettings.",
      },
      {
        question: "Edinburgh Park office purchase, can you fund it?",
        answer: "Yes, where the asset is let on conventional FRI to a strong covenant such as Lloyds, abrdn, Diageo or a peer financial-services occupier, or owner-occupied by a strong-covenant business. Edinburgh Park is well-known to Scottish underwriters; the institutional-grade modern stock and financial-services covenant base support keen pricing. Above £5M the deal typically routes through structured commercial debt outside the standard broker panel.",
      },
      {
        question: "What about owner-occupier office purchase on George Street?",
        answer: 'Routes via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier commercial mortgage</a>. EBITDA cover 1.3 to 1.5x; LTV up to 75%; rate 7.0 to 8.25% pa for strong covenants. The asset-management firm, law firm or accountancy taking the freehold of its existing leased George Street or Charlotte Square building is the archetypal deal, typically £500K to £2M facility.',
      },
      {
        question: "Are Charlotte Square heritage offices fundable?",
        answer: "Yes, but the lender pool narrows. Listed New Town townhouse offices on Charlotte Square sit within the Edinburgh World Heritage site and route through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Allica Bank, Bank of Scotland. Slightly tighter LTV (typically 65% rather than 70%) reflecting listed-building consent constraints on alteration; otherwise comparable terms to non-listed stock. Pricing typically 7.75 to 8.5% pa at 65 to 70% LTV.",
      },
    ],
  },

  // Industrial / warehouse
  "industrial-warehouse": {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse",
    metaTitle: "Industrial Commercial Mortgages Edinburgh | Sighthill, Newbridge, Airport Fringe, M8 Corridor",
    metaDescription:
      "Commercial mortgage finance for industrial and warehouse property in Edinburgh, Sighthill industrial and commercial estate, Newbridge, Edinburgh Airport adjacent industrial fringe, M8 corridor. Smaller industrial base than English cities but solid M8 and A8 connectivity. Mid-2026 rates 6.0 to 7.75% pa.",
    hero: {
      eyebrow: "Industrial & warehouse",
      h1: "Industrial and Warehouse Commercial Mortgages Edinburgh",
      lede:
        "Investment and owner-occupier finance for B2/B8 industrial property and trade-counter units in Edinburgh. The city carries a smaller industrial base than equivalent English regional cities, reflecting its capital-city, financial-services and tourism economy, but the Sighthill industrial and commercial estate, Newbridge, the Edinburgh Airport adjacent industrial fringe and the M8 corridor west into West Lothian carry the bulk of the stock. M8 connectivity links the Edinburgh industrial pool to the wider Central Belt logistics market shared with Glasgow. Investment LTV to 75%, owner-occupier to 75%, rates 6.0 to 7.75% pa.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "6.0 to 7.75% pa" },
        { label: "Facility", value: "£250K to £8M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh industrial commercial mortgage",
      body: [
        "Edinburgh's industrial base is smaller than equivalent English regional cities, the city's economy is dominated by financial services, tourism and higher education rather than manufacturing or large-scale distribution. That said, a coherent industrial market sits on the western and southern fringes serving the city's own demand and feeding the wider Central Belt logistics shed shared with Glasgow via the M8. The practical split runs four ways. <strong>Sighthill industrial and commercial estate (EH11)</strong> the densest single industrial cluster in the city, mid-cap B2/B8 stock plus trade-counter, on the western fringe with M8 access. <strong>Newbridge (EH28)</strong> just outside the city boundary to the west, mid-and-large-cap industrial and distribution stock on the M9/M8 interchange. <strong>Edinburgh Airport adjacent industrial fringe (EH12/EH28)</strong> airport-adjacent freight, logistics and aviation-supply stock. <strong>M8 corridor west into West Lothian</strong> not strictly Edinburgh but priced as part of the same labour shed, Livingston, Bathgate and the wider Central Belt logistics pool.",
        "Industrial enjoys broad lender competition nationally in mid-2026 because the asset class has performed consistently well through 2022 to 2026. Edinburgh stock benefits from the Central Belt logistics shed and the airport-fringe demand layer, though it does not carry the volume seen in English distribution-corridor cities. Investment LTVs of 75% are achievable on strong-covenant let assets with five-plus years unexpired; owner-occupier 70 to 75% on businesses with two years' clean accounts and EBITDA cover of 1.3 to 1.5x. Deal sizes range widely, central Edinburgh owner-occupier industrial sits in the £300K to £1.5M bracket; the larger Sighthill and Newbridge B8 sheds reach £3M to £8M.",
        "<strong>Lenders price the Central Belt as one market.</strong> Large logistics operators treat Edinburgh, Livingston, Falkirk and Glasgow as a single labour shed via the M8; valuers pull comparables across the corridor and credit committees price the corridor not the city. The aviation-adjacent layer at the Edinburgh Airport fringe is distinct, freight, ground-handling and aviation-supply occupiers carry their own demand layer that lenders price favourably given the long-tenured contracts.",
        "Worked example: a Sighthill industrial unit, 32,000 sq ft, let on an 8-year FRI to a Central Belt distributor, £4.2M valuation, £305K passing rent. ICR at 140% on a 7.2% pa stressed rate sizes a loan to roughly £3.0M, about 71% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong>, Bank of Scotland and <strong>Barclays</strong> all compete on this profile at 6.75 to 7.25% pa on a five-year fix. Worked example two: a Newbridge light-industrial trade-counter unit, 9,500 sq ft, owner-occupier purchase by an existing operator, £1.35M valuation, EBITDA cover 1.55x. Placed with <strong>Lloyds</strong> at 70% LTV, 6.45% pa, 20-year term.",
      ],
    },
    schemeTypes: {
      h2: "Industrial asset types we fund",
      items: [
        { label: "Sighthill industrial and commercial estate (EH11)", detail: "The densest single industrial cluster in the city, mid-cap B2/B8 stock plus trade-counter, on the western fringe with M8 access. £300K to £3M unit values typical." },
        { label: "Newbridge mid-and-large-cap industrial (EH28)", detail: "Just outside the city boundary to the west, on the M9/M8 interchange. Mid-and-large-cap industrial and distribution stock; £1M to £8M facility bracket." },
        { label: "Edinburgh Airport adjacent industrial fringe", detail: "Airport-adjacent freight, logistics and aviation-supply stock around the EH12 and EH28 corridor. Strong covenant overlay from aviation-supply chain occupiers." },
        { label: "M8 corridor West Lothian", detail: "Livingston, Bathgate and the wider Central Belt logistics pool. Not strictly Edinburgh but priced as part of the same labour shed via the M8." },
        { label: "Inner-city light industrial and trade-counter", detail: "Small-cap urban light-industrial and trade-counter stock across the western and southern Edinburgh fringes. Owner-occupier dominated, £300K to £1.5M bracket." },
        { label: "Owner-occupier SME industrial", detail: "Engineering, food production, distribution and Central Belt service SMEs buying their workshop or warehouse, the £300K to £1.5M bracket. EBITDA-led owner-occupier route." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh industrial",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant industrial via bridge-to-let. Multi-let estate portfolios consolidate via portfolio refinance. Security is a standard security in the Land Register of Scotland.",
      structures: standardStructures,
    },
    edinburghContext: {
      h2: "The Edinburgh industrial estate",
      body: 'Edinburgh\'s industrial base reflects the city\'s capital-city, financial-services and tourism economy. Total industrial floorspace is materially smaller than equivalent English regional cities, the city does not carry a logistics-corridor anchor on the scale of the M6, M1 or M62, and large-scale distribution serving central Scotland mostly clusters on the M8 west of the city around Livingston, Bathgate and into Lanarkshire. Within the City of Edinburgh boundary, <strong>Sighthill industrial and commercial estate (EH11)</strong> on the western fringe is the densest single industrial cluster, mid-cap B2/B8 stock plus trade-counter with M8 access. <strong>Newbridge (EH28)</strong> just outside the city boundary to the west on the M9/M8 interchange carries mid-and-large-cap industrial and distribution stock and trades as part of the Edinburgh industrial market. The <strong>Edinburgh Airport adjacent industrial fringe</strong> (EH12/EH28) provides airport-adjacent freight, logistics and aviation-supply stock with strong covenant overlay from aviation-supply occupiers. The wider M8 corridor through West Lothian (Livingston, Bathgate) trades as part of the same Central Belt labour shed, and Scottish industrial lenders routinely pull comparables from across that corridor. The structural picture is steady rather than fast-growing, lender appetite is healthy on covenant-strong stock but the volume of deals is materially lower than equivalent industrial markets in English regional cities. The Scottish security overlay (standard security in the Land Register of Scotland) is well understood by all major UK commercial industrial desks.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh industrial",
      body: 'Strong across the asset class, one of the most competitive lender pools of any sector even given the smaller absolute volume. <strong>NatWest</strong>, <strong>Lloyds</strong>, Bank of Scotland, <strong>Barclays</strong> and <strong>Santander</strong> all compete on prime let industrial at Sighthill, Newbridge and the airport fringe at 6.5 to 7.5% pa, 65 to 75% LTV with strong covenants. Larger institutional B8 sheds above £5M facility size often route through Lloyds Real Estate Banking or Barclays Corporate Real Estate, the Glasgow desks cover most Edinburgh industrial deals. Clydesdale Bank / Virgin Money UK (Glasgow HQ, Edinburgh-active across SME and mid-market) is a notable Scottish challenger active on industrial owner-occupier. Allica Bank, <strong>Shawbrook</strong>, HTB, YBS Commercial and Cambridge & Counties dominate mid-market and owner-occupier industrial at 6.5 to 7.75% pa. <strong>InterBay Commercial</strong>, Together and Aldermore take the multi-let and value-add cases at 7.5 to 8.25% pa. Owner-occupier industrial enjoys best-in-class pricing of any sector, 6.0 to 7.25% pa for SMEs with two years\' clean accounts, EBITDA cover 1.3 to 1.5x. The Central Belt labour-shed dynamic means underwriters routinely pull comparables from Livingston, Bathgate and Glasgow.',
    },
    faqs: [
      {
        question: "What rate can I get on Edinburgh industrial investment?",
        answer: "Currently 6.0 to 7.75% pa for prime let industrial with strong covenants and five-plus years unexpired. Larger institutional B8 sheds at Sighthill, Newbridge and the airport fringe with national-logistics covenants price at the keenest end. Trade-counter with national covenant prices at 7.0 to 7.5%. Owner-occupier industrial with two years' clean accounts prices at 6.0 to 7.25% pa, the keenest pricing of any commercial sector.",
      },
      {
        question: "Can I fund an owner-occupier industrial purchase at Sighthill or Newbridge?",
        answer: 'Yes, typically 70 to 75% LTV on strong-covenant SME buyers via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a>. EBITDA cover 1.3 to 1.5x. Allica Bank, Shawbrook and Cambridge & Counties are the most active mid-market owner-occupier desks; Lloyds, NatWest, Bank of Scotland and Barclays compete on the larger end where borrowing is above £1M and the covenant is strong. Sighthill and Newbridge are well-known to Scottish underwriters as modern, well-located Central Belt stock.',
      },
      {
        question: "How do lenders price the M8 corridor?",
        answer: "As one Central Belt market. Large logistics operators treat Edinburgh, Livingston, Falkirk and Glasgow as a single labour shed via the M8, and lenders follow them. Valuers pull comparables across the corridor and credit committees price the corridor not the city. Edinburgh industrial volumes are lower than English distribution-corridor cities but pricing is competitive because the corridor as a whole reads as institutional-grade Central Belt logistics.",
      },
      {
        question: "Is the industrial base big enough to support lender competition?",
        answer: "Yes, despite being smaller than English regional cities, Edinburgh attracts every major UK commercial industrial desk. The Central Belt comparable pool plus the airport-fringe and Sighthill/Newbridge clusters give lenders sufficient transactional evidence to price competitively. Smaller deal volume in absolute terms but lender competition for the deals that do come to market is strong, particularly on owner-occupier industrial.",
      },
      {
        question: "Does Scottish security affect industrial lending?",
        answer: "Not materially in practice. The standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, is well understood by all major UK commercial industrial desks. Files route to Scottish solicitors on the lender's panel rather than English solicitors; timelines and cost are broadly comparable. A small minority of English-only challengers do not lend in Scotland; we identify those at outset.",
      },
    ],
  },

  // Leisure & hospitality
  "leisure-hospitality": {
    slug: "leisure-hospitality",
    name: "Leisure & Hospitality",
    metaTitle: "Leisure Commercial Mortgages Edinburgh | Royal Mile, Old Town, Charlotte Square Hotels, Grassmarket, George Street, Leith",
    metaDescription:
      "Trading-business commercial mortgage finance for leisure and hospitality property in Edinburgh, Old Town and Royal Mile heritage hotels and pubs, Charlotte Square boutique hotels, George Street (The Balmoral, Waldorf Astoria Caledonian, Kimpton, Gleneagles Townhouse), Grassmarket, Cowgate, Leith F&B. 13M festival visitors, year-round tourism. EBITDA, occupancy and RevPAR underwriting. LTVs 60 to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Leisure & hospitality",
      h1: "Leisure and Hospitality Commercial Mortgages Edinburgh",
      lede:
        "Trading-business and investment finance for hotels, aparthotels, restaurant-led leisure and F&B-anchored venues across Edinburgh. Edinburgh is the most active urban hospitality market in Scotland and one of the deepest in the United Kingdom, the Edinburgh Festival, the Fringe, Hogmanay and a continuous year-round visitor footfall through the Old Town and Royal Mile generate around 13 million visitors annually. The Old Town and Royal Mile carry the heritage hotel and pub stock, Charlotte Square holds the New Town boutique hotels, George Street runs the premium hotel spine (The Balmoral, Waldorf Astoria Caledonian, Kimpton Charlotte Square, Gleneagles Townhouse), Grassmarket and Cowgate handle the late-night trade, and Leith carries the regeneration F&B corridor. Brand affiliation, operator track record and Festival-week revenue concentration all matter materially. LTVs 60 to 70%, rates 7.0 to 9.0% pa. <strong>Cynergy Bank</strong> is the most active named lender for Edinburgh independent hospitality.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£500K to £20M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh leisure or hospitality commercial mortgage",
      body: [
        "Leisure and hospitality is the most operator-led segment of the commercial mortgage market, and Edinburgh is one of the deepest urban hospitality markets in the United Kingdom. Underwriting tests <strong>EBITDA cover</strong> at 1.5 to 2.0x, wider than mainstream owner-occupier, because trading is more volatile and recovery on default depends more on goodwill and operator continuity than on bricks-and-mortar value alone. The headline metrics a lender reads first are <strong>occupancy</strong>, <strong>ADR (average daily rate)</strong> and <strong>RevPAR (revenue per available room)</strong> for hotels and aparthotels; for gyms and F&B venues it is membership retention or covers per session against operating margin.",
        "Edinburgh's hospitality story is built on three demand drivers. <strong>Edinburgh Festival and Fringe (July to August)</strong> the largest urban arts festival in the world, around 13 million annual visitors with a sharp July-August peak; festival-week ADR routinely runs at two to three times annual average and a meaningful share of annual EBITDA is earned in those eight weeks. <strong>Year-round Old Town and Royal Mile tourism</strong> Edinburgh Castle, the Royal Mile, Holyrood Palace and the World Heritage spine sustain a deep year-round visitor base outside Festival peaks. <strong>Business and financial-services demand</strong> NatWest Group, Lloyds, abrdn, the Scottish Government, the financial-services occupier base and the conference market at the Edinburgh International Conference Centre support mid-week corporate-stay and conference demand twelve months a year. Hotels split sharply by location and by brand affiliation. <strong>Old Town and Royal Mile (EH1)</strong> heritage hotels and pubs, listed and conservation-area stock at the heart of the World Heritage site. <strong>Charlotte Square (EH2)</strong> premium boutique hotels (Kimpton Charlotte Square, Gleneagles Townhouse) in the New Town townhouse stock. <strong>George Street (EH2)</strong> the premium hotel spine, The Balmoral at the east end, the Waldorf Astoria Caledonian at the west end. <strong>Grassmarket and Cowgate (EH1)</strong> late-night pub and bar trade. <strong>Leith (EH6)</strong> The Shore, Constitution Street and Leith Walk F&B corridor on the back of the regeneration and the tram extension. <strong>Branded franchise hotels</strong> price materially better than independents; branded budget freehold prices at 7.5 to 8.5% pa at 65% LTV, independent boutique hotels in the same size band sit at 8.5 to 9.0% pa at 60 to 65% LTV.",
        "Worked example: a 78-bed branded franchise mid-scale hotel in the Old Town, £8.2M valuation, EBITDA £1.15M. <strong>Shawbrook</strong> placed at 65% LTV, 7.25% pa, 25-year term, EBITDA cover 1.85x. Worked example two: an independent 32-bed Charlotte Square boutique hotel in a listed New Town townhouse, £4.6M valuation, EBITDA £590K. Independent route is narrower, <strong>Cynergy Bank</strong> is the lead named lender, OakNorth and Allied Irish Bank UK also realistic. Placed at 60% LTV, 8.85% pa, 20-year term, EBITDA cover 1.75x, with heritage-comfortable lender comfort on the listed status. Festival-week revenue concentration was modelled on a 12-month occupancy and ADR curve so the seasonality story sat explicitly in the credit submission.",
        "Bars and licensed F&B venues route through licensed-trade specialist desks, see also our <a href=\"/property-types/pub-restaurant\">pub and restaurant page</a>. Grassmarket, Cowgate, George Street and Leith carry the bulk of Edinburgh's mid-scale F&B operator activity. Gyms split between corporate chain (PureGym, The Gym Group, corporate-financed, not brokered) and independent / small-chain operators where commercial mortgage lenders test membership economics and equipment depreciation alongside EBITDA. The Scottish security overlay (standard security) is well understood by every active hospitality lender.",
      ],
    },
    schemeTypes: {
      h2: "Leisure and hospitality assets we fund",
      items: [
        { label: "Old Town and Royal Mile heritage hospitality (EH1)", detail: "Hotels and pubs in the World Heritage Old Town spine, listed and conservation-area stock. Heritage-comfortable lenders only; tightest covenants on Festival-week trading record." },
        { label: "Charlotte Square boutique hotels (EH2)", detail: "Premium boutique hotels in listed New Town townhouse stock (Kimpton Charlotte Square, Gleneagles Townhouse). Heritage-comfortable lenders; institutional-grade independents." },
        { label: "George Street premium hotels (EH2)", detail: "The premium hotel spine, The Balmoral at the east end, the Waldorf Astoria Caledonian at the west end. Institutional-scale assets; structured-debt territory above £15M." },
        { label: "Branded franchise hotels (Old Town, Haymarket, Leith)", detail: "Mid-scale branded franchise stock (Premier Inn, Travelodge, mid-market branded) across the city. Brand affiliation tightens pricing." },
        { label: "Grassmarket and Cowgate late-night (EH1)", detail: "Late-night pub, bar and club trade in the Old Town. Specialist licensed-trade desks; barrelage and licensing track record matter materially." },
        { label: "Leith F&B corridor (EH6)", detail: "The Shore, Constitution Street and Leith Walk F&B on the back of the regeneration and tram extension. Mid-scale independent operators; rising rents and operator demand." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh leisure",
      intro:
        "Trading-business mortgage is the primary route for owner-operated leisure assets, on EBITDA cover. Investment mortgage applies where the asset is let on FRI to a brand or operator covenant. Bridge-to-let funds vacant hotel acquisition with refurbishment and repositioning before income stabilisation. Security is a standard security in the Land Register of Scotland.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator hotels, gyms, aparthotels, leisure venues, EBITDA, occupancy and ADR underwritten. Festival-week seasonality modelled explicitly." },
        { product: "Commercial investment mortgage", applicability: "Where the asset is let on FRI to a brand or operator covenant, Premier Inn franchise on a 25-year lease for instance." },
        { product: "Commercial bridge-to-let", applicability: "Vacant hotel acquisition with refurbishment or repositioning before income stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing leisure freehold, typically funding an extension, refurbishment programme or onward acquisition." },
      ],
    },
    edinburghContext: {
      h2: "The Edinburgh leisure economy",
      body: 'Edinburgh\'s leisure economy is one of the deepest urban hospitality markets in the United Kingdom and the deepest in Scotland. The Edinburgh Festival and Fringe in July and August are the largest urban arts festivals in the world, generating concentrated peak demand that materially shapes annual hotel revenue, festival-week ADR routinely runs at two to three times annual average and the eight festival weeks can account for a quarter of annual EBITDA for centrally-located hotels. Year-round tourism through the World Heritage Old Town and Royal Mile (Edinburgh Castle, Royal Mile, Holyrood Palace) plus Hogmanay add a steady twelve-month demand layer. Business and conference traffic tied to NatWest Group, Lloyds, abrdn, the Scottish Government and the Edinburgh International Conference Centre supports mid-week corporate-stay demand. The <strong>Old Town and Royal Mile (EH1)</strong> carries heritage hotels and pubs in the listed World Heritage spine. <strong>Charlotte Square (EH2)</strong> holds premium boutique hotels in listed New Town townhouse stock (Kimpton Charlotte Square, Gleneagles Townhouse). <strong>George Street (EH2)</strong> runs the premium hotel spine, The Balmoral at the east end, the Waldorf Astoria Caledonian at the west end, alongside premium F&B. <strong>Grassmarket and Cowgate (EH1)</strong> handle the late-night Old Town trade. <strong>Leith (EH6)</strong> with The Shore, Constitution Street and Leith Walk has become the dominant F&B regeneration corridor on the back of the tram extension. Listed-building consent through Edinburgh World Heritage runs alongside Edinburgh Council planning on hotel conversions. The Scottish short-term lets licensing scheme (in force since 2022) overlaps with serviced-apartment hotel formats and is referenced explicitly in lender underwriting for any operator with FHL adjacency.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh leisure",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Edinburgh independent hospitality, the bank holds a deep Scottish independent-hotel book and will look at deals other lenders decline. Branded franchise hotels well-served by <strong>Shawbrook</strong>, Cambridge & Counties, Allica Bank, Bank of Scotland and selectively HTB, typical 7.5 to 8.5% pa at 65% LTV with EBITDA cover 1.7x+. Independent hotels narrower, Cynergy Bank, OakNorth, Allied Irish Bank UK and Metro Bank are the realistic desks; structured-debt above £10M routes through the institutional desks at Lloyds, NatWest, Bank of Scotland and ASK Partners. Aparthotels hotel-comfortable lenders only; appetite has narrowed selectively since the Scottish short-term lets licensing scheme came into force in 2022, lenders now require explicit confirmation of operating licence and verification that the operating model sits within the licensable framework rather than alongside it. Bars and licensed venues route through Cynergy Bank and specialist licensed-trade desks; Grassmarket, Cowgate and Leith carry the bulk of the activity. Independent gym and fitness narrower still, Cynergy Bank and Together for the trickier cases. High-street commercial desks (NatWest, Lloyds, Barclays, Bank of Scotland) typically decline trading-business hotel and gym; they will look at branded-hotel investment let on FRI to a brand covenant. Clydesdale Bank / Virgin Money UK is selectively active on Scottish hospitality.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on an Edinburgh independent hotel?",
        answer: "Yes, typically 60 to 65% LTV on independent hotels with two-plus years' trading and EBITDA cover at 1.7x or better. Specialist underwriting on EBITDA, occupancy and ADR. Cynergy Bank is the most active named lender for Edinburgh independents; OakNorth and Allied Irish Bank UK also realistic. Mid-2026 rates 8.5 to 9.0% pa for the 22 to 50 bed bracket; pricing tightens on larger independents with stronger track record. Festival-week revenue concentration is a positive on the underwriting story but we model the full 12-month occupancy and ADR curve so the lender sees seasonality explicitly.",
      },
      {
        question: "What about pubs and bars specifically?",
        answer: 'See our dedicated <a href="/property-types/pub-restaurant">pub and restaurant commercial mortgage page</a>, these route through licensed-trade specialist desks (Cynergy Bank, ASK Partners) with barrelage, beer-tie status and freehold-versus-leasehold all material. Grassmarket, Cowgate, George Street and Leith carry the bulk of the trade.',
      },
      {
        question: "How is an Edinburgh hotel valued for lending?",
        answer: "Specialist RICS valuer using EBITDA-multiple methodology, typically 7 to 9x EBITDA for branded franchise, 5 to 7x for independent. Bricks-and-mortar value calculated separately and the lender takes the lower of the two figures. Brand affiliation typically adds 1.5 to 2x to the EBITDA multiple; AA Rosettes and Visit Scotland rating influence the multiple at the margin. Old Town, New Town and Charlotte Square bricks-and-mortar values tend to be high enough that the going-concern valuation rarely undershoots, the World Heritage location underpins floors.",
      },
      {
        question: "Aparthotel, investment mortgage or trading-business?",
        answer: "Depends on the operating structure. Where the asset is let on a long FRI lease to the operator brand (a national aparthotel operator takes a 25-year FRI on the building, runs the operations, pays rent), it is investment, ICR-led at 140 to 150%. Where the owner operates the aparthotel themselves under a soft franchise or marketing agreement, it is trading-business, EBITDA-led at 1.5 to 2.0x cover. Edinburgh has both formats active, particularly around the Old Town, Haymarket and Charlotte Square. Note the Scottish short-term lets licensing scheme (in force since 2022) affects which operating structures lenders treat as hotel rather than FHL.",
      },
      {
        question: "How does Festival-week concentration affect underwriting?",
        answer: "Lenders model it explicitly. Festival-week ADR typically runs at two to three times annual average, and a meaningful share of annual EBITDA is earned in those eight weeks. Underwriters look for a credible operator track record across multiple Festival cycles, evidence that off-peak occupancy holds the property through November to February, and a forward booking position. Strong-week ADR matters as much as headline annual figure. We submit a full 12-month occupancy and ADR curve so the seasonality story is explicit rather than buried in the headline.",
      },
    ],
  },

  // Healthcare / care home
  "healthcare-care-home": {
    slug: "healthcare-care-home",
    name: "Healthcare & Care Home",
    metaTitle: "Care Home Commercial Mortgages Edinburgh | Care Inspectorate, Royal Infirmary Halo, BioQuarter, Western General, Morningside",
    metaDescription:
      "Trading-business commercial mortgage finance for care homes and healthcare property in Edinburgh, Edinburgh Royal Infirmary at Little France (NHS Lothian, BioQuarter halo), Western General, Morningside and Bruntsfield retirement and care home cluster, private healthcare cluster at Murrayfield. Care Inspectorate grade-led underwriting. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Healthcare & care home",
      h1: "Care Home and Healthcare Commercial Mortgages Edinburgh",
      lede:
        "Trading-business and investment finance for elderly care, nursing, specialist care, dental, GP, veterinary and private healthcare property across Edinburgh. The Edinburgh Royal Infirmary at Little France anchors NHS Lothian and the BioQuarter life-sciences cluster; the Western General in the north-west and Murrayfield (Spire Murrayfield Hospital) in the west add the major hospital anchors. Care home activity concentrates in the Morningside, Bruntsfield, Corstorphine and Murrayfield retirement-rich southern and western suburbs. Care Inspectorate grade is the single most important underwriting variable. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa. <strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> lead the specialist panel.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh care home or healthcare commercial mortgage",
      body: [
        "Care homes and healthcare are the most regulator-shaped commercial mortgage sector. In Scotland the regulator is the <strong>Care Inspectorate</strong> (not the Care Quality Commission, which covers England), and lender appetite tracks Care Inspectorate grades closely. The Care Inspectorate uses a six-point grading scale (1 unsatisfactory to 6 excellent) across quality of care, environment, staffing and leadership. Lenders look for sustained grades of 4 (good) or above across all themes; a single grade of 2 (weak) or below in the last two inspection cycles typically pulls the deal off the panel for mainstream lenders.",
        "The underwriting test is <strong>EBITDA cover</strong> at 1.5 to 2.0x against the mortgage payment. Sector-specific variables matter as much as the cover ratio. <strong>Occupancy</strong> the share of beds filled, lenders look for sustained 88% plus across the trading book. <strong>Fee mix</strong> the proportion of self-funded versus local-authority-funded residents; self-funded is treated as higher-quality income because Edinburgh and the Lothians self-fund rate is one of the highest in Scotland. <strong>Staffing ratio and turnover</strong> Care Inspectorate inspection findings drift quickly on staffing pressure. <strong>Physical stock quality</strong> en-suite room ratio, communal space, sprinkler compliance under the Scottish Fire and Rescue regime.",
        "Edinburgh care home activity concentrates in the affluent retirement suburbs. <strong>Morningside and Bruntsfield (EH9/EH10)</strong> the densest single retirement-rich catchment, premium care homes serving high self-funded fee rates. <strong>Murrayfield and Corstorphine (EH12)</strong> the western suburban care home cluster, anchored by the Spire Murrayfield Hospital private healthcare presence. <strong>Inverleith, Stockbridge and Trinity (EH3/EH4/EH5)</strong> further northern retirement catchment. <strong>Edinburgh BioQuarter halo (EH16)</strong> the Royal Infirmary, Royal Hospital for Children and Young People, and the broader life-sciences cluster at Little France support healthcare property demand on the southern edge. <strong>Western General catchment (EH4)</strong> NHS Lothian hospital anchor in the north-west supports GP, dental and allied healthcare property demand.",
        "Worked example: a 52-bed Morningside care home, Care Inspectorate grades 5/5/5/4 across the latest cycle, 91% occupancy, 78% self-funded fee mix, £6.4M valuation, EBITDA £820K. <strong>Shawbrook</strong> placed at 65% LTV, 7.85% pa, 25-year term, EBITDA cover 1.85x. Worked example two: a Murrayfield single-site dental practice with attached freehold, £950K valuation, EBITDA £165K. <strong>Cynergy Bank</strong> placed at 70% LTV, 8.25% pa, 20-year term, EBITDA cover 1.7x. NHS GP and dental freeholds with substantive NHS contract income often route at the keenest end of the band given the contract covenant.",
      ],
    },
    schemeTypes: {
      h2: "Healthcare and care home assets we fund",
      items: [
        { label: "Elderly residential and nursing care home", detail: "The core sector. Edinburgh self-funded fee mix is among the highest in Scotland, supporting strong fee rates and EBITDA. Care Inspectorate grade is the lead variable." },
        { label: "Specialist care (learning disability, dementia, mental health)", detail: "Higher-fee per-bed economics, often with local-authority block contract income. Care Inspectorate grade and contract counterparty both matter." },
        { label: "Dental practice freehold (NHS and private)", detail: "Morningside, Murrayfield, Corstorphine, Stockbridge and Inverleith private practice freeholds plus NHS-mix practices across the city. Strong covenant on NHS contract income." },
        { label: "GP surgery and primary care", detail: "NHS Lothian primary-care estate plus owner-occupier GP partnership freeholds. NHS contract covenant tightens pricing materially." },
        { label: "Veterinary practice", detail: "Independent and group veterinary freeholds, owner-occupier dominated. EBITDA-led underwriting, often with VetPartners or Independent Vetcare group-acquisition overlay." },
        { label: "Private hospital, clinic and aesthetics", detail: "Spire Murrayfield Hospital and adjacent private healthcare cluster, clinical specialist freeholds. Specialist underwriting, often outside the broker panel above £5M." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh healthcare",
      intro:
        "Trading-business mortgage is the primary route for owner-operated care homes and clinical practices. Investment mortgage applies where the asset is let on FRI to an operator covenant. Bridge-to-let funds care home acquisition with regulatory transfer (Care Inspectorate registration takes 8 to 12 weeks). Security is a standard security in the Land Register of Scotland.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator care homes, dental, GP, veterinary, private clinic. EBITDA-led at 1.5 to 2.0x cover. Care Inspectorate grade overlay on care homes." },
        { product: "Commercial investment mortgage", applicability: "Care home let on FRI to an operator, NHS-let primary-care premises, dental-group-let practice freehold. ICR-led at 140 to 155%." },
        { product: "Commercial bridge-to-let", applicability: "Care home acquisition with Care Inspectorate registration transfer period (8 to 12 weeks) before term trading-business mortgage drawdown." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing healthcare freehold, typically funding extension, refurbishment or onward acquisition." },
      ],
    },
    edinburghContext: {
      h2: "The Edinburgh healthcare estate",
      body: 'Edinburgh\'s healthcare property market is shaped by NHS Lothian, the largest health board in Scotland by population served, the Edinburgh BioQuarter at Little France (the joint venture between NHS Lothian, University of Edinburgh, Scottish Enterprise and City of Edinburgh Council), and the affluent retirement profile of the Morningside, Bruntsfield, Murrayfield and Corstorphine catchments. <strong>Edinburgh Royal Infirmary at Little France (EH16)</strong> anchors NHS Lothian alongside the Royal Hospital for Children and Young People; the surrounding BioQuarter holds one of Europe\'s larger life-sciences clusters and generates clinical-research, lab and healthcare property demand. <strong>Western General Hospital (EH4)</strong> in the north-west provides the secondary NHS hospital anchor and underpins GP, dental and allied healthcare property in the surrounding catchment. <strong>Spire Murrayfield Hospital (EH12)</strong> anchors private healthcare in the western suburbs. The <strong>Morningside and Bruntsfield (EH9/EH10)</strong> retirement-rich southern catchment carries the densest care home cluster in the city, with a high self-funded fee mix supporting premium fee rates and EBITDA. <strong>Murrayfield and Corstorphine (EH12)</strong> and the northern Trinity, Inverleith and Stockbridge catchments hold the secondary care home cluster. Care Inspectorate is the single most important regulator; sustained grades of 4 (good) or above across all themes keep the asset on the mainstream lender panel. Sprinkler retrofit under the Scottish Fire and Rescue regime has been a meaningful capex driver across older Edinburgh stock and continues to feature in refinance pipelines.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh healthcare",
      body: '<strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> lead the specialist commercial mortgage panel for care homes; both hold deep Scottish books and price Edinburgh stock keenly given the high self-funded fee mix and strong EBITDA economics. Allica Bank, HTB and Cambridge & Counties cover mid-market care home at 8.0 to 8.75% pa for grade-4 or grade-5 Care Inspectorate properties at 65 to 70% LTV. Larger institutional care home portfolios (10-plus homes, £20M-plus facility) route through structured commercial debt at Lloyds Real Estate Banking, Bank of Scotland or specialist healthcare desks at OakNorth and Cynergy Bank. Dental, GP and veterinary freeholds enjoy keener pricing, NatWest, Lloyds, Bank of Scotland, Barclays and Santander all compete on owner-occupier dental and GP freeholds with substantive NHS contract income at 7.0 to 8.0% pa, the NHS covenant tightens the rate materially. Veterinary owner-occupier at 7.5 to 8.5% pa. Care Inspectorate grade is non-negotiable; a single grade-2 (weak) or grade-1 (unsatisfactory) in the last two inspection cycles takes mainstream lenders off the panel and the deal routes through specialist trading-business desks only.',
    },
    faqs: [
      {
        question: "How much does Care Inspectorate grade affect lending?",
        answer: "Materially. Sustained grades of 4 (good) or above across all four themes (quality of care, environment, staffing, leadership) keep the asset on the mainstream lender panel. A single grade-2 (weak) or grade-1 (unsatisfactory) in the last two inspection cycles typically takes Shawbrook, Cynergy Bank and the high-street desks off the panel; the deal then routes through specialist trading-business desks at higher pricing. Grades of 6 (excellent) tighten pricing by 25 to 50bps versus grade-4. We get the latest Care Inspectorate report into the submission pack at outset.",
      },
      {
        question: "What is the Edinburgh self-funded fee mix like?",
        answer: "Among the highest in Scotland. Morningside, Bruntsfield, Murrayfield, Corstorphine and the broader affluent southern and western suburbs carry one of the densest self-funded resident pools in the country. Self-funded fee rates routinely run 30 to 60% higher than local-authority-funded rates, materially improving EBITDA economics. Lenders treat self-funded income as higher-quality, and Edinburgh care home EBITDA cover ratios typically sit higher than equivalent Scottish-average stock as a result.",
      },
      {
        question: "Can I get a commercial mortgage on a dental practice?",
        answer: 'Yes, typically 70 to 75% LTV on a freehold dental practice with two years\' clean accounts and EBITDA cover at 1.5x or better. NHS-mix practices price keenest because the NHS contract is treated as strong-covenant income; private-only practices price 25 to 50bps wider. NatWest, Lloyds, Bank of Scotland, Allica Bank and Cynergy Bank are the most active desks. Routes via the <a href="/services/trading-business-mortgage">trading-business mortgage</a>.',
      },
      {
        question: "What about the BioQuarter and life-sciences property?",
        answer: "Life-sciences lab and clinical-research property at the Edinburgh BioQuarter at Little France routes through specialist real-estate desks at Lloyds, NatWest, Bank of Scotland and specialist healthcare lenders. Typically institutional-scale assets above £5M; below that the broker panel can place the deal. The BioQuarter halo also supports surrounding GP, dental and allied healthcare property in the EH16 catchment, those route through standard commercial mortgage panels.",
      },
      {
        question: "How does the Scottish regulatory regime differ from England?",
        answer: "The regulator is the Care Inspectorate (not the CQC, which covers England). The grading scale runs 1 to 6 (rather than the CQC's four-point inadequate to outstanding scale). The Scottish Fire and Rescue regime is separate to the English Fire Safety Order and has driven a meaningful sprinkler-retrofit programme across older Edinburgh care home stock. Lenders familiar with English care homes are also generally familiar with the Scottish framework; we work with the lender's panel to ensure the regulatory pack matches the Scottish regime.",
      },
    ],
  },

  // Pub & restaurant
  "pub-restaurant": {
    slug: "pub-restaurant",
    name: "Pub & Restaurant",
    metaTitle: "Pub Commercial Mortgages Edinburgh | Grassmarket, Cowgate, Royal Mile, Leith, George Street, F&B Freehold",
    metaDescription:
      "Trading-business commercial mortgage finance for pubs, restaurants and licensed F&B property in Edinburgh, Grassmarket and Cowgate Old Town heritage trade, Royal Mile, Leith F&B regeneration corridor (The Shore, Constitution Street), George Street premium, barrelage and tied-versus-free underwriting. LTVs 55 to 65%, mid-2026 rates 7.5 to 9.0% pa. Cynergy Bank lead.",
    hero: {
      eyebrow: "Pub & restaurant",
      h1: "Pub and Restaurant Commercial Mortgages Edinburgh",
      lede:
        "Trading-business and investment finance for pubs, restaurants and licensed F&B freeholds across Edinburgh. The Grassmarket and Cowgate carry the dense Old Town heritage pub trade, the Royal Mile holds listed historic pubs and restaurants, Leith with The Shore, Constitution Street and Leith Walk is the F&B regeneration corridor on the back of the tram extension, and George Street runs the premium F&B spine. Barrelage, beer-tie status, freehold-versus-leasehold and operator track record are all material to underwriting. LTVs 55 to 65%, mid-2026 rates 7.5 to 9.0% pa. <strong>Cynergy Bank</strong> is the most active named lender on Scottish licensed-trade freeholds.",
      metrics: [
        { label: "LTV", value: "55 to 65%" },
        { label: "Cover test", value: "EBITDA 1.7 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£300K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh pub or restaurant commercial mortgage",
      body: [
        "Pubs and restaurants are the most operator-dependent slice of the commercial mortgage market and Edinburgh carries one of the most active urban licensed-trade markets in Scotland. Underwriting tests <strong>EBITDA cover</strong> at 1.7 to 2.0x, materially wider than mainstream owner-occupier, because licensed-trade EBITDA is highly operator-dependent and recovery on default depends on goodwill and licence continuity rather than bricks-and-mortar alone. The single most important variables a credit committee reads first are <strong>freehold-versus-leasehold</strong> status, <strong>tied-versus-free-of-tie</strong> position on the beer supply contract, and the <strong>licensee track record</strong>.",
        "Edinburgh pub and restaurant geography splits four ways. <strong>Old Town heritage (EH1)</strong> the Grassmarket, Cowgate, Royal Mile and Victoria Street, listed and conservation-area stock in the World Heritage core, deep year-round and Festival-week trading. <strong>Leith F&B corridor (EH6)</strong> The Shore, Constitution Street and Leith Walk on the back of the tram extension, the dominant F&B regeneration corridor, mid-scale independent operators dominate. <strong>George Street premium F&B (EH2)</strong> the New Town premium dining spine, high-margin restaurants and bars. <strong>Suburban professional F&B</strong> Morningside Road, Bruntsfield Place, Stockbridge, Corstorphine and Portobello, year-round local-resident trade with selective Festival overspill.",
        "Worked example: a Grassmarket freehold pub with first-floor flat above, £1.45M valuation, free-of-tie, EBITDA £215K, current licensee in place 7 years. <strong>Cynergy Bank</strong> placed at 60% LTV, 8.25% pa, 20-year term, EBITDA cover 1.85x. The Festival-week revenue concentration was modelled explicitly across the underwriting pack. Worked example two: an independent Leith Shore restaurant freehold, £825K, owner-operator EBITDA £142K, 4 years' clean accounts. <strong>Shawbrook</strong> placed at 60% LTV, 8.5% pa, 20-year term, EBITDA cover 1.75x. The Trams to Newhaven extension was treated as a positive demographic-shift signal in the credit memo.",
        "Tied pubs (those operating under a beer-supply tie to a pub company or brewer) are harder to fund because EBITDA economics are tighter and operator flexibility is reduced. Tied freeholds typically route at 5 to 10% lower LTV than equivalent free-of-tie stock and 50bps wider on rate. Free-of-tie freehold pubs with two years' clean accounts and strong barrelage history price at the keenest end of the licensed-trade range. The Scottish licensing regime is administered by the City of Edinburgh Licensing Board under the Licensing (Scotland) Act 2005; the licence is granted to the premises (with a designated premises manager and a separate personal licence holder). Lenders look for stable premises licence history and a credible designated manager arrangement.",
      ],
    },
    schemeTypes: {
      h2: "Pub and restaurant assets we fund",
      items: [
        { label: "Old Town Grassmarket and Cowgate (EH1)", detail: "Heritage pubs and restaurants in the World Heritage Old Town. Listed and conservation-area stock; heritage-comfortable specialist licensed-trade lenders only." },
        { label: "Royal Mile and Victoria Street (EH1)", detail: "Listed historic pubs and restaurants on the Old Town spine. Deep tourism footfall plus Festival-week peaks; premium operator track record matters." },
        { label: "Leith F&B corridor (EH6)", detail: "The Shore, Constitution Street and Leith Walk on the back of the tram extension. Mid-scale independent F&B; the dominant Edinburgh regeneration corridor." },
        { label: "George Street premium F&B (EH2)", detail: "New Town premium dining and bar spine. High-margin restaurants and bars; institutional-quality independents." },
        { label: "Suburban professional F&B", detail: "Morningside Road, Bruntsfield Place, Stockbridge, Corstorphine, Portobello. Year-round local-resident trade; mid-scale operator economics." },
        { label: "Pub with flat above (semi-commercial overlap)", detail: "Pub freehold with residential flat above, treated as semi-commercial where residential value is 25 to 40% of total. Routes via semi-commercial commercial mortgage." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh pubs and restaurants",
      intro:
        "Trading-business mortgage on EBITDA cover is the primary route for owner-operator licensed-trade freeholds. Investment mortgage applies where the asset is let on FRI to an operator covenant (a pub company takes a 25-year lease for instance). Bridge-to-let funds value-add acquisition with refurbishment, repositioning and licence transition. Security is a standard security in the Land Register of Scotland.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator pubs and restaurants, EBITDA-led at 1.7 to 2.0x. Barrelage, beer-tie status, premises-licence history and Festival-week concentration all modelled." },
        { product: "Commercial investment mortgage", applicability: "Pub or restaurant let on FRI to a pub-company or operator covenant. ICR-led at 140 to 155%." },
        { product: "Commercial bridge-to-let", applicability: "Vacant pub or restaurant acquisition with refurbishment, repositioning and premises-licence transition; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing licensed freehold, typically funding extension, repositioning or onward acquisition." },
      ],
    },
    edinburghContext: {
      h2: "The Edinburgh pub and restaurant estate",
      body: 'Edinburgh\'s pub and restaurant trade is among the deepest urban licensed-trade markets in the UK on the back of 13 million annual visitors, the Edinburgh Festival and Fringe, the World Heritage Old Town spine, year-round student footfall from around 75,000 combined students at the University of Edinburgh, Heriot-Watt and Edinburgh Napier, and the financial-services business-stay layer through the New Town and Lothian Road. <strong>The Grassmarket and Cowgate (EH1)</strong> in the Old Town carry the densest concentration of heritage pubs and late-night licensed trade in Scotland, dating back to the medieval Old Town street pattern; conservation-area and listed-building constraints apply across most of the stock. <strong>The Royal Mile and Victoria Street (EH1)</strong> hold listed historic pubs and restaurants, deep year-round tourism footfall plus sharp Festival peaks. <strong>The Leith F&B corridor (EH6)</strong> with The Shore, Constitution Street and Leith Walk has become the dominant regeneration F&B corridor on the back of the Trams to Newhaven extension opened in June 2023, mid-scale independent operators have built out a serious dining cluster that materially extends Edinburgh\'s overall F&B capacity. <strong>George Street (EH2)</strong> runs the premium New Town F&B spine. <strong>Suburban professional F&B</strong> through Morningside Road, Bruntsfield Place, Stockbridge, Corstorphine and Portobello supports year-round local-resident trade. The Scottish licensing regime is administered by the City of Edinburgh Licensing Board under the Licensing (Scotland) Act 2005 and is the key regulatory variable on every licensed-trade commercial mortgage. The Festival-week revenue concentration is an underwriting reality that every licensed-trade lender models explicitly.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh pubs and restaurants",
      body: '<strong>Cynergy Bank</strong> is the most active named lender on Scottish pub and restaurant freeholds, the bank holds a deep licensed-trade book across the Central Belt and prices Edinburgh stock keenly given the strong urban demand profile and Festival economics. <strong>Shawbrook</strong> covers mid-market licensed-trade at 7.75 to 8.75% pa for free-of-tie freeholds with two years\' clean accounts at 55 to 65% LTV. OakNorth, Allica Bank and selectively HTB also active. ASK Partners and structured debt cover larger licensed-trade assets above £5M. High-street commercial desks (NatWest, Lloyds, Bank of Scotland, Barclays) generally decline trading-business pub and restaurant; they will look at pub-company-let investment on FRI to a strong-covenant operator. Tied pubs (those under a beer-supply tie) are harder to fund, typical 50 to 55% LTV at 8.5 to 9.0% pa; free-of-tie freeholds price 50bps to 100bps tighter. Together and InterBay Commercial take the trickier cases (short trading record, mid-grade premises-licence history) at the wider end of the range. Heritage and listed Old Town stock route through heritage-comfortable licensed-trade specialists only; the lender pool narrows but pricing is comparable where the operator track record is strong.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on a Grassmarket pub freehold?",
        answer: "Yes, typically 55 to 65% LTV on free-of-tie freehold pubs with two-plus years' clean accounts and EBITDA cover at 1.85x or better. Cynergy Bank is the lead named lender on Scottish licensed-trade freeholds; Shawbrook, OakNorth and Allica Bank also active. Mid-2026 rates 7.75 to 8.75% pa for the £500K to £2M bracket. Grassmarket and Cowgate stock benefits from deep year-round footfall and sharp Festival-week peaks; we model the Festival concentration explicitly in the underwriting pack.",
      },
      {
        question: "How does the beer tie affect lending?",
        answer: "Materially. Tied pubs (operating under a beer-supply tie to a pub company or brewer) carry tighter EBITDA economics and reduced operator flexibility. Tied freeholds typically route at 5 to 10% lower LTV than equivalent free-of-tie stock and 50bps wider on rate. Free-of-tie freeholds with two years' clean accounts and strong barrelage history price at the keenest end of the licensed-trade range. The Pubs Code does not apply in Scotland in the same way as England (the Code covers tied tenants of the six largest pub-owning businesses in England and Wales only) but the commercial economics of the tie are similar.",
      },
      {
        question: "What about pubs with flats above?",
        answer: 'Common archetype across Edinburgh, particularly on the Royal Mile, Grassmarket, Leith Walk and the suburban professional parades. Where residential value is 25 to 40% of total, the deal routes via <a href="/property-types/semi-commercial">semi-commercial commercial mortgage</a> with hybrid underwriting (rental income from the flat tested against ICR; pub EBITDA tested against trading-business cover). Where residential is 15% or less, it routes as trading-business with the flat treated as ancillary. Above 40% residential, the deal typically routes as residential investment with commercial overlay.',
      },
      {
        question: "How does Festival-week trading affect underwriting?",
        answer: "Lenders model it explicitly. Edinburgh licensed-trade EBITDA carries one of the sharpest seasonality curves of any UK urban market, the eight festival weeks routinely account for 30 to 40% of annual EBITDA for centrally-located pubs and restaurants. We submit a full 12-month barrelage and revenue curve so the seasonality is explicit. Strong-week revenue is a positive on the underwriting story but lenders also want to see credible off-peak trading through November to February.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant pub?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition plus refurbishment plus the premises-licence transition; exit is onto a term trading-business mortgage once the new operator has six months\' trading on the licence. Vacant pub acquisition is most common across Edinburgh as a value-add play, particularly on Leith Walk or the suburban professional parades. We model both legs at outset including the licensing-transition timeline.',
      },
    ],
  },

  // MOT / garage / petrol
  "mot-garage-petrol": {
    slug: "mot-garage-petrol",
    name: "MOT, Garage & Petrol",
    metaTitle: "MOT Garage Commercial Mortgages Edinburgh | Sighthill, Newbridge, Edge-of-City, Forecourt",
    metaDescription:
      "Trading-business commercial mortgage finance for MOT centres, garages and petrol stations in Edinburgh, Sighthill industrial fringe, Newbridge edge-of-city, the southern and western suburban garage estate. VOSA approval-led underwriting, environmental due diligence on forecourts. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
    hero: {
      eyebrow: "MOT, garage & petrol",
      h1: "MOT Garage and Petrol Station Commercial Mortgages Edinburgh",
      lede:
        "Trading-business and investment finance for MOT centres, independent garages, accident-repair shops, petrol forecourts and tyre-and-exhaust freeholds across Edinburgh. The Sighthill industrial fringe and Newbridge edge-of-city carry the largest concentration; the suburban garage estate runs through Corstorphine, Slateford, Liberton, Portobello and Leith. VOSA test-station approval, environmental due diligence on forecourts (oil interceptors, fuel tanks, soil contamination), and operator track record drive credit. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 8.5% pa" },
        { label: "Facility", value: "£250K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh MOT garage or petrol forecourt mortgage",
      body: [
        "MOT centres and independent garages route through trading-business mortgage on <strong>EBITDA cover</strong> at 1.5 to 2.0x. The most important sector-specific overlay is <strong>VOSA test-station approval</strong> (the Driver and Vehicle Standards Agency, DVSA, formerly VOSA, regulates MOT testing across Great Britain including Scotland). Lenders verify VOSA station approval and authorised examiner status as a credit condition. Loss of VOSA approval is the most common cause of forced default in the sector, so lenders look for stable approval history and credible succession arrangements where the authorised examiner is approaching retirement.",
        "Petrol forecourts add a second layer of underwriting complexity: <strong>environmental due diligence</strong>. The lender's valuer commissions a Phase 1 environmental survey (and where appropriate Phase 2 intrusive sampling) testing for soil contamination, fuel-tank integrity, oil-interceptor function and bund-line condition. A contaminated-land flag pulls the loan to 50 to 60% LTV at the wider end of pricing; clean Phase 1 with documented tank-and-line history sustains 65 to 70% LTV at standard pricing.",
        "Edinburgh garage and forecourt geography splits three ways. <strong>Sighthill industrial fringe (EH11)</strong> the densest single garage cluster in the city, mid-cap MOT and accident-repair stock plus trade-counter overlap, on the western fringe with strong M8 access. <strong>Newbridge edge-of-city (EH28)</strong> larger-format MOT and motor-trade stock on the western interchange. <strong>Suburban garage estate</strong> Corstorphine (EH12), Slateford (EH11), Liberton (EH16), Portobello (EH15) and Leith (EH6) carry the dispersed small-cap MOT, tyre-and-exhaust and accident-repair freeholds serving the city catchment.",
        "Worked example: a Sighthill MOT centre and independent garage freehold, two-bay test-station plus four-bay service workshop, £680K valuation, EBITDA £118K, current authorised examiner in place 11 years. <strong>Cynergy Bank</strong> placed at 65% LTV, 7.85% pa, 20-year term, EBITDA cover 1.75x. Worked example two: a suburban Corstorphine petrol forecourt freehold with attached convenience-retail, £1.4M valuation, EBITDA £185K, clean Phase 1 environmental, tank-line history documented. <strong>Shawbrook</strong> placed at 65% LTV, 7.85% pa, 20-year term, EBITDA cover 1.65x. Forecourt deals routinely take an extra two to three weeks for the environmental survey, we factor that into the underwriting timeline at outset.",
      ],
    },
    schemeTypes: {
      h2: "MOT, garage and forecourt assets we fund",
      items: [
        { label: "MOT test centre", detail: "VOSA-approved test stations, owner-operator or operator-let. VOSA station approval status and authorised examiner credentials are credit conditions." },
        { label: "Independent service garage", detail: "Service, repair and MOT combined. Owner-occupier dominated, £250K to £1.5M facility bracket. EBITDA-led with VOSA overlay where applicable." },
        { label: "Accident-repair body shop", detail: "Insurance-network approved (BSI, Thatcham) accident-repair freeholds. Insurance-network covenant overlay tightens pricing." },
        { label: "Petrol forecourt freehold", detail: "Branded (BP, Shell, Esso) and unbranded forecourts. Environmental Phase 1 (and where appropriate Phase 2) survey is a credit condition. Convenience-retail attachment improves EBITDA." },
        { label: "Tyre-and-exhaust freehold", detail: "Branded (Kwik Fit, ATS) and independent tyre-and-exhaust freeholds. Strong covenant overlay on branded; investment route common." },
        { label: "Motor-trade investment let", detail: "Garage or forecourt freehold let on FRI to operator covenant. ICR-led at 140 to 155%; investment lender pool wider than trading-business pool." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh MOT garages and forecourts",
      intro:
        "Trading-business mortgage is the primary route for owner-operator MOT and garage freeholds. Investment mortgage applies where the asset is let on FRI to an operator covenant. Petrol forecourts add environmental due diligence onto the credit timeline. Security is a standard security in the Land Register of Scotland.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator MOT centres, garages and tyre-and-exhaust freeholds. EBITDA-led at 1.5 to 2.0x. VOSA approval and authorised examiner overlay on MOT centres." },
        { product: "Commercial investment mortgage", applicability: "Motor-trade freehold let on FRI to operator covenant (Kwik Fit, ATS, branded forecourt operator). ICR-led at 140 to 155%." },
        { product: "Commercial bridge-to-let", applicability: "Vacant motor-trade acquisition with VOSA approval transition or environmental remediation before income stabilisation." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing motor-trade freehold." },
      ],
    },
    edinburghContext: {
      h2: "The Edinburgh MOT garage and forecourt estate",
      body: 'Edinburgh\'s motor-trade property market is a smaller but consistent commercial mortgage sub-sector, sustained by the city\'s circa 530,000 population and the wider Lothians travel-to-work area of around 1.5 million. The <strong>Sighthill industrial fringe (EH11)</strong> on the western edge carries the densest single MOT and garage cluster in the city, mid-cap test-station and accident-repair stock with strong M8 access. <strong>Newbridge (EH28)</strong> just beyond the city boundary on the M9/M8 interchange holds the larger-format motor-trade and forecourt stock. The suburban garage estate runs through <strong>Corstorphine (EH12)</strong>, <strong>Slateford (EH11)</strong>, <strong>Liberton (EH16)</strong>, <strong>Portobello (EH15)</strong> and <strong>Leith (EH6)</strong>, carrying the dispersed small-cap MOT, tyre-and-exhaust and accident-repair freeholds serving local catchments. Petrol forecourt activity concentrates on the arterial routes (A1 to the east, A8 to the west, A7 and A701 south) plus the western edge around the airport. VOSA (DVSA) regulates MOT testing across Great Britain on a single regime, so Edinburgh stock is not differentiated from English equivalents on regulatory grounds. Petrol forecourt environmental due diligence is a uniform UK process. Demand for accident-repair and bodyshop capacity has tightened with insurance network consolidation, supporting freehold values where Thatcham or BSI approval status is current.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh motor-trade",
      body: '<strong>Cynergy Bank</strong>, <strong>Shawbrook</strong>, Allica Bank and Cambridge & Counties are the most active commercial mortgage lenders on MOT and garage trading-business freeholds across Scotland; all four hold deep motor-trade books and price Edinburgh stock keenly where VOSA approval and operator track record are stable. HTB and OakNorth selectively active. NatWest, Lloyds, Bank of Scotland, Barclays and Santander will look at branded-operator let investment (Kwik Fit, ATS, branded forecourt) at 7.0 to 8.0% pa on FRI lettings; they typically decline pure trading-business motor-trade. Petrol forecourts narrower, environmental survey requirements add two to three weeks to the credit timeline and a contaminated-land flag pulls the deal to specialist desks only. Together and InterBay Commercial take the trickier cases (short trading record, environmental flags, succession issues on the authorised examiner). Clydesdale Bank / Virgin Money UK selectively active on Scottish motor-trade SME owner-occupier.',
    },
    faqs: [
      {
        question: "What rate can I get on an Edinburgh MOT garage purchase?",
        answer: "Currently 7.0 to 8.5% pa for owner-occupier trading-business mortgage at 60 to 70% LTV. Stable VOSA station approval and authorised examiner in place 5-plus years tighten pricing materially. EBITDA cover at 1.7x or better, two years' clean accounts, and a credible succession arrangement on the authorised examiner are the credit baseline. Cynergy Bank, Shawbrook and Allica Bank are the most active named lenders; Cambridge & Counties active on selective deals.",
      },
      {
        question: "How much does VOSA approval affect lending?",
        answer: "Materially. VOSA (DVSA) test-station approval is a credit condition on every MOT centre mortgage; loss of approval is the most common cause of forced default in the sector. Lenders verify station approval status and authorised examiner credentials at credit, and where the authorised examiner is approaching retirement they look for credible succession arrangements (an additional approved examiner in place, training programme, family-business transition). We get the latest VOSA inspection certificate into the underwriting pack at outset.",
      },
      {
        question: "Petrol forecourt purchase, environmental issues?",
        answer: "Yes, environmental due diligence is a uniform credit condition on every forecourt deal. The lender's valuer commissions a Phase 1 environmental survey testing for soil contamination, fuel-tank integrity, oil-interceptor function and bund-line condition. Where the Phase 1 flags risk, a Phase 2 intrusive sampling investigation follows. Clean Phase 1 with documented tank-and-line history sustains 65 to 70% LTV at standard pricing; a contamination flag pulls the deal to 50 to 60% LTV at specialist-desk pricing. We factor an extra two to three weeks into the timeline for the survey.",
      },
      {
        question: "Can I fund an accident-repair body shop freehold?",
        answer: "Yes, typically 65 to 70% LTV at 7.5 to 8.5% pa on owner-occupier freehold with two years' clean accounts and EBITDA cover at 1.65x or better. Thatcham or BSI insurance-network approval status tightens pricing 25 to 50bps because it stabilises the insurance-referral revenue stream. Cynergy Bank, Shawbrook and Allica Bank are the most active desks. Multi-site bodyshop groups (3-plus sites) consolidate via portfolio refinance at the wider end of the range.",
      },
      {
        question: "Motor-trade investment on FRI to a branded operator, easier deal?",
        answer: "Yes, materially. A Kwik Fit, ATS, BP, Shell or branded-operator FRI lease takes the deal off the trading-business pool and onto the commercial investment pool, ICR-led at 140 to 155%. The lender pool widens to include NatWest, Lloyds, Bank of Scotland, Barclays and Santander on prime branded-operator stock at 7.0 to 7.75% pa, 65 to 70% LTV. The covenant strength of the operator brand and the FRI lease structure remove most of the trading-business risk for the lender.",
      },
    ],
  },

  // Nursery / school
  "nursery-school": {
    slug: "nursery-school",
    name: "Nursery & School",
    metaTitle: "Nursery School Commercial Mortgages Edinburgh | Care Inspectorate, Morningside, Murrayfield, Corstorphine, Stockbridge",
    metaDescription:
      "Trading-business commercial mortgage finance for nurseries, day-care and independent schools in Edinburgh, Care Inspectorate-led underwriting, family-suburb concentration through Morningside, Murrayfield, Corstorphine and Stockbridge. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Nursery & school",
      h1: "Nursery and School Commercial Mortgages Edinburgh",
      lede:
        "Trading-business and investment finance for early-learning settings, day nurseries, after-school clubs and independent schools across Edinburgh. The dense family-suburb catchments through Morningside, Murrayfield, Corstorphine and Stockbridge support the strongest nursery freehold market in Scotland; independent-school activity concentrates in the Edinburgh independent-schools cluster (Fettes, Edinburgh Academy, George Watson's, George Heriot's, Stewart's Melville and Mary Erskine in the central and northern catchments). Care Inspectorate registration and grades are the lead underwriting variable on early-learning settings. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£400K to £8M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh nursery or school commercial mortgage",
      body: [
        "Early-learning and childcare settings in Scotland are regulated by the <strong>Care Inspectorate</strong> (not Ofsted, which covers England). The Care Inspectorate uses the same six-point grading scale (1 unsatisfactory to 6 excellent) across quality of care and support, environment, staffing and management. Lenders look for sustained grades of 4 (good) or above across all themes; a single grade-2 or grade-1 in the last two inspection cycles typically takes the deal off the mainstream lender panel. Independent schools are inspected by <strong>Education Scotland</strong> on a separate framework but the credit pattern is similar, sustained good or above ratings keep the asset on the mainstream panel.",
        "The underwriting test is <strong>EBITDA cover</strong> at 1.5 to 2.0x. Sector-specific variables drive the credit decision. <strong>Occupancy</strong> the share of available places filled, lenders look for sustained 85% plus across the trading book. <strong>Funding mix</strong> the balance of Scottish-Government-funded hours (1140 hours per year of free early learning and childcare for 3-and-4-year-olds, plus eligible 2-year-olds) versus parent-funded private hours; private fee mix typically pushes higher EBITDA per place. <strong>Staffing ratio and qualification mix</strong> Care Inspectorate inspection findings track staffing closely. <strong>Physical stock quality</strong> outdoor play space, ratio of children to safeguarding-trained staff, fire-safety compliance under the Scottish regime.",
        "Edinburgh nursery freehold activity concentrates in the affluent family suburbs. <strong>Morningside (EH10)</strong> and <strong>Bruntsfield (EH9/EH10)</strong> the densest single nursery cluster in the city, premium fee rates supported by professional-class family catchment. <strong>Murrayfield and Corstorphine (EH12)</strong> the western family suburbs, strong nursery freehold demand and selective independent-school presence. <strong>Stockbridge, Inverleith and Trinity (EH3/EH4/EH5)</strong> the northern family suburbs, premium nursery economics. <strong>Edinburgh independent-schools cluster</strong> Fettes College, Edinburgh Academy, George Watson's College, George Heriot's School, Stewart's Melville College and the Mary Erskine School carry the institutional independent-schools estate, largely owner-occupier on their historic campuses.",
        "Worked example: a 64-place Morningside day nursery freehold, Care Inspectorate grades 5/5/5/5 across the latest cycle, 92% occupancy, 60% private fee mix, £1.85M valuation, EBITDA £245K. <strong>Shawbrook</strong> placed at 65% LTV, 7.95% pa, 25-year term, EBITDA cover 1.8x. Worked example two: a small independent prep-school freehold purchase, £4.2M valuation, EBITDA £580K, Education Scotland good rating. <strong>Cynergy Bank</strong> placed at 60% LTV, 8.25% pa, 20-year term, EBITDA cover 1.75x.",
      ],
    },
    schemeTypes: {
      h2: "Nursery and school assets we fund",
      items: [
        { label: "Day nursery freehold (under-5)", detail: "The core sector. Owner-operator dominated. Care Inspectorate registration and grades drive the deal. Edinburgh family-suburb catchments support premium fee rates." },
        { label: "After-school club and out-of-school care", detail: "Care Inspectorate registered out-of-school provision. Smaller-scale, often attached to nursery freehold or run from school premises." },
        { label: "Independent prep and senior school freehold", detail: "Owner-occupier independent schools, Education Scotland inspected. Typically institutional-scale assets above £3M; specialist underwriting." },
        { label: "Nursery group portfolio (3-plus sites)", detail: "Multi-site nursery group consolidation via portfolio refinance. DSCR-led at 130 to 145% on aggregated trading. Edinburgh stock often featured in Scotland-wide nursery group portfolios." },
        { label: "Investment-let nursery freehold", detail: "Nursery freehold let on FRI to a nursery group operator. ICR-led at 140 to 155%; investment lender pool wider than trading-business pool." },
        { label: "Specialist provision (SEN, EYE-only, day care)", detail: "Specialist early-learning and additional-support-needs provision. Specialist underwriting; lender pool narrower." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh nurseries and schools",
      intro:
        "Trading-business mortgage on EBITDA cover is the primary route for owner-operator nurseries and independent schools. Investment mortgage applies where the asset is let on FRI to an operator covenant. Bridge-to-let funds vacant nursery acquisition with Care Inspectorate registration transition. Security is a standard security in the Land Register of Scotland.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator nurseries and independent schools. EBITDA-led at 1.5 to 2.0x. Care Inspectorate (or Education Scotland) overlay is a credit condition." },
        { product: "Commercial investment mortgage", applicability: "Nursery freehold let on FRI to a nursery group operator. ICR-led at 140 to 155%." },
        { product: "Commercial bridge-to-let", applicability: "Vacant nursery acquisition with Care Inspectorate registration transition (8 to 12 weeks); exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing nursery or school freehold." },
      ],
    },
    edinburghContext: {
      h2: "The Edinburgh nursery and school estate",
      body: 'Edinburgh\'s nursery and independent-schools market is one of the deepest in Scotland on the back of the affluent professional-class family catchments through the southern and western suburbs. <strong>Morningside (EH10) and Bruntsfield (EH9/EH10)</strong> carry the densest single nursery cluster in the city; the professional-class family demographic supports premium private fee rates and strong EBITDA economics. <strong>Murrayfield and Corstorphine (EH12)</strong> in the western suburbs hold the secondary nursery cluster plus selective independent-school presence. <strong>Stockbridge, Inverleith and Trinity (EH3/EH4/EH5)</strong> in the northern catchment carry strong nursery freehold activity. The Edinburgh independent-schools cluster, Fettes College, Edinburgh Academy, George Watson\'s College, George Heriot\'s School, Stewart\'s Melville College and the Mary Erskine School, holds the institutional independent-schools estate; activity here is mostly capex refinancing on historic campuses rather than acquisition. The Care Inspectorate is the regulator for early-learning settings; the Scottish Government 1140-hour entitlement for 3-and-4-year-olds plus eligible 2-year-olds is a material funding factor. Education Scotland inspects independent schools. The Scottish fire-safety regime applies separately to the English Fire Safety Order and has driven a meaningful retrofit programme across older nursery stock. The structural picture is steady, family-suburb demand outstrips supply in most of the affluent southern and western catchments, and nursery freehold values have held up well through 2022 to 2026.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh nurseries and schools",
      body: '<strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> lead the specialist commercial mortgage panel for nurseries and independent schools; both hold deep Scottish books and price Edinburgh stock keenly given the strong family-catchment economics. Allica Bank, HTB and Cambridge & Counties cover mid-market at 8.0 to 8.75% pa for grade-4 or grade-5 Care Inspectorate properties at 65 to 70% LTV. OakNorth selectively active on larger nursery group consolidation. NatWest, Lloyds, Bank of Scotland, Barclays and Santander will look at nursery freehold investment let on FRI to a strong-covenant operator at 7.0 to 8.0% pa; they typically decline trading-business nursery. Independent-school freeholds above £5M facility typically route through structured commercial debt at Lloyds Real Estate Banking, Bank of Scotland or OakNorth. Care Inspectorate grade is non-negotiable; a grade-2 or grade-1 in the last two inspection cycles takes mainstream lenders off the panel. Clydesdale Bank / Virgin Money UK selectively active on Scottish nursery SME owner-occupier.',
    },
    faqs: [
      {
        question: "How much does Care Inspectorate grade affect lending?",
        answer: "Materially. Sustained grades of 4 (good) or above across all four themes (quality of care and support, environment, staffing, management) keep the asset on the mainstream lender panel. A single grade-2 or grade-1 in the last two inspection cycles typically takes Shawbrook, Cynergy Bank and the high-street desks off the panel; the deal then routes through specialist trading-business desks at higher pricing. Grades of 6 (excellent) tighten pricing by 25 to 50bps versus grade-4. We get the latest Care Inspectorate report into the submission pack at outset.",
      },
      {
        question: "How does the Scottish 1140-hour funded entitlement affect underwriting?",
        answer: "Materially on funding-mix analysis. The Scottish Government's 1140 hours per year of free early learning and childcare for 3-and-4-year-olds plus eligible 2-year-olds is a substantial public-funded revenue stream for Edinburgh nurseries. Lenders typically prefer a balanced mix of public-funded entitlement hours plus parent-funded private hours, the private fee mix carries higher per-hour rates and lifts EBITDA, while the funded hours stabilise occupancy. A nursery running predominantly funded-only hours has thinner EBITDA economics and typically prices 25 to 50bps wider.",
      },
      {
        question: "Can I get a commercial mortgage on an independent prep-school freehold?",
        answer: 'Yes, typically 60 to 65% LTV at 7.75 to 8.5% pa on owner-operator independent schools with Education Scotland good or above rating and EBITDA cover at 1.75x or better. Cynergy Bank, Shawbrook and OakNorth are the most active named lenders; institutional-scale assets above £5M typically route through structured commercial debt at Lloyds Real Estate Banking or Bank of Scotland. Routes via the <a href="/services/trading-business-mortgage">trading-business mortgage</a>.',
      },
      {
        question: "Nursery group portfolio refinance, how does it work?",
        answer: 'Multi-site nursery groups (3-plus sites) consolidate via portfolio refinance, blanket-charge or property-by-property structure, DSCR-led at 130 to 145% on aggregated trading. Shawbrook, Cynergy Bank, HTB and OakNorth lead. Edinburgh sites often feature in Scotland-wide or UK-wide group portfolios. We model aggregated DSCR plus per-site Care Inspectorate grade so the credit committee sees the diversification story explicitly.',
      },
      {
        question: "How does the Scottish regulatory regime differ from England?",
        answer: "The regulator is the Care Inspectorate (not Ofsted, which covers England). The grading scale runs 1 to 6 (rather than Ofsted's four-point inadequate to outstanding scale). The 1140-hour funded entitlement is a Scottish Government scheme distinct from the English 30-hours offer. Education Scotland inspects independent schools (rather than Ofsted in England). Scottish fire-safety regulations apply separately. Lenders familiar with English nurseries are generally also comfortable with the Scottish framework; we work with the lender's panel to ensure the regulatory pack matches the Scottish regime.",
      },
    ],
  },

  // Mixed-use
  "mixed-use": {
    slug: "mixed-use",
    name: "Mixed-Use",
    metaTitle: "Mixed-Use Commercial Mortgages Edinburgh | Quartermile, BioQuarter, Granton Waterfront, Fountainbridge, Tollcross, Leith Walk",
    metaDescription:
      "Commercial mortgage finance for mixed-use property in Edinburgh, Quartermile, Edinburgh BioQuarter, Granton Waterfront regeneration, Fountainbridge, Tollcross, Leith Walk corridor. Hybrid commercial-and-residential underwriting. LTVs 65 to 75%, mid-2026 rates 6.75 to 8.5% pa.",
    hero: {
      eyebrow: "Mixed-use",
      h1: "Mixed-Use Commercial Mortgages Edinburgh",
      lede:
        "Investment finance for mixed-use property and blocks combining commercial and residential elements in Edinburgh. Quartermile (the former Royal Infirmary site, mixed office, residential and academic), Edinburgh BioQuarter at Little France (life sciences, clinical, residential and commercial), Granton Waterfront regeneration on the north coast, Fountainbridge mixed-use, Tollcross and the Leith Walk regeneration corridor carry the bulk of the modern mixed-use stock. Lender appetite depends materially on the residential-versus-commercial proportion of total value. LTVs 65 to 75%, mid-2026 rates 6.75 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155%" },
        { label: "Rate range", value: "6.75 to 8.5% pa" },
        { label: "Facility", value: "£300K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh mixed-use commercial mortgage",
      body: [
        "Mixed-use covers blocks combining two or more substantive elements (commercial plus residential, retail plus office, hotel plus residential, office plus leisure) within a single asset or development. The underwriting test is <strong>blended ICR</strong>, with each element underwritten on its own cover test (retail at 140 to 160%, office at 140 to 155%, residential at 130 to 145% DSCR) and the aggregated cover ratio tested against the total mortgage payment. The <strong>residential-versus-commercial proportion</strong> by gross value is the lead underwriting variable. Where residential is 25 to 60% of total, the asset sits cleanly in the mixed-use commercial pool. Above 60% residential, lenders increasingly treat it as residential investment with commercial overlay. Below 25% residential, it sits as commercial with residential ancillary.",
        "Edinburgh mixed-use activity concentrates in the major regeneration zones. <strong>Quartermile (EH3)</strong> redevelops the former Royal Infirmary site as mixed office, residential and academic, anchored by the University of Edinburgh's Edinburgh Futures Institute (opened 2024). Plot delivery continues to add stabilised lots into the refinance pipeline. <strong>Edinburgh BioQuarter at Little France (EH16)</strong> combines life sciences, clinical, education and growing residential and commercial elements adjacent to the Royal Infirmary; the joint venture between NHS Lothian, University of Edinburgh, Scottish Enterprise and City of Edinburgh Council continues to deliver mixed-use plots. <strong>Granton Waterfront regeneration (EH5)</strong> on the north coast is a long-running mixed-use scheme combining residential, commercial and waterfront leisure; lender appetite is improving as the early phases stabilise. <strong>Fountainbridge (EH3/EH11)</strong> with Edinburgh Quay and the adjacent canal-side mixed-use schemes carries a maturing block of commercial-plus-residential stock. <strong>Tollcross (EH3)</strong> handles small-scale mixed-use blocks in the Old Town fringe. <strong>Leith Walk (EH6)</strong> regeneration on the back of the tram extension is generating the deepest new mixed-use pipeline outside the central CBD.",
        "Worked example: a four-storey Fountainbridge mixed-use block, ground-floor retail let on a 10-year FRI to an independent F&B operator, 12 long-leasehold residential apartments above let on AST. £4.8M valuation, £85K commercial passing rent, £198K aggregate residential rent. Blended ICR sized the loan at 70% LTV, £3.36M, with <strong>Lloyds</strong> Real Estate Banking pricing at 7.25% pa on a five-year fix. Worked example two: a Leith Walk regeneration mixed-use block, ground-floor commercial plus six residential flats above, £1.45M valuation, blended income £132K. <strong>Shawbrook</strong> placed at 70% LTV, 7.85% pa, 25-year term, blended ICR 1.55x.",
        "Edinburgh\'s Scottish leasehold framework is broadly comparable to England but uses long lease titles registered in the Land Register of Scotland rather than English leasehold. The Tenements (Scotland) Act 2004 governs common-parts liability in tenement and block structures, which features explicitly in lender comfort on residential elements within mixed-use blocks.",
      ],
    },
    schemeTypes: {
      h2: "Mixed-use assets we fund",
      items: [
        { label: "Quartermile mixed office, residential and academic (EH3)", detail: "The former Royal Infirmary site, anchored by the Edinburgh Futures Institute (opened 2024). Modern institutional-scale mixed stock; plot-by-plot refinance pipeline." },
        { label: "Edinburgh BioQuarter mixed-use (EH16)", detail: "Life-sciences cluster at Little France combining clinical, educational, residential and commercial. NHS Lothian / University of Edinburgh / Scottish Enterprise / City of Edinburgh JV." },
        { label: "Granton Waterfront regeneration (EH5)", detail: "Long-running mixed-use scheme on the north coast combining residential, commercial and waterfront leisure. Phased delivery; lender appetite improving as phases stabilise." },
        { label: "Fountainbridge and Edinburgh Quay (EH3/EH11)", detail: "Canal-side mixed-use schemes combining commercial and residential. Maturing block of stock entering refinance flow." },
        { label: "Leith Walk regeneration corridor (EH6)", detail: "Mixed-use blocks along the Leith Walk corridor on the back of the Trams to Newhaven extension. Ground-floor commercial plus residential above; deepest new pipeline outside the central CBD." },
        { label: "Small-scale block (commercial plus residential)", detail: "Retail or commercial ground-floor with residential above; the staple Edinburgh mixed-use block across Tollcross, Bruntsfield, Stockbridge and the Old Town fringe." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh mixed-use",
      intro:
        "Most mixed-use deals route as commercial investment mortgage on blended ICR. Where commercial is 75% plus of total value, the deal can sit on standard commercial investment terms. Where residential exceeds 60%, residential-investment lenders with commercial overlay become more competitive. Security is a standard security in the Land Register of Scotland.",
      structures: standardStructures,
    },
    edinburghContext: {
      h2: "The Edinburgh mixed-use estate",
      body: 'Edinburgh\'s mixed-use property market has expanded materially over the past decade on the back of major regeneration delivery. <strong>Quartermile (EH3)</strong>, the former Royal Infirmary site, has been redeveloped as mixed office, residential and academic over the past fifteen years; the University of Edinburgh\'s Edinburgh Futures Institute opened 2024 anchors the academic side and plot-by-plot delivery continues to add stabilised lots into refinance flow. <strong>Edinburgh BioQuarter at Little France (EH16)</strong>, the joint venture between NHS Lothian, University of Edinburgh, Scottish Enterprise and City of Edinburgh Council adjacent to the Royal Infirmary, has built one of Europe\'s larger life-sciences clusters with growing residential and commercial elements. <strong>Granton Waterfront (EH5)</strong> on the north coast is a long-running phased mixed-use scheme combining residential, commercial and waterfront leisure. <strong>Fountainbridge (EH3/EH11)</strong> with Edinburgh Quay and the adjacent canal-side schemes has matured into a coherent commercial-plus-residential block. <strong>Tollcross (EH3)</strong> handles small-scale mixed-use blocks at the Old Town fringe. <strong>Leith Walk (EH6)</strong> on the back of the June 2023 tram extension is generating the deepest new mixed-use pipeline outside the central CBD. The Scottish security framework (standard security in the Land Register of Scotland) and the Tenements (Scotland) Act 2004 governing common-parts liability in block structures are both well understood by mixed-use commercial mortgage desks. Listed-building consent through Edinburgh World Heritage applies on Old Town and New Town mixed-use blocks.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh mixed-use",
      body: 'Strong on prime regeneration mixed-use at Quartermile, Edinburgh BioQuarter and the modern Fountainbridge stock. <strong>NatWest</strong>, <strong>Lloyds</strong>, Bank of Scotland and <strong>Barclays</strong> compete on institutional mixed-use at 7.0 to 7.75% pa, 65 to 75% LTV with strong commercial covenants. Lloyds Real Estate Banking and Bank of Scotland Corporate Real Estate handle the larger institutional plots above £5M. Mid-market mixed-use blocks (£300K to £3M facility) route through <strong>Shawbrook</strong>, Allica Bank, HTB, YBS Commercial and Cambridge & Counties at 7.5 to 8.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and Together take the value-add and short-lease cases at 8.25 to 8.75% pa. Where residential exceeds 60% of total value, the deal increasingly routes through residential-investment lenders (Paragon, Foundation Home Loans) with commercial overlay rather than mainstream commercial desks. Granton Waterfront stock is improving on appetite as phases stabilise; early-phase delivery is still treated cautiously. Listed Old Town and New Town mixed-use stock routes through heritage-comfortable lenders only.',
    },
    faqs: [
      {
        question: "What proportion of commercial-to-residential drives mixed-use lending?",
        answer: "The lead variable on every mixed-use deal. Where commercial is 75% plus of total value, the deal sits cleanly on standard commercial investment terms with residential treated as ancillary. Where the split is 40 to 75% commercial, the asset sits in the core mixed-use pool with blended ICR underwriting (each element on its own cover test, aggregated against the mortgage payment). Where commercial is below 40% and residential dominates, residential-investment lenders with commercial overlay (Paragon, Foundation Home Loans) become more competitive than mainstream commercial desks.",
      },
      {
        question: "Can I get a mixed-use mortgage on a Quartermile plot?",
        answer: "Yes, where the plot is delivered, let and stabilised. Quartermile plots typically route through Lloyds Real Estate Banking, Bank of Scotland Corporate Real Estate or NatWest Commercial Real Estate at 7.0 to 7.75% pa, 65 to 75% LTV on strong-covenant lettings. Pre-delivery plots route as development finance with exit modelling onto term mixed-use commercial mortgage once practical completion and letting are both in place.",
      },
      {
        question: "Edinburgh BioQuarter mixed-use, is it fundable?",
        answer: "Yes, on stabilised plots with documented commercial leases and clear residential let position. The BioQuarter joint venture between NHS Lothian, University of Edinburgh, Scottish Enterprise and City of Edinburgh Council adds institutional comfort. Specialist healthcare and life-sciences lender desks at Lloyds, Bank of Scotland, OakNorth and Cynergy Bank cover larger plots; mainstream mixed-use desks handle smaller assets. Above £5M facility, deals typically route through structured commercial real estate at the institutional desks.",
      },
      {
        question: "What about the Leith Walk regeneration mixed-use stock?",
        answer: "The deepest new mixed-use pipeline outside the central CBD on the back of the Trams to Newhaven extension opened June 2023. Modern blocks with ground-floor commercial (independent F&B or retail) plus residential above are the staple archetype. Shawbrook, Allica Bank, HTB and YBS Commercial cover the mid-market at 7.5 to 8.5% pa, 70% LTV. The regeneration-led demand-shift signal is treated as a positive in credit memos.",
      },
      {
        question: "How does the Scottish Tenements Act affect mixed-use lending?",
        answer: "The Tenements (Scotland) Act 2004 governs common-parts liability and management in tenement and block structures. Lenders look for a clear management arrangement (factor in place, common-charges schedule, sinking fund where appropriate) on any mixed-use block with shared common parts. Edinburgh tenement and block stock is generally well-managed, but where management is informal or arrears exist, lenders require remediation as a condition precedent. The framework is broadly comparable to English service-charge arrangements but registered differently.",
      },
    ],
  },

  // Semi-commercial
  "semi-commercial": {
    slug: "semi-commercial",
    name: "Semi-Commercial",
    metaTitle: "Semi-Commercial Mortgages Edinburgh | Shop with Flat Above, Pub with Living Quarters, Leith Walk, Tollcross, Marchmont",
    metaDescription:
      "Commercial mortgage finance for semi-commercial property in Edinburgh, shop with flat above, pub with living quarters, office plus residential, archetypes through Leith Walk, Tollcross, Marchmont, Bruntsfield, Stockbridge and Portobello High Street. LTVs to 75%, mid-2026 rates 6.75 to 8.5% pa.",
    hero: {
      eyebrow: "Semi-commercial",
      h1: "Semi-Commercial Mortgages Edinburgh",
      lede:
        "Investment finance for semi-commercial property, the classic shop-with-flat-above archetype plus pub-with-living-quarters, office-plus-residential and any block where a single property combines a commercial element with one or two residential units. Edinburgh stock concentrates along Leith Walk (EH6), Tollcross (EH3), Marchmont (EH9), Bruntsfield Place (EH10), Stockbridge (EH3/EH4) and Portobello High Street (EH15). LTVs to 75% on the right archetype, mid-2026 rates 6.75 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 150%" },
        { label: "Rate range", value: "6.75 to 8.5% pa" },
        { label: "Facility", value: "£150K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh semi-commercial mortgage",
      body: [
        "Semi-commercial covers single properties combining one commercial element (shop, office, pub, salon) with one or two residential units above. Where residential is 15 to 40% of total value, the deal sits cleanly in the semi-commercial pool. Above 40% it migrates into mixed-use; below 15% it routes as pure commercial with residential ancillary. The underwriting test is <strong>blended ICR</strong>, commercial rent stressed at 140 to 160% plus residential rent stressed at 130 to 145%, aggregated against the mortgage payment.",
        "Edinburgh semi-commercial stock concentrates along the high-street parades and tenement-led inner-city corridors. <strong>Leith Walk (EH6)</strong> the densest single semi-commercial corridor in the city, ground-floor commercial (independent retail, F&B, services) with one or two tenement flats above; the tram extension has supported rents on both elements. <strong>Tollcross (EH3)</strong> small-scale shop-and-flat blocks at the Old Town fringe with year-round student-led demand. <strong>Marchmont (EH9)</strong> shop-and-flat archetypes serving the dense student catchment, often with HMO-licensed residential elements. <strong>Bruntsfield Place (EH10)</strong> professional-class shop-and-flat parade with strong year-round resident trade. <strong>Stockbridge (EH3/EH4)</strong> boutique shop-and-flat block adjacent to the dominant boutique retail and F&B cluster. <strong>Portobello High Street (EH15)</strong> the coastal high-street parade with growing F&B and independent retail plus tenement residential above.",
        "Worked example: a Leith Walk shop-and-flat block, ground-floor independent retail let on a 6-year FRI at £18K passing rent, two tenement flats above let on AST at £14K and £16K. £485K valuation, total income £48K. Blended ICR sized the loan at 72% LTV, £349K, with <strong>Shawbrook</strong> pricing at 7.45% pa on a five-year fix. Worked example two: a Marchmont shop-and-HMO-flat block, ground-floor F&B let to an independent operator, four-bed HMO-licensed flat above. £625K valuation, total income £52K. Placed via <strong>InterBay Commercial</strong> at 70% LTV, 7.85% pa, 25-year term, blended ICR 1.55x.",
        "Semi-commercial enjoys the keenest pricing of any hybrid asset class because the residential element is typically tenement flats with strong demand and stable occupancy, and the commercial element is typically convenience-led independent retail or F&B with year-round trade. Listed and conservation-area constraints apply across most of the central Edinburgh stock, lenders factor heritage status into LTV at the margin. The Tenements (Scotland) Act 2004 applies to common-parts liability in tenement structures. Note that the <strong>Edinburgh HMO licensing regime</strong> applies where any residential unit houses three or more unrelated occupants, the licence must be in place at completion.",
      ],
    },
    schemeTypes: {
      h2: "Semi-commercial assets we fund",
      items: [
        { label: "Shop with flat above (Leith Walk, Tollcross, Bruntsfield)", detail: "The staple Edinburgh semi-commercial archetype. Ground-floor retail or F&B with one or two tenement flats above. LTV to 75% on the right blended profile." },
        { label: "Marchmont shop with HMO-licensed flat", detail: "Shop-and-flat block where the residential element is HMO-licensed for student occupants. Edinburgh HMO licence overlay applies (three-plus unrelated occupants triggers mandatory licensing)." },
        { label: "Pub with living quarters above", detail: "Pub freehold with residential flat above, treated as semi-commercial where residential is 25 to 40% of value. Hybrid trading-business plus residential investment underwriting." },
        { label: "Office plus residential", detail: "Ground-floor or upper-floor office with adjacent or above residential. Less common than shop-and-flat but a real Edinburgh archetype in Stockbridge and Tollcross." },
        { label: "Salon, treatment room or service plus flat", detail: "Hair salon, dental, beauty, treatment room or professional service freehold with flat above. Convenience-led residential demand plus owner-operator commercial trade." },
        { label: "Boutique shop with maisonette (Stockbridge, Portobello)", detail: "Boutique retail or F&B with maisonette-style residential above. Premium suburban professional pitches; strong commercial and residential demand combined." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh semi-commercial",
      intro:
        "Most semi-commercial deals route as commercial investment mortgage on blended ICR. Owner-occupier where the borrower operates the commercial element. Bridge-to-let funds vacant or value-add purchase with refurbishment exit onto term semi-commercial. Security is a standard security in the Land Register of Scotland.",
      structures: standardStructures,
    },
    edinburghContext: {
      h2: "The Edinburgh semi-commercial estate",
      body: 'Edinburgh\'s semi-commercial stock is the classic tenement-and-shop archetype that dominates the inner-city high-street parades. The Victorian and Edwardian tenement structures that fill the central Edinburgh built environment routinely combine ground-floor commercial with one to four tenement flats above, and these properties form the bulk of the semi-commercial commercial mortgage pipeline. <strong>Leith Walk (EH6)</strong> is the densest single semi-commercial corridor in the city, and the June 2023 tram extension has supported both commercial rents and residential rents along the length of the corridor. <strong>Tollcross (EH3)</strong>, <strong>Marchmont (EH9)</strong>, <strong>Bruntsfield Place (EH10)</strong>, <strong>Stockbridge (EH3/EH4)</strong> and <strong>Portobello High Street (EH15)</strong> carry the next densest concentration. The Old Town and New Town fringes (Grassmarket, Cowgate, Rose Street) carry heritage semi-commercial stock with listed-building constraints. The Tenements (Scotland) Act 2004 governs common-parts liability in tenement structures, every Edinburgh semi-commercial deal needs a clear factor and common-charges schedule. The Edinburgh HMO licensing regime applies where any residential unit houses three or more unrelated occupants, materially wider than the English five-plus threshold and a frequent trip-hazard for buyers from outside Scotland.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh semi-commercial",
      body: 'Strong across the asset class, semi-commercial routinely prices at the keenest end of any hybrid asset class because residential income stabilises the cover ratio and commercial income provides yield uplift. <strong>NatWest</strong>, <strong>Lloyds</strong>, Bank of Scotland and <strong>Santander</strong> compete on prime semi-commercial with strong-covenant commercial lettings at 7.0 to 7.75% pa, 70 to 75% LTV. <strong>Shawbrook</strong>, Allica Bank, HTB, YBS Commercial and Cambridge & Counties dominate the mid-market at 7.5 to 8.25% pa for the £200K to £1M facility bracket. <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong> and Together take the harder cases (short commercial lease tail, HMO-licensed residential element, value-add or refurb-needed stock) at 8.0 to 8.5% pa. Paragon Bank and Foundation Home Loans cover the residential-heavy end where residential exceeds 35% of total value. Heritage and listed Old Town stock routes through heritage-comfortable lenders only. Clydesdale Bank / Virgin Money UK selectively active on Scottish semi-commercial SME owner-occupier.',
    },
    faqs: [
      {
        question: "What is the residential-to-commercial split that defines semi-commercial?",
        answer: "Residential between 15 and 40% of total value typically sits cleanly in the semi-commercial pool. Above 40% the deal migrates into mixed-use lender territory; below 15% it routes as pure commercial with residential treated as ancillary. The split is calculated by gross value, not floor area, lenders look at the relative value contribution of each element. We benchmark this at outset because the wrong-pool first-time approach loses six weeks.",
      },
      {
        question: "Can I get 75% LTV on an Edinburgh shop-and-flat block?",
        answer: "Yes, on the right archetype. Blended ICR at 145% across a Leith Walk, Bruntsfield or Stockbridge shop-and-flat with two-plus years' lease tail on the commercial and AST or HMO licence in place on the residential routinely supports 75% LTV at 7.0 to 7.75% pa. The residential income stabilises the cover ratio; the commercial element provides yield uplift. NatWest, Lloyds, Bank of Scotland and Santander all compete on this profile.",
      },
      {
        question: "Marchmont shop with HMO-licensed flat, any complications?",
        answer: "The Edinburgh HMO licensing regime applies to any residential unit housing three or more unrelated occupants, materially wider than the English five-plus threshold. The HMO licence must be in place at completion and is granted by City of Edinburgh Council under the Housing (Scotland) Act 2006. Lenders look for the licence as a condition precedent on Marchmont and Southside student-belt deals. We verify the licence position at outset and feature it explicitly in the credit memo.",
      },
      {
        question: "Pub with living quarters, semi-commercial or trading-business?",
        answer: 'Depends on the relative split. Where the pub trading element dominates and residential is the operator\'s living quarters only (15% or less of value), the deal routes as <a href="/property-types/pub-restaurant">trading-business pub mortgage</a>. Where the residential is a separate let flat (25 to 40% of value), the deal routes as semi-commercial with hybrid underwriting, pub EBITDA tested against trading-business cover plus residential rent tested against ICR. We work out the right route at outset.',
      },
      {
        question: "Do listed Old Town and New Town blocks fund cleanly?",
        answer: "Yes, but the lender pool narrows. Listed and conservation-area semi-commercial blocks (Grassmarket, Cowgate, Rose Street, Stockbridge listed terraces) route through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Allica Bank, Bank of Scotland. LTV is typically 5 percentage points tighter than non-listed stock reflecting listed-building consent constraints on alteration; otherwise comparable terms. Pricing typically 7.5 to 8.25% pa at 65 to 70% LTV.",
      },
    ],
  },

  // HMO block
  "hmo-block": {
    slug: "hmo-block",
    name: "HMO Block",
    metaTitle: "HMO Commercial Mortgages Edinburgh | Marchmont, Southside, Tollcross, Bruntsfield, Leith, Edinburgh HMO Licensing",
    metaDescription:
      "Specialist commercial mortgage finance for HMO blocks in Edinburgh, Marchmont and Southside (EH9 student belt), Tollcross, Bruntsfield, Leith. Edinburgh strict HMO licensing under the Housing (Scotland) Act 2006, three-plus unrelated occupants threshold. ~45,000 University of Edinburgh students plus combined ~75,000 across three universities. LTVs 65 to 75%, mid-2026 rates 6.75 to 8.5% pa.",
    hero: {
      eyebrow: "HMO block",
      h1: "HMO Block Commercial Mortgages Edinburgh",
      lede:
        "Specialist commercial mortgages for HMO (House in Multiple Occupation) blocks and portfolios in Edinburgh. The University of Edinburgh student catchment of around 45,000 plus Heriot-Watt (around 10,000) and Edinburgh Napier (around 20,000) drives the most active urban student-HMO market in Scotland; the EH9 Marchmont and Southside belt is the densest single concentration in the city. Edinburgh operates a strict HMO licensing regime under the Housing (Scotland) Act 2006, the three-plus unrelated occupants threshold (much wider than the English five-plus threshold) is a Scotland-specific trip-hazard. LTVs 65 to 75%, mid-2026 rates 6.75 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "DSCR 130 to 145%" },
        { label: "Rate range", value: "6.75 to 8.5% pa" },
        { label: "Facility", value: "£250K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting an Edinburgh HMO commercial mortgage",
      body: [
        "HMO commercial mortgages route through specialist desks and use <strong>DSCR</strong> (debt-service cover ratio) at 130 to 145% rather than the ICR used on standard investment property. Capital amortisation matters more to the lender because the operating model is higher-management-intensity and per-bed risk is real. Edinburgh HMO underwriting carries a Scotland-specific overlay that catches many buyers from outside Scotland off-guard.",
        "Edinburgh operates a <strong>strict HMO licensing regime</strong> under the Housing (Scotland) Act 2006 administered by City of Edinburgh Council. The single most important difference from England is the threshold, an HMO licence is required for any property housing <strong>three or more unrelated occupants</strong>, materially wider than the English five-plus threshold under the Housing Act 2004. This catches a large slice of the Edinburgh student-let market that would not require a licence in England. The licence is granted to the landlord (or property factor) and the property; it must be in place at completion of any purchase and at refinance. Lenders look for the licence as a condition precedent and verify its expiry date in the credit pack.",
        "Edinburgh HMO geography concentrates in four belts. <strong>Marchmont and Southside (EH9)</strong> the densest single HMO cluster in the city, the student belt around the University of Edinburgh main campus at George Square. <strong>Tollcross (EH3)</strong> the student-and-professional belt at the Old Town fringe, mixed HMO and ordinary residential. <strong>Bruntsfield (EH10)</strong> the professional-class belt with selective HMO licensing, mid-range student-and-professional mix. <strong>Leith (EH6)</strong> the regeneration corridor with growing professional-HMO and young-professional shared occupancy on the back of the tram extension.",
        "Worked example: a 6-bed Marchmont tenement flat, HMO licensed, fully let to students at £700 pcm per room, gross income £50.4K, £415K valuation. <strong>LendInvest</strong> placed at 75% LTV, 7.45% pa, 25-year term, DSCR 1.45x. The Edinburgh HMO licence and current Edinburgh HMO compliance pack were both featured in the underwriting submission. Worked example two: a 4-property Marchmont and Southside HMO portfolio, 18 beds total, £1.45M aggregate valuation, £158K aggregate gross income. Placed via <strong>Shawbrook</strong> at 72% LTV, 7.85% pa on aggregated DSCR 1.38x, blanket-charge structure with all four Edinburgh HMO licences current.",
        "Edinburgh also operates the wider <strong>Scottish Private Residential Tenancy (PRT)</strong> regime, the open-ended tenancy structure introduced by the Private Housing (Tenancies) (Scotland) Act 2016 replaced short assured tenancies for all new lets from December 2017. PRT carries different notice and rent-review rules to the English AST, and lenders factor PRT structure into HMO underwriting explicitly. Note that Edinburgh has been designated a rent-pressure-zone-eligible area but no formal rent-pressure zone is currently in force; the policy framework is monitored.",
      ],
    },
    schemeTypes: {
      h2: "HMO assets we fund",
      items: [
        { label: "Marchmont and Southside student HMO (EH9)", detail: "The densest single HMO cluster in Edinburgh, student-let tenement flats around the University of Edinburgh main campus. 3 to 8 bed configurations dominate." },
        { label: "Tollcross student-and-professional HMO (EH3)", detail: "Mixed student-and-professional HMO at the Old Town fringe. Mid-range tenement stock; strong year-round demand." },
        { label: "Bruntsfield professional HMO (EH10)", detail: "Professional-class HMO blocks in the affluent southern belt. Mid-range share-house occupancy, often young-professional rather than student." },
        { label: "Leith professional HMO (EH6)", detail: "Regeneration-corridor HMO on the back of the tram extension. Growing young-professional shared occupancy; modern and tenement stock combined." },
        { label: "Large HMO block (10-plus beds)", detail: "Purpose-built or converted larger HMO block. Specialist underwriting; institutional student-let operators (Sanctuary, Unite, Fresh) active on the larger end." },
        { label: "HMO portfolio (3-plus properties)", detail: "Aggregated portfolio facility for 3-plus HMO properties across Edinburgh. DSCR-led at 130 to 145%; blanket-charge or property-by-property structure." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Edinburgh HMOs",
      intro:
        "Specialist HMO commercial mortgage is the primary route. Single-asset HMO on commercial-investment terms; 3-plus property portfolio on aggregated DSCR. Bridge-to-let funds vacant HMO acquisition with refurbishment and HMO licence transition. Security is a standard security in the Land Register of Scotland.",
      structures: [
        { product: "HMO commercial mortgage (single asset)", applicability: "Single HMO property, DSCR at 130 to 145% stressed. Edinburgh HMO licence (three-plus unrelated occupants) is a credit condition." },
        { product: "HMO portfolio mortgage", applicability: "3-plus HMO properties aggregated. Aggregated DSCR at 130 to 145% on blended income; blanket-charge or property-by-property structure." },
        { product: "Commercial bridge-to-let", applicability: "Vacant HMO acquisition or refurbishment-needed property with HMO licence transition. 12 to 18 month bridge with exit onto term HMO mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established HMO portfolio." },
      ],
    },
    edinburghContext: {
      h2: "The Edinburgh HMO market",
      body: 'Edinburgh has the deepest urban student-HMO market in Scotland on the back of approximately 75,000 combined students across the University of Edinburgh (around 45,000), Heriot-Watt (around 10,000) and Edinburgh Napier (around 20,000). The market concentrates in four belts. <strong>Marchmont and Southside (EH9)</strong> is the densest single HMO cluster in the city, the student belt running south of the Meadows around the University of Edinburgh main campus at George Square, Bristo Square and Pollock Halls. <strong>Tollcross (EH3)</strong> at the Old Town fringe carries the secondary student-and-professional belt. <strong>Bruntsfield (EH10)</strong> in the southern professional belt carries professional-class HMO with selective student overflow. <strong>Leith (EH6)</strong> on the back of the June 2023 tram extension has become the dominant new young-professional HMO corridor with both modern and tenement stock active. The Edinburgh HMO licensing regime under the Housing (Scotland) Act 2006 is administered by City of Edinburgh Council and is materially stricter than the English Housing Act 2004 regime, the three-plus unrelated occupants threshold catches a much wider slice of the let market than the English five-plus threshold. Licences are granted to the landlord and the property, typically for three-year terms with renewal inspections. The Scottish Private Residential Tenancy regime under the Private Housing (Tenancies) (Scotland) Act 2016 governs all new lets from December 2017 with different notice and rent-review rules to the English AST. Edinburgh has been considered for rent-pressure-zone designation but no formal zone is currently in force; lenders monitor the policy framework.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh HMOs",
      body: '<strong>Shawbrook</strong>, <strong>LendInvest</strong>, Paragon Bank and Cambridge & Counties are the most active specialist HMO commercial mortgage lenders for Edinburgh, all four hold deep books and price the Marchmont and Southside student belt keenly. Together, Foundation Home Loans and Aldermore cover the broader specialist market at 7.5 to 8.5% pa. Allica Bank and HTB selectively active on portfolio refinance. Mainstream commercial desks (NatWest, Lloyds, Bank of Scotland, Barclays, Santander) typically decline HMO outright, they treat the operating model as residential-investment with operational risk. Mid-2026 pricing 6.75 to 8.5% pa at 65 to 75% LTV. The Edinburgh HMO licence is non-negotiable, a missing licence or a licence expiring during the loan term takes the deal off the panel for every lender. We verify Edinburgh HMO licence position at outset and feature it explicitly in every submission. Clydesdale Bank / Virgin Money UK selectively active on smaller Scottish HMO owner-occupier portfolios. A small minority of English-only HMO specialists do not lend in Scotland; we identify those at outset.',
    },
    faqs: [
      {
        question: "What LTV can I get on an Edinburgh HMO?",
        answer: "Up to 75% LTV on the right archetype, a Marchmont, Southside or Tollcross HMO with current Edinburgh HMO licence, full occupancy and three-plus years' trading evidence. DSCR at 145% stressed sizes the loan. Below 65% occupancy or with the licence in renewal pulls LTV down to 65 to 70%. Shawbrook, LendInvest, Paragon Bank and Cambridge & Counties are the most active named lenders.",
      },
      {
        question: "How does the Edinburgh HMO licensing regime differ from England?",
        answer: "Materially. The Edinburgh (and Scottish) HMO licence is required for any property housing three or more unrelated occupants, much wider than the English five-plus threshold under the Housing Act 2004. The licence is administered by City of Edinburgh Council under the Housing (Scotland) Act 2006, typically granted for three-year terms with renewal inspections. The licence must be in place at completion of purchase or refinance. We verify the licence position at outset for every Edinburgh HMO deal.",
      },
      {
        question: "Can I get a commercial mortgage on a portfolio of Edinburgh HMOs?",
        answer: 'Yes, typically 3-plus properties consolidated via portfolio refinance, blanket-charge or property-by-property structure, aggregated DSCR at 130 to 145% on blended income. Shawbrook, LendInvest, Paragon Bank and Cambridge & Counties lead. We model aggregated DSCR plus per-property Edinburgh HMO licence position so the credit committee sees the diversification story plus the regulatory pack explicitly. Routes via <a href="/services/portfolio-refinance">portfolio refinance</a>.',
      },
      {
        question: "What about the Scottish PRT regime, does it affect HMO lending?",
        answer: "The Scottish Private Residential Tenancy under the Private Housing (Tenancies) (Scotland) Act 2016 replaced short assured tenancies for all new lets from December 2017. PRT is open-ended (no fixed term) with statutory grounds for repossession and specific notice and rent-review rules. Lenders factor PRT structure into HMO underwriting, the open-ended structure carries different rent-review economics to the English AST. Most HMO commercial lenders are now fully comfortable with PRT; we factor it explicitly into the credit memo.",
      },
      {
        question: "What about future rent-pressure-zone designation?",
        answer: "Edinburgh has been considered for rent-pressure-zone designation under the Private Housing (Tenancies) (Scotland) Act 2016 but no formal zone is currently in force. Lenders monitor the policy framework, a formal RPZ would cap rent increases in the designated area and would feed into DSCR modelling on refinance. We flag the policy position in every Edinburgh HMO submission so the lender sees the current and prospective regulatory backdrop.",
      },
    ],
  },

  // Holiday-let portfolio
  "holiday-let-portfolio": {
    slug: "holiday-let-portfolio",
    name: "Holiday Let Portfolio",
    metaTitle: "Holiday Let Mortgages Edinburgh | Festival Short-Lets, Old Town Royal Mile, Leith Waterfront, Portobello, Scottish STL Licensing",
    metaDescription:
      "Specialist commercial mortgage finance for FHL (furnished holiday let) portfolios in Edinburgh, Festival short-lets July to August, Old Town Royal Mile tourism short-lets, Leith waterfront, Portobello. Scottish short-term lets licensing scheme since 2022. LTVs to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Holiday-let portfolio",
      h1: "Holiday Let Portfolio Mortgages Edinburgh",
      lede:
        "Specialist commercial mortgages for FHL (furnished holiday let) portfolios and short-stay rental stock across Edinburgh. Aggregated facility across 3-plus properties on occupancy-and-ADR underwriting. Edinburgh carries the deepest urban short-let market in Scotland on the back of around 13 million annual visitors and the Edinburgh Festival peak in July and August. The Old Town and Royal Mile (EH1), Leith waterfront (EH6) and Portobello (EH15) carry the bulk of the stock. The <strong>Scottish short-term lets licensing scheme</strong> in force since 2022 is the single most important regulatory variable, lender appetite has narrowed materially on STL portfolios where the licence is not in place. LTVs to 70%, mid-2026 rates 7.5 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "Up to 70%" },
        { label: "Cover test", value: "DSCR 130 to 145%" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£300K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an FHL portfolio commercial mortgage",
      body: [
        "FHL (furnished holiday let) properties qualify for distinct treatment, they are commercially-let assets generating short-stay holiday income rather than long-term residential rent. Lender underwriting tests four variables. <strong>Average occupancy</strong> across the calendar year (sustained 60 to 75% is the Edinburgh threshold given the Festival peak plus year-round tourism). <strong>Average daily rate (ADR)</strong> by season. <strong>Seasonality</strong> Festival-week ADR matters as much as headline annual figure; Edinburgh peak-week ADR routinely runs at three to four times annual average. <strong>Platform mix</strong> Airbnb, Booking.com, direct, plus owner-managed versus agent-managed.",
        "The single most important Edinburgh-specific variable is the <strong>Scottish short-term lets licensing scheme</strong> introduced under the Civic Government (Scotland) Act 1982 (Licensing of Short-term Lets) Order 2022. From October 2022 the scheme requires all short-term lets in Scotland to hold a licence; existing operators had to apply by April 2023 and have decisions through 2023 to 2024. Edinburgh applied the licensing scheme with additional control-zone designation across the city, which adds planning consent requirements on top of the licence for many short-let conversions. Lenders verify the STL licence position as a credit condition on every Edinburgh short-let portfolio deal, a missing or in-process licence takes the deal off the mainstream panel.",
        "Most FHL portfolio lenders need <strong>3-plus properties</strong> to consider portfolio-refinance pricing. Single-asset FHL routes through specialist BTL with FHL product (different pool, different logic). Portfolio underwriting tests <strong>aggregated DSCR</strong> at 130 to 145% across all properties, the diversification of income across multiple FHLs gives lenders comfort that one bad week at a single property does not break the portfolio.",
        "Edinburgh FHL geography concentrates in three areas. <strong>Old Town and Royal Mile (EH1)</strong> the densest short-let cluster on the back of World Heritage tourism, deep year-round demand plus sharp Festival peaks. <strong>Leith waterfront (EH6)</strong> The Shore and adjacent waterfront stock, mid-range short-lets benefiting from the F&B regeneration corridor and the tram extension. <strong>Portobello (EH15)</strong> the coastal short-let market, summer beach demand plus year-round tourism overspill.",
        "Worked example: a 5-property Old Town short-let portfolio, four Royal Mile flats and one Grassmarket flat, £2.65M aggregate valuation, £298K aggregate annual gross income, 71% blended occupancy, all five STL licences in place. <strong>LendInvest</strong> placed at 65% LTV, 8.45% pa on a 5-year fix, 25-year term, aggregated DSCR 1.42x. Worked example two: a 4-property Leith waterfront portfolio, all STL licensed, £1.95M aggregate, £215K aggregate annual gross income, 68% blended occupancy. Placed via Together at 65% LTV, 8.55% pa. The Festival-week revenue concentration plus the STL licence position were both modelled explicitly in the underwriting pack.",
      ],
    },
    schemeTypes: {
      h2: "Holiday-let portfolio assets we fund",
      items: [
        { label: "Single-asset FHL", detail: "Single property let on FHL basis, typically a central Old Town or New Town short-let. Routes through specialist BTL with FHL product rather than portfolio facility." },
        { label: "FHL portfolio (3-plus properties)", detail: "Aggregated portfolio facility for 3-plus FHLs across Edinburgh. DSCR-led, blanket-charge or property-by-property structure. STL licence required on every property." },
        { label: "Old Town Royal Mile short-let cluster (EH1)", detail: "The densest short-let cluster in Edinburgh, World Heritage tourism plus Festival peaks. Premium ADR; tightest STL licensing scrutiny." },
        { label: "Leith waterfront short-lets (EH6)", detail: "The Shore and adjacent waterfront stock, mid-range short-lets on the back of the F&B regeneration and tram extension." },
        { label: "Portobello coastal short-lets (EH15)", detail: "Coastal short-let market, summer beach demand plus year-round tourism overspill. Mid-range ADR; control-zone designation applies." },
        { label: "Festival-focused short-lets (city-wide)", detail: "Properties operating predominantly as Festival short-lets with longer-term let in off-peak. Specialist underwriting on revenue concentration; STL licence essential." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for FHL portfolios",
      intro:
        "FHL commercial mortgage on a portfolio basis is the primary route for 3-plus properties. Single-asset FHLs route through specialist BTL or commercial investment. Operator-occupied B&Bs route through trading-business mortgage. Security is a standard security in the Land Register of Scotland.",
      structures: [
        { product: "FHL portfolio mortgage", applicability: "3-plus FHL properties aggregated under a single facility. DSCR-led at 130 to 145% on blended income. Scottish STL licence required on every property." },
        { product: "Trading-business mortgage", applicability: "Operator-occupied B&B or guesthouse, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus refurbishment of property for new FHL use; term-out onto FHL portfolio once STL licence in place and trading stabilised." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established FHL portfolio." },
      ],
    },
    edinburghContext: {
      h2: "The Edinburgh FHL market",
      body: 'Edinburgh has the deepest urban short-let market in Scotland on the back of around 13 million annual visitors, the Edinburgh Festival and Fringe peak in July and August, year-round Old Town and Royal Mile tourism, and the financial-services business-stay layer. The <strong>Old Town and Royal Mile (EH1)</strong> is the densest short-let cluster in the city, World Heritage tourism plus sharp Festival peaks support premium ADR; Festival-week rates routinely run at three to four times annual average for centrally-located stock. <strong>Leith waterfront (EH6)</strong> on the back of the Trams to Newhaven extension opened June 2023 has become a maturing mid-range short-let corridor, The Shore and adjacent waterfront stock benefit from the F&B regeneration. <strong>Portobello (EH15)</strong> on the coast carries summer beach demand plus year-round overspill from central Edinburgh. The single most important regulatory variable is the <strong>Scottish short-term lets licensing scheme</strong> introduced under the Civic Government (Scotland) Act 1982 (Licensing of Short-term Lets) Order 2022. From October 2022 all Scottish short-term lets require a licence; Edinburgh has applied additional control-zone designation across the city, which adds planning consent requirements on top of the licence for many short-let conversions. Lender appetite has narrowed materially on STL portfolios since 2022, mainstream commercial desks now require the licence in place at completion and built into the underwriting pack. The policy framework continues to evolve and lenders monitor it actively.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh FHL portfolios",
      body: '<strong>LendInvest</strong>, Together and Cambridge & Counties are the most active specialist FHL portfolio lenders for Edinburgh. Cambridge & Counties covers larger portfolios (5-plus properties, £2M-plus aggregate facility). Allica Bank engages on selective Edinburgh-led stock. Select private credit on bespoke structures. Mid-2026 pricing 7.5 to 9.0% pa at 60 to 70% LTV. Mainstream commercial desks (NatWest, Lloyds, Bank of Scotland, Barclays, Santander) largely decline FHL outright, they treat short-stay income as too volatile, and the Scottish STL licensing overlay has narrowed appetite further since 2022. Specialist BTL desks (Paragon Bank, Aldermore, Foundation Home Loans) cover single-asset FHL but not portfolio-aggregated structures. The Scottish STL licence is non-negotiable, a missing or in-process licence takes the deal off every mainstream panel. Get the right specialist first time, wrong desk loses six weeks. Edinburgh\'s Festival peak plus year-round tourism profile means underwriters take Edinburgh FHL more comfortably than equivalent stock in less-anchored Scottish markets, but the regulatory overlay is materially tighter than England.',
    },
    faqs: [
      {
        question: "Is an FHL a commercial mortgage or buy-to-let?",
        answer: "Single-asset FHL often routes through specialist BTL with FHL product, different pool, different logic. Portfolios of 3-plus properties route through commercial portfolio facilities at better aggregated terms and DSCR-led underwriting. The threshold matters: at 2 properties, you are still in BTL territory; at 3, the portfolio commercial pool opens up. The Scottish STL licence is required regardless of the route, single-asset or portfolio.",
      },
      {
        question: "How does the Scottish STL licensing scheme affect lending?",
        answer: "Materially. The scheme introduced under the Civic Government (Scotland) Act 1982 (Licensing of Short-term Lets) Order 2022 requires all Scottish short-term lets to hold a licence from October 2022. Edinburgh has applied additional control-zone designation across the city, adding planning consent requirements on top of the licence for many short-let conversions. Mainstream commercial lenders require the licence in place at completion; a missing or in-process licence takes the deal off the panel. We verify STL licence position on every Edinburgh FHL deal at outset.",
      },
      {
        question: "What occupancy do Edinburgh FHL lenders need?",
        answer: "Sustained <strong>60 to 75% annual occupancy</strong> across the portfolio is the Edinburgh threshold; the year-round Old Town tourism flow plus the Festival peak supports higher annualised occupancy than most regional cities. Strong-week ADR matters as much as headline annual figure, an Old Town flat at 90% occupancy through summer and Festival peaks and 55% off-peak reads better than the same flat at flat 70% across all months. We model a full 12-month occupancy and ADR curve before submission so the lender sees the seasonality story explicitly.",
      },
      {
        question: "Are B&B and FHL the same lender pool?",
        answer: 'Overlapping but distinct. Operator-owned B&B with on-site owner residence routes as <a href="/services/trading-business-mortgage">trading-business mortgage</a> on EBITDA cover. Pure FHL with guest-only occupancy and no on-site operator routes as FHL portfolio on DSCR. Mixed structures (a B&B that also takes some FHL bookings) need careful structuring at outset to avoid landing in the wrong product. Both routes require the Scottish STL licence in Edinburgh.',
      },
      {
        question: "FHL tax changes, do lenders factor them in?",
        answer: "Yes. The April 2025 abolition of the FHL tax regime (FHLs now treated like ordinary residential lets for tax purposes) has fed into lender modelling, net rent assumptions tightened, DSCR cover ratios moved 5 to 10 percentage points wider for new applications. The change has not closed the FHL market, but it has narrowed pricing slightly and made operator-track-record more important. Combined with the Scottish STL licensing overlay, the Edinburgh FHL market is materially more regulated and operator-dependent than it was pre-2022. We flag the post-April-2025 net-yield position plus the STL licence in every Edinburgh FHL submission.",
      },
    ],
  },
};

export function getAssetTypeDetail(slug: string): AssetTypeDetail | null {
  return assetTypeDetails[slug] ?? null;
}

export const ASSET_TYPE_LINKS = Object.values(assetTypeDetails).map((a) => ({
  slug: a.slug,
  name: a.name,
}));
