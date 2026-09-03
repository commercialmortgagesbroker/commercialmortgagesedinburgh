/**
 * /about page content, Commercial Mortgages Edinburgh.
 *
 * Voice: editorial, broker-led, first-person plural ("we").
 *
 * Regulatory position (2026-05-18): Commercial mortgages are
 * UNREGULATED lending. The broker is NOT FCA-authorised because
 * the products arranged sit outside the FCA's regulated mortgage
 * perimeter. Where a deal would require FCA authorisation, we
 * refer to a regulated firm. Never claim FCA authorisation.
 *
 * Scotland-specific legal architecture: the security instrument is
 * a standard security under the Conveyancing and Feudal Reform
 * (Scotland) Act 1970, registered in the Land Register of Scotland,
 * with Scottish solicitors handling conveyancing via the missives
 * process. LBTT replaces SDLT.
 *
 * Rate range mid-2026: 6.0-9.0% pa overall.
 */

export interface AboutContent {
  hero: {
    h1: string;
    lede: string;
  };
  story: {
    h2: string;
    body: string[];
  };
  numbers: Array<{ value: string; label: string }>;
  approach: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  credibility: {
    h2: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    h1: "An experienced commercial mortgage broker for Edinburgh, the Lothians and central Scotland",
    lede:
      "Twenty years of UK property and commercial banking, including senior corporate banking roles on the lender side. £400M+ of unregulated commercial mortgages arranged across Edinburgh Park Grade A office investment, Charlotte Square professional firm freehold, Edinburgh BioQuarter life sciences SME owner-occupier, Marchmont and Southside HMO portfolio refinance, Old Town heritage hospitality acquisition, St James Quarter retail tenant refinance, Leith Walk mixed-use bridge-to-let and Morningside dental owner-occupier deals. Placed with the eight named lenders below and another eighty across our panel, including Allica Bank, HTB, YBS Commercial and Aldermore on the owner-occupier and SME freehold side and Paragon, Together, Foundation Home Loans and OakNorth on the HMO portfolio and bridge-to-let side, each active across the EH postcode footprint and the wider Lothians corridor. Cambridge and Counties is consistently strong on central-Scotland SME freeholds and prices keenly across the wider Edinburgh travel-to-work area. Clydesdale Bank / Virgin Money UK and Bank of Scotland anchor the Scottish high-street position alongside the cross-border high-street commercial desks.",
  },

  story: {
    h2: "Specialist, not generalist",
    body: [
      "Our team has been working in property and commercial banking since 2005, and we have stayed in the same lane ever since. Two decades of UK commercial finance, including senior corporate banking roles, sit behind every introduction we make. Most of that career was spent on the <strong>lender side</strong>, writing credit papers, sitting in committees, declining loans and approving them. That experience shapes how we structure and present every Edinburgh commercial mortgage application now we work on the broker side. We know what credit committees need to see, what triggers a decline, and where there is genuine flexibility versus where there is not. Crucially, we know which English-headquartered lenders are comfortable lending against Scottish security and which are not, which avoids the most common wasted-week mistake on a cross-border case.",

      "We broker commercial mortgages and only commercial mortgages. Owner-occupier, commercial investment, semi-commercial (the unregulated cases), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. We do not place residential mortgages, residential buy-to-let, regulated bridging, car finance, asset finance or unsecured business loans. Those are different markets with different lenders and different broker specialisms. We would rather be excellent at one product family than mediocre across six. If you call us about a residential remortgage, regulated semi-commercial, or anything else that would require FCA authorisation, we will refer you to a regulated firm that handles it properly.",

      'Across the past decade we have arranged in excess of <span class="figure-inline">&pound;400M</span> of commercial mortgages. Facility sizes from <span class="figure-inline">&pound;150K</span> to <span class="figure-inline">&pound;10M+</span>, terms 5 to 25 years, and every mainstream sector relevant to the Edinburgh market: Edinburgh Park and South Gyle Grade A office investment, Charlotte Square and George Street premium townhouse-office owner-occupier and refinance, Edinburgh BioQuarter and Roslin Innovation Centre life sciences SME owner-occupier, Marchmont, Bruntsfield and Southside (EH9, EH10) student HMO portfolio refinance off the 45,000-student University of Edinburgh demand pool, Old Town and Royal Mile (EH1) heritage hospitality acquisition through Edinburgh Festival and Fringe trading cycles, St James Quarter and Multrees Walk retail tenant refinance, Lothian Road and Exchange district financial services tenant office investment, Leith Walk (EH6) mixed-use bridge-to-let along the Trams to Newhaven extension, Morningside and Bruntsfield (EH9, EH10) dental and professional services freehold owner-occupier, and Portobello (EH15) coastal-regen leisure and mixed-use. Our work covers the full EH1 to EH17 city footprint and the wider Lothians and central-Scotland travel-to-work area including East Lothian, Midlothian, West Lothian and the Fife coast, all of which sit comfortably inside the same regional lender pool. See <a href="/case-studies" class="text-secondary font-medium hover:underline">our case studies</a> for representative recent placements.',

      'Edinburgh has four specialisms that shape our weekly deal flow. <strong>Scottish financial services tenant offices.</strong> Edinburgh is the second-largest financial centre in the UK after the City of London, anchored by Royal Bank of Scotland (NatWest Group) at Gogarburn, Lloyds Banking Group on Lothian Road and at Edinburgh Park, the Standard Life Aberdeen and abrdn cluster around St Andrew Square, Diageo at Edinburgh Park, and Tesco Bank. The financial services labour shed underwrites prime office rents and tenant covenants on Lothian Road, Charlotte Square, the Exchange district and at Edinburgh Park. <strong>Life sciences and biotech SME owner-occupier and investment.</strong> Edinburgh BioQuarter at Little France (NHS Lothian, University of Edinburgh, Scottish Enterprise joint venture, adjacent to the Royal Infirmary) and the Roslin Innovation Centre at Easter Bush sustain steady lab, incubator and SME owner-occupier demand. Allica Bank, HTB, YBS Commercial and OakNorth lead the SME freehold competition on this corridor, with the high-street commercial desks competitive on the larger lab-and-office investment lots. <strong>Student HMO portfolio.</strong> The combined 75,000-student footprint across the University of Edinburgh (around 45,000), Heriot-Watt (around 10,000) and Edinburgh Napier (around 20,000) concentrates the densest HMO conversion catchment in the city across Marchmont, Bruntsfield, Newington and Southside (EH8, EH9, EH10) and into Tollcross (EH3, EH11). Edinburgh applies a mandatory HMO licensing regime for any three-or-more unrelated occupants, a materially wider net than the five-plus English threshold, so most multi-let student stock requires a current City of Edinburgh Council HMO licence on the file. Paragon, Together, Foundation Home Loans and OakNorth lead the lender pool on stabilised HMO portfolio refinance where the HMO licence is already in hand. <strong>Festival hospitality and short-term lets.</strong> Approximately 13 million visitors a year, heavily peaked during the Edinburgh Festival and Fringe in July and August with a secondary peak at Hogmanay, drives a defensible hotel, boutique-hotel, restaurant-with-rooms and serviced-apartment demand pool across the Old Town and Royal Mile (EH1), New Town hotels in EH2 and EH3, and the Leith F and B corridor (EH6). Scotland operates a short-term lets licensing regime through City of Edinburgh Council that materially shapes lender appetite on STL-led income models.',

      "Commercial Mortgages Edinburgh is a trading name of Lenzie Consulting Ltd. <strong>We are not FCA-authorised because commercial mortgages on commercial property are an unregulated activity in the UK.</strong> They fall outside the Financial Conduct Authority's regulated mortgage perimeter. Our consumer credit and regulated mortgage referrals are handled by FCA-authorised partners. That position is not unusual. Most commercial mortgage brokers operate the same way, because the products themselves are unregulated by definition. What it does mean: the underwriting discipline we apply to every deal comes from years on the credit side of the table, not from a regulated obligation. The standards a credit committee expects do not change because the product sits outside FCA scope. We arrange commercial mortgages secured by standard security under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered with Registers of Scotland, with Scottish solicitors handling conveyancing via the missives process and Land and Buildings Transaction Tax (LBTT, administered by Revenue Scotland) replacing Land and Buildings Transaction Tax (LBTT). A small minority of English-headquartered lenders do not lend in Scotland; we flag that at first call rather than mid-process.",
    ],
  },

  numbers: [
    { value: "£400M+", label: "Commercial mortgages arranged" },
    { value: "90+", label: "Lenders on panel" },
    { value: "20+ yrs", label: "Property and commercial banking" },
    { value: "48 hrs", label: "Indicative terms" },
  ],

  approach: {
    h2: "How we work",
    items: [
      {
        label: "Specialist focus",
        detail:
          "Unregulated commercial mortgages only. No cross-selling, no loss-leader products, no residential, no regulated bridging, no unsecured. Single product family, deep expertise across the Scottish security regime.",
      },
      {
        label: "Lender-side perspective",
        detail:
          "Twenty years sitting behind credit committees teaches you how to package an application the way a credit officer wants to read it. Fewer decline surprises, faster approval, sharper terms. Including knowing which English challenger desks route Scottish files cleanly and which do not.",
      },
      {
        label: "Edinburgh market depth",
        detail:
          "We know the Scotland-active and Lothians-active lender desks personally. NatWest, Lloyds, HSBC UK, Barclays and Santander commercial banking out of the Edinburgh and Glasgow regional desks that cover the central belt, with named relationship managers we speak to weekly. Clydesdale Bank / Virgin Money UK and Bank of Scotland anchor the Scottish high-street position with deep covenant relationships across the Edinburgh financial services tenant base. Allica Bank, HTB, YBS Commercial and Aldermore take the owner-occupier file from BioQuarter and Edinburgh Park SME freeholds through to Charlotte Square professional firm acquisitions and Morningside dental owner-occupier. Cambridge and Counties prices keenly on central-Scotland SME freeholds and is consistently strong on Lothians cases including East Lothian, Midlothian and West Lothian. Paragon, Together, Foundation Home Loans and OakNorth lead the lender pool on Marchmont, Bruntsfield, Newington and Southside HMO portfolio refinance, with Together particularly active given the student-let density. We know which Scottish RICS valuers each lender prefers and which comparable evidence the local panel will accept, including which valuers carry the heritage-and-conservation expertise for Old Town and New Town listed-building cases.",
      },
      {
        label: "Straight answers",
        detail:
          "If the deal does not work, wrong sector for that LTV, EBITDA cover too tight, lender does not lend in Scotland, ERC kills the remortgage maths, vendor's price unsupported by RICS comparables, you hear it on day one. Not after a wasted valuation fee or a wasted week on the wrong panel solicitor.",
      },
      {
        label: "End-to-end execution",
        detail:
          "Single point of contact from initial enquiry through indicative terms, full application, RICS Red Book valuation, credit approval, Scottish solicitor instruction through the missives process, standard security registration with Registers of Scotland and drawdown. You speak to one person; we coordinate everything else, including LBTT calculation timing with your solicitor.",
      },
      {
        label: "Repeat clients",
        detail:
          "Most clients return for the next deal. Second freehold acquisition, portfolio addition, end-of-fix refinancing. The lender relationships we have built for you compound over time, which materially helps the next case, particularly where the second deal is a cross-border English or Northern Ireland asset added to a Scottish-anchored portfolio.",
      },
    ],
  },

  credibility: {
    h2: "Why a specialist Edinburgh broker",
    body: 'The Edinburgh commercial mortgage market has genuine regional nuance: <strong>City of Edinburgh Council</strong> as the unitary planning authority with its Public Access portal at <a href="https://planning.edinburgh.gov.uk">planning.edinburgh.gov.uk</a> covering the full EH1 to EH17 city footprint under a devolved Scottish planning regime materially different to English planning law (Planning (Scotland) Act 2019, National Planning Framework 4, the Scottish Use Classes Order); Edinburgh as the second-largest UK financial centre after the City of London anchored by Royal Bank of Scotland (NatWest Group) at Gogarburn, Lloyds Banking Group on Lothian Road, the Standard Life Aberdeen and abrdn cluster around St Andrew Square, Diageo at Edinburgh Park and Tesco Bank, underwriting prime office tenant covenants across Lothian Road, Charlotte Square, the Exchange district and Edinburgh Park; Edinburgh BioQuarter at Little France (NHS Lothian, University of Edinburgh, Scottish Enterprise joint venture, adjacent to the Royal Infirmary) and the Roslin Innovation Centre at Easter Bush as one of Europe\'s larger life-sciences clusters driving lab, incubator and SME owner-occupier demand; the combined 75,000-student catchment across the University of Edinburgh (around 45,000), Heriot-Watt (around 10,000) and Edinburgh Napier (around 20,000) supporting the densest HMO conversion belt in Scotland across Marchmont, Bruntsfield, Newington and Southside (EH8, EH9, EH10); the Edinburgh Festival and Fringe (approximately 13 million visitors a year, peaked in July and August, secondary Hogmanay peak) anchoring a year-round hotel and short-term let demand pool across the Old Town and Royal Mile (EH1), New Town hotels (EH2, EH3) and the Leith F and B corridor (EH6); St James Quarter (Nuveen\'s £1bn flagship), Multrees Walk (luxury), George Street (premium independents and F and B), Ocean Terminal at Leith and Fort Kinnaird retail park as the principal retail anchors; Edinburgh Park (Parabola, Lloyds, abrdn, Diageo tenants), South Gyle Business Park, Quartermile (former Royal Infirmary site, mixed office and residential) and the Exchange district / EICC as the principal office quarters; the Trams to Newhaven extension (opened June 2023) materially shifting commercial yields and retail rents along Leith Walk and into Newhaven; and the dense Marchmont, Bruntsfield, Newington and Southside terraced HMO conversion catchment combined with the 75,000-student demand pool that, alongside the Festival short-term-let cycle, makes Edinburgh the most diversified Scottish commercial mortgage market we cover. The eight lenders we name and show logos for are <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong>, <strong>Cynergy Bank</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>, each with confirmed permission to display marks. Behind those sit another eighty lender relationships including Clydesdale Bank / Virgin Money UK and Bank of Scotland on the Scottish high-street side, Allica Bank, HTB, Cambridge and Counties, YBS Commercial, Aldermore, Paragon, Together, Foundation Home Loans and OakNorth on the challenger and specialist side, plus the long tail of specialist commercial mortgage desks. Cambridge and Counties is the desk we lean on most often for central-Scotland SME freeholds where the borrower has clean filed accounts and a coherent deposit story. We are not Bank of Scotland or Royal Bank of Scotland; we are an independent broker with relationships across all the active Scotland-lending desks. National brokers tend to default to whichever desk paid the broker conference fee that quarter, and a meaningful number quietly route Scottish files to English solicitors who do not know the missives process. We default to whichever desk will fund your deal cleanest on Scottish security, and we will tell you which one that is on the first call.',
  },
};
