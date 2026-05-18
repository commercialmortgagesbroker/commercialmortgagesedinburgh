/**
 * /faq page content, Commercial Mortgages Edinburgh.
 *
 * Four sections, 20 questions. Each answer 80 to 150 words for citable
 * passage-level depth. Required entities (used factually, never as
 * authorisation claims): mortgage, commercial mortgage, edinburgh, finance,
 * lender, broker, LBTT, standard security, Registers of Scotland, limited
 * companies, refinance, residential. Commercial mortgages are unregulated
 * lending, do NOT claim FCA authorisation. FAQ schema injected server-side.
 *
 * Voice: first-person plural ("we"). Rate range mid-2026: 6.0 to 9.0 pct pa.
 *
 * Scotland-specific legal architecture: standard security under the
 * Conveyancing and Feudal Reform (Scotland) Act 1970, registered with
 * Registers of Scotland. Missives replace English exchange of contracts.
 * LBTT (Revenue Scotland) replaces SDLT.
 */

export interface FaqItem {
  question: string;
  answer: string; // HTML allowed
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

export const faqContent: FaqSection[] = [
  {
    heading: "The basics",
    items: [
      {
        question: "What is a commercial mortgage?",
        answer:
          'A commercial mortgage is long-term debt secured against income-producing or owner-occupied <strong>commercial</strong> property, offices, retail, industrial-warehouse, semi-commercial shop+flats, life sciences laboratory and incubator, healthcare, hospitality and trading-business premises. In Scotland the security instrument is a <strong>standard security</strong> under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered with Registers of Scotland rather than at HM Land Registry. In the Edinburgh market for mid-2026, typical facility size 150K to 10M pounds; LTV 65 to 75 percent; term 5 to 25 years; rate 6.0 to 9.0 percent pa. Repayment is normally monthly capital and interest on a reducing balance. The lender takes a first-ranking standard security over the property and usually a personal or limited company guarantee. See <a href="/services">our commercial mortgage services</a> for the full product breakdown.',
      },
      {
        question: "Do commercial mortgages sit inside the FCA regulated mortgage perimeter?",
        answer:
          'No. Commercial mortgages are unregulated lending and fall outside the FCA\'s regulated mortgage perimeter. <strong>We are not FCA-authorised</strong> because the products we arrange are unregulated by definition. We place owner-occupier, investment, semi-commercial (where the borrower does not occupy the residential element), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. Regulated cases (semi-commercial where the borrower occupies the residential element, regulated bridging, residential mortgages, consumer buy-to-let) are referred to an FCA-authorised firm. Most commercial mortgage brokers operate the same way, because the underlying products do not require FCA authorisation. Scottish commercial mortgages sit outside the regulated perimeter on the same basis as English ones.',
      },
      {
        question: "Who is a commercial mortgage for?",
        answer:
          'Three primary audiences and our week splits roughly evenly across all three. <strong>Owner-occupier business buyers</strong>, buying or refinancing the freehold of premises their own business trades from. Morningside and Bruntsfield dental and professional services, Charlotte Square and George Street legal and accountancy firms, Edinburgh BioQuarter and Roslin life sciences SME owner-occupier, Old Town independent F and B operators, healthcare ancillary across the Royal Infirmary halo, Stockbridge boutique retail and F and B owner-occupier. <strong>Commercial property investors and landlords</strong>, buying or refinancing let commercial assets, single-let or multi-let, sometimes a portfolio of five or more, including the dense Marchmont, Bruntsfield, Newington and Southside HMO portfolios driven by the combined 75,000-student University of Edinburgh, Heriot-Watt and Edinburgh Napier demand pool. <strong>Trading-business owner-operators</strong>, hotels, restaurants, pubs, boutique hospitality across the Old Town, New Town and Leith, day nurseries, care homes, buying the operational property and the going concern together. The product, the lender pool and the underwriting style are different across the three; the broker discipline is the same.',
      },
      {
        question: "What is the difference between a commercial mortgage and development finance?",
        answer:
          'A <strong>commercial mortgage</strong> funds the purchase or refinance of a completed, income-producing or owner-occupied commercial property. Funds drawn in a single tranche at settlement. Term 5 to 25 years. Monthly capital and interest. <strong>Development finance</strong> funds construction or heavy refurbishment and is drawn in tranches against build-progress monitoring, with interest rolled or serviced and capital repaid at exit (sale or refinance) typically 12 to 24 months later. <strong>Bridge-to-let</strong> sits in between for short-term value-add, buy a vacant or under-let asset, refurbish or re-tenant, then term out onto a long-term commercial mortgage once stabilised. A Leith Walk mixed-use repositioning along the Trams to Newhaven extension or a vacant Stockbridge retail-to-Class-3 conversion is a typical bridge-to-let candidate. We broker commercial mortgages and bridge-to-let; we do not place pure ground-up development finance.',
      },
    ],
  },
  {
    heading: "Eligibility, deposit and pricing",
    items: [
      {
        question: "What deposit do I need for a commercial mortgage in Edinburgh?",
        answer:
          'Typically <strong>25 to 30 percent</strong> for owner-occupier and commercial investment. Semi-commercial often 25 percent. Trading-business (Old Town heritage hotel, Leith restaurant, Marchmont care home) sits tighter at <strong>30 to 40 percent</strong>, reflecting the specialist underwrite. The deposit must be genuine equity and traceable: accumulated retained profit in the trading limited company, sale proceeds of another asset, family gift with a written declaration, or pension drawdown if structured cleanly. Lenders will not accept a second loan secured against the same property as the deposit. Personal guarantees do not count as equity. LBTT is payable from deposit funds, not financed, so the borrower must budget for the Revenue Scotland commercial bands on top of the deposit. On owner-occupier deals where EBITDA cover is comfortable, occasional 80 percent LTV products exist but pricing is materially wider, usually not the right answer.',
      },
      {
        question: "Can I get a commercial mortgage with limited trading history?",
        answer:
          'For owner-occupier, two years of clean filed accounts is the comfortable minimum. We routinely place deals with <span class="figure-inline">12 to 18 months</span> trading where the sector is well understood, dental, GP, pharmacy, established skilled trades, regulated professions, and the Edinburgh BioQuarter and Roslin life sciences SME corridor where the underlying contracts and grant pipeline are visible. The lender wants to see growing turnover, stable margins and a credible business case for the freehold purchase. For commercial investment the test is tenant covenant and lease length, not borrower trading history, a five-year-old single-asset SPV with a financial services tenant covenant at Edinburgh Park or a BioQuarter life sciences anchor lease prices well. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, Allica Bank, HTB and Cambridge and Counties have meaningful flexibility on borrower history that high-street commercial desks will not entertain on the same case.',
      },
      {
        question: "Can a limited company take out a commercial mortgage in Scotland?",
        answer:
          "Yes, and most commercial mortgages in the UK are written into <strong>limited companies</strong>. For commercial investment, a special-purpose vehicle (SPV) limited company is the standard structure: a single asset or portfolio held in a clean SPV with the SIC code 68209 (real-estate-related activities). For owner-occupier, the borrower is usually the trading limited company itself, with the property held on its balance sheet. Trading-business mortgages can be structured either way, into the trading company or into a separate property-holding limited company that leases the property back to the operating business. Scottish-incorporated SPVs work in exactly the same way as English ones for security purposes; the standard security registers against the company's title at the Land Register of Scotland and any floating charge filing runs through Companies House on the same basis as elsewhere in the UK. We model the alternatives at indicative-terms stage.",
      },
      {
        question: "What rates are Edinburgh commercial mortgage lenders pricing at right now?",
        answer:
          'Mid-2026 ranges by product type, all inside the <span class="figure-inline">6.0 to 9.0 percent pa</span> band. Owner-occupier on strong covenants in defensive sectors (Morningside dental, Charlotte Square professional firms, BioQuarter healthcare-adjacent): <span class="figure-inline">6.0 to 7.5 percent</span> pa. Commercial investment with prime tenant on a long lease, including Edinburgh Park financial services covenants (Lloyds, abrdn, Diageo) and BioQuarter life sciences anchor leases: <span class="figure-inline">6.5 to 8.0 percent</span> pa. Semi-commercial shop+flat across Stockbridge, Bruntsfield and the Leith corridor: <span class="figure-inline">7.0 to 8.0 percent</span> pa. Trading-business (Old Town heritage hotel, New Town hotel, Leith F and B, Marchmont care home): <span class="figure-inline">7.5 to 9.0 percent</span> pa. HMO portfolio refinance across Marchmont, Bruntsfield, Newington and Southside: <span class="figure-inline">7.0 to 8.5 percent</span> pa. Drivers: LTV, EBITDA or ICR / DSCR cover, lease length, tenant covenant, sector and borrower track record.',
      },
      {
        question: "What fees should I expect on an Edinburgh commercial mortgage?",
        answer:
          '<strong>Arrangement fee:</strong> 1 to 2 percent of the facility, often added to the loan rather than paid up-front. <strong>RICS Red Book valuation fee:</strong> 1,500 to 8,000 pounds depending on asset complexity, sector-specialist (Old Town heritage hotel, Charlotte Square A-listed townhouse office, BioQuarter life sciences specification, Edinburgh Park Grade A office, multi-let life sciences estate) and large investment lots cost more. <strong>Scottish legal fees:</strong> both sides, your Scottish solicitor 2,500 to 8,000 pounds typical for commercial conveyancing through the missives process, the lender\'s Scottish solicitor recharged at cost 1,500 to 4,000 pounds. <strong>Broker fee:</strong> usually included in the arrangement fee with no extra charge to the borrower; on complex specialist cases a separate broker fee is sometimes agreed. <strong>Exit / redemption fee:</strong> some 5-year fixes carry early-repayment charges of 3 to 5 percent in years 1 to 2, tapering. Total fee cost typically lands at 2 to 3 percent of the facility, plus LBTT.',
      },
      {
        question: "Do I pay stamp duty on commercial property in Edinburgh?",
        answer:
          'No. Scotland does not use Stamp Duty Land Tax. Commercial property purchases in Scotland are subject to <strong>Land and Buildings Transaction Tax (LBTT)</strong>, administered by Revenue Scotland and introduced in April 2015 by the Land and Buildings Transaction Tax (Scotland) Act 2013. The non-residential LBTT bands are different to the English SDLT bands and the rates are updated by the Scottish Government in each Scottish Budget. Mixed-use property, a semi-commercial shop with a flat above on Bruntsfield Place or the Stockbridge spine, is taxed on the non-residential LBTT rates if the commercial element is genuine. LBTT is paid by the buyer at settlement through the Scottish solicitor and filed with Revenue Scotland. LBTT is a cost the lender will not finance, it must come from your equity. Your Scottish solicitor calculates the exact LBTT due against the current Revenue Scotland tables at the point of missives.',
      },
    ],
  },
  {
    heading: "Process and timing",
    items: [
      {
        question: "How long does a commercial mortgage take to complete in Edinburgh?",
        answer:
          'Indicative terms within <span class="figure-inline">48 hours</span> of a complete enquiry. Full settlement (the Scottish term for completion) typically <span class="figure-inline">4 to 8 weeks</span> for mainstream owner-occupier, commercial investment and semi-commercial. <span class="figure-inline">6 to 10 weeks</span> for trading-business cases (Old Town heritage hospitality, Leith F and B, BioQuarter life sciences specification fit-out) and HMO portfolio refinance reflecting the multi-property redemption sequencing across Marchmont, Bruntsfield, Newington and Southside. The critical-path item is almost always the RICS Red Book valuation, although on cross-border English-lender cases the Scottish solicitor panel allocation can also extend timing if not planned at first call. Faster turnaround is possible on clean owner-occupier deals, fastest recent settlement was <strong>30 working days</strong> from initial enquiry on a Charlotte Square professional firm freehold acquisition where the borrower had filed accounts ready and the Scottish solicitor moved quickly through missives.',
      },
      {
        question: "What is a RICS Red Book valuation and why does it matter?",
        answer:
          "The Royal Institution of Chartered Surveyors (RICS) Red Book is the global standard for property valuation. Every commercial mortgage lender requires a Red Book valuation by a RICS-registered surveyor on its panel before it will draw down funds. The valuer inspects the property, reviews leases and tenant covenants, examines comparable evidence in the local Edinburgh market, considers the physical condition, and reports on market value, vacant possession value, and (for trading-business) sometimes goodwill value separately. The lender lends against this figure, not against the price the buyer is paying or the seller is asking. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. Scottish valuers cost 1,500 to 8,000 pounds depending on asset complexity, and Old Town and New Town listed-building cases require a valuer with conservation expertise.",
      },
      {
        question: "Do I need a solicitor for a commercial mortgage in Scotland?",
        answer:
          "Yes, and you need a <strong>Scottish solicitor</strong> experienced in commercial property and commercial finance, not your residential conveyancer and not an English solicitor unfamiliar with the missives process. The lender instructs its own Scottish solicitor to act on the loan documentation; you instruct your Scottish solicitor to act on the property purchase or refinance. The two solicitors negotiate the facility agreement, the standard security, the floating charge (where the borrower is a Scottish-incorporated SPV), any debenture, the personal guarantee, the security pack, conditions precedent and the Scottish CPSE-equivalent replies. They also conclude the binding contract for sale through <strong>missives</strong>, which is earlier in the timeline than the English exchange of contracts. Standard commercial conveyancing in Scotland runs three to four weeks from instruction; complex multi-asset cases longer. Legal fees both sides typically 4,000 to 12,000 pounds combined. We can recommend Edinburgh commercial property solicitors who are familiar with the lender desks on our panel, which materially helps the timeline.",
      },
      {
        question: "What documents will I need to apply?",
        answer:
          "<strong>Owner-occupier:</strong> two years of filed accounts, current management figures, a six-month projection, deposit proof, identity and address verification, the property sale memorandum, source-of-funds documents. <strong>Commercial investment:</strong> the lease, tenant covenant pack (tenant's accounts where relevant), rent roll, occupancy history, the SPV pack (incorporation, beneficial ownership, accounts if seasoned), deposit proof, identity. <strong>Trading-business:</strong> sector-specific evidence on top of the owner-occupier pack, Care Inspectorate reports for care, NHS contract value for dental, occupancy and ADR for hotel, licensed-trade evidence for pubs. <strong>Scottish-specific:</strong> current City of Edinburgh Council HMO licence on any multi-let student stock, short-term lets licence on Festival-let stock, planning consent reference from the planning.edinburgh.gov.uk portal where the deal depends on it. We send a tailored document checklist on the first call.",
      },
    ],
  },
  {
    heading: "Edinburgh-specific questions",
    items: [
      {
        question: "Which planning portal do I use for Edinburgh commercial property?",
        answer:
          'One planning authority covers the entire Edinburgh city commercial market. <strong>City of Edinburgh Council</strong> is the unitary planning authority and the Public Access portal sits at <a href="https://planning.edinburgh.gov.uk">planning.edinburgh.gov.uk</a>. The portal covers the full EH1 to EH17 city footprint, from the Old Town and Royal Mile, the New Town and George Street, the West End and Haymarket, Princes Street and St James Quarter through Leith and Newhaven, Tollcross and Fountainbridge, Southside and the Meadows, Morningside and Bruntsfield, Stockbridge, Portobello, Murrayfield and Corstorphine, and Edinburgh Park and South Gyle. Filter applications by the Scottish Use Classes Order categories (Class 1a retail, Class 2 financial and professional, Class 3 food and drink, Class 4 business, Class 6 storage and distribution, Class 7 hotels, sui generis) and the HMO licence stream to surface commercial-relevant decisions. Where a property purchase depends on a planning consent under the Planning (Scotland) Act 2019 and National Planning Framework 4, lenders want sight of the decision notice and any conditions before drawdown.',
      },
      {
        question: "Which Edinburgh postcodes do you cover?",
        answer:
          'The full EH postcode footprint that touches the Edinburgh commercial market. <strong>EH1</strong> covers the Old Town and Royal Mile, heritage retail and hospitality. <strong>EH2 and EH3</strong> cover the New Town, George Street, Charlotte Square, St Andrew Square and the Exchange district. <strong>EH6</strong> covers Leith and Newhaven, the F and B and regen corridor. <strong>EH8</strong> covers the University of Edinburgh main campus, Holyrood and Quartermile. <strong>EH9 and EH10</strong> cover Marchmont, Bruntsfield, Newington, the Meadows and Morningside, the densest student HMO catchment and the premium suburban professional-services belt. <strong>EH11</strong> covers Fountainbridge, Gorgie and Sighthill. <strong>EH12</strong> covers Haymarket, Murrayfield, Corstorphine, Edinburgh Park, South Gyle and Edinburgh Airport. <strong>EH15</strong> covers Portobello, Joppa and the coastal regeneration corridor. <strong>EH16</strong> covers Little France, the Royal Infirmary and Edinburgh BioQuarter. We also cover the wider Lothians and central-Scotland SME catchment including East Lothian, Midlothian, West Lothian and the Fife coast, all of which sit inside the same regional lender pool.',
      },
      {
        question: "How does Edinburgh HMO licensing work and what do lenders need to see?",
        answer:
          'Scotland operates a materially wider HMO licensing regime than England. Under the Housing (Scotland) Act 2006 and the City of Edinburgh Council HMO licensing scheme, <strong>any property let to three or more unrelated occupants requires a current HMO licence</strong>, compared to the English five-or-more threshold under the Housing Act 2004. That brings most multi-let student stock across Marchmont, Bruntsfield, Newington and Southside (EH8, EH9, EH10) inside the licensing regime. The City of Edinburgh Council HMO licence register confirms current licence status and is the primary evidence lenders want to see on any HMO portfolio file. Stabilised HMO portfolios with current licences in hand are financeable cleanly at 65 to 75 percent LTV. <strong>InterBay Commercial</strong>, Paragon, Together, Foundation Home Loans and OakNorth lead the lender pool; pricing for a stabilised portfolio: <span class="figure-inline">7.0 to 8.5 percent</span> pa at 70 to 75 percent LTV. Speculative C3-to-HMO conversion finance is much harder to place without the licence already granted.',
      },
      {
        question: "How does the standard security and Registers of Scotland process differ from English security?",
        answer:
          'In Scotland the security instrument is a <strong>standard security</strong> under the Conveyancing and Feudal Reform (Scotland) Act 1970, not an English-style legal charge. It registers in the <strong>Land Register of Scotland</strong> (operated by Registers of Scotland), not at HM Land Registry. The contract for sale is concluded through the exchange of <strong>missives</strong> between Scottish solicitors, which creates a binding contract earlier in the process than the English exchange-of-contracts model. Enforcement on default proceeds via a <strong>calling-up notice</strong> and, if necessary, action in the <strong>Sheriff Court</strong> rather than the English County Court. <strong>Land and Buildings Transaction Tax (LBTT)</strong>, administered by Revenue Scotland, replaces Stamp Duty Land Tax with different commercial thresholds. Several English-headquartered lenders are perfectly happy lending against Scottish security but route the file to Scottish solicitors on their approved panel; a small minority do not lend in Scotland at all. We flag Scottish-security appetite on the first call so the shortlist is workable from day one.',
      },
      {
        question: "Do I need a short-term lets licence to finance a Festival short-let property in Edinburgh?",
        answer:
          'Yes. Scotland introduced a national short-term lets licensing regime through the Civic Government (Scotland) Act 1982 (Licensing of Short-term Lets) Order 2022, administered locally by City of Edinburgh Council. Edinburgh sits inside a designated <strong>short-term lets control area</strong>, which means using residential property for short-term letting also requires planning permission for change of use to short-term let in addition to the licence. Where the asset is bought for or financed against short-term-let income, particularly the Old Town and New Town Festival-let stock that prices peak during July and August, lenders want sight of both the current STL licence and the planning consent before drawdown. Lender appetite for STL-led income models is tighter than for mainstream commercial investment: stabilised STL files price <span class="figure-inline">7.5 to 9.0 percent</span> pa, with deposit typically 30 to 35 percent. Speculative pre-licence finance is much harder to place; we recommend the licence-first sequence on most Festival-let cases.',
      },
      {
        question: "How does lender appetite work for Edinburgh BioQuarter and Edinburgh Park assets?",
        answer:
          'Edinburgh\'s two flagship strategic-employment clusters, <strong>Edinburgh BioQuarter</strong> at Little France (NHS Lothian, University of Edinburgh, Scottish Enterprise joint venture, adjacent to the Royal Infirmary) and <strong>Edinburgh Park</strong> at South Gyle (Parabola masterplan, Lloyds Banking Group, abrdn and Diageo as anchor tenants), are two of the strongest tenant-covenant catchments in our network. Lenders read both favourably. On BioQuarter life sciences SME owner-occupier and small-lab investment, Allica Bank, HTB, YBS Commercial and OakNorth lead the freehold competition; pricing for a stabilised life sciences SME owner-occupier with two years of clean accounts: <span class="figure-inline">6.5 to 7.5 percent</span> pa at 70 to 75 percent LTV. On Edinburgh Park Grade A office investment with a financial services anchor on a long FRI lease, the high-street commercial desks compete hard alongside <strong>Shawbrook</strong> and <strong>Barclays</strong> on multi-let lots; pricing for a stabilised single-let Grade A office to an investment-grade financial services covenant with 7 to 10 years unexpired: <span class="figure-inline">6.5 to 7.5 percent</span> pa at 65 to 70 percent LTV.',
      },
    ],
  },
];
