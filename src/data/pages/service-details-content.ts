/**
 * Per-service deep-dive content, Commercial Mortgages Edinburgh.
 *
 * Eight services covering the full mainstream commercial mortgage product set.
 *
 * Editorial discipline (Bradley Benner methodology):
 *   - Each page uses DIFFERENT entity variants across slug / metaTitle / H1 /
 *     whatItIs.h2 / howItWorks.h2 / whoItsFor.h2 / localAngle.h2 / FAQ Qs.
 *   - No phrase repeats verbatim across the heading tree.
 *
 * Required entity mentions on every page:
 *   - Financial Conduct Authority (clarifying what is OUTSIDE the regulated perimeter, never claiming authorisation)
 *   - LBTT (Land and Buildings Transaction Tax, Scottish equivalent of SDLT)
 *   - limited companies / limited company
 *   - refinancing / refinance
 *   - loan-to-value (LTV)
 *   - interest rate
 *   - repayment
 *   - residential mortgage (in contrast, what we do NOT do)
 *   - standard security (Scottish legal instrument, technical term)
 *   - Registers of Scotland (RoS)
 *
 * Voice rules:
 *   - "we" not "I"
 *   - NO em dashes (Edinburgh policy)
 *   - NOT FCA-authorised
 *   - rates 6.0 to 9.0% pa
 *   - ONLY 8 lenders bolded: Shawbrook, InterBay Commercial, LendInvest, Cynergy Bank,
 *     Lloyds, NatWest, Barclays, Santander
 *   - Clydesdale Bank / Virgin Money UK strong on Scotland, emphasised but NOT bolded
 *   - Bank of Scotland, Allica Bank, HTB, Aldermore, Paragon, Together, Foundation
 *     Home Loans, OakNorth named but NOT bolded
 *
 * Scottish legal terminology:
 *   - "standard security" interchangeable with "commercial mortgage" where the technical
 *     legal term matters
 *   - "Registers of Scotland" NOT "HM Land Registry"
 *   - "LBTT" NOT "SDLT" / "Stamp Duty"
 *   - "Scottish solicitor", "missives", "concluded" in conveyancing context
 *   - "Sheriff Court" NOT "County Court" for enforcement
 *   - "Calling-up notice" NOT "demand letter" in default scenarios
 *
 * Slugs match src/lib/constants.ts SERVICE_LINKS.
 *
 */

export interface ServiceFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface ServiceDetail {
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
  whatItIs: { h2: string; body: string[] }; // body: paragraphs, HTML allowed
  howItWorks: { h2: string; steps: Array<{ label: string; detail: string }> };
  whoItsFor: { h2: string; items: string[] };
  localAngle: { h2: string; body: string };
  faqs: ServiceFaq[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "owner-occupier-commercial-mortgage": {
    slug: "owner-occupier-commercial-mortgage",
    name: "Owner-Occupier Commercial Mortgage",
    metaTitle: "Owner-Occupier Commercial Mortgage Edinburgh | Specialist Broker",
    metaDescription:
      "Owner-occupied commercial mortgages in Edinburgh. Up to 75% LTV, EBITDA cover at 1.3 to 1.5x, interest rates from 6.0% pa, 5 to 25 year repayment terms. Shawbrook, Lloyds, NatWest, Barclays, Santander. Scottish standard security drafted by Scottish solicitor. Indicative terms in 48 hours.",
    hero: {
      eyebrow: "Up to 75% LTV, EBITDA-driven",
      h1: "Owner-Occupier Commercial Mortgage Edinburgh",
      lede:
        "Long-term debt funding the purchase of the property your business trades from, secured by a Scottish standard security registered at Registers of Scotland. Up to 75% loan-to-value. EBITDA cover at 1.3 to 1.5x. Interest rates 6.0 to 7.5% pa for strong covenants. 5 to 25 year repayment terms. Active across the Morningside dental and medical freehold cluster (EH10), Charlotte Square professional services (EH2/EH3), Stockbridge SME owner-occupier stock (EH3/EH4), and the Bruntsfield professional firm belt (EH10).",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Rate", value: "From 6.0% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Facility", value: "£200K to £5M" },
      ],
    },
    whatItIs: {
      h2: "What is an owner-occupier mortgage and how does it differ from investment?",
      body: [
        'An owner-occupier commercial mortgage is long-term secured debt funding the purchase of the property your <strong>business trades from</strong>: your Morningside dental practice freehold on Bruntsfield Place or Morningside Road, your Charlotte Square or George Street professional services townhouse office (EH2), your Stockbridge independent retail or veterinary surgery freehold (EH3/EH4), or your Bruntsfield accountancy or legal practice premises (EH10). In Scotland the lender takes a <strong>first-ranking standard security</strong> over the building (the Scottish equivalent of an English first legal charge, registered in the <strong>Land Register of Scotland</strong> operated by Registers of Scotland under the Conveyancing and Feudal Reform (Scotland) Act 1970); you fund a deposit (typically 25 to 30%); the facility is amortised over 15 to 25 years on monthly capital-and-interest repayments. Most owner-occupier deals in Edinburgh are taken out by a <strong>limited company</strong> trading entity with a personal guarantee from the directors, though sole traders, partnerships and LLPs are equally accommodated.',
        'The lending test is fundamentally different from an investment mortgage. Where investment lenders test rent against interest cost (ICR), owner-occupier lenders test <strong>EBITDA cover</strong>: trading profit (earnings before interest, tax, depreciation and amortisation) measured against the mortgage payment, with a typical comfort threshold of <strong>1.3 to 1.5x</strong>. Two years of clean filed accounts is the standard minimum, though specialist desks flex this for established sectors (dental, GP, pharmacy, veterinary) on 12 to 18 months trading.',
        'It is also different from a <strong>residential mortgage</strong>, and that distinction matters legally. Owner-occupier commercial lending in Scotland falls largely outside FCA-regulated mortgage rules, because the borrower is a business buying business premises (not an individual buying a home). The exception: where a sole trader uses the property partly as a residence, the deal can fall into FCA-regulated territory; we flag that at outset. For limited-company borrowers buying commercial stock, the deal is unregulated commercial lending; the security document is a standard security in Scots law, not an English mortgage.',
        'In Edinburgh the typical owner-occupier facility size is <strong>£300K to £3M</strong>, with the bulk of volume in the £500K to £1.5M bracket reflecting per-square-foot values across EH2/EH3 New Town professional stock, EH10 Morningside and Bruntsfield medical and dental stock, and EH3/EH4 Stockbridge SME freeholds. LTVs of 70 to 75% are routine for established businesses, but Edinburgh valuers can trend conservative on listed-building Georgian townhouse stock in the World Heritage core where alteration scope is constrained by Historic Environment Scotland and City of Edinburgh Council listed-building consent. Interest rates currently <strong>6.0 to 7.5% pa</strong> for strong covenants, stretching to 9.0% on tighter cases. Term length is the most useful affordability lever; extending repayment from 15 to 20 years often clears the EBITDA test where rate alone will not. <strong>LBTT (Land and Buildings Transaction Tax)</strong>, administered by Revenue Scotland, replaces Stamp Duty Land Tax on commercial purchases here: non-residential bands run 0% to £150K, 1% £150K to £250K, and 5% on the slice above £250K (different thresholds and middle band rate to English SDLT, which is why English advisers occasionally miscost Scottish deals at the front end). We factor it into the deposit-and-fees model before submission. <em>Indicative case seed:</em> a Morningside dental principal buying a freehold practice on Bruntsfield Place at £1.1M, EBITDA cover comfortably above 1.5x on NHS Scotland item-of-service plus private fee income, funded at 75% LTV (£825K facility) on a 15-year repayment at around 6.8% pa, with the standard security drafted by a Scottish solicitor on the lender\'s panel and concluded missives recorded at Registers of Scotland.',
      ],
    },
    howItWorks: {
      h2: "Lender appetite and pricing for owner-occupier deals across Edinburgh",
      steps: [
        { label: "1. Initial appraisal", detail: "Send the property details, last two years of accounts and current management figures. We assess affordability, sector appetite, likely loan-to-value and which lender desks engage on Scottish security." },
        { label: "2. Indicative terms in 48 hours", detail: "Three to five lender quotes covering interest rate, LTV, term, fees and conditions, including which English-headquartered desks lend in Scotland and which route to a Scottish-active sister lender. You pick the preferred route before any valuation cost lands." },
        { label: "3. Application packaging", detail: "Full credit pack: filed accounts, business plan, property details, deposit proof, Scottish solicitor identified. A clean pack speeds credit committee approval." },
        { label: "4. RICS Red Book valuation", detail: "Critical-path item, typically 2 to 3 weeks. The lender instructs from a Scottish-active RICS panel; valuation comments on bricks-and-mortar value and any sector overlay (dental, GP, veterinary, pharmacy). Listed-building Georgian stock in the New Town World Heritage core adds review time." },
        { label: "5. Credit approval", detail: "Most well-presented owner-occupier cases approve within 1 to 2 weeks of valuation. Clean covenant, clean property, clean numbers, minimum friction." },
        { label: "6. Conclusion of missives, drawdown and LBTT", detail: "Scottish conveyancing runs through concluded missives between solicitors (binding earlier than English exchange of contracts), then registration of the standard security at Registers of Scotland alongside disposition of the property. LBTT paid by the buyer at completion. 3 to 5 weeks typical for the legal phase." },
      ],
    },
    whoItsFor: {
      h2: "Sectors where Edinburgh owner-occupier lending is deepest",
      items: [
        "Morningside and Bruntsfield dental practice principals buying their EH10 freehold within the Bruntsfield Place / Morningside Road professional belt",
        "GP partnerships, veterinary surgeries and private medical operators acquiring premises across Morningside (EH10), Stockbridge (EH3/EH4) and the wider south-west Edinburgh medical professional spine",
        "Charlotte Square and George Street professional services firms (legal, accountancy, asset management, family office) buying Georgian townhouse office freeholds in EH2/EH3",
        "Bruntsfield professional firms (legal, accountancy, IFA, consultancy) acquiring upper-floor and street-level office stock along Bruntsfield Place",
        "Stockbridge SME owner-occupier buyers across independent retail, F&B, design studios and creative-services freehold stock (EH3/EH4)",
        "Pharmacy operators acquiring trading premises across EH9 Marchmont, EH10 Morningside, EH3 Stockbridge and the suburban EH-postcode high streets",
        "Edinburgh BioQuarter-aligned life-sciences and lab-services SMEs acquiring smaller freehold or long-leasehold premises in EH16 Little France and the Roslin Innovation Centre catchment",
        "Heritage retail and F&B operators acquiring their trading unit along the Royal Mile, Grassmarket, Cowgate and West Bow (EH1) within the Old Town World Heritage core",
      ],
    },
    localAngle: {
      h2: "Why Edinburgh owner-occupier capacity is unusually broad",
      body: 'Edinburgh is a city of around 530,000 anchored by an unusually deep professional-services labour shed, the second-largest financial centre in the UK after the City of London. <strong>NatWest Group (RBS)</strong> at Gogarburn, Lloyds Banking Group on Lothian Road, abrdn around St Andrew Square, Sky, Tesco Bank, Diageo, the Scottish Government (St Andrew\'s House, Victoria Quay), NHS Lothian, City of Edinburgh Council and the combined c. 75,000-student footprint across the University of Edinburgh (around 45,000), Heriot-Watt (around 10,000) and Edinburgh Napier (around 20,000) drive defensible owner-occupier purchases across healthcare, professional services and small-format retail. The <strong>Morningside dental and medical cluster</strong> on Bruntsfield Place and Morningside Road in EH10 is the deepest healthcare owner-occupier vein we see, with principal purchases running across the £600K to £1.6M bracket, supported by the suburban professional middle-class catchment from EH9 through EH10 to EH13. <a href="/areas/" class="text-secondary font-medium hover:underline">Charlotte Square and the wider New Town (EH2/EH3) professional services stock</a> generates a steady flow of Georgian townhouse office freehold acquisitions for legal, accountancy, asset management and family-office firms, with stock from £900K through to £4M+. <a href="/areas/" class="text-secondary font-medium hover:underline">Stockbridge in EH3/EH4</a> supports independent retail, design studio and veterinary surgery owner-occupier flow, and Bruntsfield (EH10) generates upper-floor and street-level professional services purchases. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong>, <strong>InterBay Commercial</strong> and <strong>LendInvest</strong> all run active Scottish programmes, routing files to Scottish solicitors on their panel. Clydesdale Bank Commercial / Virgin Money UK is particularly active across Edinburgh SME and mid-market owner-occupier cases given the bank\'s Glasgow headquarters and dense Scottish presence; Bank of Scotland Commercial (the Scottish brand of Lloyds Banking Group) is retained by many Scottish covenants. Allica Bank, HTB, Aldermore, OakNorth and Foundation Home Loans engage on selected files. The clearing banks <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all field Edinburgh-active commercial desks covering owner-occupier cases up to around £5M, with NatWest naturally embedded given the registered office sits in Edinburgh. Refinancing volume is particularly strong on assets bought 2019 to 2021 where current valuations support a meaningfully better LTV than the original draw.',
    },
    faqs: [
      {
        question: "How much can I borrow against my Edinburgh business premises?",
        answer:
          'Typically up to <strong>75% loan-to-value</strong>, capped by the <strong>EBITDA cover test</strong> (1.3 to 1.5x). For a £1.2M Morningside dental freehold at 75% LTV that is a £900K facility; you need EBITDA covering the mortgage repayment by around 1.4x. Edinburgh valuers can trend conservative on listed-building Georgian townhouse stock in the New Town and Old Town World Heritage core where alteration scope is constrained, so the headline LTV is sometimes capped by the valuer rather than by the cover test. Use our <a href="/calculator">commercial mortgage calculator</a> to model scenarios across rate and term.',
      },
      {
        question: "What deposit will I need?",
        answer:
          'Typically <strong>25 to 30%</strong>, normally funded from accumulated retained profit inside the limited company or from a director loan. Some specialist desks consider 80% LTV (20% deposit) for very strong covenants in defensive sectors (dental, GP, pharmacy, veterinary, regulated professional services), but the interest rate steps up to compensate. Remember the deposit is separate from <strong>LBTT</strong>, valuation, Scottish solicitor fees and any lender arrangement fee, all of which must be funded out of cash at completion.',
      },
      {
        question: "Can I get an owner-occupier facility with limited trading history?",
        answer:
          'Two years of clean filed accounts is the comfortable minimum. <strong>12 to 18 months</strong> works in established sectors (dental, GP, pharmacy, veterinary, regulated professions) where the qualification or contract base itself underwrites the cashflow. Pre-trade or first-year buys are harder, usually need a higher deposit and a stronger personal guarantee.',
      },
      {
        question: "Is this an FCA-regulated mortgage?",
        answer:
          'No. Owner-occupier commercial mortgages are unregulated and fall outside the Financial Conduct Authority\'s regulated mortgage perimeter; a limited company buying commercial premises in Scotland is an unregulated commercial loan, secured by standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, not a residential mortgage. We are <strong>not authorised by the FCA</strong> because the products we arrange are unregulated. The exception: where a sole trader will personally occupy part of the premises as a residence, the deal can fall into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "How does LBTT differ from English SDLT on the purchase?",
        answer:
          'Scottish commercial property is taxed under <strong>LBTT (Land and Buildings Transaction Tax)</strong>, administered by Revenue Scotland, not SDLT. Non-residential rates run 0% on the slice to £150K, 1% £150K to £250K, and 5% above £250K (the middle band rate differs from English SDLT, where it is 2%). On a £1.2M Edinburgh business premises the LBTT bill is around £49,000, marginally cheaper than English SDLT at the same price point. We model it into your deposit-and-fees position so there are no surprises at conclusion of missives.',
      },
      {
        question: "What repayment terms are available?",
        answer:
          'Up to 25 years. Most owner-occupier deals run on 15 to 20 year repayment schedules. Longer terms ease monthly affordability but increase total interest paid; we model both before recommending. Interest-only is occasionally available on the early years of larger structured deals; standard product is full capital-and-interest amortisation.',
      },
    ],
  },

  "commercial-investment-mortgage": {
    slug: "commercial-investment-mortgage",
    name: "Commercial Investment Mortgage",
    metaTitle: "Commercial Investment Mortgage Edinburgh | Specialist Broker",
    metaDescription:
      "Commercial investment mortgages in Edinburgh for let property held for income. Up to 75% LTV, ICR 140 to 160%, interest rates from 6.5% pa, 5 to 25 year repayment terms. Limited company SPV structures. NatWest, Lloyds, Shawbrook, InterBay Commercial, LendInvest. Standard security registered at Registers of Scotland.",
    hero: {
      eyebrow: "60 to 75% LTV, ICR-led",
      h1: "Commercial Investment Mortgage Edinburgh",
      lede:
        "Long-term mortgages secured against income-producing commercial property: Edinburgh Park Parabola Grade A office investment (EH12), St James Quarter retail and leisure lots (EH1), Charlotte Square premium office investment (EH2), Quartermile mixed-use office floorplates (EH3), and Ocean Terminal retail and leisure at Leith (EH6). Loan-to-value 60 to 75%, interest cover ratio 140 to 160% stressed, interest rates 6.5 to 8.5% pa, 5 to 25 year repayment terms. Limited company SPV, LLP and individual structures all supported; security taken as Scottish standard security at Registers of Scotland.",
      metrics: [
        { label: "LTV", value: "60 to 75%" },
        { label: "Rate", value: "From 6.5% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "ICR", value: "140 to 160%" },
      ],
    },
    whatItIs: {
      h2: "What is an investment commercial mortgage and how is it underwritten?",
      body: [
        'A commercial investment mortgage is long-term debt secured against a <strong>let commercial property</strong> held as an income-producing asset. The borrower is typically a <strong>limited company</strong> SPV (the dominant structure for new acquisitions across the Edinburgh market), an LLP, or an individual investor; the security is the property, registered as a standard security in the Land Register of Scotland; the affordability test is rent against the cost of borrowing. Unlike a residential buy-to-let mortgage, which tests personal income and rental yield against ASTs, commercial investment underwrites against business tenancies (in Scotland, typically full repairing and insuring leases, similar in commercial substance to English FRI leases though Scots commercial leasing law is materially different in technical drafting).',
        'The headline underwriting metric is the <strong>interest cover ratio (ICR)</strong>: gross rent divided by interest cost, typically required at <strong>140 to 160%</strong> stressed at a notional rate <strong>1 to 2% above pay rate</strong>. Some lenders also test <strong>DSCR (debt-service coverage ratio)</strong> on a fully-amortising basis at 130 to 145% cover. Loan-to-value commonly stretches to <strong>60 to 75%</strong> for income-producing Edinburgh assets with a clear lease; lenders generally price Edinburgh prime office (Charlotte Square, Edinburgh Park Parabola, the Exchange district, Quartermile) and prime retail (St James Quarter, Multrees Walk, George Street) more keenly than secondary mixed-use stock along secondary Leith and Tollcross parades, where the cycle has been more volatile.',
        'Tenant covenant and lease length are the second-order drivers, and they matter as much as LTV. A 10-year unbroken lease to an investment-grade financial services or asset management tenant on Charlotte Square or at Edinburgh Park prices materially better than three two-year leases to local independents on a secondary Leith Walk or Gorgie Road parade. Vacant or part-let assets fund through specialist desks at tighter LTVs and wider interest rates, typically via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">commercial bridge-to-let</a> with an agreed term-out exit. Edinburgh deal flow is biased toward the Edinburgh Park / South Gyle office spine (Parabola masterplan tenants including Lloyds Banking Group, abrdn and Diageo), the Charlotte Square and George Street New Town professional and serviced-office stock, St James Quarter (Nuveen\'s £1bn flagship), Quartermile mixed-use, and the Leith F&B and Ocean Terminal regeneration corridor. Industrial investment runs deep through Sighthill, South Gyle and the wider EH11/EH12 belt.',
        'Investment commercial lending sits outside FCA regulation in almost all cases: it is a business borrowing against a business asset, not a residential mortgage. <strong>LBTT</strong> applies on purchase at the standard non-residential rates (0% to £150K, 1% £150K to £250K, 5% above £250K). For limited company SPV structures we factor LBTT, valuation, Scottish solicitor legal, RoS registration dues and arrangement fees into the all-in deposit requirement before submission. <em>Indicative case seed:</em> a £3.4M let Edinburgh Park Parabola Grade A office investment in EH12, full repairing and insuring lease, 9 years unbroken, strong-covenant financial services tenant, priced at 65% LTV (£2.21M facility) on a 5-year fix at around 6.9% pa with ICR comfortably above 150%, standard security registered at Registers of Scotland and the lease registered alongside.',
      ],
    },
    howItWorks: {
      h2: "Pricing and lender appetite across the Edinburgh investment market",
      steps: [
        { label: "1. Asset and rent appraisal", detail: "We review the property, the lease, the tenant covenant and the rent roll. ICR and DSCR modelled at three lender stress rates so you see where each desk will land." },
        { label: "2. Indicative terms in 48 hours", detail: "Three to five lender quotes covering interest rate, LTV, term, fees, ICR comfort and conditions, including which English desks will take Scottish security and which route to a Scottish sister lender. You pick the preferred route." },
        { label: "3. Credit pack", detail: "Property file, Scottish-format lease, tenant accounts (where covenant matters), borrower SPV pack, deposit proof. Sent to chosen lender." },
        { label: "4. RICS Red Book valuation", detail: "Includes market rent assessment and estimated rental value (ERV), both important to the underwrite. Typically 2 to 3 weeks; Old Town World Heritage listed-building instructions and Quartermile complex mixed-use cases take longer." },
        { label: "5. Credit approval and Scottish legal pack", detail: "Approval typically 1 to 3 weeks post-valuation. Scottish solicitor instructed by the lender; missives exchanged and concluded between solicitors (binding earlier than English exchange). Legals 3 to 5 weeks (longer if leasehold or complex tenant pack)." },
        { label: "6. Drawdown and LBTT", detail: "Funds drawn at completion. LBTT paid by buyer at conclusion of missives. Standard security registered at Registers of Scotland alongside disposition. ICR sometimes monitored through life of facility on larger or multi-let assets." },
      ],
    },
    whoItsFor: {
      h2: "Investor profiles we routinely place across Edinburgh",
      items: [
        "Edinburgh Park Parabola office investment buyers across EH12 Grade A multi-let stock with financial services and life-sciences covenant",
        "Charlotte Square premium office investors holding Georgian townhouse FRI-style stock let to legal, accountancy, asset management and family office tenants (EH2/EH3)",
        "St James Quarter retail and leisure investors picking up sub-lots within Nuveen\'s flagship north-end-of-Princes-Street scheme",
        "Quartermile (EH3) mixed-use office floorplate investors at the former Royal Infirmary site, with University of Edinburgh-adjacent tenant covenants",
        "Ocean Terminal and Leith F&B investors riding the Trams to Newhaven regeneration corridor (EH6) with mixed retail, F&B and leisure tenancies",
        "Multrees Walk and George Street premium retail investors with luxury and national-brand tenant covenants (EH1/EH2)",
        "Limited company SPV structures for new acquisitions; individual investor purchases at the smaller end",
        "Refinancing existing investment portfolios off maturing 5-year fixes from 2019 to 2021 vintage",
      ],
    },
    localAngle: {
      h2: "Where Edinburgh commercial investment volume actually sits",
      body: 'Edinburgh runs a distinctively professional-services-led commercial investment market that reads quite differently to Glasgow across the M8: more financial services head-office stock, more premium retail, more heritage-constrained World Heritage core, less industrial. The named investment veins split across <a href="/areas/" class="text-secondary font-medium hover:underline">Edinburgh Park Parabola Grade A office stock in EH12</a> (anchored by Lloyds Banking Group, abrdn and Diageo as named tenants, adjacent to Edinburgh Gateway station on the tram line), <a href="/areas/" class="text-secondary font-medium hover:underline">St James Quarter retail and leisure (Nuveen flagship, EH1) plus Multrees Walk luxury (Harvey Nichols, Louis Vuitton, Mulberry)</a>, <a href="/areas/" class="text-secondary font-medium hover:underline">Charlotte Square premium office (EH2) and the wider New Town professional spine</a>, Quartermile mixed-use at the former Royal Infirmary in EH3, and the Ocean Terminal and Leith F&amp;B corridor along the Trams to Newhaven extension in EH6. The £400K to £2M bracket is the deep volume zone for smaller landlords: parade retail, mixed-use blocks and serviced-office lots across Leith Walk (EH6), George Street, Hanover Street, Frederick Street (EH2), Stockbridge (EH3/EH4) and Bruntsfield (EH10). The £3M to £20M+ bracket is where the Edinburgh Park, St James Quarter, Charlotte Square and Quartermile flow sits. Industrial investment runs through Sighthill, South Gyle and the wider EH11/EH12 belt; volume is steadier and shallower than the office and retail spines. Interest rates currently <strong>6.5 to 8.5% pa</strong> depending on covenant and LTV; LTVs typically capped at <strong>60 to 75%</strong>. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, <strong>LendInvest</strong>, <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on Edinburgh <a href="/property-types/" class="text-secondary font-medium hover:underline">commercial investment cases</a>; Clydesdale Bank / Virgin Money UK is particularly active across Scottish investment files; Bank of Scotland Commercial holds substantial Edinburgh investment business; Allica Bank, HTB, Aldermore, Paragon and OakNorth engage selectively across Scotland. Several English-headquartered challenger desks lend in Scotland by routing the file to Scottish solicitors on their panel; a small minority do not lend north of the border at all, and we flag that at indicative terms stage.',
    },
    faqs: [
      {
        question: "What ICR do Edinburgh investment lenders typically require?",
        answer:
          'Typically <strong>140 to 160%</strong>, stressed at a notional interest rate 1 to 2% above pay rate. Strong-covenant single-let assets price at the lower-cover end (140%); multi-let or short-lease assets at the higher end (155 to 160%). Some specialist desks will flex to 130% for prime Charlotte Square or Edinburgh Park stock with an unbroken 10+ year lease to an investment-grade tenant.',
      },
      {
        question: "Can I fund a vacant commercial investment asset in Edinburgh?",
        answer:
          'Yes, but on tighter terms. <strong>Commercial bridging</strong> via <strong>LendInvest</strong>, <strong>Shawbrook</strong> or other specialist desks typically funds the vacant acquisition plus refurb, with an agreed exit onto a term mortgage once let. See our <a href="/services/commercial-bridge-to-let">commercial bridge-to-let</a> page. Direct-from-vacant term lending is rare and prices materially wider than fully-let.',
      },
      {
        question: "What interest rate should I expect on an Edinburgh commercial investment mortgage?",
        answer:
          'Currently <strong>6.5 to 8.5% pa</strong>. The drivers: covenant strength, lease length, loan-to-value, asset class. A 10-year FRI-style lease to a national covenant at Edinburgh Park at 60% LTV prices best (around 7.0%); a multi-let secondary Leith Walk or Gorgie Road retail asset at 75% LTV prices wider (around 8.5%). 5-year fixes typically price 0.25 to 0.50% above 2-year fixes.',
      },
      {
        question: "Do you handle limited company SPV structures with Scottish security?",
        answer:
          'Yes, limited company SPV holding is the standard structure for commercial investment across Edinburgh. The SPV can be incorporated in England and Wales or as a Scottish limited company; either way the security is a standard security registered at Registers of Scotland over the Scottish property. We work with both new SPVs (with personal guarantee from the principal) and existing trading limited companies. Individual investor structures and LLPs are equally accommodated.',
      },
      {
        question: "How does commercial investment differ from a residential buy-to-let mortgage?",
        answer:
          'Residential buy-to-let covers single houses or flats let to tenants on Scottish Private Residential Tenancies (PRTs) and is FCA-regulated where the landlord is an individual or a consumer buy-to-let borrower. Commercial investment covers business tenancies on FRI-style leases (offices, retail, industrial, mixed-use) and is unregulated in almost all cases. Underwriting is fundamentally different: residential leans on personal income; commercial weighs tenant covenant, lease length and ICR or DSCR cover. Do not apply for a buy-to-let on a shop-with-flat-above: it will decline.',
      },
      {
        question: "What about LBTT on a commercial investment purchase?",
        answer:
          'Standard commercial LBTT: 0% on the slice to £150K, 1% £150K to £250K, 5% above £250K. On a £1.8M let commercial asset the LBTT bill is around £78,500. The 6% Additional Dwelling Supplement (the Scottish equivalent of the English 3% surcharge) does not apply to non-residential property. We factor LBTT into the all-in deposit-and-fees model.',
      },
    ],
  },

  "semi-commercial-mortgage": {
    slug: "semi-commercial-mortgage",
    name: "Semi-Commercial Mortgage",
    metaTitle: "Semi-Commercial Mortgage Edinburgh | Specialist Broker",
    metaDescription:
      "Mixed-use shop-with-flat finance for Edinburgh parades. Up to 75% LTV, blended cover around 145%, interest rates 6.5 to 8.5% pa, limited company SPV supported. Active on Leith Walk, Tollcross, Marchmont, Stockbridge and Portobello High Street. InterBay Commercial, Shawbrook, LendInvest.",
    hero: {
      eyebrow: "Up to 75% LTV, Blended cover",
      h1: "Semi-Commercial Mortgage Edinburgh",
      lede:
        "Single-facility finance for property where the residential element is at least 40% of total floorspace: the shop-with-flat archetype that defines Edinburgh\'s tenement parades and 4-in-a-block tenement reshuffles. Up to 75% loan-to-value, blended cover around 145%, interest rates 6.5 to 8.5% pa, 5 to 25 year repayment terms. Standard security taken at Registers of Scotland. Active across Leith Walk (EH6), Tollcross (EH3), Marchmont (EH9), Stockbridge (EH3/EH4) and Portobello High Street (EH15).",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Rate", value: "From 6.5% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Blended cover", value: "~145%" },
      ],
    },
    whatItIs: {
      h2: "Defining mixed-use property: when does semi-commercial pricing apply?",
      body: [
        'Semi-commercial finance is a single facility funding mixed-use property, typically a <strong>commercial unit on the ground floor</strong> with one or more <strong>self-contained residential flats above</strong>: the classic Edinburgh tenement parade format that runs the length of Leith Walk, the Tollcross and Fountainbridge corridor, Marchmont, Bruntsfield Place, Stockbridge and Portobello High Street. Where the residential element is at least 40% of total floorspace, semi-commercial pricing applies (instead of pure commercial investment pricing). Where residential is below 40%, lenders treat it as commercial investment and price accordingly.',
        'The lending test combines the commercial rent and the residential Scottish Private Residential Tenancy (PRT) income on a <strong>blended basis</strong>, with a typical cover requirement around <strong>145%</strong>. Lenders take comfort from the residential security: a flat above is easier to re-let than a vacant retail unit if the commercial side falls vacant, particularly in Edinburgh where residential rental demand from the combined 75,000-student footprint plus financial services workforce keeps PRT void periods low. Semi-commercial routinely prices 50 to 100bps inside pure commercial investment. Loan-to-value to 75% is achievable on standard Edinburgh archetypes via specialist desks; valuers can trend conservative on the commercial slice on secondary Leith Walk and outer-Gorgie parades where retail rents have been volatile, which sometimes caps the achievable LTV below the headline.',
        'Specialist lenders dominate this market. <strong>InterBay Commercial</strong> (OSB Group) and <strong>Shawbrook</strong> are the two most active named desks; <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> also run active programmes for Edinburgh semi-commercial deals between £250K and £2.5M. Clydesdale Bank / Virgin Money UK is notably engaged on Scottish semi-commercial tenement stock given the bank\'s deep Scottish footprint; Allica Bank, HTB, Aldermore, Foundation Home Loans and Together engage actively across Scotland on selected files. Limited company SPV structures are standard; individual investor and LLP variations are equally accommodated. The security is a <strong>single standard security</strong> over the whole property at Registers of Scotland, not separate residential and commercial charges.',
        'Regulation matters here. Most semi-commercial lending is unregulated commercial: the borrower is a limited company or investor, the residential flats are let on Scottish PRTs to third parties. The exception: where the borrower (or an immediate family member) will personally occupy one of the flats, the deal can fall into FCA-regulated mortgage rules and routes to a regulated commercial lender. <strong>LBTT</strong> follows non-residential rates on the whole property where commercial use is genuinely incidental, which is materially cheaper than residential LBTT (with the 6% Additional Dwelling Supplement) and is part of why investors favour the structure. <em>Indicative case seed:</em> a Leith Walk tenement parade unit with three flats above at £680K, blended rent £46K pa, structured at 70% LTV (£476K facility) with InterBay Commercial or Shawbrook at around 7.0% pa, standard security registered at Registers of Scotland.',
      ],
    },
    howItWorks: {
      h2: "Underwriting steps for an Edinburgh shop-and-flats deal",
      steps: [
        { label: "1. Tenancy and split review", detail: "We check residential and commercial floorspace split, leases on the commercial side, Scottish PRTs on the residential side, tenant covenant on each." },
        { label: "2. Indicative terms in 48 hours", detail: "Three to four specialist semi-commercial lenders quoted: interest rate, loan-to-value, term, fees. We flag which English-headquartered desks lend in Scotland." },
        { label: "3. Credit pack", detail: "Lease pack, PRT pack, property file, borrower SPV (or individual) pack. InterBay Commercial and Shawbrook want clean tenancy evidence and a clear floorspace split." },
        { label: "4. RICS Red Book valuation", detail: "Separates commercial value, residential value and total. Estimated rental value on the commercial unit important to the cover test. Old Town and New Town World Heritage tenement parades and listed-building stock (Royal Mile, Grassmarket, parts of Stockbridge, Portobello High Street conservation area) add time for heritage considerations." },
        { label: "5. Credit approval", detail: "Specialist desks typically approve in 1 to 2 weeks post-valuation." },
        { label: "6. Conclusion of missives and LBTT", detail: "Standard mixed-use Scottish conveyancing through concluded missives. LBTT at non-residential rates applies on the whole. Single standard security registered at Registers of Scotland. 3 to 5 weeks typical." },
      ],
    },
    whoItsFor: {
      h2: "Buyer profiles for the Edinburgh tenement-parade archetype",
      items: [
        "Investors buying classic shop-with-flat-above tenement stock on Leith Walk (EH6) along the Trams to Newhaven extension",
        "Tollcross and Fountainbridge mixed-use investors holding ground-floor F&B and retail beneath tenement-flat residential (EH3/EH11)",
        "Marchmont (EH9) student-let-belt landlords holding ground-floor retail beneath upper-floor flats let to University of Edinburgh students",
        "Stockbridge (EH3/EH4) independent retail and F&B investors with tenement flats above",
        "Portobello High Street (EH15) coastal-regeneration investors picking up classic seaside parade stock with two to four flats above",
        "Limited company SPV landlords refinancing Edinburgh semi-commercial holdings off maturing 5-year fixes",
        "Portfolio investors with a mix of pure commercial and semi-commercial assets across the EH postcodes",
        "Mixed-use change-of-use deals where consent (under the Scottish Use Classes Order) is for ground-floor Class 1a retail or Class 3 F&B plus three to six tenement flats above",
      ],
    },
    localAngle: {
      h2: "Active Edinburgh semi-commercial parades and lender behaviour",
      body: 'Semi-commercial is a deep, active product across Edinburgh, sharpened by the combined 75,000-student footprint across the University of Edinburgh (around 45,000), Heriot-Watt and Edinburgh Napier which sustains exceptional residential demand above ground-floor commercial across the tenement parade belts. The classic parades, <a href="/property-types/semi-commercial" class="text-secondary font-medium hover:underline">Leith Walk in EH6 along the Trams to Newhaven extension, Tollcross and Fountainbridge in EH3/EH11, Marchmont in EH9 along the south side of the Meadows, Stockbridge in EH3/EH4, and Portobello High Street in EH15</a>, run on shop-with-flat-above tenement formats backed by exceptionally durable residential demand from the student footprint, the financial services workforce, the Scottish Government and NHS Lothian payroll, and the year-round tourism economy (around 13 million visitors a year, heavily peaked at the Edinburgh Festival and Fringe in July and August). Lot sizes are typically £350K to £1.1M for a single parade unit, often £1.5M+ for a four-unit run with multiple flats above. Gross blended yields run around the Scottish urban average given Edinburgh\'s exceptionally durable rental demand: typically 6.5 to 8.0% blended on Leith Walk and Tollcross, slightly tighter on Marchmont and Stockbridge given the residential premium, and wider on outer Portobello parades. Recent volume around the <strong>Trams to Newhaven extension</strong> opening in June 2023 has materially shifted commercial yields and retail rents along Leith Walk and into Newhaven, generating fresh refinance and acquisition cases through 2024 to 2026. Lender appetite is strong: <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> all actively quote on Edinburgh semi-commercial deals; Clydesdale Bank / Virgin Money UK is particularly engaged on Scottish tenement stock; Bank of Scotland Commercial holds substantial Edinburgh semi-commercial business; Allica Bank, HTB, Aldermore, Foundation Home Loans and Together engage actively across Scotland.',
    },
    faqs: [
      {
        question: "What floorspace split counts as semi-commercial in Edinburgh?",
        answer:
          'Mixed-use property where the residential element is typically <strong>40% or more</strong> of total floorspace. Below 40% residential, lenders treat it as pure commercial investment (and price it accordingly). The valuer measures GIA (gross internal area) on each element and the lender takes the split as evidence. Edinburgh tenement parades almost always sit comfortably above the 40% threshold given two to four flats over a single ground-floor unit.',
      },
      {
        question: "Which lenders are most active for Edinburgh shop-with-flat finance?",
        answer:
          '<strong>InterBay Commercial</strong>, <strong>Shawbrook</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> lead on the specialist side. Each has a slightly different LTV, covenant and minimum-loan profile. Clydesdale Bank / Virgin Money UK is notably engaged on Scottish semi-commercial cases. Bank of Scotland Commercial holds substantial Edinburgh semi-commercial business. Allica Bank, HTB, Aldermore, Foundation Home Loans and Together engage actively across Scotland. Interest rates from 6.5% pa for clean stock.',
      },
      {
        question: "Can I get 75% loan-to-value on an Edinburgh semi-commercial?",
        answer:
          'Yes, InterBay Commercial and Shawbrook routinely quote 75% LTV on standard tenement shop-with-flat archetypes. The blended cover test must still pass at 145%+; if rents are tight, LTV gets capped by the cover test rather than the headline maximum. Edinburgh valuers also occasionally cap LTV at 70% on secondary Leith Walk and outer-Gorgie parades with thin or volatile comparable evidence.',
      },
      {
        question: "Is semi-commercial lending regulated by the FCA?",
        answer:
          'Generally <strong>unregulated</strong>. Semi-commercial lending against let mixed-use property sits outside the Financial Conduct Authority\'s regulated mortgage perimeter: the borrower is a limited company or investor and the residential flats are let on Scottish Private Residential Tenancies to third parties. We are <strong>not authorised by the FCA</strong> because the products we arrange are unregulated. The exception: where the borrower or an immediate family member will personally occupy one of the residential flats, the deal can fall into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "What about LBTT on a mixed-use Edinburgh purchase?",
        answer:
          'LBTT follows non-residential rates on a genuinely mixed-use property: 0% to £150K, 1% £150K to £250K, 5% above. On a £680K Leith Walk tenement parade with three flats above the LBTT bill is around £22,500. That is materially cheaper than the residential LBTT (with the 6% Additional Dwelling Supplement on second properties) that would apply to a pure residential equivalent: one of the structural reasons investors favour semi-commercial in Scotland.',
      },
      {
        question: "Can I use a limited company to hold the asset?",
        answer:
          'Yes, limited company SPV is the standard structure for new semi-commercial acquisitions across Edinburgh. Specialist desks like InterBay Commercial are entirely comfortable with new SPV borrowers (with director personal guarantee), whether the SPV is incorporated in England and Wales or as a Scottish limited company. Existing trading limited companies, LLPs and individual investors are equally accommodated. The security is a single standard security registered at Registers of Scotland.',
      },
    ],
  },

  "portfolio-refinance": {
    slug: "portfolio-refinance",
    name: "Portfolio Refinance",
    metaTitle: "Commercial Portfolio Refinance Edinburgh | Specialist Broker",
    metaDescription:
      "Single-facility portfolio refinancing for Edinburgh HMO and commercial investors. Marchmont and Southside University of Edinburgh student HMO portfolios, Edinburgh Park office portfolios. £2M to £20M typical, LTV to 70%, interest rates from 6.5% pa. Paragon, Together, Foundation Home Loans, Aldermore.",
    hero: {
      eyebrow: "5+ assets, Single facility",
      h1: "Commercial Portfolio Refinance Edinburgh",
      lede:
        "Replace the patchwork of individual mortgages, maturity dates and lender relationships with a single facility, secured as a blanket standard security or as aggregated standard securities at Registers of Scotland. £2M to £20M typical. Loan-to-value 65 to 70% across the portfolio, aggregated interest cover 140 to 150%, interest rates 6.5 to 8.5% pa, 5 to 25 year repayment terms. The deepest portfolio market in our Scottish network sits here: Marchmont and Southside University of Edinburgh student HMO portfolios, Edinburgh Park (EH12) multi-let office portfolios, and Leith / Newhaven regeneration-corridor investor books.",
      metrics: [
        { label: "Min portfolio", value: "5+ assets" },
        { label: "Facility size", value: "£2M to £20M+" },
        { label: "LTV", value: "Up to 70%" },
        { label: "Rate", value: "From 6.5% pa" },
      ],
    },
    whatItIs: {
      h2: "What does portfolio consolidation actually look like?",
      body: [
        'Portfolio refinancing is a single commercial facility secured against <strong>multiple investment assets</strong>, replacing the patchwork of individual mortgages and maturity dates that builds up over a typical landlord lifecycle. For Edinburgh-based investors carrying five or more commercial, semi-commercial or HMO properties (and Edinburgh runs unusually deep HMO portfolio books given the combined 75,000-student footprint across the three universities, with the densest concentration of student-let stock around Marchmont, the Southside and Newington), the operational saving alone justifies the move: one quarterly review, one ICR test, one lender relationship, one renewal date.',
        'Two core structures, both perfectly workable in Scots law. <strong>Blanket standard security</strong>, a single security across all assets registered at Registers of Scotland, prices keenest on interest rate but locks the whole portfolio together. <strong>Aggregated facility</strong>, individual standard securities aggregated against a single facility limit, is more flexible if you want optionality to sell or refinance specific assets out. Release fees apply on aggregated when a single asset is removed; the structure works because the rest of the portfolio absorbs the residual debt.',
        'Aggregate ICR is tested across the portfolio at <strong>140 to 150%</strong> stressed at a notional interest rate 1 to 2% above pay rate. Tenant concentration matters: if more than 20 to 25% of income comes from a single tenant, lenders may price wider or cap loan-to-value. Sector concentration matters similarly. Edinburgh portfolios commonly carry a heavy weighting to student HMO blocks across EH8 Southside, EH9 Marchmont and EH3 Tollcross (the densest student-let belt around the University of Edinburgh, with HMO licensing administered by City of Edinburgh Council under the Scottish three-or-more-unrelated-occupants threshold, materially wider than the English five-plus statutory threshold), plus professional office books at Edinburgh Park, Charlotte Square and the Exchange district. Lenders are familiar with that profile but read tenant concentration carefully on multi-tenanted HMO blocks. Geographic concentration in Edinburgh plus the surrounding Lothians (East Lothian coastal towns, Midlothian, West Lothian) is fine; lenders are comfortable with regional clustering when the borrower demonstrates local market knowledge.',
        'Most Edinburgh portfolio refinancing today is taken out by <strong>limited company</strong> holding structures (single corporate-level entity, or a topco with subsidiary SPVs), partly for tax efficiency, partly because lenders increasingly prefer a clean corporate counterparty for £5M+ facilities. <strong>LBTT</strong> does not apply on refinancing (no transfer of beneficial ownership), which is part of what makes consolidation maths work even when ERCs on existing facilities have to be modelled in. Portfolio refinancing sits outside FCA regulation. <em>Indicative case seed:</em> an Edinburgh investor with seven Marchmont and Southside University of Edinburgh student HMO blocks (mix of three-tenant and seven-bed sui generis under the Scottish HMO licensing regime), plus a pair of Edinburgh Park office floorplates, £9.8M total value, refinanced into a single aggregated facility at 65% LTV (£6.37M) at around 6.8% pa with Paragon, all standard securities re-registered at Registers of Scotland on completion.',
      ],
    },
    howItWorks: {
      h2: "Process: from asset list to drawdown across multiple Scottish properties",
      steps: [
        { label: "1. Portfolio analysis", detail: "Asset list, current debt schedule, leases and PRTs, rent roll, recent valuations, HMO licence schedule. We model aggregated ICR, sector mix, tenant concentration, geographic spread." },
        { label: "2. Lender shortlist", detail: "Three to four portfolio lenders shortlisted based on facility size, sector mix and LTV target. We flag which English-headquartered portfolio desks lend in Scotland. Indicative terms within 7 working days." },
        { label: "3. Structure decision", detail: "Blanket standard security versus aggregated. Term length. Fixed versus tracker interest rate. Trade-offs modelled before submission." },
        { label: "4. Credit pack", detail: "Asset-by-asset pack plus aggregated portfolio summary, with HMO licence numbers and conditions for the student-let portion. Lender wants to see the whole shape clearly: concentration, covenant, lease maturities." },
        { label: "5. Co-ordinated Scottish valuations", detail: "Multiple RICS Red Book valuations co-ordinated across the portfolio, typically 4 to 6 weeks for the full set, the longest critical-path item. Old Town World Heritage and listed-building stock adds review time." },
        { label: "6. Legals and ERC handling", detail: "Multi-asset Scottish legal pack co-ordinated by a Scottish solicitor on the lender\'s panel, intercreditor handling for any retained debt, ERC settlement on existing facilities, fresh standard securities registered at Registers of Scotland against each property. 6 to 10 weeks total typical." },
      ],
    },
    whoItsFor: {
      h2: "Portfolio profiles where this product earns its keep",
      items: [
        "Edinburgh HMO landlords carrying 5+ University of Edinburgh student HMO blocks across Marchmont (EH9), the Southside, Newington (EH8/EH9) and Tollcross (EH3) under different lenders",
        "Sui generis larger-HMO operators with 7+ occupant properties across the Marchmont and Southside student belt consolidating multiple individual mortgages",
        "Professional firm freehold portfolios (legal, accountancy, asset management) holding Charlotte Square, George Street and Edinburgh Park multi-let office stock",
        "Investor portfolios holding Old Town Royal Mile heritage retail alongside Edinburgh Park office and Stockbridge semi-commercial",
        "Mixed semi-commercial books spanning Leith Walk (EH6), Tollcross (EH3), Marchmont (EH9), Stockbridge (EH3/EH4) and Portobello High Street (EH15)",
        "Investors approaching multiple maturity dates on individual fixes within a 24-month window",
        "Family offices and professional investor LLPs holding mixed commercial portfolios across Edinburgh and the wider Lothians",
        "Investors moving from individual SPVs into a single corporate-level holding limited company",
      ],
    },
    localAngle: {
      h2: "Active Edinburgh portfolio desks and typical book composition",
      body: 'Edinburgh runs the deepest portfolio market in our Scottish network and one of the deepest student-HMO portfolio markets in the UK, driven by the combined 75,000-student footprint across the three universities (the University of Edinburgh circa 45,000, Heriot-Watt circa 10,000, Edinburgh Napier circa 20,000), the financial services labour shed, and the broader Scottish HMO licensing regime which classifies any property let to three or more unrelated occupants as HMO (materially wider than the English five-plus threshold under the Housing Act 2004). Paragon, Together, Foundation Home Loans and Aldermore are prominent on the Edinburgh HMO portfolio book and route most of the £2M to £15M Marchmont and Southside multi-block refinances. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> compete on the mixed semi-commercial and pure commercial portfolio bracket. <strong>Lloyds</strong> and <strong>NatWest</strong> commercial banking compete on the prime end, with Edinburgh-based corporate relationship teams active across the market. Clydesdale Bank / Virgin Money UK is notably engaged on Scottish portfolio cases given the Scottish footprint; Bank of Scotland Commercial holds substantial Edinburgh portfolio business through the Lloyds Banking Group Scottish brand. Allica Bank, HTB and OakNorth engage on smaller portfolios. The typical Edinburgh portfolio profile we see has three distinct flavours: the <strong>Marchmont and Southside student HMO portfolio</strong> for around 45,000 University of Edinburgh students (multi-block EH9 Marchmont and EH8/EH9 Southside / Newington tenement HMO stock, mix of three-to-six occupant and 7+ bed sui generis under Scottish HMO licensing, blended yield 7.0 to 9.0%, durable demand year-round); the <strong>Edinburgh Park office portfolio</strong> (Parabola multi-let Grade A office stock at EH12, with financial services and life-sciences tenant covenant); and the <strong>Leith and Newhaven regeneration portfolio</strong> picking up mixed retail, F&B and tenement-flat semi-commercial along the Trams to Newhaven corridor. A smaller fourth cluster is the <strong>Festival hospitality portfolio</strong>, hotels, serviced apartments and short-let stock around the Royal Mile, Grassmarket, Cowgate and George Street, often with seasonal trading patterns peaked through July and August. Refinancing volume is particularly strong on portfolios with original draws from 2019 to 2021 where current valuations support a meaningfully better consolidated LTV. Pricing currently <strong>6.5 to 8.5% pa</strong> across portfolio facilities. See also our <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">single-asset commercial remortgage</a> route for smaller books.',
    },
    faqs: [
      {
        question: "How many Edinburgh assets do I need to portfolio-refinance?",
        answer:
          'Typically <strong>5+</strong>. Some lenders accept 3+ for the right covenant; some require 7+ for the full programme rate. Below five properties, individual investment commercial mortgages usually price better: the consolidation premium is not worth paying. Specialist HMO portfolio desks (Paragon, Foundation Home Loans, Aldermore) often start their programme at 4+ HMO blocks, which captures most serious Marchmont and Southside student-let landlords.',
      },
      {
        question: "Blanket standard security or aggregated, which is right?",
        answer:
          'Blanket standard security prices keenest on interest rate but locks the portfolio together: selling an asset is harder. <strong>Aggregated</strong> is more flexible if you want to sell or refinance individual properties; release fees apply when an asset is removed but the structure works. We model both before recommending. Either structure registers cleanly at Registers of Scotland through a Scottish solicitor on the lender\'s panel.',
      },
      {
        question: "What aggregated ICR do portfolio lenders need?",
        answer:
          'Aggregate ICR <strong>140 to 150%</strong> stressed at a notional interest rate 1 to 2% above pay rate. Single-asset ICR can dip below this if the aggregate passes: that is the whole point of the structure (it absorbs weaker-covenant assets across stronger ones). On HMO-heavy portfolios Paragon and Foundation Home Loans typically size the aggregate at 145%.',
      },
      {
        question: "Can I add or remove assets from the facility later?",
        answer:
          'Yes, most facilities allow add or remove with lender consent. Adding an asset usually triggers a top-up application (new RICS valuation on the new asset, fresh ICR test, fresh standard security at Registers of Scotland). Removing triggers a release fee but is generally straightforward; the residual debt has to still pass the aggregate cover test on the rest of the portfolio.',
      },
      {
        question: "Does LBTT apply on a portfolio refinance?",
        answer:
          'No, refinancing existing debt against properties you already own does not transfer beneficial ownership, so LBTT does not apply. The exception is where a refinance is structured alongside a transfer between connected limited companies for tax purposes; we flag and route that through the borrower\'s tax adviser before structuring.',
      },
      {
        question: "Is portfolio refinancing FCA-regulated?",
        answer:
          'No, commercial portfolio facilities sit outside the Financial Conduct Authority\'s regulated mortgage perimeter in all standard cases. The borrower is a limited company or LLP, the assets are commercial, semi-commercial or HMO held for investment income, and the facility is unregulated commercial lending. We are <strong>not authorised by the FCA</strong> because the products we arrange are unregulated; where a deal would require regulated permissions, we refer to a regulated firm.',
      },
    ],
  },

  "trading-business-mortgage": {
    slug: "trading-business-mortgage",
    name: "Trading-Business Mortgage",
    metaTitle: "Trading-Business Commercial Mortgage Edinburgh | Specialist Broker",
    metaDescription:
      "Sector-specialist commercial mortgages for Edinburgh operators: Old Town and Royal Mile heritage hotels and pubs (Festival 13M visitors), Grassmarket and Cowgate licensed trade, George Street premium hotels, Charlotte Square boutique hotels. EBITDA-driven underwriting, LTVs 60 to 70%, interest rates 7.0 to 9.0% pa. Cynergy Bank, Shawbrook, InterBay Commercial.",
    hero: {
      eyebrow: "Sector-specialist, 60 to 70% LTV",
      h1: "Trading Business Mortgage Edinburgh",
      lede:
        "Hotels, pubs, restaurants, care homes, dental practices, day nurseries, banqueting and wedding venues. Operational property where value is bound up with the business that runs from it. EBITDA-led underwriting plus sector-specific overlays: occupancy, ADR, Care Inspectorate grading in Scotland, NHS Scotland item-of-service contract, Scottish licensing board categories. LTVs 60 to 70%, interest rates 7.0 to 9.0% pa, 15 to 25 year repayment terms. Limited company structures supported. Active across Old Town and Royal Mile heritage hotels and pubs (Festival 13 million visitors), Grassmarket and Cowgate licensed trade, George Street hotels (including stock around The Balmoral and the Waldorf Astoria Caledonian), and the Charlotte Square boutique hotel cluster.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Rate", value: "7.0 to 9.0% pa" },
        { label: "Term", value: "15 to 25 years" },
        { label: "Facility", value: "£400K to £8M" },
      ],
    },
    whatItIs: {
      h2: "What is a sector-specialist commercial mortgage?",
      body: [
        'Trading-business mortgages fund operational commercial property where the value is bound up with the <strong>business that runs from it</strong>. Unlike pure investment property, where the test is rent against mortgage cost, trading-business mortgages test <strong>EBITDA cover</strong>: the trading profit of the business covering the mortgage repayment, typically at 1.5 to 2.0x cover. Goodwill, brand, sector regulation and going-concern value all influence the lend. Security is a standard security registered at Registers of Scotland over the operational property.',
        'Underwriting is sector-specific and depends entirely on the property type. <strong>Hotels</strong>: occupancy, ADR (average daily rate), RevPAR, brand affiliation, location. Edinburgh\'s hotel market is the deepest in our network, sustained by around 13 million visitors a year heavily peaked at the Edinburgh Festival and Fringe in July and August with a secondary Hogmanay peak. The named sub-markets are the <strong>Old Town and Royal Mile heritage hotel cluster</strong> in EH1 (running from the Castle Esplanade down through the Lawnmarket, High Street and Canongate to Holyrood, intensely concentrated and sustained year-round by the World Heritage tourist spine), the <strong>George Street and Princes Street premium hotel ring</strong> in EH2 (including stock around The Balmoral, the Waldorf Astoria Caledonian, the Kimpton Charlotte Square and Gleneagles Townhouse), the <strong>Charlotte Square boutique hotel cluster</strong> (Georgian townhouse conversions in EH2), and the mid-tier hotel stock added across 2018 to 2024 (Premier Inn, Travelodge and similar across the city ring including Leith and Haymarket). <strong>Pubs and bars</strong>: barrelage, EBITDA, Scottish licensing board category, trading record. Grassmarket, Cowgate, the Royal Mile and Rose Street are the densest licensed-trade clusters. <strong>Care homes</strong>: <strong>Care Inspectorate</strong> grading (the Scottish equivalent of the English CQC), occupancy, weighted-average bed value, fee rates (local authority versus private mix). <strong>Dental practices</strong>: NHS Scotland item-of-service contract value, private fee mix, principal versus associate structure, surgery count. <strong>Day nurseries</strong>: Care Inspectorate registration and grading, registered places, occupancy, fee structure. <strong>Wedding and banqueting venues</strong>: forward booking pipeline, average spend per event, accounts seasonality.',
        'Loan-to-value runs <strong>60 to 70%</strong> typically for Edinburgh trading-business cases, lower than pure investment because the asset value is sector-locked and harder to repurpose if the business fails. Heritage hospitality and listed-building stock on the Royal Mile, the Grassmarket and Charlotte Square can flex slightly lower (55 to 65%) where re-purpose options are constrained by Historic Environment Scotland and World Heritage core constraints. Term <strong>15 to 25</strong> years; interest rates <strong>7.0 to 9.0% pa</strong> reflecting the specialist underwrite. Different sub-sectors route to different lenders, and getting the right desk first time is the broker\'s entire job. Most trading-business mortgages are taken out by a limited company trading entity with personal guarantee from the operating principal, and most fall outside FCA-regulated mortgage rules because they finance business premises, not residential property.',
        '<strong>LBTT</strong> on a trading-business purchase follows commercial rates (0% to £150K, 1% to £250K, 5% above), and where a deal is structured as a share purchase of an existing operating limited company rather than an asset purchase, LBTT can be deferred or partly avoided. We work alongside the buyer\'s tax adviser on the structure before submission. Refinancing an existing trading-business mortgage (typically off a maturing 5-year fix) is a frequent reason to re-engage; the current rate environment plus continuing post-pandemic recovery in Festival hospitality trading is creating refinancing demand particularly on Old Town heritage hotel and George Street premium hotel operator books. <em>Indicative case seed:</em> a 36-room Old Town heritage hotel just off the Royal Mile, stable year-round occupancy underpinned by Edinburgh Castle, the Festival and Hogmanay visitor flow, EBITDA cover comfortably above 1.7x, purchased at £6.2M with a £3.72M facility at 60% LTV around 7.5% pa via Cynergy Bank, with the standard security registered at Registers of Scotland.',
      ],
    },
    howItWorks: {
      h2: "Steps from sector review to specialist credit committee",
      steps: [
        { label: "1. Sector and trading review", detail: "Two years of accounts, current management figures, sector-specific data: occupancy and ADR for hotel, Care Inspectorate grade for care and nursery, NHS Scotland contract for dental, barrelage and Scottish licensing board category for pub." },
        { label: "2. Specialist lender shortlist", detail: "Sector dictates lender. Hotels: Cynergy Bank, Allied Irish Bank UK and Metro Bank lead. Care and dental: Shawbrook and Cynergy Bank. Pubs and bars: Cynergy Bank plus licensed-trade specialist desks. We flag which English-headquartered desks lend in Scotland." },
        { label: "3. Indicative terms in 48 hours", detail: "Interest rate, loan-to-value, EBITDA cover requirement, repayment term, fees. From a clean enquiry only." },
        { label: "4. Sector-specific credit pack", detail: "STR or PKF hotel benchmarking report for hotels, Care Inspectorate inspection report for care and nursery, NHS Scotland item-of-service contract for dental, licensing board category and barrelage for pub. Cleaner pack equals faster credit." },
        { label: "5. Specialist RICS valuation", detail: "Sector-accredited RICS valuer instructed by the lender. Critical-path item, typically 3 to 5 weeks. Royal Mile, Grassmarket and Charlotte Square listed-building stock adds time for listed-building and World Heritage considerations." },
        { label: "6. Credit approval and completion", detail: "Specialist desks underwrite slower than mainstream commercial. Conclusion of missives, standard security registered at Registers of Scotland. Allow 6 to 10 weeks total from indicative to drawdown." },
      ],
    },
    whoItsFor: {
      h2: "Operator profiles routing through this product",
      items: [
        "Old Town and Royal Mile heritage hotel operators within the World Heritage core, sustained by around 13 million annual visitors and the Edinburgh Festival peak",
        "Grassmarket and Cowgate licensed-trade operators running heritage pub, bar and late-night venue stock under City of Edinburgh licensing board permissions",
        "George Street and Princes Street premium hotel operators across stock including The Balmoral and Waldorf Astoria Caledonian halo",
        "Charlotte Square boutique hotel operators running Georgian townhouse conversions in EH2",
        "Festival-driven serviced-apartment and short-let hospitality operators across Old Town (EH1) and New Town (EH2)",
        "Care home operators across Edinburgh under Care Inspectorate grading, principally in EH4 (Western General catchment), EH16 (Royal Infirmary at Little France catchment) and the suburban EH9 / EH10 belt",
        "Dental, GP and veterinary principals (Morningside, Bruntsfield, Stockbridge, Edinburgh BioQuarter-adjacent) buying within the medical professional spine",
        "Day nursery operators across the EH4, EH9, EH10 and EH13 suburban professional family belt under Care Inspectorate registration",
      ],
    },
    localAngle: {
      h2: "Sub-sector clusters and lender behaviour across the Edinburgh market",
      body: 'Edinburgh runs the deepest hospitality and care trading-business commercial mortgage flow in our network, driven by the city\'s unique tourism profile (around 13 million visitors a year peaked at the Edinburgh Festival and Fringe in July and August, with a secondary Hogmanay peak), the World Heritage Old Town spine from Edinburgh Castle down the Royal Mile to Holyrood, the New Town Georgian premium hotel ring, and the NHS Lothian healthcare footprint across the Royal Infirmary at Little France and the Western General. The <a href="/property-types/leisure-hospitality" class="text-secondary font-medium hover:underline">Old Town and Royal Mile heritage hotel cluster, the George Street and Princes Street premium hotel ring (including stock around The Balmoral and the Waldorf Astoria Caledonian), and the Charlotte Square boutique hotel cluster</a> support firm hotel EBITDA cover and route primarily through specialist hospitality lenders. <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank lead the hotel underwriting market for Edinburgh; <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> take selected larger hospitality cases. The Edinburgh licensed-trade sub-market across <a href="/areas/" class="text-secondary font-medium hover:underline">the Grassmarket, the Cowgate, the Royal Mile and Rose Street</a> is well-supported by year-round visitor footfall plus student-driven evening trade, with <strong>Cynergy Bank</strong> and licensed-trade specialist desks active on pub and bar cases. The <a href="/property-types/healthcare-care-home" class="text-secondary font-medium hover:underline">Edinburgh care-home market</a> across EH4 (Western General catchment), EH16 (Royal Infirmary at Little France catchment) and the suburban EH9 / EH10 belt is rated under the <strong>Care Inspectorate</strong> regime; Shawbrook and Cynergy Bank hold significant care-home books across Scotland. Dental and primary-care principal buy-outs around Morningside, Bruntsfield and Stockbridge route through clearing bank healthcare desks at <strong>Lloyds</strong> and <strong>NatWest</strong>, with Bank of Scotland Commercial naturally engaged on Scottish operator books and OakNorth competitive on the £2M+ end. Day nurseries cluster across EH4, EH9, EH10 and EH13 under Care Inspectorate registration, with specialist desks providing the core appetite. Clydesdale Bank / Virgin Money UK engages selectively on Scottish trading-business cases. Refinancing volume from 2019 to 2021 vintage operator books is particularly strong on Old Town heritage hospitality stock and on the George Street premium hotel cluster.',
    },
    faqs: [
      {
        question: "Can I buy an Edinburgh hotel on a trading-business mortgage?",
        answer:
          'Yes. Hotel mortgages are typically structured at 60 to 70% loan-to-value, term 15 to 20 years, interest rate 7.0 to 9.0% pa. Lender appetite depends heavily on occupancy, ADR and RevPAR, brand affiliation and trading record. Specialist hospitality desks dominate the Old Town heritage cluster, the George Street and Princes Street premium ring, and the Charlotte Square boutique stock; <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank are the most active named lenders on Edinburgh hotel underwriting; clearing banks engage selectively on larger George Street and Princes Street deals.',
      },
      {
        question: "What Care Inspectorate grade do care home lenders need?",
        answer:
          'Generally <strong>4 Good</strong> or above (the Scottish Care Inspectorate uses a 1 to 6 scale: 6 Excellent, 5 Very Good, 4 Good, 3 Adequate, 2 Weak, 1 Unsatisfactory). <strong>3 Adequate</strong> can sometimes fund at tighter LTV (50 to 60%) and wider interest rate. <strong>1 Unsatisfactory</strong> or <strong>2 Weak</strong> is unfundable on mainstream desks until the grade recovers; specialist private credit may engage at materially wider pricing. The Edinburgh care-home stock across EH4 Western General catchment, EH16 Royal Infirmary at Little France catchment and the EH9/EH10 suburban belt generally holds a strong Care Inspectorate profile.',
      },
      {
        question: "Are dental practice mortgages owner-occupier or trading-business?",
        answer:
          'Dental can route either way. Pure freehold purchase by the practice principal is normally placed as <a href="/services/owner-occupier-commercial-mortgage">owner-occupier</a> on EBITDA cover via clearing bank healthcare desks at <strong>Lloyds</strong> or <strong>NatWest</strong>, or via Bank of Scotland Commercial on the Scottish brand side. Larger dental groups buying multi-site portfolios route as trading-business with specialist sector lenders. We choose based on facility size and group structure.',
      },
      {
        question: "How long does a trading-business mortgage take to complete?",
        answer:
          'Typically <strong>6 to 10 weeks</strong> from indicative to drawdown, longer than mainstream commercial because of sector-specific RICS valuation, regulatory due diligence (Care Inspectorate inspection reports, NHS Scotland contract assignment, Scottish licensing board category for pubs) and sometimes World Heritage / listed-building considerations on Royal Mile, Grassmarket and Charlotte Square hospitality stock.',
      },
      {
        question: "Is this lending FCA-regulated?",
        answer:
          'No, trading-business commercial mortgages finance business premises and sit outside the Financial Conduct Authority\'s regulated mortgage perimeter in all standard cases. They are not residential mortgages and are not consumer credit. We are <strong>not authorised by the FCA</strong> because the products we arrange are unregulated; where a deal would require regulated permissions, we refer to a regulated firm.',
      },
      {
        question: "Can I refinance an existing trading-business mortgage?",
        answer:
          'Yes, refinancing volume is currently strong on Edinburgh hotel and care-home operator books taken out 2019 to 2021, where current valuations and stronger trading records (particularly continued post-pandemic Festival hospitality recovery) support a meaningfully better LTV than the original draw. We model the ERC on the existing facility against the saving on the new interest rate before recommending the move. See our <a href="/services/commercial-remortgage">commercial remortgage</a> page for the wider mechanics.',
      },
    ],
  },

  "commercial-remortgage": {
    slug: "commercial-remortgage",
    name: "Commercial Remortgage",
    metaTitle: "Commercial Remortgage Edinburgh | Specialist Broker",
    metaDescription:
      "Refinancing existing commercial debt across Edinburgh. Post-2022 refinance wave, Edinburgh Park office refinance, Festival hospitality refinance. End-of-fix transitions, capital-raise refinancing, ERC modelled. LTV to 75%, interest rates from 6.0% pa, repayment terms 5 to 25 years. NatWest, Lloyds, Barclays, Santander, Shawbrook.",
    hero: {
      eyebrow: "End-of-fix, Capital raise",
      h1: "Commercial Remortgage Edinburgh",
      lede:
        "Refinancing existing commercial standard securities: moving lender at end of a 5-year fix, releasing capital from an appreciated asset, or moving from specialist back to mainstream once trading has stabilised. Whole-of-market benchmark across 90+ lenders, with the Scottish-active subset clearly flagged. Loan-to-value to 75%, interest rates from 6.0% pa, 5 to 25 year repayment terms. Active across the post-2022 refinance wave on Edinburgh investment and semi-commercial holdings, the Edinburgh Park (EH12) Grade A office refinance stream, and the Festival hospitality refinance flow across Old Town heritage hotel and pub operators.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Rate", value: "From 6.0% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Facility", value: "£200K to £20M" },
      ],
    },
    whatItIs: {
      h2: "What does refinancing a commercial mortgage actually involve?",
      body: [
        'Commercial remortgage covers two distinct moments. <strong>End of fix</strong>: a typical 5-year fixed-rate facility matures and you transition to a new rate environment, either a fresh fix with the same lender (a product transfer) or a full refinancing to a new lender. <strong>Capital-raise refinancing</strong>: releasing equity from a property that has grown in value since the original draw, where the increased loan amount funds onward investment, business growth or working capital. Both are legitimate uses of refinancing; both are routine across the Edinburgh commercial market in 2026.',
        'The first conversation is always <strong>ERC (early repayment charge) handling</strong>. If you are inside an ERC window, the maths often still works: saving 1.5% on rate over a fresh five-year term outweighs an ERC of 3% of the redemption sum on most £1M+ facilities. We run the numbers both ways before recommending the move. Some lenders will pay-down ERC against new arrangement fees as a competitive incentive; we know which.',
        'For end-of-fix transitions the underwriting story is usually clean: the asset is income-producing, the borrower has a trading record, the lender has comfort. <strong>NatWest</strong> (Edinburgh registered office), <strong>Lloyds</strong> commercial banking (Lothian Road), <strong>Barclays</strong>, <strong>Santander</strong>, <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong>, <strong>InterBay Commercial</strong> and <strong>LendInvest</strong> all compete hard on clean Edinburgh remortgage business; Clydesdale Bank / Virgin Money UK is notably strong on Scottish refinance cases; Bank of Scotland Commercial holds substantial Edinburgh refinance volume through the Lloyds Banking Group Scottish brand; Allica Bank, HTB, Aldermore and Together engage selectively. The pricing competition is real: even a 50bps move on a £2M facility saves £10,000 a year.',
        'For capital-raise refinancing, the test is the borrower\'s use of funds plus the new ICR or DSCR cover at the higher loan amount. Common use cases: deposit on the next acquisition, working capital injection into the trading business, partner buy-out, refurbishment programme, cross-collateralisation across a small portfolio. Where the funds are being released from an investment property, the deal is unregulated commercial; where the borrower is a sole trader using the property partly as a residence, the deal can fall under FCA-regulated mortgage rules: we flag at outset. <strong>LBTT</strong> does not apply on a refinance (no transfer of beneficial ownership), unlike a fresh purchase, which is part of why refinancing maths can work even with ERCs in the model. <em>Indicative case seed:</em> an Edinburgh investor refinancing a £2.6M let Edinburgh Park Parabola Grade A office investment off a maturing 2021 fix, current value £3.4M, refinanced at 70% LTV (£2.38M) at around 6.8% pa via Bank of Scotland Commercial, releasing roughly £450K for the next Charlotte Square acquisition deposit, with a fresh standard security registered at Registers of Scotland on completion.',
      ],
    },
    howItWorks: {
      h2: "From existing facility review to redemption and drawdown",
      steps: [
        { label: "1. Existing facility review", detail: "Current interest rate, ERC window, maturity date, redemption schedule. New ICR, DSCR or EBITDA cover modelled at multiple lender stress rates." },
        { label: "2. Whole-of-market benchmark", detail: "Five to eight lenders shortlisted across high-street, challenger and specialist desks, with the Scottish-active subset clearly flagged. Indicative terms in 48 hours." },
        { label: "3. ERC modelling", detail: "Cost of break versus benefit of new interest rate over remaining fix. Where it is close, we hold the deal until the ERC window opens." },
        { label: "4. Application packaging", detail: "Standard credit pack: accounts, leases (if investment), property file, borrower SPV or limited company pack. Cleaner than a fresh acquisition." },
        { label: "5. RICS Red Book valuation", detail: "Existing valuation is not portable. Fresh RICS valuation instructed by the new lender, typically 2 to 3 weeks." },
        { label: "6. Completion, redemption and RoS re-registration", detail: "Existing facility redeemed from new draw. Old standard security discharged at Registers of Scotland; new standard security registered alongside. 4 to 6 weeks total typical from start to drawdown." },
      ],
    },
    whoItsFor: {
      h2: "Borrowers most likely to benefit from refinancing now",
      items: [
        "Borrowers approaching the end of a 5-year fix in the next 6 to 12 months",
        "Owner-occupier businesses where trading is now stronger and supports better-priced repayment terms",
        "Edinburgh Park Parabola office investors refinancing off 2019 to 2021 vintage facilities as the Grade A office market stabilises",
        "Festival hospitality operators refinancing off post-2021 fixes as Old Town heritage hotel and pub trading continues its post-pandemic recovery",
        "Charlotte Square and George Street office freehold owners refinancing as asset values catch up with the post-2022 repricing",
        "Commercial investment landlords whose properties have appreciated since acquisition (the post-2022 refinance wave on Edinburgh holdings particularly)",
        "Limited company SPV portfolios consolidating individual standard securities into a single facility (see also Portfolio Refinance)",
        "Operators moving from a high-cost specialist lender back to a mainstream rate post-stabilisation",
      ],
    },
    localAngle: {
      h2: "Why current Edinburgh refinancing volume is high",
      body: 'With Bank of England base-rate trajectory through 2026 looking flatter than the 2023 to 2024 cycle, refinancing demand across Edinburgh is strong, particularly on the <strong>post-2022 refinance wave</strong> across investment and semi-commercial holdings, on the <strong>Edinburgh Park (EH12) Grade A office refinance</strong> stream where 5-year fixes from 2021 are rolling off into a more competitive market and the Parabola masterplan has stabilised with Lloyds Banking Group, abrdn and Diageo as anchor tenants, and on the <strong>Festival hospitality refinance</strong> flow across Old Town heritage hotel and pub operators where trading is continuing to recover post-pandemic. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and <strong>InterBay Commercial</strong> are the most aggressive challenger desks competing for clean Edinburgh remortgage business. <strong>NatWest</strong> (with its Edinburgh registered office and Gogarburn HQ), <strong>Lloyds</strong> commercial banking and <strong>Barclays</strong> all run dedicated remortgage propositions on the high-street side. <strong>Santander</strong> is competitive on the £2M+ end. Clydesdale Bank / Virgin Money UK is notably engaged on Scottish refinance cases; Bank of Scotland Commercial holds substantial Edinburgh refinance volume through the Scottish brand of Lloyds Banking Group; Allica Bank, HTB, Aldermore and Together hold meaningful positions on local refinance business across Scotland. Refinancing demand is concentrated in Edinburgh Park Grade A office stock, St James Quarter retail, Charlotte Square premium office, Quartermile mixed-use, and the Leith Walk, Tollcross, Marchmont, Stockbridge and Portobello High Street semi-commercial parade stock where rents have grown faster than pure capital values. Where the existing standard security is on a competitive 2019 to 2021 legacy rate (3.5 to 4.5%) and breaking it would cost more than the saving, see also our <a href="/services/second-charge-commercial-mortgage" class="text-secondary font-medium hover:underline">second-charge commercial mortgage</a> route.',
    },
    faqs: [
      {
        question: "When should I start the Edinburgh remortgage process?",
        answer:
          'Start <strong>4 to 6 months</strong> before fix expiry. That gives time for benchmarking, ERC modelling, valuation and Scottish legal completion without time pressure. For capital-raise refinancing there is no fixed time constraint, but allow 6 to 8 weeks from start to drawdown.',
      },
      {
        question: "Should I pay an ERC to remortgage early?",
        answer:
          'Sometimes, if the rate saving over the remaining fix outweighs ERC plus new arrangement fees. We model the break-even precisely. On a £2M facility, a 1.5% interest rate saving over 3 years is £90,000; a 3% ERC is £60,000. So a 3% ERC is worth breaking. Lower spreads need careful modelling.',
      },
      {
        question: "Can I capital-raise as part of a remortgage?",
        answer:
          'Yes, provided the new loan-to-value stays within lender comfort (typically 70 to 75% for owner-occupier and investment) and the new ICR, DSCR or EBITDA cover passes at the higher loan amount. Common use of funds: business growth, onward acquisition, deposit on next purchase, partner buy-out.',
      },
      {
        question: "Does the existing valuation get re-used?",
        answer:
          'No, the new lender will instruct a fresh RICS Red Book valuation. The existing valuation is not portable across lenders. Allow 2 to 3 weeks for the new valuation; cost typically £1,500 to £4,500 depending on facility size and asset complexity.',
      },
      {
        question: "Is commercial remortgaging FCA-regulated?",
        answer:
          'No. Commercial remortgaging, both investment and owner-occupier, is unregulated and sits outside the Financial Conduct Authority\'s regulated mortgage perimeter in all standard cases. The borrower is a limited company, LLP or trading entity; the asset is commercial; the security is a Scottish standard security. We are <strong>not authorised by the FCA</strong> because the products we arrange are unregulated. The exception: where a sole trader uses the property partly as a residence, the deal can fall into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "Does LBTT apply on a remortgage?",
        answer:
          'No, LBTT does not apply on a refinance because there is no transfer of beneficial ownership. LBTT only applies on a purchase. Discharge of the old standard security and registration of the new one at Registers of Scotland incurs registration dues but not LBTT. That is part of why refinancing maths can work even where ERCs on the existing facility have to be paid.',
      },
    ],
  },

  "commercial-bridge-to-let": {
    slug: "commercial-bridge-to-let",
    name: "Commercial Bridge-to-Let",
    metaTitle: "Commercial Bridging Loan Edinburgh | Specialist Broker",
    metaDescription:
      "Short-term commercial bridge-to-let finance in Edinburgh. 12 to 24 month bridge funding Quartermile conversions, Granton Waterfront regeneration plays, Trams to Newhaven Leith mixed-use, and Old Town heritage hotel conversions. £500K to £8M, LTV to 70%, bridge interest 0.75 to 1.10% pm. LendInvest, Shawbrook.",
    hero: {
      eyebrow: "12 to 24m bridge, Clean term-out",
      h1: "Commercial Bridging Loan Edinburgh",
      lede:
        "Acquire a vacant or value-add commercial property on a 12 to 24 month bridge, refurbish or convert and let, then term out onto a long-term commercial investment mortgage. £500K to £8M typical. Bridge interest rate 0.75 to 1.10% pm; term-out 6.5 to 8.5% pa once stabilised. Standard security registered at Registers of Scotland at day-one acquisition. Active across Quartermile conversions (EH3), Granton Waterfront regeneration plays (EH5), Trams to Newhaven Leith mixed-use (EH6), and Old Town heritage hotel conversions (EH1).",
      metrics: [
        { label: "Bridge term", value: "12 to 24 months" },
        { label: "Bridge rate", value: "0.75 to 1.10% pm" },
        { label: "LTV (bridge)", value: "Up to 70%" },
        { label: "Term-out", value: "6.5 to 8.5% pa" },
      ],
    },
    whatItIs: {
      h2: "What is bridge-to-let and when does it make sense?",
      body: [
        'Commercial bridge-to-let is a two-stage facility. The first stage, the <strong>bridge</strong>, funds acquisition of a commercial property that is not immediately fundable on a long-term mortgage: vacant, partly tenanted, mid-refurbishment, mid-conversion, or with an unsigned lease at point of purchase. The second stage, the <strong>term-out</strong>, refinances the bridge onto a standard commercial investment mortgage once the asset is income-producing and the ICR test passes. Both stages are secured by standard security registered at Registers of Scotland.',
        'Bridges typically run <strong>12 to 24 months</strong>, with interest serviced monthly or rolled-up into the loan balance (useful where the asset is not income-producing during the bridge period). Bridge LTV up to 70% of current value, sometimes higher with refurb-funded value where lenders consider GDV (gross development value). Bridge interest rate currently <strong>0.75 to 1.10% pm</strong>, equivalent to 8.5 to 11.0% pa: meaningfully more expensive than long-term debt, but the right answer for a 12-month value-add play where no term lender will engage on the day-one position.',
        'The agreed exit onto term debt is the underwriting comfort. Specialist lenders like <strong>LendInvest</strong> and <strong>Shawbrook</strong> either provide both legs (bridge then term with the same lender, on a pre-agreed product transfer) or partner with a sister term lender. <strong>InterBay Commercial</strong> takes selected larger Edinburgh cases on the bridging side. Together and Foundation Home Loans engage on the HMO-conversion bridging side, including the deep Marchmont and Southside student-let conversion pipeline. We model the all-in cost across the bridge period plus term-out so you see the true total cost of the strategy before drawdown.',
        'Most commercial bridge-to-let is taken out by a <strong>limited company</strong> SPV with director personal guarantee, and is unregulated commercial lending. The exception: where the bridge is secured against a property with a residential element that the borrower will personally occupy, the deal can fall under FCA-regulated bridging rules and routes to a regulated bridging lender. <strong>LBTT</strong> applies on the day-one purchase at standard non-residential rates; it is paid by the buyer at completion of the bridge, not at term-out (because term-out is a refinance, not a fresh purchase). That timing matters for cash-flow planning on the deal. <em>Indicative case seed:</em> a Leith Walk tenement parade bought as a Class 1a retail plus Class 9 residential conversion under the Scottish Use Classes Order at £1.15M on an 18-month bridge at 0.95% pm, refurbished and converted under prior approval from City of Edinburgh Council, termed out at 65% LTV at around 7.5% pa once let to a mix of independent retail tenants on the ground floor and Scottish Private Residential Tenancies (PRTs) on the upper floors.',
      ],
    },
    howItWorks: {
      h2: "From auction or off-market acquisition to stabilised investment",
      steps: [
        { label: "1. Strategy review", detail: "We review the asset, the refurb or conversion plan, the target term-out exit. All-in cost modelled: bridge interest, bridge fees, term-out arrangement, valuation set." },
        { label: "2. Bridge terms in 48 hours", detail: "Bridge LTV, interest rate, term, fees from three specialist desks. Plus indicative term-out terms post-stabilisation. We flag which English-headquartered desks lend in Scotland." },
        { label: "3. Bridge completion", detail: "Bridge can complete in 2 to 3 weeks for clean cases. Asset acquired, standard security registered at Registers of Scotland. LBTT paid at conclusion of missives." },
        { label: "4. Conversion or refurb phase", detail: "Borrower executes the plan over 6 to 18 months. Property stabilises into income-producing asset with leases or Scottish PRTs in place." },
        { label: "5. Term-out refinancing", detail: "Once let with valid commercial leases or PRTs, refinance onto term mortgage at standard 6.5 to 8.5% pa pricing. ICR test passes." },
        { label: "6. Bridge redeemed", detail: "Bridge redeemed from term-out drawdown. Old standard security discharged at Registers of Scotland; new term standard security registered. Borrower now on long-term repayment schedule." },
      ],
    },
    whoItsFor: {
      h2: "Deal types where short-term commercial debt is the right tool",
      items: [
        "Quartermile (EH3) office floorplate conversion plays at the former Royal Infirmary site, with University of Edinburgh-adjacent demand",
        "Granton Waterfront (EH5) regeneration buyers picking up mixed-use development plots with prior-approval potential under the long-running regeneration masterplan",
        "Trams to Newhaven Leith mixed-use plays along the EH6 corridor opened June 2023 where commercial yields and retail rents have shifted materially",
        "Old Town heritage hotel conversion deals across the Royal Mile, Cowgate and Grassmarket where Class 1a / Class 7 (hotel) reshuffles need bridge funding through City of Edinburgh listed-building consent",
        "Class change-of-use plays under the Scottish Use Classes Order across EH8 Southside, EH9 Marchmont and EH3 Tollcross within the combined-university walking belt",
        "Larger-HMO conversion deals where City of Edinburgh Council HMO licensing and full planning need bridge funding through the determination cycle",
        "Investors buying vacant Edinburgh Park (EH12) Grade A office floorplates for sub-division refurbishment and re-letting",
        "Auction-bought commercial assets (typical 28-day completion timeframe rules out term mortgage processing)",
      ],
    },
    localAngle: {
      h2: "Active Edinburgh bridge-to-term value-add territory",
      body: '<strong>LendInvest</strong> and <strong>Shawbrook</strong> are the most active commercial bridging desks for Edinburgh £500K to £8M deals; <strong>InterBay Commercial</strong> takes selected cases on the larger end. Together and Foundation Home Loans engage on the HMO-conversion bridging side, important given Edinburgh\'s deep student HMO conversion pipeline driven by the combined 75,000-student footprint across the three universities. The standout value-add territory in 2026 is the <a href="/areas/" class="text-secondary font-medium hover:underline">Quartermile conversion stream (EH3), the Granton Waterfront regeneration pipeline (EH5), the Trams to Newhaven Leith mixed-use stream (EH6), and the Old Town heritage hotel conversion belt (EH1)</a>. The <strong>Quartermile</strong> redevelopment of the former Royal Infirmary site at the University of Edinburgh\'s southside-adjacent EH3 footprint, including the Edinburgh Futures Institute which opened in 2024, has generated a steady stream of office floorplate reconfiguration cases. The <strong>Granton Waterfront regeneration</strong> on the north coast in EH5 is a long-running mixed-use scheme producing acquire-and-convert opportunities. The <strong>Trams to Newhaven extension</strong> opened in June 2023 has materially shifted commercial yields and retail rents along Leith Walk and into Newhaven (EH6), generating a fresh wave of bridge-and-convert tenement parade plays. The <strong>Old Town heritage hotel conversion belt</strong> across the Royal Mile, Cowgate, Grassmarket and West Bow generates listed-building hotel and short-let conversion cases under City of Edinburgh listed-building consent, supported by the 13 million annual Festival visitor flow. Auction-bought assets are another standing source: the 28-day completion clock simply cannot be met by term-mortgage process.',
    },
    faqs: [
      {
        question: "How quickly can an Edinburgh commercial bridge complete?",
        answer:
          'Clean cases, <strong>2 to 3 weeks</strong>. Bridging desks are speed-specialists; <strong>LendInvest</strong> routinely completes in 14 working days where the Scottish legal pack is clean. Auction-bought assets with 28-day completion clocks are well within bridging\'s comfort zone. The critical-path item is usually the Scottish solicitor on the lender\'s panel preparing concluded missives and the day-one standard security.',
      },
      {
        question: "What interest rate should I expect on an Edinburgh bridge-to-let?",
        answer:
          'Bridge: <strong>0.75 to 1.10% pm</strong> (8.5 to 11.0% pa equivalent). Term-out: <strong>6.5 to 8.5% pa</strong>. The headline cost of the bridge looks high, but over a 12-month value-add play (typical for a Granton Waterfront mixed-use conversion through City of Edinburgh\'s determination cycle, or a Leith Walk tenement Class 1a to Class 1a-plus-Class 9 conversion under the Scottish Use Classes Order) it is often the only route that works, and the all-in cost across bridge plus term-out usually beats the alternatives.',
      },
      {
        question: "Can I roll bridge interest into the loan?",
        answer:
          'Yes, most commercial bridges roll interest into the balance rather than requiring monthly servicing. Useful when the asset is not income-producing during the bridge period (typical for a vacant Quartermile floorplate conversion or an Old Town heritage hotel mid-conversion). Fully-serviced bridges price marginally cheaper because the lender is taking less roll-up risk.',
      },
      {
        question: "Does the same lender provide bridge and term-out?",
        answer:
          'Sometimes (<strong>LendInvest</strong> and <strong>Shawbrook</strong> both do this on a pre-agreed product transfer). Sometimes the bridge is one lender and the term-out is a different specialist or high-street commercial desk; we structure the agreed exit at outset so the term-out lender is identified and pre-aligned before bridge drawdown. On Edinburgh HMO conversions Paragon, Foundation Home Loans and Aldermore are common term-out destinations.',
      },
      {
        question: "Is commercial bridge-to-let FCA-regulated?",
        answer:
          'No. Commercial bridge-to-let falls outside the Financial Conduct Authority\'s regulated mortgage perimeter in standard cases: limited company SPV borrower, business asset, no residential occupation. We are <strong>not authorised by the FCA</strong> because the products we arrange are unregulated. The exception: where the bridge is secured against a property with a residential element that the borrower or an immediate family member will personally occupy, the deal falls into the regulated perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "What happens with LBTT across the two stages?",
        answer:
          'LBTT is paid at the day-one purchase, when the bridge completes and missives are concluded, not at term-out. Term-out is a refinance (no transfer of ownership) so no further LBTT applies. That timing matters for cash-flow planning: you need the LBTT in addition to the bridge deposit at the front end, along with valuation, Scottish solicitor fees and Registers of Scotland registration dues.',
      },
    ],
  },

  "second-charge-commercial-mortgage": {
    slug: "second-charge-commercial-mortgage",
    name: "Second-Charge Commercial Mortgage",
    metaTitle: "Second-Charge Commercial Mortgage Edinburgh | Specialist Broker",
    metaDescription:
      "Subordinated commercial finance behind your existing first-ranking standard security in Edinburgh. Keep the legacy interest rate intact and raise £100K to £2M against the same asset. Combined LTV to 75%, interest rates 10 to 14% pa. Capital raise on Edinburgh investor portfolios and central commercial freehold equity release on Charlotte Square, George Street and Old Town stock. InterBay Commercial, LendInvest, specialist private credit.",
    hero: {
      eyebrow: "Behind senior, £100K to £2M",
      h1: "Second-Charge Commercial Mortgage Edinburgh",
      lede:
        "Subordinated commercial debt sitting behind your existing first-ranking standard security, secured against the same property at Registers of Scotland. Keep the legacy interest rate and avoid breaking ERCs while raising £100K to £2M. Combined loan-to-value to 70 to 75%, interest rates 10 to 14% pa, 5 to 25 year repayment terms. Active across capital raise on Edinburgh investor portfolios (Marchmont and Southside student HMO books, Leith and Tollcross semi-commercial), and central commercial freehold equity release on Charlotte Square, George Street and Old Town heritage stock.",
      metrics: [
        { label: "Combined LTV", value: "Up to 75%" },
        { label: "Rate", value: "10 to 14% pa" },
        { label: "Term", value: "5 to 25 years" },
        { label: "Facility", value: "£100K to £2M" },
      ],
    },
    whatItIs: {
      h2: "What does sitting behind a senior commercial lender actually mean?",
      body: [
        'A second-charge commercial mortgage sits <strong>behind your existing first-ranking standard security</strong>, secured against the same property at Registers of Scotland. The senior lender retains priority on the asset; the second-ranking lender takes a subordinated position, meaning that in any default scenario (in Scots law, enforcement proceeds via a <strong>calling-up notice</strong> rather than English demand letter, and any forced sale runs through the Sheriff Court rather than the County Court), the senior gets repaid in full before the second-ranking sees a penny. You keep the existing senior facility intact (and its interest rate) while raising additional debt against the same security.',
        'The use case is narrow but valuable. Typically: your existing first-ranking standard security is on a competitive legacy interest rate (3.5 to 4.5% from the 2019 to 2021 era) with significant ERCs to break; you need to raise £200K to £2M for working capital, business growth, partner buy-out, deposit on the next Edinburgh acquisition or onward expansion of an investor portfolio; refinancing the whole stack would cost more than the second-ranking route. Run the maths and second-ranking often wins on a 3-year horizon, particularly where the legacy rate has 18+ months left to run.',
        'It is a smaller, more specialist market than first-ranking. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and select private-credit desks are the active second-ranking commercial lenders for the Edinburgh market. Paragon and Together engage on second-ranking against HMO portfolios, important given Edinburgh\'s deep Marchmont and Southside student HMO book. Pricing reflects the subordinated risk profile: <strong>10 to 14% pa</strong> typically, with arrangement fees of 2 to 3%. Combined loan-to-value (first-ranking plus second-ranking) usually capped at <strong>70 to 75%</strong> on owner-occupier and standard investment, occasionally flexed to 80% on strong covenant cases; Edinburgh lenders read combined LTV carefully on concentrated student HMO blocks where the cover test is more sensitive to academic-year void exposure.',
        'Most second-ranking commercial lending is taken out by a <strong>limited company</strong> trading entity or SPV with director personal guarantee, and is unregulated commercial lending, not a residential mortgage. The senior lender has to consent to the second-ranking standard security being registered (a deed of consent at typically £500 to £2K is standard); some clearing bank commercial desks refuse on policy grounds, in which case the route is closed and refinancing the whole stack is the only option. <strong>LBTT</strong> does not apply on a second-ranking (no transfer of ownership). Repayment is on a standard amortising basis or, occasionally, interest-only with a balloon at year 5; we structure based on the cash-flow profile of the underlying business. <em>Indicative case seed:</em> an Edinburgh investor operating a six-block Marchmont and Southside student HMO portfolio with a £2.1M legacy first-ranking standard security at 4.0% (2.5 years left to run) raises £680K of equity via a second-ranking standard security at 12% pa to fund the deposit on the next Newington tenement HMO acquisition, without disturbing the cheap senior.',
      ],
    },
    howItWorks: {
      h2: "Process: from senior consent to subordinated drawdown",
      steps: [
        { label: "1. Combined-LTV review", detail: "Current first-ranking balance, current property valuation, target combined loan-to-value. Most second-ranking facilities sit at 70 to 75% combined." },
        { label: "2. First-ranking consent check", detail: "Existing senior lender must consent to the second-ranking standard security being registered. Some refuse on policy; most allow with a deed of consent fee." },
        { label: "3. Indicative terms in 48 hours", detail: "From two to three specialist subordinated desks. Interest rate, LTV, term, fees, conditions." },
        { label: "4. Credit pack", detail: "Standard commercial credit pack plus first-ranking documentation. Lenders want clarity on the priority position and any cross-default clauses in the senior." },
        { label: "5. Valuation and intercreditor", detail: "RICS Red Book valuation. Deed of priority or intercreditor agreement between senior and second-ranking lenders. Scottish solicitor handles ranking agreement and registration at Registers of Scotland. Adds 1 to 2 weeks versus first-ranking process." },
        { label: "6. Completion and drawdown", detail: "Funds drawn. First-ranking facility unaffected. Second-ranking standard security registered at Registers of Scotland. 5 to 7 weeks total typical from indicative to drawdown." },
      ],
    },
    whoItsFor: {
      h2: "Profiles where keeping the senior intact is the right call",
      items: [
        "Edinburgh student HMO portfolio operators raising deposit capital on Marchmont (EH9), Southside (EH8/EH9) and Newington (EH8) stock without disturbing competitive legacy first-ranking standard securities",
        "Central freehold owners on Charlotte Square (EH2), George Street (EH2), Old Town Royal Mile (EH1) and Grassmarket (EH1) stock executing equity release without breaking a cheap senior",
        "Edinburgh Park (EH12) office freehold owners releasing equity for partner buy-out or onward acquisition",
        "Leith and Tollcross semi-commercial investors raising capital for the next tenement parade acquisition through the Trams to Newhaven regeneration pipeline",
        "Borrowers with a competitive legacy first-ranking interest rate they cannot afford to break",
        "Trading-business owners (Old Town heritage hotel and pub operators, Charlotte Square boutique hotel principals) raising working capital secured against owner-occupied Edinburgh premises",
        "Operators with significant ERCs on existing facility making full refinancing uneconomic",
        "Asset-rich borrowers with cashflow pressure needing capital release without facility break",
      ],
    },
    localAngle: {
      h2: "When subordinated debt is doing real work in the Edinburgh market",
      body: '<strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and select private-credit desks are the active second-ranking commercial lenders for Edinburgh, with Paragon and Together engaging on the student HMO portfolio side and Foundation Home Loans on selected files. The product sees most use on two distinct Edinburgh profiles. First, <strong>capital raise on Edinburgh investor portfolios</strong>: a Marchmont and Southside student HMO operator with a multi-block portfolio across EH8 and EH9 needs equity for the deposit on the next tenement HMO conversion through the Scottish HMO licensing pipeline, or a Leith and Tollcross semi-commercial investor needs capital for the next Trams to Newhaven corridor acquisition. The second-ranking route preserves the original cheap rate against assets where refinancing the whole stack would trip break costs that outweigh the rate saving. Second, <strong>central commercial freehold equity release</strong>: an asset-rich owner of a Charlotte Square Georgian townhouse office, a George Street premium retail block, an Old Town Royal Mile heritage freehold or an Edinburgh Park Parabola Grade A floorplate raises capital for business growth without breaking the senior. Combined first-ranking plus second-ranking LTV usually capped at 70 to 75% on owner-occupier; investment assets sometimes flex to 80% combined, with Edinburgh lenders weighing combined LTV carefully on concentrated student HMO blocks where the cover test is more sensitive to academic-year void exposure. On a £2.4M owner-occupied Charlotte Square professional services freehold with a £950K legacy first-ranking standard security at 4% (with 3 years left), a £760K second-ranking standard security at 12% costs less in absolute terms than a full refinancing of the £1.71M total at 7.5% with a £45K ERC, by around £28K over three years. We run the same comparison for Edinburgh student HMO portfolio operators, central freehold owners and Leith semi-commercial investors before recommending. See also our <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> route where the whole-stack refinancing actually beats the second-ranking maths.',
    },
    faqs: [
      {
        question: "Will my first-ranking lender consent to a second-ranking standard security?",
        answer:
          '<strong>Most will</strong>, with a deed of consent (typical fee £500 to £2K). Some clearing bank commercial desks refuse on policy grounds. Your existing facility documentation will say. We confirm before formally applying for the second-ranking standard security: wasting credit committee time on a deal the senior will not consent to is the easiest mistake to avoid.',
      },
      {
        question: "Why is second-ranking commercial lending more expensive than first-ranking?",
        answer:
          'Subordinated risk. In a default scenario (in Scotland, enforcement runs through a calling-up notice and, if necessary, action in the Sheriff Court) the first-ranking lender is repaid in full from the asset before the second-ranking lender sees anything. The interest rate reflects that. <strong>10 to 14% pa</strong> is the typical Edinburgh second-ranking range, against 6.0 to 9.0% pa for a comparable first-ranking.',
      },
      {
        question: "When does second-ranking make sense versus full refinancing?",
        answer:
          'When the legacy first-ranking rate is materially below current market and the ERC to break is significant. Run the numbers: if (rate saving x remaining term) is less than (ERC + new arrangement fees), second-ranking usually wins. We model both routes and recommend the cheaper all-in. On Edinburgh Marchmont and Southside student HMO portfolios this calculation comes up regularly given the 2019 to 2021 vintage of much of the original portfolio debt.',
      },
      {
        question: "Can I get a second-ranking standard security against a trading-business premises?",
        answer:
          'Yes, but the lender pool is narrower. Specialist private credit desks cover this; mainstream trading-business lenders rarely take subordinated positions. Pricing is typically 12 to 15% pa given the dual-risk profile (subordinated security plus sector-specific underwrite). Edinburgh Old Town heritage hotel and George Street premium hotel freeholds along the Festival visitor spine are common cases in point.',
      },
      {
        question: "Is second-ranking commercial regulated?",
        answer:
          'No. Second-ranking commercial lending against owner-occupied or investment commercial premises sits outside the Financial Conduct Authority\'s regulated mortgage perimeter. We are <strong>not authorised by the FCA</strong> because the products we arrange are unregulated. The exception: where the borrower will personally occupy a residential element of the property, the deal can fall into the regulated second-charge perimeter; in that case we refer to a regulated firm.',
      },
      {
        question: "Does LBTT apply on a second-ranking standard security?",
        answer:
          'No, there is no transfer of beneficial ownership on a second-ranking standard security (it is a security against an existing asset, not a purchase). LBTT does not apply. Registers of Scotland registration dues for the additional security, arrangement fees (2 to 3%) and intercreditor / ranking-agreement legal costs are the meaningful cost on top of interest rate.',
      },
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | null {
  return serviceDetails[slug] ?? null;
}
