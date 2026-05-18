/**
 * Case studies, Commercial Mortgages Edinburgh.
 *
 * Ten anonymised case studies covering the Edinburgh market hooks:
 * Edinburgh Park Grade A office investment, Marchmont HMO portfolio
 * refinance, Old Town heritage hotel acquisition, Charlotte Square
 * professional firm freehold, Edinburgh BioQuarter life sciences SME
 * owner-occupier, Leith Walk mixed-use bridge-to-let, Morningside dental
 * practice owner-occupier, St James Quarter retail tenant refinance,
 * Portobello coastal regen mixed-use, RBS Gogarburn-adjacent office
 * investment.
 *
 * Real Edinburgh postcodes/districts. Specifics on rate, LTV, term and
 * lender (eight named lenders only: Shawbrook, InterBay Commercial,
 * LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Rates
 * inside the 6.0 to 9.0 pct pa band. boroughSlug matches the 12 Edinburgh
 * area slugs in src/lib/constants.ts.
 *
 * Scotland-specific legal architecture: standard security under the
 * Conveyancing and Feudal Reform (Scotland) Act 1970, registered with
 * Registers of Scotland. Missives replace English exchange of contracts.
 * LBTT (Revenue Scotland) replaces SDLT.
 */

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  borough: string;
  boroughSlug: string;
  financeType: string;
  loanAmount: string;
  gdv: string;
  ltv: string;
  term: string;
  units: number;
  schemeType: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyStats: { label: string; value: string }[];
  coordinates: [number, number];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "Grade A office investment refinance, Edinburgh Park",
    slug: "edinburgh-park-grade-a-office-investment-refinance",
    borough: "Edinburgh Park and South Gyle",
    boroughSlug: "edinburgh-park-south-gyle",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£4.85M",
    gdv: "£6.95M",
    ltv: "70%",
    term: "25 years (5yr fix)",
    units: 1,
    schemeType: "Single multi-let Grade A office building, Edinburgh Park",
    summary:
      "A central-belt investor refinanced a single multi-let Grade A office building on Edinburgh Park (EH12) off a maturing 5-year fix with a £4.85M commercial investment mortgage at 70% LTV, 25-year amortisation, 7.05% pa via Shawbrook.",
    challenge:
      "42,000 sqft of refurbished Grade A multi-let office space within the Parabola Edinburgh Park masterplan adjacent to Edinburgh Gateway station and the tram line, anchored by the wider Lloyds Banking Group, abrdn and Diageo Edinburgh Park tenant ecosystem. The asset was let across three tenants on FRI leases of varying terms, weighted average unexpired lease term 6.8 years, anchored by an investment-grade financial services professional services occupier on a 10-year FRI with 8 years unexpired and supported by two technology occupiers tied to the wider Edinburgh financial services and BioQuarter research catchment. Net rent £505K pa, valuation £6.95M.\n\nThe investor was carrying a maturing 5-year fix at 5.25% pa and wanted a fresh 5-year fix at the right rate. Grade A Edinburgh Park office investment at this scale needs a lender comfortable with the blended tenant covenant pack, the Parabola scheme management structure, the post-pandemic Scottish office sector view and Scottish security as a matter of comfort, not concession. Two English-headquartered desks initially quoted but routed Scottish files awkwardly through unfamiliar solicitor panels.",
    solution:
      "Shawbrook quoted 7.05% pa on a 5-year fix inside a 25-year amortisation at 70% LTV (£4.85M against £6.95M valuation). ICR cover at 162% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin across the blended tenant covenant base.\n\nThe credit submission included three FRI leases, tenant covenant packs on the financial services professional services and technology occupiers, three-year rent collection history at 99% on-time across the building, the Parabola Edinburgh Park scheme management agreement, the SPV pack and the deposit proof. Specialist Scottish commercial valuer with recent Edinburgh Park comparables on file. Standard security drafted by a Scottish solicitor on Shawbrook's approved panel; missives concluded at week 5. Credit approval at week 4, full settlement and registration with Registers of Scotland at week 9.",
    outcome:
      "Refinance completed with rate certainty for five years across the asset on a clean 25-year structure. Monthly interest cost approximately £22K pa below the high-street incumbent's quoted rate over the 5-year fix. The investor has subsequently approached us about a second Edinburgh Park acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£4.85M" },
      { label: "Property value", value: "£6.95M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "7.05% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "162%" },
    ],
    coordinates: [55.9270, -3.3050],
  },
  {
    id: "cs-002",
    title: "Student HMO portfolio refinance, Marchmont",
    slug: "marchmont-hmo-portfolio-refinance",
    borough: "Southside and The Meadows",
    boroughSlug: "southside-meadows",
    financeType: "Portfolio Refinance (HMO)",
    loanAmount: "£2.65M",
    gdv: "£3.75M",
    ltv: "71%",
    term: "25 years (5yr fix)",
    units: 7,
    schemeType: "Seven-property student HMO portfolio, Marchmont and Bruntsfield",
    summary:
      "An Edinburgh-based investor refinanced a seven-property student HMO portfolio across Marchmont and Bruntsfield (EH9, EH10) into a single £2.65M facility at 71% LTV, 25-year amortisation, 7.65% pa via InterBay Commercial.",
    challenge:
      "Seven traditional Edinburgh tenemental HMO properties, four in Marchmont and three in Bruntsfield, let to undergraduate and postgraduate University of Edinburgh tenants in the densest student-let belt in the city. Mixed unit sizes from 4-bed to 7-bed flats with current City of Edinburgh Council HMO licences across the portfolio under the Housing (Scotland) Act 2006 three-or-more-occupants threshold. Combined gross rent £298K pa across the seven properties, valuation £3.75M.\n\nThe investor had financed the portfolio across three legacy lenders, one on a maturing fix at 5.45% pa and two on variable, with HMO licence renewal cycles and personal-guarantee exposure spread inefficiently. The brief was a single 25-year facility with a fresh 5-year fix, a single point of consolidated administration, a meaningful reduction in personal guarantee exposure on the strength of three years of clean rent collection history, and a lender genuinely comfortable with the Scottish three-or-more HMO licensing regime which several English-leaning desks do not understand cleanly.",
    solution:
      "InterBay Commercial quoted 7.65% pa on a 5-year fix inside a 25-year amortisation at 71% LTV (£2.65M against £3.75M valuation). Blended ICR cover at 156% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the seven-property AST income.\n\nThe credit submission included the seven current City of Edinburgh Council HMO licences, the AST schedule across all units, three-year rent collection history at 97% on-time across the portfolio, the SPV pack, the deposit proof and the EPC commercial register evidence from the Scottish Government register. We negotiated the personal guarantee cap down from 30% to 22% of facility on the strength of the rent collection track record and the HMO licence compliance history. Specialist Scottish HMO valuer instructed; standard security drafted across the seven titles with the lender's Scottish panel solicitor. Credit approval at week 4, full settlement and registration with Registers of Scotland at week 10.",
    outcome:
      "Three legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the portfolio. Personal-guarantee exposure reduced from 30% of facility to 22%. The investor has subsequently used the same lender for an eighth-unit acquisition in Newington.",
    keyStats: [
      { label: "Facility", value: "£2.65M" },
      { label: "Property value", value: "£3.75M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "7.65% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "Blended ICR", value: "156%" },
    ],
    coordinates: [55.9420, -3.1850],
  },
  {
    id: "cs-003",
    title: "Heritage hotel acquisition, Old Town and Royal Mile",
    slug: "old-town-heritage-hotel-acquisition",
    borough: "Old Town and Royal Mile",
    boroughSlug: "old-town-royal-mile",
    financeType: "Trading-Business Mortgage (Hospitality)",
    loanAmount: "£3.95M",
    gdv: "£5.65M",
    ltv: "70%",
    term: "20 years",
    units: 1,
    schemeType: "Independent 32-bedroom heritage boutique hotel and restaurant freehold",
    summary:
      "An experienced hospitality operator acquired the freehold of a 32-bedroom independent heritage boutique hotel and restaurant on the Royal Mile (EH1) for £5.65M with a £3.95M trading-business mortgage at 70% LTV, 20-year term, 8.05% pa via Cynergy Bank.",
    challenge:
      "Established trading business inside the World Heritage Old Town hospitality cluster on the Royal Mile, thirty-two letting bedrooms above a 90-cover restaurant and bar in an A-listed Georgian building. Trading consistently with occupancy averaging 78% across the previous 24 months, materially supported by the Edinburgh Festival and Fringe peak in July and August (approximately 13 million visitors a year city-wide) plus a strong Hogmanay secondary peak and steady year-round Royal Mile tourist footfall. ADR £165, EBITDA £685K on the most recent full year of vendor accounts.\n\nThe vendor offered the freehold and goodwill for sale at £5.65M with a 120-day completion window through the missives process. The complication was the A-listed Georgian status inside the World Heritage Old Town conservation area, which triggered a specialist heritage RICS valuation premium and a tighter underwriting view on the planned cosmetic refurbishment programme. Two mainstream commercial desks declined on the listed-building heritage premium and one declined on Scottish security comfort.",
    solution:
      "Cynergy Bank quoted 8.05% pa over 20 years at 70% LTV (£3.95M against £5.65M valuation). EBITDA cover at 1.68x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy's hospitality desk accepted the A-listed heritage position on the strength of a specialist heritage hospitality RICS valuation and a costed conservation-area refurbishment plan signed off by a Scottish heritage architect.\n\nThe credit submission included three years of vendor accounts, the operator's hospitality track record across two previous Edinburgh and Glasgow hospitality sites, the heritage-architect refurbishment scope, the Scottish licensed-trade licence pack and a six-month post-completion management projection that stress-tested out-of-Festival cover at the August peak excluded. We negotiated the personal guarantee cap down from 30% to 23% of facility on the strength of the operator track record. Credit approval at week 5, missives concluded at week 6, full settlement and registration with Registers of Scotland at week 11, comfortably inside the 120-day window.",
    outcome:
      "Acquisition completed on schedule with the operator now controlling an Old Town heritage hospitality asset on long-term debt with a reduced personal-guarantee exposure. The borrower has subsequently approached us about a second New Town boutique hospitality opportunity on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£3.95M" },
      { label: "Property value", value: "£5.65M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "8.05% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.68x" },
    ],
    coordinates: [55.9505, -3.1880],
  },
  {
    id: "cs-004",
    title: "Professional firm freehold acquisition, Charlotte Square",
    slug: "charlotte-square-professional-firm-freehold",
    borough: "New Town, George Street and Charlotte Square",
    boroughSlug: "new-town-george-street",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£2.25M",
    gdv: "£3.15M",
    ltv: "71%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier Georgian townhouse office, Charlotte Square",
    summary:
      "An established Edinburgh professional services firm acquired the freehold of its Charlotte Square (EH2) Georgian townhouse offices for £3.15M with a £2.25M owner-occupier commercial mortgage at 71% LTV, 20-year term, 6.85% pa via Lloyds.",
    challenge:
      "Established Edinburgh professional services firm (legal and corporate advisory), eighteen partners, trading from leased Charlotte Square premises for fourteen years inside the New Town premium office quarter adjacent to St Andrew Square, George Street and the wider Lothian Road and Exchange district financial services labour shed. Turnover £8.45M, EBITDA £1.85M on the most recent full year.\n\nThe freeholder offered the property at £3.15M open market valuation with a four-month decision window through the missives process. The partnership had £945K deposit available from accumulated retained earnings. The challenge was matching the deal to a high-street commercial desk willing to give meaningful rate competition on a regulated-profession partnership covenant, on a Category A-listed Georgian townhouse inside the New Town conservation area where the valuer pool is narrow. The Lloyds Edinburgh commercial desk runs a deep professional services book on Charlotte Square and George Street.",
    solution:
      "Lloyds commercial banking quoted 6.85% pa over 20 years at 71% LTV (£2.25M against £3.15M valuation). EBITDA cover at 2.95x stressed at a notional rate 1.5 percentage points above pay rate, very strong margin for the regulated profession sector. NatWest and Allica Bank also quoted; Lloyds offered the cleanest covenant package on personal guarantee structure and the longest term.\n\nThe credit submission ran on three years of audited partnership accounts, the partner-level CV pack, regulatory body registration evidence, deposit proof, the building survey and a clean conservation-area condition report. Specialist Scottish heritage valuer with current Charlotte Square comparables on file, instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Missives concluded at week 3. Standard security registered with Registers of Scotland and settlement completed at week 6, our fastest Edinburgh case to date at 30 working days from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the partnership's four-month decision window. Monthly mortgage payment £15,710 against monthly EBITDA of £154,000, very strong cover. The firm has subsequently approached us about a Charlotte Square satellite floor acquisition.",
    keyStats: [
      { label: "Facility", value: "£2.25M" },
      { label: "Property value", value: "£3.15M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "6.85% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.95x" },
    ],
    coordinates: [55.9540, -3.2050],
  },
  {
    id: "cs-005",
    title: "Life sciences SME owner-occupier, Edinburgh BioQuarter",
    slug: "edinburgh-bioquarter-life-sciences-sme-owner-occupier",
    borough: "Edinburgh BioQuarter and Little France",
    boroughSlug: "edinburgh-bioquarter-little-france",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.55M",
    gdv: "£2.15M",
    ltv: "72%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier life sciences SME laboratory and office freehold",
    summary:
      "An established life sciences SME acquired the freehold of its laboratory and office premises within the Edinburgh BioQuarter at Little France (EH16) for £2.15M with a £1.55M owner-occupier commercial mortgage at 72% LTV, 20-year term, 7.15% pa via NatWest.",
    challenge:
      "Established life sciences SME, eleven-year trading history, specialist diagnostics, trading from leased BioQuarter premises for seven years inside the NHS Lothian, University of Edinburgh, Scottish Enterprise and City of Edinburgh Council BioQuarter joint venture at Little France, adjacent to the Royal Infirmary and one of Europe's larger life-sciences clusters. Turnover £4.85M, EBITDA £695K on the most recent full year, supported by a mix of NHS Lothian framework contracts, Scottish Government innovation grants and a growing private-diagnostics revenue stream.\n\nThe freeholder offered the property at £2.15M open market valuation with a three-month decision window. The borrower had £595K deposit available from accumulated retained earnings and a recent Scottish Enterprise grant. The challenge was matching the deal to a lender that understood life sciences specification fit-out (lab gases, ventilation, regulated waste, biosafety levels) and the grant-supplemented covenant structure. The NatWest Edinburgh commercial desk runs an active BioQuarter and Roslin Innovation Centre book.",
    solution:
      "NatWest commercial banking quoted 7.15% pa over 20 years at 72% LTV (£1.55M against £2.15M valuation). EBITDA cover at 2.42x stressed, comfortable margin for the regulated profession sector. Allica Bank and HTB also quoted; NatWest offered the cleanest covenant package on personal guarantee structure and the longest term.\n\nThe credit submission ran on three years of audited accounts, the NHS Lothian framework contract evidence, the Scottish Enterprise grant letter pack, principal-level CV pack and a costed life sciences specification fit-out report. Specialist Scottish life sciences RICS valuer instructed in parallel with credit underwriting; valuation back at week 3. Credit approval at week 4. Missives concluded at week 5. Standard security registered with Registers of Scotland and settlement completed at week 8 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the three-month decision window. Monthly mortgage payment £12,150 against monthly EBITDA of £57,920, very strong cover for continued reinvestment in lab specification. The operator has subsequently approached us about a Roslin Innovation Centre satellite freehold.",
    keyStats: [
      { label: "Facility", value: "£1.55M" },
      { label: "Property value", value: "£2.15M" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "7.15% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.42x" },
    ],
    coordinates: [55.9220, -3.1380],
  },
  {
    id: "cs-006",
    title: "Mixed-use bridge-to-let, Leith Walk",
    slug: "leith-walk-mixed-use-bridge-to-let",
    borough: "Leith and Newhaven",
    boroughSlug: "leith-newhaven",
    financeType: "Commercial Bridge-to-Let",
    loanAmount: "£1.15M",
    gdv: "£1.55M",
    ltv: "74%",
    term: "12-month bridge + 25-year term-out",
    units: 1,
    schemeType: "Vacant Class 1a retail unit with consented conversion to Class 3 + 5 flats, Leith Walk",
    summary:
      "An Edinburgh-based investor acquired a £1.55M vacant former Class 1a retail unit on Leith Walk (EH6) with a £1.15M 12-month bridge at 0.85% per month via LendInvest, with an agreed term-out at 7.25% pa onto a 25-year commercial investment mortgage on completion of conversion to a Class 3 food and drink ground unit and five self-contained flats above.",
    challenge:
      "The asset was a former Class 1a retail unit on Leith Walk benefiting from the Trams to Newhaven extension (opened June 2023) which has materially shifted commercial yields and retail rents along the Leith Walk corridor, vacant possession at acquisition, with planning consent already granted by City of Edinburgh Council under the Scottish Use Classes Order for change of use to Class 3 food and drink ground floor plus five self-contained flats above on the upper floors. The investor's plan: structural conversion works (£165K budget, internal demolition of the retail fit-out, Class 3 ground floor partition with new kitchen extract, five 1- and 2-bed flat fit-out on the upper floors, services upgrade), then re-let on a single Class 3 FRI lease to a regional independent F and B operator on the ground and assured shorthold tenancies on the five flats above.\n\nNo investment lender would fund the asset at acquisition because there was no income and the conversion was not yet built, but the income was clearly deliverable inside 9 to 12 months. Bridge-to-let was the right answer; the question was getting the term-out commitment locked at acquisition rather than hoping to refinance later in a different rate environment.",
    solution:
      "LendInvest quoted a 12-month bridge at 0.85% per month (10.20% pa equivalent) at 74% LTV against open-market vacant possession value, with the agreed term-out at 7.25% pa onto a 25-year amortisation on completion of letting. Both offers issued together at acquisition, the term-out was conditional on the Class 3 FRI lease completing at minimum £38K pa and the five AST flats stabilising at 95% occupancy.\n\nConversion works completed in 6 months. The Class 3 unit re-let on a 7-year FRI at £42K pa to a regional independent F and B operator at month 7. The five flats stabilised at month 8. Term-out drew at month 9, replacing the bridge with a 25-year commercial investment mortgage at the agreed 7.25% pa. Standard security registered with Registers of Scotland on both legs.",
    outcome:
      "Total bridge cost £88K over 9 months, inside the value-add envelope. Stabilised asset at exit valued at £1.95M (against £1.55M acquisition + £165K capex), generating £230K of equity uplift before the long-term hold. Investor has used the bridge-to-let model twice more along the Leith Walk and Constitution Street corridor.",
    keyStats: [
      { label: "Bridge facility", value: "£1.15M" },
      { label: "Acquisition value", value: "£1.55M" },
      { label: "Bridge LTV", value: "74%" },
      { label: "Bridge rate", value: "0.85% pm" },
      { label: "Term-out rate", value: "7.25% pa" },
      { label: "Stabilised value", value: "£1.95M" },
    ],
    coordinates: [55.9760, -3.1670],
  },
  {
    id: "cs-007",
    title: "Dental practice freehold purchase, Morningside",
    slug: "morningside-dental-practice-owner-occupier",
    borough: "Morningside and Bruntsfield",
    boroughSlug: "morningside-bruntsfield",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£885K",
    gdv: "£1.25M",
    ltv: "71%",
    term: "25 years",
    units: 1,
    schemeType: "Owner-occupier mixed NHS-and-private dental practice freehold",
    summary:
      "An established Morningside dental partnership acquired the freehold of its practice premises (EH10) for £1.25M with an £885K owner-occupier commercial mortgage at 71% LTV, 25-year term, 6.55% pa via Barclays.",
    challenge:
      "Established mixed NHS-and-private dental practice, three principals, five surgeries, trading from leased Morningside Road premises for eleven years inside the affluent suburban professional-services belt of Morningside and Bruntsfield. NHS contract value £445K pa supplemented by a stable private-fee mix; the practice sits inside an affluent EH10 catchment with strong year-on-year private-fee growth. Turnover £985K, EBITDA £305K on the most recent full year.\n\nThe freeholder offered the property at £1.25M open market valuation with a four-month decision window through the missives process. The partnership had £365K deposit available from accumulated retained earnings. The challenge was matching the deal to a high-street commercial desk willing to give meaningful rate competition on a defensive regulated-profession sector with Scottish-security comfort. The Barclays Edinburgh commercial desk runs a deep Scottish healthcare book and Cambridge and Counties prices keenly on central-Scotland SME freeholds.",
    solution:
      "Barclays commercial banking quoted 6.55% pa over 25 years at 71% LTV (£885K against £1.25M valuation). EBITDA cover at 2.38x stressed, comfortable margin for the regulated profession sector. NatWest and Cambridge and Counties also quoted; Barclays offered the cleanest covenant package on personal guarantee structure and the longest term.\n\nThe credit submission ran on three years of audited partnership accounts, the NHS contract evidence, principal-level CV pack and GDC registration evidence, deposit proof, the building survey and a clean dental decontamination compliance report. Specialist Scottish healthcare RICS valuer instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Missives concluded at week 4. Standard security registered with Registers of Scotland and settlement completed at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the partnership's four-month decision window. Monthly mortgage payment £5,985 against monthly EBITDA of £25,420, very strong cover. Rate saving against the high-street alternative quoted: approximately £12K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£885K" },
      { label: "Property value", value: "£1.25M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "6.55% pa" },
      { label: "Term", value: "25 years" },
      { label: "EBITDA cover", value: "2.38x" },
    ],
    coordinates: [55.9300, -3.2080],
  },
  {
    id: "cs-008",
    title: "Retail tenant refinance, St James Quarter",
    slug: "st-james-quarter-retail-tenant-refinance",
    borough: "Princes Street and St James Quarter",
    boroughSlug: "princes-street-st-james",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£2.95M",
    gdv: "£4.15M",
    ltv: "71%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Single-let prime retail investment, St James Quarter / Multrees Walk corridor",
    summary:
      "A central-belt investor refinanced a single-let prime retail investment on the St James Quarter and Multrees Walk corridor (EH1) off a maturing 5-year fix with a £2.95M commercial investment mortgage at 71% LTV, 20-year amortisation, 7.25% pa via Santander.",
    challenge:
      "Prime retail investment at the northern end of the Princes Street, St James Quarter and Multrees Walk retail spine, let to an international luxury retail covenant on a 10-year FRI with 7 years unexpired at refinance. Net rent £225K pa, valued at £4.15M by the lender's panel valuer. St James Quarter is Nuveen's £1bn flagship retail, leisure and hotel scheme which opened in June 2021 and anchors the north end of Princes Street; Multrees Walk is the established luxury spine with Harvey Nichols, Louis Vuitton and Mulberry anchors. The investor was carrying a maturing 5-year fix at 5.45% pa and wanted a fresh 5-year fix at the right rate.\n\nPrime retail in the St James Quarter and Multrees Walk catchment underwrites cleanly on the strength of the covenant and the scheme anchoring, but the lender needs to be comfortable with the post-pandemic prime retail view and with Scottish security. The Santander Edinburgh commercial desk prices the corridor competitively when the covenant is investment grade.",
    solution:
      "Santander quoted 7.25% pa on a 5-year fix inside a 20-year amortisation at 71% LTV (£2.95M against £4.15M valuation). ICR cover at 158% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin on an investment-grade luxury retail covenant.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts, the St James Quarter scheme position, the broader Multrees Walk catchment evidence, occupancy track record, the SPV pack and the deposit proof. RICS Red Book valuation by a specialist Scottish prime retail valuer in 16 working days. Standard security drafted by a Scottish solicitor on Santander's approved panel. Full credit approval at week 4, missives concluded at week 5, settlement and registration with Registers of Scotland at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years. Monthly interest cost approximately £18K pa below the high-street incumbent's quoted rate over the 5-year fix. Investor has subsequently used the same lender route for a second prime retail acquisition further down George Street.",
    keyStats: [
      { label: "Facility", value: "£2.95M" },
      { label: "Property value", value: "£4.15M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "7.25% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "ICR", value: "158%" },
    ],
    coordinates: [55.9540, -3.1900],
  },
  {
    id: "cs-009",
    title: "Coastal regen mixed-use acquisition, Portobello",
    slug: "portobello-coastal-regen-mixed-use",
    borough: "Portobello",
    boroughSlug: "portobello",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£985K",
    gdv: "£1.45M",
    ltv: "68%",
    term: "25 years (5yr fix)",
    units: 3,
    schemeType: "Three-unit mixed-use Class 1a retail and Class 3 F&B parade, Portobello High Street",
    summary:
      "A Lothians-based investor acquired a three-unit mixed-use Class 1a retail and Class 3 F and B parade on Portobello High Street (EH15) for £1.45M with a £985K commercial investment mortgage at 68% LTV, 25-year amortisation, 7.45% pa via InterBay Commercial.",
    challenge:
      "Three-unit mixed-use parade on Portobello High Street, the established coastal-regen leisure and independent retail corridor on Edinburgh's eastern beachfront, two minutes from the Promenade. Mixed tenant covenant base: one independent Class 3 coffee operator on a 7-year FRI with 5 years unexpired, one Class 3 fish-and-chip restaurant on a 5-year FRI and one Class 1a specialist food retailer on a 5-year FRI. Weighted average unexpired lease term 4.8 years. Combined gross rent £92K pa, valuation £1.45M.\n\nPortobello has shifted from secondary coastal retail to a meaningful independent-retail and F and B destination over the past five years, supported by the wider Edinburgh staycation and coastal-leisure profile, but lenders unfamiliar with the catchment can underwrite cautiously. The brief was a 25-year facility with a fresh 5-year fix structured around the blended covenant base. Three lenders quoted; the cleanest route was the InterBay Commercial mixed-use desk which prices the Portobello High Street catchment on real comparable evidence rather than assumption.",
    solution:
      "InterBay Commercial quoted 7.45% pa on a 5-year fix inside a 25-year amortisation at 68% LTV (£985K against £1.45M valuation). Blended ICR cover at 162% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the three-tenant blended covenant base.\n\nThe credit submission included three FRI leases, tenant covenant packs on the coffee operator and the fish-and-chip restaurant, three-year rent collection history at 98% on-time across the parade, the SPV pack and the Portobello High Street planning history. Specialist Scottish mixed-use valuer with Portobello comparables on file. Missives concluded at week 5. Standard security registered with Registers of Scotland and settlement completed at week 9 from initial enquiry.",
    outcome:
      "Acquisition completed on a clean 25-year structure. Rate certainty for five years across the parade. The investor has subsequently approached us about a Portobello Promenade single-unit acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£985K" },
      { label: "Property value", value: "£1.45M" },
      { label: "LTV", value: "68%" },
      { label: "Rate", value: "7.45% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "Blended ICR", value: "162%" },
    ],
    coordinates: [55.9540, -3.1080],
  },
  {
    id: "cs-010",
    title: "Office investment refinance, RBS Gogarburn-adjacent",
    slug: "rbs-gogarburn-adjacent-office-investment",
    borough: "Edinburgh Park and South Gyle",
    boroughSlug: "edinburgh-park-south-gyle",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£3.45M",
    gdv: "£4.95M",
    ltv: "70%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Single-let Grade A office investment, RBS Gogarburn-adjacent corridor",
    summary:
      "A Scottish institutional investor refinanced a single-let Grade A office investment on the RBS Gogarburn-adjacent South Gyle corridor (EH12) off a maturing 5-year fix with a £3.45M commercial investment mortgage at 70% LTV, 20-year amortisation, 6.95% pa via NatWest.",
    challenge:
      "32,000 sqft of modern Grade A office space on the South Gyle corridor immediately adjacent to the Royal Bank of Scotland / NatWest Group headquarters at Gogarburn, registered office of NatWest Group plc with around 8,000 staff on site, and a short drive from Edinburgh Park, Edinburgh Gateway station, the tram line and Edinburgh Airport. Let to a national financial services back-office operator on a 12-year FRI with 9 years unexpired at refinance, supported by the broader Gogarburn, Edinburgh Park and South Gyle financial services labour shed. Net rent £358K pa, valued at £4.95M.\n\nThe investor was carrying a maturing 5-year fix at 5.15% pa and wanted a fresh 5-year fix at the right rate. Single-let Grade A office investment to a financial services back-office covenant in the Gogarburn / Edinburgh Park / South Gyle catchment underwrites cleanly because the underlying covenant and the strategic-employment cluster both read favourably to lenders. The challenge was getting the rate to where it should price on the strength of the covenant rather than the post-pandemic prime office discount that several desks default to.",
    solution:
      "NatWest commercial banking quoted 6.95% pa on a 5-year fix inside a 20-year amortisation at 70% LTV (£3.45M against £4.95M valuation). ICR cover at 168% stressed at a notional rate 1.5 percentage points above pay rate, very strong margin on the investment-grade financial services back-office covenant.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts, the Gogarburn and Edinburgh Park strategic-employment catchment evidence, occupancy track record, the SPV pack and the deposit proof. Scottish RICS Red Book valuation by a specialist commercial valuer with current South Gyle and Edinburgh Park comparables in 17 working days. Standard security drafted by a Scottish solicitor on NatWest's approved panel; missives concluded at week 4. Full credit approval at week 4, settlement and registration with Registers of Scotland at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years. Monthly interest cost approximately £24K pa below the high-street incumbent's quoted rate over the 5-year fix. The investor has subsequently used the same lender route for a second South Gyle Grade A office acquisition on the strength of the relationship.",
    keyStats: [
      { label: "Facility", value: "£3.45M" },
      { label: "Property value", value: "£4.95M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "6.95% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "ICR", value: "168%" },
    ],
    coordinates: [55.9350, -3.3220],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
