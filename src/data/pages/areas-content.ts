/**
 * Per-district area page content, Commercial Mortgages Edinburgh.
 *
 * Each area page is a Bradley-Benner local landing page where the
 * neighbourhood IS the primary entity. Heading vocabulary uses different
 * entity variants across URL / title / H1 / H2s / H3s, no phrase repeats.
 *
 * Differentiation comes from layered local data:
 *   1. Real City of Edinburgh Council public access planning applications
 *      (filtered by postcode catchment) cited by reference number, address
 *      and proposal.
 *   2. Registers of Scotland transaction temperature used as market
 *      temperature only, never claimed as commercial transactions.
 *   3. Sector-specific lender appetite naming the lenders most likely to
 *      fund the dominant local commercial mortgage profile.
 *
 * Scotland-specific framing: the security document is a standard security
 * under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered
 * in the Land Register of Scotland. LBTT (Revenue Scotland) applies in place
 * of LBTT. Enforcement runs through the Sheriff Court via a calling-up
 * notice rather than English possession proceedings.
 *
 * NeuronWriter discipline: every page hits mortgage / commercial mortgage
 * / Edinburgh / [area] / finance / lender / broker, plus the entity set,
 * FCA, LBTT, refinancing, LTV, standard security.
 *
 * Slugs match AREAS in src/lib/constants.ts and AREA_IMAGES in src/data/area-images.ts.
 */

export interface PlanningRef {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    lede: string;
  };
  marketContext: {
    h2: string;
    body: string[];
  };
  planningContext: {
    h2: string;
    body: string;
    refs: PlanningRef[];
  };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string; typicalSize?: string }>;
  };
  finance: {
    h2: string;
    body: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  lenderAppetite: {
    h2: string;
    body: string;
  };
  /** Property types most active in this district, slugs from property-types-content.ts. */
  relatedAssetClasses: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const standardCmStructures = [
  { product: "Owner-occupier", applicability: "Businesses buying their trading premises, EBITDA cover at 1.3 to 1.5x, LTV to 75% on bricks." },
  { product: "Commercial investment", applicability: "Let assets, ICR at 140 to 160% stressed, LTV typically 65 to 75%." },
  { product: "Semi-commercial", applicability: "Shop plus flat archetypes, blended ICR around 145%, LTVs to 75% via specialists." },
  { product: "Bridge-to-let", applicability: "Vacant or value-add acquisitions with refurb and re-let exit onto term mortgage." },
  { product: "Refinancing", applicability: "Maturing facilities, equity release on stabilised commercial assets, rate-driven switches." },
];

export interface AreasHubContent {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  groupings: Array<{
    title: string;
    description: string;
    slugs: string[];
  }>;
  closing: {
    h2: string;
    body: string;
  };
}

export const areasHubContent: AreasHubContent = {
  hero: {
    eyebrow: "Where we lend",
    h1: "Commercial Mortgages Edinburgh by Area",
    lede:
      "From the World Heritage Old Town and the Royal Mile in EH1, through the Charlotte Square and St Andrew Square financial-services core in EH2 and EH3, out to Edinburgh Park and South Gyle in EH12 and the BioQuarter at Little France in EH16, the Edinburgh commercial mortgage market is not one market, it is twelve. Each district carries its own dominant property type, its own typical facility size and its own lender shortlist. Every area page below stitches together the live City of Edinburgh Council public access pipeline, Registers of Scotland transaction temperature and the named lenders most likely to fund a deal there.",
  },
  intro: {
    h2: "How the Edinburgh commercial mortgage market splits by district",
    body: [
      "Pricing inside the EH2 New Town ring is not the same as pricing on Edinburgh Park in EH12. ICR thresholds on a Royal Mile listed hospitality freehold are not the same as on a Charlotte Square Grade A office. The lender shortlist for a Leith Walk mixed-use refinance after the Trams to Newhaven extension is almost entirely different from the shortlist for a BioQuarter life-sciences wet-lab investment. Every area page below carries the specifics that matter, postcode, named planning applications drawn from the City of Edinburgh Council public access portal, dominant commercial sector mix, expected LTV and rate range, and the lenders we lean on first.",
      "We arrange commercial mortgages, finance and refinancing across all twelve districts. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. Land and Buildings Transaction Tax (LBTT, administered by Revenue Scotland) applies on every commercial purchase at the Scottish non-residential rates, your solicitor will price it. The security document on every Edinburgh deal is a standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, with enforcement running through the Sheriff Court via calling-up notice rather than English possession proceedings. Where a lender takes more than 60% LTV against a trading business, expect EBITDA cover testing in addition to bricks-and-mortar valuation. Bank of Scotland, Clydesdale Bank and Virgin Money UK all carry Scottish-headquartered commercial desks active across Edinburgh.",
    ],
  },
  groupings: [
    {
      title: "World Heritage core, Old Town, New Town and the central retail spine",
      description:
        "The deepest Edinburgh commercial mortgage market. Old Town and Royal Mile EH1 heritage hospitality, New Town George Street and Charlotte Square EH2 and EH3 premium office and luxury retail, and the Princes Street and St James Quarter EH1 and EH2 flagship retail and leisure spine anchored by Nuveen. Anchor facility sizes 800,000 pounds to 8M pounds.",
      slugs: ["old-town-royal-mile", "new-town-george-street", "princes-street-st-james"],
    },
    {
      title: "Financial services and rail-hub office cluster",
      description:
        "Edinburgh as the UK second financial centre. West End and Haymarket EH3 and EH12 professional services and Grade A office around Haymarket station, Tollcross and Fountainbridge EH3 mixed-use regeneration on the former brewery quarter, Edinburgh Park and South Gyle EH12 Parabola masterplan anchored by Lloyds Banking Group, abrdn and Diageo.",
      slugs: ["west-end-haymarket", "tollcross-fountainbridge", "edinburgh-park-south-gyle"],
    },
    {
      title: "Regeneration corridor and waterfront",
      description:
        "Leith and Newhaven EH6 Trams to Newhaven extension, Ocean Terminal and the Leith F&B corridor, plus Portobello EH15 coastal regeneration on the EH15 seafront and Stockbridge EH3 and EH4 boutique retail and F&B. Mid-cap mixed-use, hospitality and independent retail.",
      slugs: ["leith-newhaven", "portobello", "stockbridge"],
    },
    {
      title: "University halo, suburban professional and life sciences",
      description:
        "Southside and the Meadows EH8 and EH9 University of Edinburgh student-economy semi-commercial and HMO, Morningside and Bruntsfield EH9 and EH10 affluent suburban retail and professional services freeholds, Edinburgh BioQuarter and Little France EH16 life-sciences anchor adjacent to the Royal Infirmary.",
      slugs: ["southside-meadows", "morningside-bruntsfield", "edinburgh-bioquarter-little-france"],
    },
  ],
  closing: {
    h2: "Beyond the twelve, wider Edinburgh and the Lothians",
    body:
      "We routinely arrange commercial mortgages outside the twelve districts above, including Musselburgh, Dalkeith, Penicuik, Livingston, Bathgate and Linlithgow inside the wider Lothians footprint, plus Glasgow and Stirling across the central belt. The same 90 plus lender panel applies, with Bank of Scotland, Clydesdale Bank and Virgin Money UK carrying Scottish-headquartered commercial desks, and Allica, HTB, Shawbrook, Paragon and Together all active across Scottish covenants subject to using Scottish solicitors on the panel. If your deal is in an Edinburgh postcode that does not have its own page yet, call us direct, we will route you to the right product and the right lenders inside an hour.",
  },
};

export const areaDetails: Record<string, AreaDetail> = {
  "old-town-royal-mile": {
    slug: "old-town-royal-mile",
    name: "Old Town and Royal Mile",
    metaTitle: "Commercial Mortgages Old Town Edinburgh and Royal Mile | Specialist Broker, EH1",
    metaDescription:
      "Commercial mortgages for Edinburgh Old Town and the Royal Mile, EH1 listed heritage hospitality, boutique hotel, Grassmarket and Cowgate licensed trade, Castle and Festival catchment. 90 plus lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Old Town Edinburgh and Royal Mile",
      lede:
        "Edinburgh Old Town and the Royal Mile cover the EH1 World Heritage core, from Edinburgh Castle down the Royal Mile through Lawnmarket, High Street and Canongate to Holyrood, with the Grassmarket and Cowgate forming the late-night spine to the south. We arrange commercial mortgages for listed heritage hospitality, Royal Mile boutique hotel and short-let visitor accommodation, Grassmarket licensed pub and F&B trading-business finance, and Cowgate sui generis late-night freehold across EH1, and we name the lenders we lean on first for each. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Old Town and Royal Mile commercial property market",
      body: [
        "Edinburgh Old Town and the Royal Mile sit inside the UNESCO World Heritage Site that anchors the EH1 commercial economy and the Edinburgh visitor catchment. The Royal Mile runs the heritage retail and hospitality spine from Edinburgh Castle through Lawnmarket and High Street to Holyrood, with the Grassmarket and Cowgate carrying the licensed-trade and late-night cluster to the south. Edinburgh Castle, the National Museum of Scotland, the Scottish Parliament and the Palace of Holyroodhouse anchor the year-round visitor base, with the August Festival and Fringe pushing approximately 13 million annual visitors heavily into July and August. That seasonality drives boutique hotel, short-let, restaurant and licensed-pub trading-business mortgage flow in a pattern unique in the network.",
        "Private investors and small operating groups dominate the largest end. The 500,000 pounds to 3M pounds bracket, Royal Mile listed retail freehold, Grassmarket and Cowgate licensed pub and boutique hotel freehold, plus upper-floor short-let visitor accommodation under Scottish short-term lets licensing, is the deep-volume zone we work most often. Pricing currently 7.0 to 8.5% pa for clean trading-business with operator EBITDA cover, with strong-covenant Royal Mile retail and tenanted hospitality stock at 6.5 to 7.5% pa and secondary Cowgate licensed stock at 8.0 to 9.0%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment.",
        "Registers of Scotland residential transactions inside EH1 cluster around converted upper floors above the Royal Mile and Grassmarket frontage and tilt heavily towards leasehold flats and short-let stock under the Scottish short-term lets licensing scheme. They are not a direct commercial signal but they confirm that the central catchment continues to absorb residential supply against the backdrop of the World Heritage core, which underwrites the ground-floor retail, hospitality and licensed-trade income that most of our EH1 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity across the Old Town and Royal Mile (EH1)",
      body:
        'Two headline City of Edinburgh Council public access files anchor the current Old Town and Royal Mile commercial mortgage pipeline. The Cowgate central Old Town change of use at EH1 1JR (Ref <strong>26/00645/COU</strong>) covers conversion of upper floors of an independent retail unit to short-let visitor accommodation under HMO licence conditions, the canonical Royal Mile upper-floor repositioning that an operator funds through bridge finance during the works phase and then refinances against on a trading-business mortgage at 60 to 70% LTV once Scottish short-term lets licensing and operator EBITDA are established. The Grassmarket heritage hospitality scheme at the Old Town EH1 2HJ (Ref <strong>25/01412/FUL</strong>) covers refurbishment of a listed waterfront pub and boutique hotel accommodation in the Old Town Royal Mile catchment, the canonical World Heritage hospitality repositioning that the freeholder refinances against on a trading-business mortgage at 60 to 65% LTV once 12 to 24 months of operator EBITDA is established post re-opening. LBTT applies at the Scottish non-residential rates on each freehold acquisition, refinancing is unaffected. The security in every case is a standard security registered in the Land Register of Scotland.',
      refs: [
        {
          ref: "26/00645/COU",
          address: "Cowgate, Edinburgh EH1 1JR",
          postcode: "EH1 1JR",
          proposal: "Cowgate central Old Town change of use, conversion of upper floors of independent retail unit to short-let visitor accommodation under HMO licence conditions.",
        },
        {
          ref: "25/01412/FUL",
          address: "Old Town, Grassmarket, Edinburgh EH1 2HJ",
          postcode: "EH1 2HJ",
          proposal: "Grassmarket heritage hospitality scheme, refurbishment of listed waterfront pub and boutique hotel accommodation in the Old Town Royal Mile catchment.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across the Royal Mile and Old Town",
      items: [
        { label: "Royal Mile listed retail and heritage hospitality", detail: "Lawnmarket, High Street and Canongate listed retail and tenanted hospitality freehold against year-round Castle and Festival catchment.", typicalSize: "600,000 pounds to 3M pounds facility" },
        { label: "Grassmarket licensed pub and boutique hotel", detail: "Listed Grassmarket pub freehold and boutique hotel operator stock servicing the late-night cluster and Festival peak.", typicalSize: "500,000 pounds to 2.5M pounds" },
        { label: "Cowgate late-night sui generis", detail: "Cowgate licensed late-night venue freehold under sui generis use with extended hours conditions.", typicalSize: "400,000 pounds to 1.5M pounds" },
        { label: "Upper-floor short-let visitor accommodation", detail: "Royal Mile and Cowgate upper-floor short-let stock under Scottish short-term lets licensing.", typicalSize: "300,000 pounds to 1.2M pounds" },
        { label: "Royal Mile independent retail owner-occupier", detail: "Independent heritage retailers buying their Royal Mile unit on EBITDA cover.", typicalSize: "300,000 pounds to 1.2M pounds" },
        { label: "Mixed-use heritage blocks", detail: "Ground-floor Class 1a heritage retail with upper-floor residential and short-let across the EH1 core.", typicalSize: "500,000 pounds to 2.5M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across the Old Town and Royal Mile",
      body: 'Royal Mile boutique hotel, Grassmarket listed pub and Cowgate licensed trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Royal Mile tenanted retail and heritage hospitality investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Royal Mile independent retailers buying their unit via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Upper-floor short-let repositioning and listed-building works route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Royal Mile heritage hospitality, Grassmarket licensed trade and Cowgate sui generis",
      body:
        "The Royal Mile and Old Town sit inside one of the strongest hospitality lender pools in the network, with named lenders weighted heavily towards operator EBITDA and World Heritage listed-building comfort. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Royal Mile listed retail and tenanted hospitality at 60 to 65% LTV and 6.5 to 7.5% pa, with Bank of Scotland (the Scottish brand of Lloyds Banking Group, retained for Scottish covenant), Clydesdale Bank and Virgin Money UK all carrying Edinburgh-active commercial desks that route Royal Mile and Old Town deals through their Scottish underwriting teams. <strong>Shawbrook</strong> dominates mid-market secondary Royal Mile retail and Grassmarket mixed-use at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Royal Mile boutique hotel and Grassmarket listed pub trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on Cowgate upper-floor short-let repositioning and listed-building works phase. Allica Bank is active across EH1 SME owner-occupier on Royal Mile independent retail freehold, lending happily against Scottish standard security through its Scottish solicitor panel. HTB takes selected Grassmarket heritage and Royal Mile investment deals on its commercial book. Paragon supports HMO-style and short-let portfolios where EH1 upper floors carry Scottish short-term lets licences. Together covers semi-commercial Royal Mile and Cowgate stock at 70 to 75% LTV on blended ICR. Refinancing on a stabilised Royal Mile retail or Grassmarket boutique hotel typically prices 7.0 to 8.0% pa at 65 to 70% LTV. The security in every case is a standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, with enforcement via calling-up notice through the Sheriff Court. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "retail", "mixed-use", "semi-commercial", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a Royal Mile boutique hotel or Grassmarket listed pub?",
        answer:
          'Up to 70% LTV on operator-led trading-business hospitality with established EBITDA cover. Royal Mile boutique hotel with 12 to 24 months of operator track record prices best at 60 to 65% LTV at around 7.0 to 7.5% pa with <strong>Cynergy Bank</strong>, Allica Bank or HTB. Grassmarket listed pub freehold caps at 65 to 70% with Bank of Scotland, Clydesdale Bank or Virgin Money UK on the Scottish covenant. The binding constraint is almost always EBITDA cover on the trading business, not headline LTV. LBTT applies at the Scottish non-residential rates on the freehold purchase.',
      },
      {
        question: "Can we fund a Cowgate upper-floor short-let visitor accommodation scheme?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during the works phase. The Cowgate central Old Town change of use scheme approved under planning reference 26/00645/COU at EH1 1JR is exactly this profile, a 12 to 24 month bridge funds the upper-floor conversion and Scottish short-term lets licensing process, then terms out to trading-business mortgage once an operator EBITDA track record of 12 to 24 months is in place at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank, HTB or LendInvest. Edinburgh HMO licensing applies to any three or more unrelated occupants, a wider net than the English five-plus threshold, and Scottish short-term lets licensing is mandatory across the EH1 core.',
      },
      {
        question: "How do World Heritage listed-building constraints affect lending?",
        answer:
          'Heritage stock across the Royal Mile, Grassmarket and Cowgate requires listed-building consent for change of use and external works under the Edinburgh World Heritage regime. Heritage-comfortable lenders including <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Cynergy Bank, Cumberland Building Society and Together fund this stock comfortably across Scottish covenants. Pricing typically 50 to 100bps wider than non-listed equivalent. Maintenance plan and conservation strategy feed into the underwriting on every EH1 listed-building deal. Bank of Scotland, Clydesdale Bank and Virgin Money UK all carry Scottish-headquartered commercial teams comfortable with World Heritage listed-building security and standard-security enforcement through the Sheriff Court.',
      },
      {
        question: "Which lenders run Scottish-headquartered commercial desks active on the Royal Mile?",
        answer:
          '<strong>NatWest</strong> Group is registered in Edinburgh at Gogarburn and carries its Scottish commercial RM team locally, <strong>Lloyds</strong> Banking Group runs its Bank of Scotland brand for Scottish covenants from Lothian Road, and Clydesdale Bank and Virgin Money UK both maintain Edinburgh-active commercial desks routing EH1 deals through Scottish solicitors on their panels. <strong>Cynergy Bank</strong>, Allica Bank and HTB all carry dedicated hospitality programmes that take Royal Mile boutique hotel and Grassmarket listed pub deals against Scottish standard security. We use those desks for EH1 deals where local knowledge of the World Heritage grain, the Festival seasonality and the Scottish short-term lets licensing regime carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "new-town-george-street": {
    slug: "new-town-george-street",
    name: "New Town, George Street and Charlotte Square",
    metaTitle: "Commercial Mortgages New Town Edinburgh, George Street and Charlotte Square | Broker, EH2 EH3",
    metaDescription:
      "Commercial mortgages for Edinburgh New Town, George Street and Charlotte Square, EH2 and EH3 premium Georgian office and luxury retail, St Andrew Square financial services cluster, abrdn anchor. 90 plus lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages New Town Edinburgh, George Street and Charlotte Square",
      lede:
        "Edinburgh New Town covers the EH2 and EH3 Georgian grid running from Charlotte Square through George Street to St Andrew Square, with the abrdn (Standard Life Aberdeen) cluster anchoring St Andrew Square and the legacy Royal Bank of Scotland registered office on the same square. We arrange commercial mortgages for Charlotte Square Georgian townhouse office and boutique hotel conversion, George Street premium retail and F&B investment, and St Andrew Square Grade A office refurbishment across EH2 and EH3, and we name the lenders we lean on first for each. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The New Town, George Street and Charlotte Square commercial property market",
      body: [
        "The Edinburgh New Town carries the densest concentration of premium Georgian commercial stock in the UK outside the central London core. Charlotte Square forms the western anchor with its James Craig townhouse offices and the Roxburghe and Kimpton Charlotte Square hotel cluster, George Street runs the premium retail and F&B spine through to St Andrew Square, and St Andrew Square anchors the Edinburgh financial services labour shed with abrdn (Standard Life Aberdeen) at its registered office and the legacy Royal Bank of Scotland HQ building on the south side. Edinburgh as the UK second financial centre after the City of London is fundamentally underwritten from these three squares plus Lothian Road and Edinburgh Park, and that financial services covenant feeds straight through to prime office rents and tenanted retail covenants across EH2 and EH3.",
        "Institutional investors and Scottish family offices dominate the prime end. The 800,000 pounds to 5M pounds bracket, Charlotte Square Georgian townhouse office conversion, George Street premium retail freehold and St Andrew Square mid-rise office refurbishment, is the deep-volume zone we work most often. Pricing currently 6.5 to 7.5% pa for clean Grade A investment with strong financial services tenant covenants, with prime Charlotte Square and St Andrew Square stock at 6.0 to 6.8% pa and secondary George Street retail at 7.0 to 8.0%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment, particularly across the Georgian townhouse office stock that converted into boutique hotel post-Covid.",
        "Registers of Scotland residential transactions inside EH2 and EH3 cluster around the upper-floor New Town flats above George Street and the converted townhouse blocks off Queen Street and Heriot Row, with leasehold flats trading consistently above the Edinburgh median. They are not a direct commercial signal but they confirm that the New Town residential catchment continues to absorb premium supply against the backdrop of the financial services labour shed, which underwrites the ground-floor George Street retail and Charlotte Square hospitality income that most of our EH2 and EH3 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity across the New Town, George Street and Charlotte Square (EH2 and EH3)",
      body:
        'Two headline City of Edinburgh Council public access files anchor the current New Town commercial mortgage pipeline. The Charlotte Square Georgian townhouse conversion at EH2 4HQ (Ref <strong>26/01045/COU</strong>) covers change of use from office to boutique hotel accommodation retaining listed-building character, the canonical Charlotte Square repositioning that an operator funds through bridge finance and listed-building works during the conversion phase and then refinances against on a trading-business mortgage at 60 to 65% LTV once 12 to 24 months of operator EBITDA is established. The St Andrew Square Grade A office building refurbishment at EH2 1AF (Ref <strong>25/01678/FUL</strong>) covers refurbishment of office accommodation supporting the financial services cluster including Standard Life Aberdeen and the former RBS HQ, the canonical New Town financial services Grade A repositioning that the freeholder refinances against on a Grade A office investment facility once let to financial services tenants. LBTT applies at the Scottish non-residential rates on each freehold acquisition, refinancing is unaffected. The security in every case is a standard security registered in the Land Register of Scotland.',
      refs: [
        {
          ref: "26/01045/COU",
          address: "Charlotte Square, Edinburgh EH2 4HQ",
          postcode: "EH2 4HQ",
          proposal: "Charlotte Square Georgian townhouse conversion, change of use from office to boutique hotel accommodation retaining listed-building character.",
        },
        {
          ref: "25/01678/FUL",
          address: "St Andrew Square, Edinburgh EH2 1AF",
          postcode: "EH2 1AF",
          proposal: "St Andrew Square Grade A office building refurbishment supporting the financial services cluster including Standard Life Aberdeen and the former RBS HQ.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across the New Town, George Street and Charlotte Square",
      items: [
        { label: "Charlotte Square Georgian townhouse office", detail: "Premium listed townhouse office investment and owner-occupier for financial services and professional firms.", typicalSize: "1M pounds to 5M pounds facility" },
        { label: "Charlotte Square boutique hotel conversion", detail: "Listed-building change of use from townhouse office to boutique hotel under heritage controls.", typicalSize: "1M pounds to 4M pounds" },
        { label: "George Street premium retail", detail: "Premium retail and Class 1a investment along the New Town heritage retail spine.", typicalSize: "600,000 pounds to 3M pounds" },
        { label: "St Andrew Square Grade A office", detail: "Mid-rise Grade A office investment anchored by abrdn and the legacy RBS HQ.", typicalSize: "1.5M pounds to 8M pounds" },
        { label: "George Street and Queen Street F&B", detail: "Premium independent restaurant and bar trading-business freehold.", typicalSize: "500,000 pounds to 2M pounds" },
        { label: "Owner-occupier professional services", detail: "Edinburgh legal, accountancy and wealth management firms buying their Charlotte Square or George Street floor.", typicalSize: "500,000 pounds to 2.5M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across the New Town, George Street and Charlotte Square",
      body: 'Investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Charlotte Square boutique hotel and George Street F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Owner-occupier professional services firms buying their townhouse floor via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Vacant Charlotte Square or St Andrew Square office routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Charlotte Square Georgian office, George Street premium retail and St Andrew Square Grade A",
      body:
        "The New Town sits inside the strongest single Edinburgh lender pool, with the full Scottish financial services labour shed driving named lender appetite. <strong>NatWest</strong> (Group registered office is on St Andrew Square and the operational HQ is at Gogarburn), <strong>Lloyds</strong> Banking Group (which runs Bank of Scotland, retained for Scottish covenants, from Lothian Road), <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Charlotte Square Georgian office and St Andrew Square Grade A investment at 60 to 65% LTV and 6.0 to 7.0% pa, with Bank of Scotland, Clydesdale Bank and Virgin Money UK all carrying Edinburgh-active Scottish-headquartered commercial desks active across EH2 and EH3 financial services covenants. <strong>Shawbrook</strong> dominates mid-market secondary George Street retail and Queen Street side-street office at 65 to 75% LTV and 7.0 to 7.5% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Charlotte Square boutique hotel and George Street premium F&B trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on Charlotte Square listed-building conversion works during the office-to-hotel transition. Allica Bank is active across EH2 SME owner-occupier on Charlotte Square and George Street professional services freehold, lending happily against Scottish standard security through its Scottish solicitor panel. HTB takes selected New Town heritage and St Andrew Square investment deals on its commercial book. Paragon supports premium HMO and short-let portfolios where New Town upper floors carry Scottish short-term lets licences. Together covers semi-commercial George Street and Queen Street stock at 70 to 75% LTV on blended ICR. Refinancing on a stabilised St Andrew Square Grade A office or George Street retail asset typically prices 6.5 to 7.5% pa at 65 to 70% LTV. The security in every case is a standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, with enforcement via calling-up notice through the Sheriff Court. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "retail", "leisure-hospitality", "mixed-use", "pub-restaurant", "semi-commercial"],
    faqs: [
      {
        question: "What LTV is achievable on a Charlotte Square Georgian townhouse office investment?",
        answer:
          'Up to 65% LTV on prime Charlotte Square Grade A let to financial services or professional tenants. Charlotte Square Georgian townhouse with strong covenants prices best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>, with Bank of Scotland, Clydesdale Bank and Virgin Money UK competing on the Scottish-headquartered route. Secondary or vacant Charlotte Square stock caps at 65 to 70% with <strong>Shawbrook</strong> and HTB. The binding constraint is almost always ICR on the rental stack, not headline LTV. LBTT applies at the Scottish non-residential rates on the freehold purchase.',
      },
      {
        question: "Can we fund a Charlotte Square office-to-boutique-hotel conversion?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during the listed-building works phase. The Charlotte Square Georgian townhouse conversion approved under planning reference 26/01045/COU at EH2 4HQ is exactly this profile, an 18 to 30 month bridge funds the listed-building consent process, conservation works and re-opening, then terms out to trading-business mortgage once an operator EBITDA track record of 12 to 24 months is in place at 60 to 65% LTV with <strong>Cynergy Bank</strong>, Allica Bank, HTB or LendInvest. The security is a standard security registered in the Land Register of Scotland and listed-building consent operates under the Scottish heritage regime.',
      },
      {
        question: "How does abrdn and the legacy RBS HQ presence affect lending on St Andrew Square?",
        answer:
          'The Edinburgh financial services labour shed underwrites prime St Andrew Square rents and tenant covenants directly. Grade A office stock let to abrdn or to professional firms in the wider financial services cluster qualifies for the keenest pricing across <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> at 6.0 to 6.8% pa at 60 to 65% LTV. The St Andrew Square Grade A office refurbishment approved under planning reference 25/01678/FUL at EH2 1AF is exactly the kind of capex programme that owners refinance against on a Grade A investment facility once the new lease completes.',
      },
      {
        question: "Which lenders run Scottish-headquartered commercial desks active across the New Town?",
        answer:
          '<strong>NatWest</strong> Group is registered in Edinburgh and operates a Scottish commercial RM team locally, <strong>Lloyds</strong> Banking Group runs its Bank of Scotland brand for Scottish covenants from Lothian Road, and Clydesdale Bank and Virgin Money UK both maintain Edinburgh-active commercial desks routing EH2 and EH3 deals through Scottish solicitors on their panels. <strong>Cynergy Bank</strong>, Allica Bank and HTB all carry programmes that take Charlotte Square boutique hotel and George Street F&B deals against Scottish standard security. Several English-headquartered challenger banks lend happily against Scottish standard security but route the file to Scottish solicitors on their panel, we make that lender selection in the placement process. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "west-end-haymarket": {
    slug: "west-end-haymarket",
    name: "West End and Haymarket",
    metaTitle: "Commercial Mortgages West End Edinburgh and Haymarket | Specialist Broker, EH3 EH12",
    metaDescription:
      "Commercial mortgages for Edinburgh West End and Haymarket, EH3 and EH12 professional services and Grade A office, Haymarket railway station catchment, central retail spine. 90 plus lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages West End Edinburgh and Haymarket",
      lede:
        "Edinburgh West End and Haymarket cover the EH3 and EH12 professional services corridor running from Lothian Road and the Exchange district through Shandwick Place and Atholl Crescent out to Haymarket railway station and Donaldson House. We arrange commercial mortgages for West End Grade A office and professional services freehold, Haymarket station-catchment commercial investment, central retail and serviced-office stock across EH3 and EH12, and we name the lenders we lean on first for each. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The West End and Haymarket commercial property market",
      body: [
        "The West End and Haymarket form Edinburgh second prime office cluster, sitting between the New Town financial services core to the east and Edinburgh Park out west. Lothian Road anchors the southern edge with Lloyds Banking Group at the Standard Life building and the Edinburgh International Conference Centre, the Exchange district carries the financial services side, Shandwick Place and Atholl Crescent run the central spine of professional firms, and Haymarket station anchors the western interchange with the new Haymarket office scheme around Donaldson House and the West Approach Road. The professional services labour shed of Edinburgh law firms, accountancy practices and wealth managers drives much of the day-to-day office and ground-floor F&B economy across EH3 and EH12.",
        "Institutional and private investors dominate the prime Grade A end around Haymarket and Lothian Road. The 600,000 pounds to 4M pounds bracket, Haymarket Grade A office investment, Shandwick Place professional services freehold and central retail unit on the West End spine, is the deep-volume zone we work most often. Pricing currently 6.5 to 7.5% pa for clean Grade A investment with professional services tenant covenants, with prime Haymarket and Exchange district stock at 6.5 to 7.0% pa and secondary West End side-street office at 7.0 to 8.0%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment, particularly across the West End office stock that needed refurbishment capex post-Covid.",
        "Registers of Scotland residential transactions inside EH3 and EH12 cluster around the tenement flats off Shandwick Place and the converted upper floors above Haymarket Terrace, with sales running broadly at the Edinburgh median. They are not a direct commercial signal but they confirm that the West End residential catchment continues to absorb supply against the backdrop of the financial services and professional firm labour shed, which underwrites the office and ground-floor F&B income that most of our EH3 and EH12 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity across the West End and Haymarket (EH3 and EH12)",
      body:
        'Two headline City of Edinburgh Council public access files anchor the current West End and Haymarket commercial mortgage pipeline. The Haymarket office scheme expansion at EH12 5HD (Ref <strong>25/02745/FUL</strong>) covers new Grade A office accommodation adjacent to Haymarket railway station serving the West End professional services cluster, the canonical Haymarket Grade A repositioning that an institutional or mid-cap private investor refinances against on a Grade A office investment facility at 60 to 65% LTV once let to financial services or professional firm tenants. The Princes Street central retail refurbishment at EH2 2YS (Ref <strong>25/02892/FUL</strong>) covers central retail unit refurbishment and shopfront alterations on the prime Edinburgh retail spine adjacent to St James Quarter, sitting on the eastern edge of the West End commercial pool and underwriting the central retail tenant covenant chain that feeds Shandwick Place and Atholl Crescent. LBTT applies at the Scottish non-residential rates on each freehold acquisition, refinancing is unaffected. The security in every case is a standard security registered in the Land Register of Scotland.',
      refs: [
        {
          ref: "25/02745/FUL",
          address: "Haymarket, Edinburgh EH12 5HD",
          postcode: "EH12 5HD",
          proposal: "Haymarket office scheme expansion, new Grade A office accommodation adjacent to Haymarket railway station serving the West End professional services cluster.",
        },
        {
          ref: "25/02892/FUL",
          address: "Princes Street, Edinburgh EH2 2YS",
          postcode: "EH2 2YS",
          proposal: "Princes Street central retail unit refurbishment and shopfront alterations on the prime Edinburgh retail spine adjacent to St James Quarter.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across the West End and Haymarket",
      items: [
        { label: "Haymarket Grade A office", detail: "New-build Grade A office investment adjacent to Haymarket railway station serving the West End professional services cluster.", typicalSize: "1M pounds to 5M pounds facility" },
        { label: "Exchange district financial services office", detail: "Lothian Road and Exchange district Grade A office investment anchored by Lloyds Banking Group and the EICC.", typicalSize: "1.5M pounds to 6M pounds" },
        { label: "Shandwick Place and Atholl Crescent professional office", detail: "Mid-rise professional services office investment and owner-occupier across the West End spine.", typicalSize: "500,000 pounds to 2.5M pounds" },
        { label: "West End boutique hotel", detail: "Listed townhouse boutique hotel and serviced apartment freehold around the West End grid.", typicalSize: "800,000 pounds to 3M pounds" },
        { label: "Central retail and Class 1a", detail: "Central retail unit investment along Shandwick Place and the western Princes Street fringe.", typicalSize: "400,000 pounds to 2M pounds" },
        { label: "Owner-occupier professional services", detail: "Edinburgh law firms, accountancy and wealth management firms buying their West End floor.", typicalSize: "400,000 pounds to 2M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across the West End and Haymarket",
      body: 'Investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional services firms buying their West End floor via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. West End boutique hotel and serviced apartment trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Vacant or value-add West End office routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Haymarket Grade A office, Exchange district financial services and West End professional services",
      body:
        "The West End and Haymarket sit inside a deep Edinburgh financial services lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong> (which runs Bank of Scotland from Lothian Road for the Scottish covenant route), <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Haymarket Grade A office and Exchange district financial services investment at 60 to 65% LTV and 6.5 to 7.0% pa, with Bank of Scotland, Clydesdale Bank and Virgin Money UK all carrying Edinburgh-active Scottish-headquartered commercial desks across EH3 and EH12 financial services covenants. <strong>Shawbrook</strong> dominates mid-market secondary West End office at 65 to 75% LTV and 7.0 to 7.5% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on West End boutique hotel and Atholl Crescent serviced apartment trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on vacant West End office repositioning during the refurbishment phase. Allica Bank is active across EH3 SME owner-occupier on Shandwick Place and Atholl Crescent professional services freehold, lending against Scottish standard security through its Scottish solicitor panel. HTB takes selected West End heritage and Haymarket Grade A investment deals on its commercial book. Paragon supports HMO and short-let portfolios where West End tenement upper floors carry Scottish short-term lets licences. Together covers semi-commercial West End stock at 70 to 75% LTV on blended ICR. Refinancing on a stabilised Haymarket Grade A office or Shandwick Place professional services freehold typically prices 7.0 to 7.5% pa at 65 to 70% LTV. The security in every case is a standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, with enforcement via calling-up notice through the Sheriff Court. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "leisure-hospitality", "retail", "mixed-use", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Haymarket Grade A office investment?",
        answer:
          'Up to 65% LTV on prime Haymarket Grade A let to financial services or professional firm tenants. The Haymarket office scheme expansion approved under planning reference 25/02745/FUL at EH12 5HD is exactly this profile, new Grade A let to the wider West End professional services cluster prices best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>, with Bank of Scotland, Clydesdale Bank and Virgin Money UK competing on the Scottish-headquartered route. The binding constraint is almost always ICR on the rental stack, not headline LTV. LBTT applies at the Scottish non-residential rates on the freehold purchase.',
      },
      {
        question: "Can we fund a vacant West End office repositioning?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during the refurbishment phase. A 12 to 24 month bridge funds acquisition and refurbishment capex on the West End secondary office stock that needed Cat A and Cat B works post-Covid, then terms out to commercial investment mortgage at 65 to 70% LTV with <strong>Shawbrook</strong>, HTB, Cynergy Bank or <strong>LendInvest</strong>. The security is a standard security registered in the Land Register of Scotland.',
      },
      {
        question: "How does the Haymarket station catchment affect commercial pricing?",
        answer:
          'Haymarket station carries the second-busiest commuter footfall in Edinburgh after Edinburgh Waverley and serves the wider Lothians and Fife professional firm commute. Grade A office within 400m of Haymarket station prices 25 to 50bps inside equivalent stock further out, with the mainstream high-street commercial desks competing for the strongest leases. The new Haymarket office scheme on EH12 5HD trades at the keenest end of the West End pricing range.',
      },
      {
        question: "Which lenders run Scottish-headquartered commercial desks active across the West End?",
        answer:
          '<strong>NatWest</strong> Group is registered in Edinburgh, <strong>Lloyds</strong> Banking Group runs its Bank of Scotland brand for Scottish covenants from Lothian Road directly inside the Exchange district, and Clydesdale Bank and Virgin Money UK both maintain Edinburgh-active commercial desks routing EH3 and EH12 deals through Scottish solicitors on their panels. <strong>Shawbrook</strong>, Allica Bank, HTB and <strong>Cynergy Bank</strong> all carry programmes that take Haymarket Grade A office and West End boutique hotel deals against Scottish standard security. Several English-headquartered challenger banks lend happily against Scottish standard security but route the file to Scottish solicitors on their panel. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "princes-street-st-james": {
    slug: "princes-street-st-james",
    name: "Princes Street and St James Quarter",
    metaTitle: "Commercial Mortgages Princes Street Edinburgh and St James Quarter | Broker, EH1 EH2",
    metaDescription:
      "Commercial mortgages for Princes Street and St James Quarter Edinburgh, EH1 and EH2 Nuveen flagship retail and leisure, Multrees Walk luxury, central retail spine and W Edinburgh hotel. 90 plus lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Princes Street Edinburgh and St James Quarter",
      lede:
        "Princes Street and St James Quarter cover the EH1 and EH2 flagship retail and leisure spine, from Nuveen 1bn pound St James Quarter at the eastern anchor through Multrees Walk luxury into the Princes Street retail parade, with the W Edinburgh hotel rising above the St James ribbon. We arrange commercial mortgages for Princes Street central retail freehold, St James Quarter satellite F&B and Multrees Walk luxury fringe stock across EH1 and EH2, and we name the lenders we lean on first for each. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Princes Street and St James Quarter commercial property market",
      body: [
        "Princes Street and St James Quarter form the EH1 and EH2 flagship retail and leisure spine and one of the largest single retail destinations in the UK outside central London. Nuveen St James Quarter, the 1bn pound retail, leisure and hotel scheme that opened in June 2021, anchors the eastern end with around 850,000 sq ft of retail and leisure plus the W Edinburgh hotel as the headline operator, and connects through Multrees Walk (Harvey Nichols, Louis Vuitton, Mulberry and the wider luxury parade) into the Princes Street retail spine running west to Lothian Road. The combined Princes Street and St James Quarter catchment drives the largest single annual retail footfall in Scotland, with the Edinburgh Festival, the Castle visitor catchment and the year-round tourism economy underwriting the leisure side of the income.",
        "Institutional and major private investors dominate the prime end, with Nuveen anchoring St James Quarter and a small group of REITs and large private investors holding the Princes Street parade. The 500,000 pounds to 3M pounds bracket, Princes Street central retail unit refurbishment, St James Quarter satellite F&B unit and Multrees Walk fringe stock, is the deep-volume zone we work most often. Pricing currently 6.5 to 7.5% pa for clean retail investment with strong national tenant covenants, with prime St James Quarter satellite and Multrees Walk luxury stock at 6.5 to 7.0% pa and secondary western Princes Street retail at 7.0 to 8.0%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment.",
        "Registers of Scotland residential transactions inside EH1 and EH2 cluster around the upper-floor apartments above Princes Street and Leith Street, with a meaningful share now sitting under Scottish short-term lets licensing. They are not a direct commercial signal but they confirm that the central catchment continues to absorb residential supply against the backdrop of the St James Quarter visitor footfall, which underwrites the ground-floor retail, F&B and hotel income that most of our EH1 and EH2 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity across Princes Street and St James Quarter (EH1 and EH2)",
      body:
        'Two headline City of Edinburgh Council public access files anchor the current Princes Street and St James Quarter commercial mortgage pipeline. The St James Quarter tenant mix reconfiguration at EH1 3SS (Ref <strong>26/01245/FUL</strong>) covers tenant mix reconfiguration and additional F&B accommodation in the Nuveen-owned retail and leisure flagship, the canonical St James Quarter asset-management programme that satellite operators refinance against once new F&B units take occupation at 60 to 70% LTV on operator EBITDA. The Princes Street central retail refurbishment at EH2 2YS (Ref <strong>25/02892/FUL</strong>) covers central retail unit refurbishment and shopfront alterations on the prime Edinburgh retail spine adjacent to St James Quarter, the canonical Princes Street central retail repositioning that the freeholder refinances against on a central retail investment facility at 60 to 65% LTV once let to national tenants. LBTT applies at the Scottish non-residential rates on each freehold acquisition, refinancing is unaffected. The security in every case is a standard security registered in the Land Register of Scotland.',
      refs: [
        {
          ref: "26/01245/FUL",
          address: "St James Quarter, Leith Street, Edinburgh EH1 3SS",
          postcode: "EH1 3SS",
          proposal: "St James Quarter tenant mix reconfiguration and additional F&B accommodation in the Nuveen-owned retail and leisure flagship.",
        },
        {
          ref: "25/02892/FUL",
          address: "Princes Street, Edinburgh EH2 2YS",
          postcode: "EH2 2YS",
          proposal: "Princes Street central retail unit refurbishment and shopfront alterations on the prime Edinburgh retail spine adjacent to St James Quarter.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Princes Street and St James Quarter",
      items: [
        { label: "St James Quarter satellite F&B", detail: "F&B operator freehold and tenant fit-out within the Nuveen St James Quarter scheme.", typicalSize: "500,000 pounds to 2.5M pounds facility" },
        { label: "Princes Street central retail", detail: "Central retail unit investment along the prime Edinburgh retail spine.", typicalSize: "600,000 pounds to 3M pounds" },
        { label: "Multrees Walk luxury fringe", detail: "Luxury retail and Class 1a investment along the Multrees Walk parade.", typicalSize: "800,000 pounds to 3M pounds" },
        { label: "W Edinburgh and St James hotel cluster", detail: "Hotel and serviced apartment trading-business freehold around St James Quarter.", typicalSize: "1.5M pounds to 8M pounds" },
        { label: "Leith Street and St Andrew Street F&B", detail: "Independent F&B trading-business freehold on the St James perimeter.", typicalSize: "400,000 pounds to 1.5M pounds" },
        { label: "Upper-floor short-let visitor accommodation", detail: "Princes Street and Leith Street upper-floor short-let stock under Scottish short-term lets licensing.", typicalSize: "300,000 pounds to 1.2M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across Princes Street and St James Quarter",
      body: 'Investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. St James Quarter F&B operators, W Edinburgh fringe hotel and Princes Street trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Owner-occupier independent retailers buying their Princes Street unit via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Upper-floor short-let repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for St James Quarter satellite F&B, Princes Street central retail and Multrees Walk luxury",
      body:
        "Princes Street and St James Quarter sit inside one of the keenest single retail and leisure lender pools in the network, anchored by national tenant covenants and Nuveen as the institutional landlord. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Princes Street central retail and St James Quarter satellite F&B at 60 to 65% LTV and 6.5 to 7.0% pa, with Bank of Scotland, Clydesdale Bank and Virgin Money UK all carrying Edinburgh-active Scottish-headquartered commercial desks active on EH1 and EH2 national tenant covenants. <strong>Shawbrook</strong> dominates mid-market secondary western Princes Street retail and Leith Street fringe stock at 65 to 75% LTV and 7.0 to 7.5% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on St James Quarter satellite F&B and W Edinburgh fringe hotel trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on Princes Street upper-floor short-let repositioning during the listed-building works phase. Allica Bank is active across EH1 and EH2 SME owner-occupier on Princes Street independent retail freehold against Scottish standard security through its Scottish solicitor panel. HTB takes selected Multrees Walk luxury investment and St James Quarter F&B deals on its commercial book. Paragon supports short-let portfolios where Princes Street and Leith Street upper floors carry Scottish short-term lets licences. Together covers semi-commercial Leith Street and St Andrew Street stock at 70 to 75% LTV on blended ICR. Refinancing on a stabilised Princes Street central retail or St James Quarter satellite F&B typically prices 6.5 to 7.5% pa at 65 to 70% LTV. The security in every case is a standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, with enforcement via calling-up notice through the Sheriff Court. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "leisure-hospitality", "office", "mixed-use", "pub-restaurant", "semi-commercial"],
    faqs: [
      {
        question: "What LTV is achievable on a Princes Street central retail investment?",
        answer:
          'Up to 70% LTV on prime Princes Street retail let to national tenants. Princes Street central retail with strong national covenants prices best at 60 to 65% LTV at around 6.5 to 7.0% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>, with Bank of Scotland, Clydesdale Bank and Virgin Money UK competing on the Scottish-headquartered route. Secondary western Princes Street stock caps at 65 to 75% with <strong>Shawbrook</strong>, HTB and Together. The binding constraint is almost always ICR on the rental stack, not headline LTV. LBTT applies at the Scottish non-residential rates on the freehold purchase.',
      },
      {
        question: "Can we fund a satellite F&B unit inside St James Quarter?",
        answer:
          'Yes, the St James Quarter tenant mix reconfiguration approved under planning reference 26/01245/FUL at EH1 3SS underpins exactly this profile. Where the F&B operator takes a freehold or long leasehold stake, the deal funds as a trading-business mortgage on operator EBITDA at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB once a 12 to 24 month track record is established. Where the operator stays on a Nuveen lease, working-capital and fit-out lending sits alongside any operator-side refinance.',
      },
      {
        question: "How does the W Edinburgh hotel and St James Quarter footfall affect pricing?",
        answer:
          'St James Quarter draws around 14 to 16 million annual visitors and is the largest single retail and leisure footfall in Scotland, with the W Edinburgh as the headline operator on the ribbon. Prime satellite F&B and Multrees Walk luxury stock benefits directly from that footfall and prices 25 to 50bps inside equivalent stock elsewhere in EH1 or EH2. The Princes Street central retail refurbishment approved under planning reference 25/02892/FUL at EH2 2YS is exactly the kind of capex programme that prime Princes Street freeholders fund and then refinance once a national tenant lease completes.',
      },
      {
        question: "Which lenders run dedicated retail and leisure desks active on Princes Street?",
        answer:
          '<strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> all maintain Scottish commercial RM teams in Edinburgh covering Princes Street and St James Quarter deals routinely. <strong>Cynergy Bank</strong>, Allica Bank and HTB all carry dedicated retail and hospitality programmes that take St James Quarter F&B and Multrees Walk luxury deals against Scottish standard security. Bank of Scotland, Clydesdale Bank and Virgin Money UK route Princes Street deals through their Scottish underwriting teams. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "leith-newhaven": {
    slug: "leith-newhaven",
    name: "Leith and Newhaven",
    metaTitle: "Commercial Mortgages Leith Edinburgh and Newhaven | Specialist Broker, EH6",
    metaDescription:
      "Commercial mortgages for Leith and Newhaven Edinburgh, EH6 Trams to Newhaven extension, Ocean Terminal, Leith Walk F&B regeneration corridor, The Shore and Constitution Street. 90 plus lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Leith Edinburgh and Newhaven",
      lede:
        "Leith and Newhaven cover the EH6 waterfront regeneration corridor, from Leith Walk and the Foot of the Walk through Constitution Street and The Shore to Ocean Terminal, with the Newhaven harbour anchoring the western end at the new Trams to Newhaven terminus opened in June 2023. We arrange commercial mortgages for Leith Walk mixed-use post-tram, Ocean Terminal leisure and retail investment, The Shore F&B trading-business freehold and Newhaven waterfront commercial across EH6, and we name the lenders we lean on first for each. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Leith and Newhaven commercial property market",
      body: [
        "Leith and Newhaven sit on the EH6 regeneration corridor that has materially repriced through 2023 and 2024 on the back of the Trams to Newhaven extension. The new line opened in June 2023 and runs the length of Leith Walk from the Foot of the Walk through Constitution Street to the Newhaven terminus, with new public-realm and ground-floor commercial accommodation along the route. Ocean Terminal at the Britannia berth anchors the western leisure and retail end, The Shore and Constitution Street carry the F&B and licensed-trade spine, and Newhaven harbour anchors the western waterfront. The combined effect has been a structural narrowing of commercial yields and a meaningful uplift in ground-floor commercial rents along Leith Walk and the lower waterfront streets.",
        "Mid-cap private investors and a growing institutional cohort dominate the post-tram regeneration end. The 400,000 pounds to 2.5M pounds bracket, Leith Walk mixed-use ground-floor commercial, Ocean Terminal anchor unit subdivision, The Shore F&B trading-business freehold and Newhaven waterfront commercial, is the deep-volume zone we work most often. Pricing currently 7.0 to 8.0% pa for clean investment with regeneration-corridor covenants, with prime Leith Walk post-tram and Ocean Terminal national-tenant stock at 6.5 to 7.5% pa and secondary Constitution Street and Newhaven Road at 7.5 to 8.5%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment, particularly across Leith Walk stock that captured the post-tram uplift.",
        "Registers of Scotland residential transactions inside EH6 cluster heavily along the Leith Walk corridor and across the Newhaven waterfront, with the post-tram uplift visible in transaction prices through 2024 and 2025. They are not a direct commercial signal but they confirm that the regeneration catchment continues to absorb residential supply against the backdrop of the Trams to Newhaven extension, which underwrites the ground-floor commercial, F&B and licensed-trade income that most of our EH6 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity across Leith and Newhaven (EH6)",
      body:
        'Three headline City of Edinburgh Council public access files anchor the current Leith and Newhaven commercial mortgage pipeline. The Leith Walk mixed-use scheme at EH6 5HD (Ref <strong>26/00802/FUL</strong>) covers a mixed-use scheme adjacent to the Trams to Newhaven extension with ground-floor commercial accommodation and managed residential above, the canonical post-tram regeneration mixed-use that an investor refinances against on a blended commercial and residential facility at 70 to 75% LTV once ground-floor lettings stabilise. The Ocean Terminal Leith leisure and retail scheme at EH6 6JJ (Ref <strong>25/02078/FUL</strong>) covers anchor unit reconfiguration and new F&B accommodation supporting the Trams to Newhaven extension catchment, the canonical Ocean Terminal asset-management programme that the freeholder refinances against on a leisure and retail investment facility. The Newhaven Road mixed-use scheme at EH6 4ER (Ref <strong>25/01545/FUL</strong>) covers a mixed-use scheme adjacent to the Trams to Newhaven terminus with new ground-floor commercial accommodation supporting the Leith waterfront catchment, the canonical Newhaven terminus repositioning. LBTT applies at the Scottish non-residential rates on each freehold acquisition, refinancing is unaffected. The security in every case is a standard security registered in the Land Register of Scotland.',
      refs: [
        {
          ref: "26/00802/FUL",
          address: "Leith Walk, Edinburgh EH6 5HD",
          postcode: "EH6 5HD",
          proposal: "Leith Walk mixed-use scheme adjacent to Trams to Newhaven extension, ground-floor commercial accommodation and managed residential above.",
        },
        {
          ref: "25/02078/FUL",
          address: "Ocean Terminal, Leith, Edinburgh EH6 6JJ",
          postcode: "EH6 6JJ",
          proposal: "Ocean Terminal Leith leisure and retail scheme, anchor unit reconfiguration and new F&B accommodation supporting the Trams to Newhaven extension catchment.",
        },
        {
          ref: "25/01545/FUL",
          address: "Newhaven Road, Newhaven, Edinburgh EH6 4ER",
          postcode: "EH6 4ER",
          proposal: "Newhaven mixed-use scheme adjacent to the Trams to Newhaven terminus, new ground-floor commercial accommodation supporting the Leith waterfront catchment.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Leith and Newhaven",
      items: [
        { label: "Leith Walk post-tram mixed-use", detail: "Ground-floor commercial and managed residential above along the new Trams to Newhaven corridor.", typicalSize: "600,000 pounds to 3M pounds facility" },
        { label: "Ocean Terminal leisure and retail", detail: "Anchor unit subdivision and F&B reconfiguration in the Ocean Terminal scheme.", typicalSize: "1M pounds to 4M pounds" },
        { label: "The Shore and Constitution Street F&B", detail: "Listed F&B and licensed trading-business freehold on the historic Leith waterfront.", typicalSize: "400,000 pounds to 1.5M pounds" },
        { label: "Newhaven waterfront mixed-use", detail: "New mixed-use accommodation at the Newhaven tram terminus catchment.", typicalSize: "500,000 pounds to 2M pounds" },
        { label: "Leith Walk independent retail", detail: "Independent retailer and convenience freehold along Leith Walk and Easter Road fringe.", typicalSize: "250,000 pounds to 800,000 pounds" },
        { label: "Granton Waterfront fringe", detail: "Granton Waterfront regeneration ground-floor commercial extending the EH5 and EH6 fringe.", typicalSize: "500,000 pounds to 2M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across Leith and Newhaven",
      body: 'Mixed-use refinance is the dominant product, with investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. The Shore F&B, Constitution Street licensed pub and Leith Walk trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Leith Walk independent retailers buying their unit via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Leith Walk and Newhaven mixed-use semi-commercial via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Leith Walk post-tram mixed-use, Ocean Terminal leisure and The Shore F&B",
      body:
        "Leith and Newhaven sit inside a deep regeneration-corridor lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Ocean Terminal anchor retail and post-tram Leith Walk Grade A mixed-use at 60 to 65% LTV and 6.5 to 7.5% pa, with Bank of Scotland, Clydesdale Bank and Virgin Money UK all carrying Edinburgh-active Scottish-headquartered commercial desks comfortable with the EH6 regeneration covenant. <strong>Shawbrook</strong> dominates mid-market Leith Walk secondary mixed-use and The Shore listed F&B at 65 to 75% LTV and 7.0 to 8.0% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on The Shore F&B and Constitution Street licensed pub trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on Leith Walk and Newhaven mixed-use during the ground-floor lettings phase. Allica Bank is active across EH6 SME owner-occupier on Leith Walk independent retail freehold, lending against Scottish standard security through its Scottish solicitor panel. HTB takes selected Ocean Terminal and post-tram Leith Walk investment deals on its commercial book. Paragon supports semi-commercial portfolios where Leith Walk parade upper floors carry residential under Scottish licensing. Together covers semi-commercial Constitution Street and Easter Road stock at 70 to 75% LTV on blended ICR. Refinancing on a stabilised Leith Walk post-tram mixed-use or Ocean Terminal retail typically prices 7.0 to 7.5% pa at 65 to 70% LTV. The security in every case is a standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, with enforcement via calling-up notice through the Sheriff Court. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["mixed-use", "retail", "leisure-hospitality", "pub-restaurant", "semi-commercial", "office"],
    faqs: [
      {
        question: "How has the Trams to Newhaven extension repriced commercial yields on Leith Walk?",
        answer:
          'The new tram line opened in June 2023 and runs from York Place down Leith Walk through Constitution Street to the Newhaven terminus, with around eight stops on the extension. Prime Leith Walk ground-floor commercial within 200m of a tram stop has compressed by roughly 25 to 75bps versus the pre-tram baseline, and Ocean Terminal anchor retail has benefited from the same effect. Leith Walk post-tram mixed-use approved under planning reference 26/00802/FUL at EH6 5HD is exactly this profile.',
      },
      {
        question: "What LTV is achievable on an Ocean Terminal anchor unit investment?",
        answer:
          'Up to 70% LTV on national-covenant let stock. Ocean Terminal leisure and retail post-reconfiguration approved under planning reference 25/02078/FUL at EH6 6JJ prices best at 60 to 65% LTV at around 6.5 to 7.5% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, HSBC UK or <strong>Santander</strong>, with Bank of Scotland, Clydesdale Bank and Virgin Money UK competing on the Scottish-headquartered route. Secondary leisure and F&B units cap at 65 to 75% with <strong>Shawbrook</strong>, HTB and Cynergy Bank. The binding constraint is almost always ICR on the rental stack, not headline LTV. LBTT applies at the Scottish non-residential rates on the freehold purchase.',
      },
      {
        question: "Can we fund a Newhaven waterfront mixed-use scheme?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during the lettings phase. The Newhaven mixed-use scheme approved under planning reference 25/01545/FUL at EH6 4ER is exactly this profile, a 12 to 24 month bridge funds the ground-floor lettings campaign post-tram terminus opening, then terms out to commercial investment or blended mixed-use facility at 65 to 75% LTV with <strong>Shawbrook</strong>, HTB, Cynergy Bank or <strong>LendInvest</strong>. The security is a standard security registered in the Land Register of Scotland.',
      },
      {
        question: "Which lenders run Scottish-headquartered desks active across Leith and Newhaven?",
        answer:
          '<strong>NatWest</strong> Group is registered in Edinburgh, <strong>Lloyds</strong> Banking Group runs its Bank of Scotland brand for Scottish covenants, and Clydesdale Bank and Virgin Money UK both maintain Edinburgh-active commercial desks routing EH6 deals through Scottish solicitors on their panels. <strong>Shawbrook</strong>, Allica Bank, HTB and <strong>Cynergy Bank</strong> all carry programmes that take Leith Walk mixed-use and The Shore F&B deals against Scottish standard security. Several English-headquartered challenger banks lend happily against Scottish standard security but route the file to Scottish solicitors on their panel. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "tollcross-fountainbridge": {
    slug: "tollcross-fountainbridge",
    name: "Tollcross and Fountainbridge",
    metaTitle: "Commercial Mortgages Tollcross Edinburgh and Fountainbridge | Specialist Broker, EH3",
    metaDescription:
      "Commercial mortgages for Tollcross and Fountainbridge Edinburgh, EH3 regeneration mixed-use on the former brewery quarter, Tollcross entertainment district, Lothian Road fringe and EICC catchment. 90 plus lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Tollcross Edinburgh and Fountainbridge",
      lede:
        "Tollcross and Fountainbridge cover the EH3 regeneration corridor running south from Lothian Road through the Tollcross entertainment district into the Fountainbridge former brewery quarter, with Edinburgh Quay anchoring the canal-side and the EICC and Lloyds Banking Group on the Lothian Road fringe. We arrange commercial mortgages for Tollcross theatre, cinema and leisure trading-business freehold, Fountainbridge mixed-use regeneration ground-floor commercial and Edinburgh Quay canal-side stock across EH3, and we name the lenders we lean on first for each. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Tollcross and Fountainbridge commercial property market",
      body: [
        "Tollcross and Fountainbridge form the EH3 mixed-use regeneration corridor that runs south from Lothian Road and the Exchange district through the Tollcross entertainment cluster into the Fountainbridge former Scottish & Newcastle brewery quarter. The brewery site has been progressively redeveloped through the 2010s and 2020s into a mixed-use scheme of residential, office and ground-floor commercial accommodation around Edinburgh Quay on the Union Canal. Tollcross carries the Cameo Cinema, the Royal Lyceum and Traverse theatres, the Edinburgh International Conference Centre on the Lothian Road frontage and a deep independent F&B and licensed-trade spine along Lothian Road, West Tollcross and Lauriston Place. Quartermile at Lauriston Place anchors the eastern edge with the former Royal Infirmary site repurposed by Foster + Partners into Grade A office and residential.",
        "Mid-cap private investors dominate the regeneration end, with the major Fountainbridge sites moving through the asset-management cycle as ground-floor commercial lettings stabilise. The 400,000 pounds to 2.5M pounds bracket, Fountainbridge mixed-use ground-floor commercial, Tollcross independent F&B and licensed-trade freehold and Edinburgh Quay canal-side stock, is the deep-volume zone we work most often. Pricing currently 6.5 to 8.0% pa for clean investment, with prime Fountainbridge new-build and Quartermile office at 6.5 to 7.5% pa and secondary Tollcross independent F&B at 7.5 to 8.5%. Refinancing volumes have picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 mature into a higher base-rate environment, particularly across the Fountainbridge mixed-use stock that captured the regeneration uplift.",
        "Registers of Scotland residential transactions inside EH3 cluster along Fountainbridge and the Union Canal frontage, with leasehold flats trading consistently around the Edinburgh median. They are not a direct commercial signal but they confirm that the regeneration catchment continues to absorb residential supply against the backdrop of the former-brewery quarter delivery, which underwrites the ground-floor commercial, F&B and licensed-trade income that most of our EH3 commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity across Tollcross and Fountainbridge (EH3)",
      body:
        'Two headline City of Edinburgh Council public access files anchor the current Tollcross and Fountainbridge commercial mortgage pipeline. The Tollcross mixed-use regeneration scheme at EH3 9QY (Ref <strong>25/01812/FUL</strong>) covers new ground-floor leisure and F&B with managed residential above on the EH3 entertainment district frontage, the canonical Tollcross entertainment cluster repositioning that an investor refinances against on a blended semi-commercial facility at 70 to 75% LTV once ground-floor lettings stabilise. The Fountainbridge regeneration scheme at EH3 9QH (Ref <strong>26/00712/FUL</strong>) covers a new mixed-use development comprising office, residential and ground-floor F&B in the former brewery quarter, the canonical Fountainbridge former-brewery repositioning that the developer refinances against on a Grade A office plus ground-floor commercial investment facility once let. LBTT applies at the Scottish non-residential rates on each freehold acquisition, refinancing is unaffected. The security in every case is a standard security registered in the Land Register of Scotland.',
      refs: [
        {
          ref: "25/01812/FUL",
          address: "Tollcross, Edinburgh EH3 9QY",
          postcode: "EH3 9QY",
          proposal: "Tollcross mixed-use regeneration scheme, new ground-floor leisure and F&B with managed residential above on the EH3 entertainment district frontage.",
        },
        {
          ref: "26/00712/FUL",
          address: "Fountainbridge, Edinburgh EH3 9QH",
          postcode: "EH3 9QH",
          proposal: "Fountainbridge regeneration scheme, new mixed-use development comprising office, residential and ground-floor F&B in the former brewery quarter.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Tollcross and Fountainbridge",
      items: [
        { label: "Fountainbridge mixed-use ground-floor commercial", detail: "Ground-floor commercial and F&B accommodation within the Fountainbridge former-brewery mixed-use schemes.", typicalSize: "500,000 pounds to 2.5M pounds facility" },
        { label: "Quartermile Grade A office", detail: "Foster + Partners-designed Grade A office investment on the former Royal Infirmary site at Lauriston Place.", typicalSize: "1.5M pounds to 8M pounds" },
        { label: "Tollcross theatre, cinema and leisure", detail: "Listed theatre, cinema and live music venue trading-business freehold across Tollcross.", typicalSize: "600,000 pounds to 3M pounds" },
        { label: "Lothian Road and West Tollcross F&B", detail: "Independent restaurant, bar and licensed-trade freehold along the Lothian Road and West Tollcross spine.", typicalSize: "300,000 pounds to 1.5M pounds" },
        { label: "Edinburgh Quay canal-side stock", detail: "Edinburgh Quay canal-side ground-floor commercial and serviced office.", typicalSize: "400,000 pounds to 2M pounds" },
        { label: "Lauriston Place owner-occupier", detail: "Edinburgh professional services firms buying their Lauriston Place or Tollcross office.", typicalSize: "400,000 pounds to 1.5M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active across Tollcross and Fountainbridge",
      body: 'Investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Tollcross theatre, cinema, Lothian Road licensed F&B and Edinburgh Quay leisure trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Owner-occupier professional services firms buying their Lauriston Place or Tollcross floor via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Fountainbridge and Edinburgh Quay mixed-use semi-commercial via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Vacant Fountainbridge or Quartermile office routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Fountainbridge mixed-use, Quartermile Grade A office and Tollcross leisure",
      body:
        "Tollcross and Fountainbridge sit inside a deep regeneration-corridor lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong> (which runs Bank of Scotland from Lothian Road within the EH3 footprint), <strong>Barclays</strong>, HSBC UK and <strong>Santander</strong> compete on prime Quartermile Grade A office and Fountainbridge new-build mixed-use at 60 to 65% LTV and 6.5 to 7.5% pa, with Bank of Scotland, Clydesdale Bank and Virgin Money UK all carrying Edinburgh-active Scottish-headquartered commercial desks comfortable with the EH3 regeneration covenant. <strong>Shawbrook</strong> dominates mid-market secondary Fountainbridge and Tollcross stock at 65 to 75% LTV and 7.0 to 7.5% pa. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Tollcross theatre, cinema and Lothian Road licensed F&B trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on Fountainbridge new-build and Edinburgh Quay during the ground-floor lettings phase. Allica Bank is active across EH3 SME owner-occupier on Lauriston Place professional services freehold, lending against Scottish standard security through its Scottish solicitor panel. HTB takes selected Quartermile and Fountainbridge investment deals on its commercial book. Paragon supports semi-commercial portfolios where Tollcross parade upper floors carry residential under Scottish licensing. Together covers semi-commercial Lothian Road and West Tollcross stock at 70 to 75% LTV on blended ICR. Refinancing on a stabilised Fountainbridge mixed-use or Quartermile Grade A office typically prices 7.0 to 7.5% pa at 65 to 70% LTV. The security in every case is a standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland, with enforcement via calling-up notice through the Sheriff Court. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["mixed-use", "office", "leisure-hospitality", "retail", "pub-restaurant", "semi-commercial"],
    faqs: [
      {
        question: "What LTV is achievable on a Fountainbridge mixed-use investment?",
        answer:
          'Up to 75% LTV on stabilised Fountainbridge mixed-use post-tenant fit-out. The Fountainbridge regeneration scheme approved under planning reference 26/00712/FUL at EH3 9QH is exactly this profile, blended commercial plus residential prices best at 65 to 70% LTV at around 7.0 to 7.5% pa with <strong>Shawbrook</strong>, HTB, <strong>Cynergy Bank</strong>, Bank of Scotland, Clydesdale Bank or Virgin Money UK on the Scottish-headquartered route. The binding constraint is usually blended ICR on the rental stack, not headline LTV. LBTT applies at the Scottish non-residential or mixed-use rates on the freehold purchase as relevant.',
      },
      {
        question: "Can we fund a Tollcross theatre, cinema or live music venue freehold?",
        answer:
          'Yes, the Tollcross mixed-use regeneration scheme approved under planning reference 25/01812/FUL at EH3 9QY illustrates the entertainment district pipeline directly. Listed and operating venues fund as trading-business mortgages on operator EBITDA at 60 to 70% LTV through <strong>Cynergy Bank</strong>, Allica Bank or HTB once a 24 month track record is in place. Heritage-comfortable lenders <strong>Shawbrook</strong>, Cumberland Building Society and Together carry the listed-building stock at 65 to 70% LTV.',
      },
      {
        question: "How does the Fountainbridge former brewery quarter affect EH3 commercial pricing?",
        answer:
          'The former Scottish & Newcastle brewery site has been progressively delivered through 2010 to 2026 into mixed-use accommodation across multiple plots, with the canal-side Edinburgh Quay element substantially complete. Prime Fountainbridge new-build ground-floor commercial trades 50 to 100bps inside equivalent secondary EH3 stock, and the Quartermile Grade A office cluster at Lauriston Place sits at the keenest pricing end of the Edinburgh secondary office market.',
      },
      {
        question: "Which lenders run Scottish-headquartered desks active across Tollcross and Fountainbridge?",
        answer:
          '<strong>NatWest</strong> Group is registered in Edinburgh, <strong>Lloyds</strong> Banking Group runs its Bank of Scotland brand for Scottish covenants directly from Lothian Road inside the EH3 footprint, and Clydesdale Bank and Virgin Money UK both maintain Edinburgh-active commercial desks routing Tollcross and Fountainbridge deals through Scottish solicitors on their panels. <strong>Shawbrook</strong>, Allica Bank, HTB and <strong>Cynergy Bank</strong> all carry programmes that take Fountainbridge mixed-use and Tollcross leisure deals against Scottish standard security. Several English-headquartered challenger banks lend happily against Scottish standard security but route the file to Scottish solicitors on their panel. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "southside-meadows": {
    slug: "southside-meadows",
    name: "Southside and The Meadows",
    metaTitle: "Commercial Mortgages Southside and The Meadows Edinburgh | HMO Broker, EH8 EH9",
    metaDescription:
      "Commercial mortgages for Southside and The Meadows, Edinburgh (EH8 / EH9), University of Edinburgh student belt, Marchmont licensed HMO cluster, Nicolson Street semi-commercial and student-led F&B. Scottish-security panel including Paragon, Together and Foundation Home Loans.",
    hero: {
      h1: "Commercial Mortgages Southside and The Meadows Edinburgh",
      lede:
        "Southside and The Meadows (EH8 / EH9) sit at the centre of the University of Edinburgh student-economy commercial mortgage market. Marchmont Road, Buccleuch Street, Nicolson Street and the South Bridge spine carry one of the densest licensed HMO concentrations in Scotland against a student catchment of around 45,000 at the University of Edinburgh alone. We arrange licensed HMO finance, semi-commercial shop-plus-flat lending, student-led trading-business mortgages and refinancing across the EH8 and EH9 corridor, on Scottish standard security.",
    },
    marketContext: {
      h2: "The Southside and The Meadows commercial property market",
      body: [
        "Southside and The Meadows anchor the EH8 and EH9 student-led commercial belt, with the University of Edinburgh main campus at George Square, Bristo Square, Old College and the new Edinburgh Futures Institute at Quartermile pulling around 45,000 students into the catchment year round. The market splits three ways. Licensed HMO blocks across Marchmont, Sciennes, Newington and the streets off Causewayside drive the largest single commercial mortgage flow. Semi-commercial shop-with-flat-above runs along Nicolson Street, Buccleuch Street and Clerk Street. Student-led F&B, cafes and licensed venues anchor the Nicolson Street and Forrest Road parades plus the Newington corridor down to Cameron Toll.",
        "Edinburgh operates a notably strict HMO licensing regime under the Housing (Scotland) Act 2006, with a mandatory licence required for any property occupied by three or more unrelated adults, a much wider net than the English five-plus threshold. The licence is issued by City of Edinburgh Council, runs for three years and turns over a meaningful proportion of the EH8 and EH9 portfolio at any time. Paragon, Together and Foundation Home Loans all carry dedicated Scottish HMO programmes that underwrite to existing licence status, with <strong>InterBay Commercial</strong> covering larger licensed portfolios. Refinancing onto longer terms after a successful licence renewal is the largest single use case we see in EH9.",
        "Pricing on a clean licensed HMO refinance in Marchmont or Sciennes currently runs 6.5 to 8.5% pa at 70 to 75% LTV on stabilised income, with semi-commercial Nicolson Street parade at 7.0 to 8.5% pa via specialist desks and student-led F&B trading-business mortgages at 8.0 to 9.0% pa on operator EBITDA. Registers of Scotland temperature across EH9 sits in the 290,000 to 360,000 pound range for typical tenement flat stock, supporting the rental stack that licensed HMO and semi-commercial deals price against. LBTT applies at the Scottish non-residential bands on every commercial or mixed-use freehold purchase, with the standard security registered in the Land Register of Scotland.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Southside and The Meadows (EH8 / EH9)",
      body:
        'A live City of Edinburgh Council public access file in the Marchmont core anchors the current Southside commercial mortgage pipeline. The Marchmont Road file (Ref <strong>25/02612/COU</strong>) covers a sui generis HMO change of use in the heart of the EH9 student belt, the canonical Marchmont licensed HMO scheme that funds through Paragon, Together or Foundation Home Loans on a 70 to 75% LTV facility at 7.0 to 8.5% pa once the City of Edinburgh Council HMO licence is issued under the Housing (Scotland) Act 2006. Sui generis HMO consent in EH9 typically attaches conservation-area design controls because most of Marchmont sits inside the South Side Conservation Area, but the underwriting is unaffected as long as the licence is in place and the rental stack supports stressed ICR. LBTT applies at the Scottish non-residential bands on every commercial or mixed-use freehold purchase, refinancing existing licensed HMO portfolios after a clean three-year licence renewal is the highest-volume single use case in EH8 and EH9 right now.',
      refs: [
        {
          ref: "25/02612/COU",
          address: "Marchmont Road, Marchmont, Edinburgh EH9",
          postcode: "EH9",
          proposal: "Change of use to sui generis House in Multiple Occupation in the Marchmont student belt, with associated internal alterations to meet the City of Edinburgh Council HMO licensing standard under the Housing (Scotland) Act 2006.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Southside and The Meadows",
      items: [
        { label: "Licensed HMO block, Marchmont and Sciennes", detail: "Sui generis licensed HMO under the Housing (Scotland) Act 2006, three or more unrelated adults.", typicalSize: "300,000 to 1.2M pound facility" },
        { label: "Larger student HMO portfolio refinance", detail: "Multi-property landlord consolidating EH8 and EH9 licensed stock onto a single facility.", typicalSize: "1M to 4M pounds" },
        { label: "Nicolson Street semi-commercial", detail: "Shop plus flat above on the Nicolson Street and South Bridge spine.", typicalSize: "250,000 to 700,000 pounds" },
        { label: "Student-led F&B and licensed cafes", detail: "Nicolson Street, Forrest Road and Newington cafe and licensed venue freehold.", typicalSize: "300,000 to 1.2M pounds" },
        { label: "Independent retail owner-occupier", detail: "Buccleuch Street and Clerk Street independent retailers buying their unit.", typicalSize: "250,000 to 700,000 pounds" },
        { label: "Aparthotel and serviced apartment", detail: "Festival-aware aparthotel around George Square and Quartermile, subject to the Scottish short-term lets licensing scheme.", typicalSize: "500,000 to 3M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Southside and The Meadows",
      body: 'Licensed HMO routes via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block</a>. Semi-commercial Nicolson Street and Buccleuch Street parade via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Student-led F&B and licensed cafes through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Multi-property HMO portfolios via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Refinancing maturing HMO and semi-commercial five-year fixes after a clean City of Edinburgh Council HMO licence renewal is the highest-volume single use case through 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Southside HMO, student F&B and Nicolson Street semi-commercial",
      body:
        'Strongest on HMO. Paragon, Together and Foundation Home Loans dominate the EH8 and EH9 licensed HMO market, each underwriting to existing City of Edinburgh Council licence status and three-year licence cycle, with <strong>InterBay Commercial</strong> covering larger licensed portfolios at 70 to 75% LTV and 6.5 to 8.5% pa on stabilised income. <strong>Shawbrook</strong> takes selected mid-cap Marchmont and Sciennes HMO investment deals on its commercial book. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Nicolson Street and Forrest Road student-led F&B and licensed cafe trading-business freehold against operator EBITDA at 1.5 to 1.8x. Bank of Scotland, Clydesdale Bank and Virgin Money UK all carry Scottish commercial desks active on Southside and Newington semi-commercial and owner-occupier deals using Scottish solicitors on the panel. <strong>LendInvest</strong> covers bridge-to-let on EH9 student-let repositioning during licence transition. Allica, HTB and YBS Commercial cover stronger-covenant owner-occupier on Buccleuch Street and Clerk Street independent retail. Refinancing a stabilised licensed HMO block in EH9 typically prices 7.0 to 8.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. The security is a standard security registered in the Land Register of Scotland.',
    },
    relatedAssetClasses: ["hmo-block", "semi-commercial", "leisure-hospitality", "pub-restaurant", "retail", "mixed-use"],
    faqs: [
      {
        question: "What LTV is achievable on a Marchmont licensed HMO refinance?",
        answer:
          'Up to 75% LTV with Paragon, Together or Foundation Home Loans on a clean City of Edinburgh Council HMO licence under the Housing (Scotland) Act 2006. Stabilised income supports 7.0 to 8.5% pa pricing, with <strong>InterBay Commercial</strong> covering larger portfolios. The security is a standard security registered in the Land Register of Scotland. LBTT applies at the Scottish non-residential bands on any purchase, refinancing is unaffected.',
      },
      {
        question: "How does Edinburgh HMO licensing differ from the English regime?",
        answer:
          'Edinburgh licences any property occupied by three or more unrelated adults under the Housing (Scotland) Act 2006, a much wider net than the English five-plus threshold. The licence is issued by City of Edinburgh Council, runs three years and is mandatory before letting. Lenders underwrite to existing licence status, refinancing typically follows a clean licence renewal. The recent 25/02612/COU Marchmont Road application is the canonical EH9 HMO planning profile.',
      },
      {
        question: "Can I fund a student-led F&B freehold on Nicolson Street?",
        answer:
          'Yes through trading-business mortgage on operator EBITDA at 1.5 to 1.8x cover. <strong>Cynergy Bank</strong> sits at the top of our shortlist for Nicolson Street and Forrest Road licensed cafe and student-led F&B, with Bank of Scotland and Clydesdale Bank also active on Scottish security. Pricing currently 8.0 to 9.0% pa at 60 to 70% LTV. LBTT applies at the Scottish non-residential bands on the freehold purchase.',
      },
      {
        question: "Is Marchmont and Sciennes inside a conservation area?",
        answer:
          'Most of Marchmont and Sciennes sits inside the South Side Conservation Area, with design controls on shopfronts, windows and external alterations. Listed-building consent applies where individual tenements are listed. Conservation area status does not affect commercial mortgage availability, the underwriting is asset and licence driven, not architectural.',
      },
      {
        question: "Does the Scottish short-term lets licensing scheme affect EH9 aparthotel deals?",
        answer:
          'Yes, any short-term let in Edinburgh now requires a licence under the Scottish short-term lets licensing scheme. Festival-aware aparthotel stock around George Square and Quartermile must hold a current licence before lending will complete. Lenders underwrite to existing licence status, refinancing follows a clean renewal in the same way as HMO.',
      },
    ],
  },

  "morningside-bruntsfield": {
    slug: "morningside-bruntsfield",
    name: "Morningside and Bruntsfield",
    metaTitle: "Commercial Mortgages Morningside and Bruntsfield Edinburgh | Affluent Retail Broker, EH9 EH10",
    metaDescription:
      "Commercial mortgages for Morningside and Bruntsfield, Edinburgh (EH9 / EH10), Morningside Road and Bruntsfield Place affluent retail, dental, medical and legal freehold cluster, semi-commercial. Scottish-security panel including Shawbrook, Allica, InterBay Commercial and Together.",
    hero: {
      h1: "Commercial Mortgages Morningside and Bruntsfield Edinburgh",
      lede:
        "Morningside and Bruntsfield (EH9 / EH10) carry one of the most affluent suburban retail and professional-services commercial corridors in Scotland. Morningside Road and Bruntsfield Place anchor a deep independent retail, dental, medical and legal freehold market with strong semi-commercial shop-plus-flat archetypes above. We arrange owner-occupier retail and professional services finance, semi-commercial mortgages, dental and medical practice freeholds and trading-business F&B across the EH9 and EH10 corridor on Scottish standard security.",
    },
    marketContext: {
      h2: "The Morningside and Bruntsfield commercial property market",
      body: [
        "Morningside and Bruntsfield sit south of The Meadows along the EH9 and EH10 spine, with Morningside Road, Bruntsfield Place, Holy Corner and the Churchhill cluster forming one of Scotland most consistent affluent neighbourhood retail markets. The catchment runs through the Grange, Merchiston, Greenhill and Comely Bank conservation areas, with a high concentration of dual-income professional households, university staff and senior NHS Lothian medical staff supporting independent retail trading and a meaningful dental, medical and legal freehold cluster on the side streets off both Morningside Road and Bruntsfield Place.",
        "The commercial mortgage flow splits three ways. Owner-occupier independent retail, dental, medical and legal practice freeholds are the largest single flow, with practice principals buying out a retiring partner or a previous landlord. Semi-commercial shop-with-flat-above runs the full length of Morningside Road and Bruntsfield Place, the classic Edinburgh tenement archetype with active commercial ground floor and an upper-floor flat let on AST. Independent F&B and licensed cafe trading-business mortgages anchor the smaller third bucket, with the Bruntsfield Place and Holy Corner cluster running through to Churchhill Theatre.",
        "Pricing on clean owner-occupier in Morningside and Bruntsfield currently runs 6.0 to 7.5% pa for strong-covenant dental, medical and legal practices at 70 to 75% LTV, with semi-commercial at 7.0 to 8.5% pa via specialist desks at up to 75% LTV. Registers of Scotland temperature across EH9 and EH10 sits firmly in the 380,000 to 520,000 pound range on typical tenement and townhouse stock, with prime Morningside Road and Bruntsfield Place ground-floor commercial rents supporting strong tenant covenant assumptions. LBTT applies at the Scottish non-residential bands on every commercial or mixed-use freehold purchase, with the standard security registered in the Land Register of Scotland.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Morningside and Bruntsfield (EH9 / EH10)",
      body:
        'Two live City of Edinburgh Council public access files anchor the current Morningside and Bruntsfield commercial mortgage pipeline. The Morningside Road file (Ref <strong>25/02478/FUL</strong>) covers a change of use and shopfront alteration on the EH10 spine, a canonical Morningside Road ground-floor commercial repositioning that funds either as a bridge-to-let during the works phase, then terms out to semi-commercial mortgage at 70 to 75% LTV via <strong>InterBay Commercial</strong> or Together once stabilised on combined commercial rent and AST income. The Bruntsfield Place file (Ref <strong>25/01012/FUL</strong>) covers a change of use and Class E ground-floor reconfiguration on the EH9 spine, an active dental, medical or legal practice freehold candidate the day a principal buys it. Both sit inside the Conservation Area for Morningside or Marchmont, with listed-building consent applicable on individually listed tenements. LBTT applies at the Scottish non-residential bands on every freehold or mixed-use purchase, refinancing maturing five-year fixes from 2020 and 2021 is the highest-volume use case in EH9 and EH10 right now.',
      refs: [
        {
          ref: "25/02478/FUL",
          address: "Morningside Road, Morningside, Edinburgh EH10",
          postcode: "EH10",
          proposal: "Change of use and alterations to existing ground-floor commercial unit on the Morningside Road retail spine, with shopfront alteration and internal reconfiguration to support a new Class 1a or Class 3 occupier.",
        },
        {
          ref: "25/01012/FUL",
          address: "Bruntsfield Place, Bruntsfield, Edinburgh EH9",
          postcode: "EH9",
          proposal: "Change of use and Class E ground-floor reconfiguration on the Bruntsfield Place retail spine, with associated external alterations to support a new commercial occupier in a conservation-area tenement.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Morningside and Bruntsfield",
      items: [
        { label: "Dental practice freehold, EH9 and EH10", detail: "Principal-led dental practice purchase, NHS and private mix.", typicalSize: "500,000 to 2M pound facility" },
        { label: "Medical and GP practice freehold", detail: "Owner-occupier GP, allied health and medical specialist practices on the EH9 and EH10 side streets.", typicalSize: "500,000 to 1.5M pounds" },
        { label: "Legal and accountancy freehold", detail: "Solicitor and accountant firms buying their Morningside Road or Bruntsfield Place office.", typicalSize: "400,000 to 1.5M pounds" },
        { label: "Owner-occupier independent retail", detail: "Boutique retailers and delicatessens buying their Morningside Road or Bruntsfield Place unit.", typicalSize: "250,000 to 800,000 pounds" },
        { label: "Semi-commercial shop plus flat", detail: "Classic Edinburgh tenement archetype with active commercial ground floor and upper-floor AST.", typicalSize: "300,000 to 700,000 pounds" },
        { label: "Independent F&B and licensed cafe", detail: "Bruntsfield Place and Holy Corner restaurants, gastropubs and licensed cafes.", typicalSize: "300,000 to 1.2M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Morningside and Bruntsfield",
      body: 'Owner-occupier dental, medical and legal practice freeholds dominate via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover and contract value. Semi-commercial Morningside Road and Bruntsfield Place via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Independent F&B and licensed cafe through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Refinancing maturing five-year fixes from 2020 and 2021 is the highest-volume single product through 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Morningside and Bruntsfield dental, medical, legal and semi-commercial",
      body:
        'Strongest on owner-occupier. <strong>Shawbrook</strong>, Allica Bank, HTB and Cambridge & Counties all compete keenly on EH9 and EH10 dental, medical, legal and accountancy freeholds at 70 to 80% LTV including contract-value uplift, with pricing 6.0 to 7.5% pa on principal-led practice purchase. Bank of Scotland, Clydesdale Bank and Virgin Money UK all carry Scottish commercial desks active on owner-occupier Morningside Road and Bruntsfield Place deals using Scottish solicitors on the panel. <strong>InterBay Commercial</strong> and Together dominate semi-commercial shop-plus-flat at 70 to 75% LTV on blended ICR around 145%. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Bruntsfield Place and Holy Corner licensed cafe and independent F&B trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the strongest professional-services owner-occupier files at 60 to 65% LTV. <strong>LendInvest</strong> covers bridge-to-let on EH9 and EH10 ground-floor repositioning during works. Refinancing on a stabilised semi-commercial Morningside Road or Bruntsfield Place asset typically prices 7.0 to 8.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. The security is a standard security registered in the Land Register of Scotland.',
    },
    relatedAssetClasses: ["retail", "semi-commercial", "office", "healthcare-care-home", "pub-restaurant", "mixed-use"],
    faqs: [
      {
        question: "Best lender for a Morningside Road or Bruntsfield Place dental practice freehold?",
        answer:
          '<strong>Shawbrook</strong>, Allica Bank health desk, Cambridge & Counties and HTB all run dedicated principal-led dental programmes that take NHS contract value as additional security. LTV to 80% on the bricks plus contract value at 6.0 to 7.5% pa. Bank of Scotland and Clydesdale Bank also active on owner-occupier deals. The security is a standard security registered in the Land Register of Scotland and LBTT applies at the Scottish non-residential bands on the freehold purchase.',
      },
      {
        question: "What rate on Morningside and Bruntsfield owner-occupier retail?",
        answer:
          'Currently 6.0 to 7.5% pa for strong-covenant independent retailers buying their Morningside Road or Bruntsfield Place freehold at 70 to 75% LTV. EBITDA cover 1.3 to 1.5x. LBTT applies at the Scottish non-residential bands on the freehold purchase. Refinancing maturing five-year fixes from 2020 and 2021 is the highest-volume single use case right now.',
      },
      {
        question: "Can I get 75% LTV on Bruntsfield Place semi-commercial?",
        answer:
          'Yes, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on classic Edinburgh shop-plus-flat-above tenement archetypes. Blended ICR around 145% on combined commercial rent and AST income. The recent 25/01012/FUL Bruntsfield Place application is a canonical EH9 conservation-area Class E reconfiguration that is fundable on this basis.',
      },
      {
        question: "Does conservation-area or listed-building status affect lending in EH9 or EH10?",
        answer:
          'Most of Morningside, Bruntsfield, the Grange, Merchiston and Greenhill sit inside conservation areas, with design controls on shopfronts, windows and external alterations. Listed-building consent applies on individually listed tenements. Conservation status does not affect commercial mortgage availability, the underwriting is asset, covenant and contract-value driven, not architectural. Heritage-comfortable lenders <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Cambridge & Counties and Together fund this stock comfortably.',
      },
      {
        question: "What about Bruntsfield Place and Holy Corner hospitality and F&B?",
        answer:
          'Active independent F&B and licensed cafe market. <strong>Cynergy Bank</strong> sits at the top of our shortlist for trading-business freehold against operator EBITDA at 1.5 to 1.8x, with Bank of Scotland and Clydesdale Bank also active on Scottish-security hospitality deals. Pricing 7.5 to 9.0% pa at 60 to 70% LTV. Refinancing maturing facilities is currently the highest-volume single use case.',
      },
    ],
  },

  "stockbridge": {
    slug: "stockbridge",
    name: "Stockbridge",
    metaTitle: "Commercial Mortgages Stockbridge Edinburgh | Boutique Retail Broker, EH3 EH4",
    metaDescription:
      "Commercial mortgages for Stockbridge, Edinburgh (EH3 / EH4), Saunders Street and Stockbridge Market boutique retail, independent F&B, deli and lifestyle retail freeholds, semi-commercial tenement. Scottish-security panel including Shawbrook, InterBay Commercial, Cynergy Bank and Together.",
    hero: {
      h1: "Commercial Mortgages Stockbridge Edinburgh",
      lede:
        "Stockbridge (EH3 / EH4) carries one of the most distinctive boutique independent retail and F&B high streets in Scotland. Saunders Street, Raeburn Place, St Stephen Street and Stockbridge Market anchor a deep independent retail, deli and lifestyle freehold market, with semi-commercial shop-plus-flat tenement archetypes throughout. We arrange owner-occupier independent retail finance, semi-commercial mortgages, boutique F&B and licensed cafe trading-business mortgages and refinancing across the EH3 and EH4 corridor on Scottish standard security.",
    },
    marketContext: {
      h2: "The Stockbridge commercial property market",
      body: [
        "Stockbridge sits in the New Town conservation area between the Royal Botanic Garden Edinburgh to the north and the Water of Leith to the south, with Saunders Street, Raeburn Place, Deanhaugh Street, Hamilton Place and St Stephen Street forming the boutique retail and F&B spine. The catchment is one of Scotland most consistent affluent neighbourhood markets, with a strong professional and creative resident base supporting independent boutique retail, deli and lifestyle trading and a meaningful licensed F&B cluster around Stockbridge Market and Hamilton Place.",
        "The commercial mortgage flow splits three ways. Owner-occupier independent boutique retail, deli and lifestyle freeholds are the largest single flow, with retailers buying out a previous landlord or a retiring proprietor on Saunders Street, Raeburn Place and St Stephen Street. Semi-commercial shop-with-flat-above runs the full length of the spine, the classic New Town tenement archetype with active commercial ground floor and an upper-floor flat let on AST. Boutique F&B and licensed cafe trading-business mortgages anchor the smaller third bucket, with Stockbridge Market traders looking at permanent freeholds in adjacent buildings as a route out of the Sunday-market model.",
        "Pricing on clean owner-occupier in Stockbridge currently runs 6.5 to 8.0% pa for strong-covenant independent retailers at 70 to 75% LTV, with semi-commercial at 7.0 to 8.5% pa via specialist desks at up to 75% LTV. Registers of Scotland temperature across EH3 and EH4 sits firmly in the 400,000 to 600,000 pound range on typical New Town tenement and Stockbridge colonies stock, supporting strong tenant covenant assumptions on Saunders Street, Raeburn Place and St Stephen Street ground-floor commercial rents. LBTT applies at the Scottish non-residential bands on every commercial or mixed-use freehold purchase, with the standard security registered in the Land Register of Scotland.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Stockbridge (EH3 / EH4)",
      body:
        'A live City of Edinburgh Council public access file anchors the current Stockbridge commercial mortgage pipeline. The Stockbridge Market file (Ref <strong>25/02345/FUL</strong>) covers a change of use, fit-out and external alterations at the Stockbridge Market site on Saunders Street, a canonical EH3 boutique market repositioning that funds either as a bridge-to-let during the works phase, then terms out to semi-commercial or trading-business mortgage at 70 to 75% LTV via <strong>InterBay Commercial</strong>, Together or <strong>Cynergy Bank</strong> once stabilised on combined retail and F&B income. The application sits inside the New Town Conservation Area, with listed-building consent applicable on adjacent tenements. LBTT applies at the Scottish non-residential bands on every freehold or mixed-use purchase, refinancing maturing five-year fixes from 2020 and 2021 on Saunders Street, Raeburn Place and St Stephen Street is the highest-volume use case in EH3 and EH4 right now.',
      refs: [
        {
          ref: "25/02345/FUL",
          address: "Stockbridge Market, Saunders Street, Stockbridge, Edinburgh EH3",
          postcode: "EH3",
          proposal: "Change of use, fit-out and external alterations at the Stockbridge Market site on Saunders Street, with associated boutique retail and F&B reconfiguration in the New Town Conservation Area.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Stockbridge",
      items: [
        { label: "Boutique independent retail owner-occupier", detail: "Saunders Street, Raeburn Place, St Stephen Street independent retailers buying their unit.", typicalSize: "250,000 to 700,000 pound facility" },
        { label: "Deli, butcher and lifestyle freehold", detail: "Specialist food and lifestyle owner-occupier freeholds across Stockbridge.", typicalSize: "300,000 to 900,000 pounds" },
        { label: "Semi-commercial shop plus flat", detail: "Classic New Town tenement archetype with active commercial ground floor and upper-floor AST.", typicalSize: "300,000 to 700,000 pounds" },
        { label: "Boutique F&B and licensed cafe", detail: "Hamilton Place, Stockbridge Market and Raeburn Place restaurants, gastropubs and licensed cafes.", typicalSize: "300,000 to 1.2M pounds" },
        { label: "Day nursery", detail: "Stockbridge professional-catchment nursery freehold around the colonies and Inverleith.", typicalSize: "400,000 to 1.2M pounds" },
        { label: "Aparthotel and serviced apartment", detail: "Tourist-aware aparthotel near the Royal Botanic Garden, subject to the Scottish short-term lets licensing scheme.", typicalSize: "500,000 to 2M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Stockbridge",
      body: 'Owner-occupier boutique retail and deli freeholds dominate via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Semi-commercial Saunders Street, Raeburn Place and St Stephen Street tenement via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Boutique F&B and licensed cafe through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or value-add ground-floor units route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing five-year fixes from 2020 and 2021 is the highest-volume single product through 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Stockbridge boutique retail, deli, F&B and semi-commercial",
      body:
        'Strong across the spine. <strong>Shawbrook</strong>, Allica Bank, HTB and Cambridge & Counties all compete keenly on EH3 and EH4 owner-occupier boutique retail and deli freeholds at 70 to 75% LTV and 6.5 to 8.0% pa. Bank of Scotland, Clydesdale Bank and Virgin Money UK all carry Scottish commercial desks active on owner-occupier Saunders Street, Raeburn Place and St Stephen Street deals using Scottish solicitors on the panel. <strong>InterBay Commercial</strong> and Together dominate semi-commercial shop-plus-flat at 70 to 75% LTV on blended ICR around 145%. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Hamilton Place and Stockbridge Market boutique F&B and licensed cafe trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on EH3 ground-floor repositioning during works, including the kind of profile captured by the 25/02345/FUL Stockbridge Market application. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the strongest owner-occupier files. Refinancing on a stabilised semi-commercial Saunders Street, Raeburn Place or St Stephen Street asset typically prices 7.0 to 8.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. The security is a standard security registered in the Land Register of Scotland.',
    },
    relatedAssetClasses: ["retail", "semi-commercial", "pub-restaurant", "leisure-hospitality", "office", "mixed-use"],
    faqs: [
      {
        question: "What rate on Stockbridge owner-occupier boutique retail or deli?",
        answer:
          'Currently 6.5 to 8.0% pa for strong-covenant independent boutique retailers and delis buying their Saunders Street, Raeburn Place or St Stephen Street freehold at 70 to 75% LTV. EBITDA cover 1.3 to 1.5x. Bank of Scotland, Clydesdale Bank and Virgin Money UK active on Scottish-security owner-occupier deals. LBTT applies at the Scottish non-residential bands on the freehold purchase.',
      },
      {
        question: "Can I get 75% LTV on Saunders Street or St Stephen Street semi-commercial?",
        answer:
          'Yes, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on classic Edinburgh shop-plus-flat-above New Town tenement archetypes. Blended ICR around 145% on combined commercial rent and AST income. New Town Conservation Area design controls do not affect the underwriting.',
      },
      {
        question: "Can I fund a Stockbridge Market-adjacent boutique repositioning like 25/02345/FUL?",
        answer:
          'Yes, through bridge-to-let during the fit-out and external alterations phase, then term out to trading-business or semi-commercial mortgage once income is stabilised. <strong>LendInvest</strong> dominates the EH3 bridge market, with <strong>InterBay Commercial</strong>, Together and <strong>Cynergy Bank</strong> covering the term-out at 70 to 75% LTV. LBTT applies at the Scottish non-residential bands on any acquisition step.',
      },
      {
        question: "Does the New Town Conservation Area affect lending in EH3 or EH4?",
        answer:
          'Stockbridge sits inside the New Town Conservation Area, with design controls on shopfronts, windows and external alterations. Listed-building consent applies on individually listed tenements. Conservation status does not affect commercial mortgage availability, the underwriting is asset, covenant and rental-stack driven, not architectural. Heritage-comfortable lenders <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Cambridge & Counties and Together fund this stock comfortably.',
      },
      {
        question: "What about boutique F&B and licensed cafe trading-business?",
        answer:
          'Active Hamilton Place and Raeburn Place market. <strong>Cynergy Bank</strong> sits at the top of our shortlist for Stockbridge trading-business freehold against operator EBITDA at 1.5 to 1.8x, with Bank of Scotland and Clydesdale Bank also active on Scottish-security hospitality deals. Pricing 7.5 to 9.0% pa at 60 to 70% LTV. Refinancing maturing facilities is currently the highest-volume single use case.',
      },
    ],
  },

  "portobello": {
    slug: "portobello",
    name: "Portobello",
    metaTitle: "Commercial Mortgages Portobello Edinburgh | Coastal Regeneration Broker, EH15",
    metaDescription:
      "Commercial mortgages for Portobello, Edinburgh (EH15), Portobello High Street independent retail, seafront leisure and F&B, beachside hospitality, semi-commercial tenement and short-term lets. Scottish-security panel including Cynergy Bank, InterBay Commercial, Shawbrook and Together.",
    hero: {
      h1: "Commercial Mortgages Portobello Edinburgh",
      lede:
        "Portobello (EH15) is Edinburgh seaside, a coastal regeneration high street running parallel to the Firth of Forth between Joppa and Easter Road. Portobello High Street and the promenade along the EH15 seafront anchor a deep independent retail, F&B and leisure economy, with semi-commercial shop-plus-flat tenement archetypes throughout. We arrange owner-occupier independent retail finance, semi-commercial mortgages, beachside hospitality and licensed F&B trading-business mortgages plus short-term lets refinance across the EH15 corridor on Scottish standard security.",
    },
    marketContext: {
      h2: "The Portobello commercial property market",
      body: [
        "Portobello sits on the EH15 coast around four miles east of central Edinburgh, with Portobello High Street running parallel to the Firth of Forth and the Promenade carrying the seafront leisure and F&B economy. The catchment is one of the strongest coastal regeneration stories in central Scotland over the last decade, with strong professional and creative resident migration from central Edinburgh supporting independent retail trading and a meaningful seasonal hospitality and short-term let market across the EH15 stock between Joppa and Brunstane.",
        "The commercial mortgage flow splits three ways. Owner-occupier independent retail, deli, gift and lifestyle freeholds on Portobello High Street are the largest single flow, with retailers buying their EH15 unit off a previous landlord. Semi-commercial shop-with-flat-above runs the full length of the High Street, the classic Edinburgh coastal tenement archetype with active commercial ground floor and an upper-floor flat let on AST or short-term let. Beachside hospitality, licensed F&B and aparthotel trading-business mortgages anchor the third bucket, with the promenade venues, Bath Street, Bellfield Street and Brighton Place cluster active year round but peaking in summer and around the Edinburgh Festival overspill.",
        "Pricing on clean owner-occupier in Portobello currently runs 6.5 to 8.0% pa for strong-covenant independent retailers at 70 to 75% LTV, with semi-commercial at 7.0 to 8.5% pa via specialist desks at up to 75% LTV. Registers of Scotland temperature across EH15 sits in the 310,000 to 440,000 pound range on typical coastal tenement and Victorian villa stock, supporting strong tenant covenant assumptions on Portobello High Street and Promenade ground-floor commercial rents. LBTT applies at the Scottish non-residential bands on every commercial or mixed-use freehold purchase, with the standard security registered in the Land Register of Scotland.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Portobello (EH15)",
      body:
        'A live City of Edinburgh Council public access file on the Portobello High Street spine anchors the current EH15 commercial mortgage pipeline. The Portobello High Street file (Ref <strong>25/02212/FUL</strong>) covers a change of use, shopfront alteration and external works on a ground-floor commercial unit in the heart of EH15, the canonical Portobello coastal repositioning that funds either as a bridge-to-let during the works phase, then terms out to semi-commercial or trading-business mortgage at 70 to 75% LTV via <strong>InterBay Commercial</strong>, Together or <strong>Cynergy Bank</strong> once stabilised on combined commercial and residential income. Most of the Portobello High Street parade sits inside the Portobello Conservation Area, with listed-building consent applicable on individually listed properties. The Scottish short-term lets licensing scheme applies to any short-let aparthotel or holiday-let component, with a current licence required before lending will complete. LBTT applies at the Scottish non-residential bands on every freehold or mixed-use purchase, refinancing maturing five-year fixes from 2020 and 2021 on Portobello High Street is the highest-volume use case in EH15 right now.',
      refs: [
        {
          ref: "25/02212/FUL",
          address: "Portobello High Street, Portobello, Edinburgh EH15",
          postcode: "EH15",
          proposal: "Change of use, shopfront alteration and external works on a ground-floor commercial unit on the Portobello High Street retail spine, with associated internal reconfiguration to support a new Class 1a, Class 2 or Class 3 occupier in the Portobello Conservation Area.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Portobello",
      items: [
        { label: "Portobello High Street owner-occupier retail", detail: "Independent retailers, delis and lifestyle stores buying their unit.", typicalSize: "200,000 to 600,000 pound facility" },
        { label: "Semi-commercial shop plus flat", detail: "Classic EH15 coastal tenement archetype with active commercial ground floor and upper-floor AST.", typicalSize: "250,000 to 600,000 pounds" },
        { label: "Beachside F&B and licensed venue", detail: "Promenade, Bath Street and Brighton Place restaurants, gastropubs and licensed cafes.", typicalSize: "300,000 to 1.2M pounds" },
        { label: "Aparthotel and serviced apartment", detail: "Festival-aware aparthotel and seasonal short-term let stock, subject to the Scottish short-term lets licensing scheme.", typicalSize: "400,000 to 2M pounds" },
        { label: "Coastal leisure and Class 11 use", detail: "Indoor leisure, gym, padel and sports facility freehold in former industrial coastal stock.", typicalSize: "400,000 to 1.5M pounds" },
        { label: "Independent F&B and cafe", detail: "Portobello High Street and Bellfield Street independent restaurants and cafes.", typicalSize: "250,000 to 800,000 pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Portobello",
      body: 'Owner-occupier coastal independent retail dominates via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Semi-commercial Portobello High Street tenement via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Beachside hospitality and licensed F&B through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Aparthotel and short-term let stock via <a href="/property-types/holiday-let-portfolio" class="text-secondary font-medium hover:underline">holiday-let portfolio</a>, subject to the Scottish short-term lets licensing scheme. Vacant or value-add seafront units route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing five-year fixes from 2020 and 2021 is the highest-volume single product through 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Portobello coastal retail, hospitality and seafront semi-commercial",
      body:
        'Strong across the spine. <strong>InterBay Commercial</strong> and Together dominate semi-commercial Portobello High Street shop-plus-flat at 70 to 75% LTV on blended ICR around 145%. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Promenade, Bath Street and Brighton Place licensed F&B and beachside hospitality trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>Shawbrook</strong>, Allica Bank and Cambridge & Counties cover stronger-covenant owner-occupier independent retail and deli freehold on the High Street at 70 to 75% LTV and 6.5 to 8.0% pa. Bank of Scotland, Clydesdale Bank and Virgin Money UK all carry Scottish commercial desks active on owner-occupier EH15 deals using Scottish solicitors on the panel. <strong>LendInvest</strong> covers bridge-to-let on EH15 ground-floor repositioning during the works phase, including the kind of profile captured by the 25/02212/FUL Portobello High Street application. Paragon, Together and Foundation Home Loans cover the aparthotel and short-term let stock that holds a current licence under the Scottish short-term lets licensing scheme. Refinancing on a stabilised semi-commercial Portobello High Street asset typically prices 7.0 to 8.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. The security is a standard security registered in the Land Register of Scotland.',
    },
    relatedAssetClasses: ["retail", "semi-commercial", "pub-restaurant", "leisure-hospitality", "holiday-let-portfolio", "mixed-use"],
    faqs: [
      {
        question: "What rate on Portobello High Street owner-occupier retail?",
        answer:
          'Currently 6.5 to 8.0% pa for strong-covenant independent retailers buying their Portobello High Street freehold at 70 to 75% LTV. <strong>Shawbrook</strong>, Allica Bank and Cambridge & Counties compete keenly, with Bank of Scotland and Clydesdale Bank also active on Scottish-security owner-occupier deals. LBTT applies at the Scottish non-residential bands on the freehold purchase.',
      },
      {
        question: "Can I get 75% LTV on Portobello High Street semi-commercial?",
        answer:
          'Yes, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on classic Edinburgh coastal shop-plus-flat-above tenement archetypes. Blended ICR around 145% on combined commercial rent and AST income. Portobello Conservation Area design controls do not affect the underwriting.',
      },
      {
        question: "Can I fund a Portobello High Street ground-floor repositioning like 25/02212/FUL?",
        answer:
          'Yes, through bridge-to-let during the change-of-use and shopfront alteration phase, then term out to semi-commercial or trading-business mortgage once income is stabilised. <strong>LendInvest</strong> dominates the EH15 bridge market, with <strong>InterBay Commercial</strong>, Together and <strong>Cynergy Bank</strong> covering the term-out at 70 to 75% LTV. LBTT applies at the Scottish non-residential bands on any acquisition step.',
      },
      {
        question: "Does the Scottish short-term lets licensing scheme affect EH15 aparthotel deals?",
        answer:
          'Yes, every short-term let in Edinburgh now requires a licence under the Scottish short-term lets licensing scheme operated by City of Edinburgh Council. Festival-aware aparthotel and seasonal holiday-let stock in Portobello must hold a current licence before lending will complete. Lenders underwrite to existing licence status, refinancing typically follows a clean renewal. Paragon, Together and Foundation Home Loans dominate the EH15 short-term-let-aware market.',
      },
      {
        question: "What about beachside F&B and licensed hospitality?",
        answer:
          'Active Promenade and Bath Street market with year-round trading and a strong summer plus Edinburgh Festival overspill peak. <strong>Cynergy Bank</strong> sits at the top of our shortlist for trading-business freehold against operator EBITDA at 1.5 to 1.8x, with Bank of Scotland and Clydesdale Bank also active on Scottish-security hospitality deals. Pricing 7.5 to 9.0% pa at 60 to 70% LTV. Refinancing maturing facilities is currently the highest-volume single use case.',
      },
    ],
  },

  "edinburgh-park-south-gyle": {
    slug: "edinburgh-park-south-gyle",
    name: "Edinburgh Park and South Gyle",
    metaTitle: "Commercial Mortgages Edinburgh Park and South Gyle | Financial Services Campus Broker, EH12",
    metaDescription:
      "Commercial mortgages for Edinburgh Park and South Gyle (EH12), Parabola financial-services masterplan, Lloyds, abrdn, Diageo and RBS Gogarburn-adjacent office investment plus South Gyle Crescent. Scottish-security panel including NatWest, Lloyds, Barclays, Santander, Shawbrook and Cynergy Bank.",
    hero: {
      h1: "Commercial Mortgages Edinburgh Park and South Gyle",
      lede:
        "Edinburgh Park and South Gyle (EH12) form Edinburgh largest single financial-services office campus, with Parabola masterplan tenants including Lloyds Banking Group, abrdn and Diageo on Edinburgh Park itself, plus the wider South Gyle Crescent and South Gyle Broadway office stock and Royal Bank of Scotland / NatWest Group at Gogarburn (EH12 1HQ) immediately adjacent. We arrange Grade A office investment finance, owner-occupier office and warehouse finance, hotel and serviced-apartment trading-business mortgages and refinancing across the EH12 corridor on Scottish standard security.",
    },
    marketContext: {
      h2: "The Edinburgh Park and South Gyle commercial property market",
      body: [
        "Edinburgh Park and South Gyle sit on the EH12 western fringe of Edinburgh, with Edinburgh Gateway tram and rail interchange anchoring the catchment, the Edinburgh Tram line connecting Edinburgh Park to St Andrew Square and Edinburgh Airport, and Royal Bank of Scotland / NatWest Group at Gogarburn (EH12 1HQ) immediately to the west. Edinburgh Park is delivered by Parabola as a long-running large-scale office, residential and life-sciences masterplan, with current tenants including Lloyds Banking Group, abrdn (Standard Life Aberdeen) and Diageo. South Gyle Crescent and South Gyle Broadway carry the wider mid-cap office, hotel and warehouse stock that supports the campus.",
        "The commercial mortgage flow splits four ways. Grade A office investment on Edinburgh Park is the headline, with institutional and mid-cap private investors taking long-let multi-tenant office buildings. Mid-cap secondary office on South Gyle Crescent and South Gyle Broadway runs the deepest single deal volume, with the 500,000 pound to 5M pound bracket the most active. Owner-occupier office and warehouse runs along the wider South Gyle estate, with SMEs buying their office or B2 unit. Hotel and serviced-apartment trading-business mortgages anchor the smaller fourth bucket, with Edinburgh Park, South Gyle and Edinburgh Airport-adjacent hotel stock supporting both Edinburgh Festival peak and year-round business travel.",
        "Pricing on Grade A Edinburgh Park office investment currently runs 6.0 to 7.0% pa at 60 to 65% LTV on long-let stock, with secondary South Gyle Crescent office at 7.0 to 8.5% pa at 65 to 75% LTV. Owner-occupier office and warehouse at 6.5 to 7.5% pa at 70 to 75% LTV. Hotel trading-business at 7.5 to 9.0% pa at 60 to 70% LTV on operator EBITDA. The financial-services covenant base across Lloyds, abrdn, Diageo and NatWest Group at Gogarburn anchors the prime end and supports keen pricing on covenant-led deals. LBTT applies at the Scottish non-residential bands on every commercial freehold purchase, with the standard security registered in the Land Register of Scotland.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Edinburgh Park and South Gyle (EH12)",
      body:
        'Two live City of Edinburgh Council public access files capture the current EH12 financial-services campus pipeline. The Edinburgh Park file (Ref <strong>26/01198/FUL</strong>) covers a Parabola masterplan plot, the canonical EH12 Grade A office plus mixed-use scheme that funds either as development finance during the works phase or, post-stabilisation, as a commercial investment mortgage at 60 to 65% LTV via <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> or <strong>Santander</strong> against multi-tenant Grade A income. The RBS Gogarburn file (Ref <strong>25/01145/FUL</strong>) covers the Royal Bank of Scotland / NatWest Group headquarters campus at Gogarburn (EH12 1HQ), a major office plot adjacent to Edinburgh Park, supporting refinance and asset-management activity by the headline financial-services tenants who anchor the EH12 covenant pool. LBTT applies at the Scottish non-residential bands on every commercial freehold purchase. Refinancing maturing five-year fixes from 2020 and 2021 on Edinburgh Park, South Gyle Crescent and South Gyle Broadway stock is the highest-volume single use case in EH12 right now.',
      refs: [
        {
          ref: "26/01198/FUL",
          address: "Edinburgh Park, Parabola masterplan, South Gyle Broadway, Edinburgh EH12",
          postcode: "EH12",
          proposal: "Parabola Edinburgh Park masterplan plot, Grade A multi-let office plus ancillary mixed-use accommodation on the western financial-services campus, with associated landscaping, parking, tram access and active-travel infrastructure.",
        },
        {
          ref: "25/01145/FUL",
          address: "RBS Gogarburn, NatWest Group registered office, Edinburgh EH12 1HQ",
          postcode: "EH12 1HQ",
          proposal: "Royal Bank of Scotland / NatWest Group Gogarburn headquarters campus works, supporting refinance and asset-management activity on the headline EH12 financial-services covenant immediately adjacent to Edinburgh Park.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Edinburgh Park and South Gyle",
      items: [
        { label: "Edinburgh Park Grade A office investment", detail: "Parabola masterplan multi-tenant prime office, financial-services covenant.", typicalSize: "2M to 10M pound facility" },
        { label: "South Gyle Crescent secondary office", detail: "Mid-cap secondary office investment serving the wider campus.", typicalSize: "500,000 to 3M pounds" },
        { label: "Owner-occupier office and warehouse", detail: "SMEs buying their EH12 office or B2 unit.", typicalSize: "400,000 to 2M pounds" },
        { label: "Hotel and aparthotel", detail: "Edinburgh Park, South Gyle and Edinburgh Airport-adjacent hotel and serviced-apartment freehold.", typicalSize: "1M to 5M pounds" },
        { label: "Logistics and warehouse", detail: "Last-mile and mid-cap industrial along the South Gyle and Edinburgh Park fringe.", typicalSize: "500,000 to 3M pounds" },
        { label: "Mixed-use Parabola masterplan plot", detail: "Office plus residential plus ancillary scheme inside the wider Edinburgh Park delivery pipeline.", typicalSize: "3M to 10M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Edinburgh Park and South Gyle",
      body: 'Edinburgh Park Grade A and South Gyle Crescent secondary office investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier SME office and warehouse via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Hotel and aparthotel through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or value-add Edinburgh Park or South Gyle stock route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing five-year fixes from 2020 and 2021 is the highest-volume single product through 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Edinburgh Park Grade A office, South Gyle secondary office and EH12 hotel",
      body:
        'Edinburgh Park sits inside the strongest single Edinburgh lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Edinburgh Park Grade A office investment at 60 to 65% LTV and 6.0 to 7.0% pa, with their Edinburgh-based commercial teams covering EH12 deals routinely. Bank of Scotland (Lloyds Banking Group Scottish brand), Clydesdale Bank and Virgin Money UK all carry deep Scottish commercial desks active across the EH12 financial-services campus on owner-occupier and investment files using Scottish solicitors on the panel. <strong>Shawbrook</strong> dominates mid-market secondary South Gyle Crescent office investment at 65 to 75% LTV and 7.0 to 8.0% pa. Allica Bank, HTB and YBS Commercial cover SME owner-occupier office and warehouse on the wider South Gyle estate at 70 to 75% LTV. <strong>Cynergy Bank</strong> sits at the top of our shortlist on Edinburgh Park, South Gyle and Edinburgh Airport-adjacent hotel and aparthotel trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on EH12 value-add office repositioning during the works phase. <strong>InterBay Commercial</strong> takes selected mixed-use Parabola masterplan plots. Refinancing on a stabilised Grade A Edinburgh Park asset typically prices 6.5 to 7.5% pa at 60 to 65% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. The security is a standard security registered in the Land Register of Scotland.',
    },
    relatedAssetClasses: ["office", "industrial-warehouse", "leisure-hospitality", "mixed-use", "retail", "holiday-let-portfolio"],
    faqs: [
      {
        question: "What LTV is achievable on an Edinburgh Park Grade A office investment?",
        answer:
          'Up to 65% LTV on long-let multi-tenant Grade A stock. Prime Edinburgh Park investment with strong financial-services covenant (Lloyds, abrdn, Diageo) prices best at 60 to 65% LTV at 6.0 to 7.0% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> or <strong>Santander</strong>. Secondary South Gyle Crescent stock caps at 70 to 75% with <strong>Shawbrook</strong>. The binding constraint is almost always ICR, not headline LTV. The security is a standard security registered in the Land Register of Scotland.',
      },
      {
        question: "Can we get a commercial mortgage on a vacant Edinburgh Park or South Gyle repositioning?",
        answer:
          'Yes, through bridge-to-let during the works phase. The Parabola Edinburgh Park masterplan plot captured by 26/01198/FUL is exactly this profile, a 12 to 24 month bridge funds the works, then terms out to commercial investment mortgage at 60 to 65% LTV with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> or <strong>Santander</strong> once Grade A income is stabilised. <strong>LendInvest</strong> dominates the EH12 bridge market.',
      },
      {
        question: "How does Royal Bank of Scotland and NatWest Group at Gogarburn affect EH12 lending?",
        answer:
          'The RBS Gogarburn headquarters campus (EH12 1HQ, NatWest Group registered office) anchors around 8,000 staff immediately west of Edinburgh Park. That covenant base supports prime office investment yields across EH12 and the hotel, aparthotel and ancillary retail catchment around the Parabola masterplan and South Gyle Crescent. The 25/01145/FUL file is the canonical asset-management profile.',
      },
      {
        question: "Which Edinburgh hotel and aparthotel deals fund best in EH12?",
        answer:
          'Edinburgh Park, South Gyle and Edinburgh Airport-adjacent hotel and aparthotel stock supports both Edinburgh Festival peak and year-round business travel. <strong>Cynergy Bank</strong> sits at the top of our shortlist for trading-business freehold against operator EBITDA at 1.5 to 1.8x, with Bank of Scotland and Clydesdale Bank also active on Scottish-security hospitality deals. Pricing 7.5 to 9.0% pa at 60 to 70% LTV.',
      },
      {
        question: "Does the Scottish short-term lets licensing scheme affect EH12 aparthotel deals?",
        answer:
          'Yes, any short-term let in Edinburgh now requires a licence under the Scottish short-term lets licensing scheme. Edinburgh Airport-adjacent serviced-apartment and aparthotel stock must hold a current licence before lending will complete. Lenders underwrite to existing licence status, refinancing typically follows a clean renewal.',
      },
    ],
  },

  "edinburgh-bioquarter-little-france": {
    slug: "edinburgh-bioquarter-little-france",
    name: "Edinburgh BioQuarter and Little France",
    metaTitle: "Commercial Mortgages Edinburgh BioQuarter and Little France | Life Sciences Broker, EH16",
    metaDescription:
      "Commercial mortgages for Edinburgh BioQuarter and Little France (EH16), Royal Infirmary, MRC Centre for Regenerative Medicine and the BioQuarter Phase 3 life-sciences campus. Wet-lab investment, life-sciences office, medical and aparthotel finance. Scottish-security panel including NatWest, Lloyds, Barclays, Santander, Shawbrook and Cynergy Bank.",
    hero: {
      h1: "Commercial Mortgages Edinburgh BioQuarter and Little France",
      lede:
        "Edinburgh BioQuarter and Little France (EH16) form one of the larger life-sciences clusters in Europe, anchored by Edinburgh Royal Infirmary, the MRC Centre for Regenerative Medicine and the University of Edinburgh Little France campus, with the Royal Hospital for Children and Young People co-located at Little France Crescent. We arrange life-sciences wet-lab and office investment finance, medical and allied health practice freeholds, aparthotel and trading-business mortgages and refinancing across the EH16 BioQuarter and Little France corridor on Scottish standard security.",
    },
    marketContext: {
      h2: "The Edinburgh BioQuarter and Little France commercial property market",
      body: [
        "Edinburgh BioQuarter and Little France sit on the EH16 southern fringe of Edinburgh, anchored by Edinburgh Royal Infirmary on Little France Crescent, the MRC Centre for Regenerative Medicine, the University of Edinburgh Little France campus and the Royal Hospital for Children and Young People. The BioQuarter is delivered as a long-running joint venture between NHS Lothian, the University of Edinburgh, Scottish Enterprise and City of Edinburgh Council, and is one of Europe larger single life-sciences and regenerative-medicine clusters. The Phase 3 expansion adds further wet-lab, office and incubator space adjacent to the existing campus.",
        "The commercial mortgage flow splits four ways. Life-sciences wet-lab and office investment is the headline, with institutional and mid-cap private investors taking long-let space tenanted by university spinouts, biotechs and contract research organisations against the NHS Lothian and University of Edinburgh covenant base. Medical, GP, dental and allied health practice freeholds run the deepest single deal volume in the immediate Little France and Liberton catchment, with practice principals buying out a retiring partner or a previous landlord. Aparthotel and serviced-apartment stock supports the NHS, university and biotech visitor catchment, with stock around the campus subject to the Scottish short-term lets licensing scheme. Owner-occupier office and warehouse runs through the smaller fourth bucket along the wider EH16 fringe.",
        "Pricing on long-let life-sciences and office investment on the BioQuarter currently runs 6.5 to 7.5% pa at 60 to 65% LTV against the strongest covenant pool, with medical and dental practice freeholds at 6.0 to 7.5% pa at 70 to 80% LTV including NHS contract value uplift. Aparthotel trading-business at 7.5 to 9.0% pa at 60 to 70% LTV on operator EBITDA. Registers of Scotland temperature across EH16 sits in the 280,000 to 380,000 pound range on typical Liberton, Gilmerton and Little France stock, supporting strong tenant covenant assumptions on the immediate catchment. LBTT applies at the Scottish non-residential bands on every commercial freehold purchase, with the standard security registered in the Land Register of Scotland.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Edinburgh BioQuarter and Little France (EH16)",
      body:
        'A live City of Edinburgh Council public access file captures the current EH16 life-sciences pipeline. The BioQuarter Phase 3 file (Ref <strong>26/01102/FUL</strong>) covers a major life-sciences, wet-lab and office expansion at the Edinburgh BioQuarter campus on Little France Crescent, the canonical EH16 life-sciences scheme that funds either as development finance during the works phase or, post-stabilisation, as a commercial investment mortgage at 60 to 65% LTV via <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> or <strong>Santander</strong> against long-let life-sciences tenant income with NHS Lothian and University of Edinburgh covenant backing. Listed-building consent does not generally apply on the modern BioQuarter footprint, but conservation-area design controls cover parts of the wider Little France and Liberton frontages. LBTT applies at the Scottish non-residential bands on every commercial freehold purchase. Refinancing maturing five-year fixes on the BioQuarter, Little France Crescent and Old Dalkeith Road stock is the highest-volume single use case in EH16 right now.',
      refs: [
        {
          ref: "26/01102/FUL",
          address: "Edinburgh BioQuarter Phase 3, Little France Crescent, Edinburgh EH16",
          postcode: "EH16",
          proposal: "Edinburgh BioQuarter Phase 3 life-sciences, wet-lab and office expansion adjacent to the Royal Infirmary, MRC Centre for Regenerative Medicine and University of Edinburgh Little France campus, with associated incubator and ancillary commercial accommodation, landscaping, parking and active-travel infrastructure.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Edinburgh BioQuarter and Little France",
      items: [
        { label: "Life-sciences wet-lab and office investment", detail: "BioQuarter long-let multi-tenant wet-lab and office, biotech, CRO and university spinout tenant base.", typicalSize: "1M to 8M pound facility" },
        { label: "Medical and GP practice freehold", detail: "Owner-occupier GP, allied health and medical specialist practice freeholds in the immediate EH16 catchment.", typicalSize: "500,000 to 2M pounds" },
        { label: "Dental practice freehold", detail: "Principal-led dental practice purchase in the Little France and Liberton catchment.", typicalSize: "500,000 to 1.5M pounds" },
        { label: "Aparthotel and serviced apartment", detail: "NHS, university and biotech visitor-catchment aparthotel, subject to the Scottish short-term lets licensing scheme.", typicalSize: "500,000 to 3M pounds" },
        { label: "Owner-occupier office and warehouse", detail: "SMEs buying their EH16 office or B2 unit on the wider Old Dalkeith Road and Gilmerton fringe.", typicalSize: "300,000 to 1.5M pounds" },
        { label: "Incubator and serviced lab", detail: "Smaller-cap life-sciences incubator and serviced laboratory space inside the wider BioQuarter delivery footprint.", typicalSize: "500,000 to 3M pounds" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Edinburgh BioQuarter and Little France",
      body: 'BioQuarter life-sciences wet-lab and office investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier medical, GP and dental practice freeholds via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover and contract value. Aparthotel and serviced apartment through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>, subject to the Scottish short-term lets licensing scheme via <a href="/property-types/holiday-let-portfolio" class="text-secondary font-medium hover:underline">holiday-let portfolio</a>. Vacant or value-add EH16 stock route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing five-year fixes from 2020 and 2021 is the highest-volume single product through 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for BioQuarter life sciences, EH16 medical practice and Little France aparthotel",
      body:
        'The BioQuarter sits inside the strongest Edinburgh investment-grade lender pool. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on long-let BioQuarter life-sciences wet-lab and office investment at 60 to 65% LTV and 6.5 to 7.5% pa, with their Edinburgh-based commercial teams routinely covering EH16 deals against the NHS Lothian and University of Edinburgh covenant backing. Bank of Scotland (Lloyds Banking Group Scottish brand), Clydesdale Bank and Virgin Money UK all carry deep Scottish commercial desks active across the EH16 life-sciences campus and the wider Little France and Liberton catchment using Scottish solicitors on the panel. <strong>Shawbrook</strong>, Allica Bank, Cambridge & Counties and HTB all compete keenly on EH16 medical, GP, dental and allied health practice freeholds at 70 to 80% LTV and 6.0 to 7.5% pa, including NHS contract value uplift on dental files. <strong>Cynergy Bank</strong> sits at the top of our shortlist on BioQuarter and Little France aparthotel and serviced-apartment trading-business freehold against operator EBITDA at 1.5 to 1.8x. <strong>LendInvest</strong> covers bridge-to-let on EH16 value-add repositioning during the works phase, including the kind of profile captured by the 26/01102/FUL BioQuarter Phase 3 application during construction. <strong>InterBay Commercial</strong> takes selected mixed-use and ancillary stock on the BioQuarter fringe. Refinancing on a stabilised BioQuarter life-sciences asset typically prices 7.0 to 8.0% pa at 60 to 65% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. The security is a standard security registered in the Land Register of Scotland.',
    },
    relatedAssetClasses: ["office", "healthcare-care-home", "leisure-hospitality", "industrial-warehouse", "mixed-use", "holiday-let-portfolio"],
    faqs: [
      {
        question: "What LTV is achievable on a BioQuarter life-sciences wet-lab investment?",
        answer:
          'Up to 65% LTV on long-let multi-tenant wet-lab and office stock against the NHS Lothian and University of Edinburgh covenant base. Prime BioQuarter investment prices at 60 to 65% LTV at 6.5 to 7.5% pa with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> or <strong>Santander</strong>. <strong>Shawbrook</strong> covers selected mid-cap deals. The binding constraint is almost always ICR, not headline LTV. The security is a standard security registered in the Land Register of Scotland.',
      },
      {
        question: "Best lender for an EH16 dental or medical practice freehold?",
        answer:
          '<strong>Shawbrook</strong>, Allica Bank, Cambridge & Counties and HTB all run dedicated principal-led dental and medical programmes that take NHS contract value as additional security. LTV to 80% on the bricks plus contract value at 6.0 to 7.5% pa. Bank of Scotland and Clydesdale Bank also active on Scottish-security owner-occupier deals. LBTT applies at the Scottish non-residential bands on the freehold purchase.',
      },
      {
        question: "Can we fund the BioQuarter Phase 3 expansion captured by 26/01102/FUL?",
        answer:
          'Yes, BioQuarter Phase 3 funds as development finance during the works phase, with bridge-to-let from <strong>LendInvest</strong> common on private-investor plots, then terms out to commercial investment mortgage at 60 to 65% LTV with <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> or <strong>Santander</strong> once life-sciences income is stabilised. Bank of Scotland and Clydesdale Bank are also active on Scottish-security investment files.',
      },
      {
        question: "Does the Scottish short-term lets licensing scheme affect EH16 aparthotel deals?",
        answer:
          'Yes, every short-term let in Edinburgh requires a licence under the Scottish short-term lets licensing scheme operated by City of Edinburgh Council. BioQuarter and Little France aparthotel stock serving NHS, university and biotech visitor demand must hold a current licence before lending will complete. Lenders underwrite to existing licence status, refinancing typically follows a clean renewal. <strong>Cynergy Bank</strong> sits at the top of our shortlist on aparthotel trading-business.',
      },
      {
        question: "How does NHS Lothian and University of Edinburgh affect EH16 lending?",
        answer:
          'Edinburgh Royal Infirmary at Little France Crescent, the MRC Centre for Regenerative Medicine and the University of Edinburgh Little France campus together anchor the EH16 covenant base, plus the Royal Hospital for Children and Young People co-located on the same site. That underwrites the life-sciences tenant covenant pool, the medical, GP and dental practice freehold catchment, the aparthotel visitor demand and the ancillary owner-occupier office and warehouse activity across the wider Little France, Liberton and Old Dalkeith Road frontage.',
      },
    ],
  },
};

export function getAreaDetail(slug: string): AreaDetail | null {
  return areaDetails[slug] ?? null;
}
