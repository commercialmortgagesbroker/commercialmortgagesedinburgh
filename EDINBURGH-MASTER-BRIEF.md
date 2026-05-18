# City Market Brief — Edinburgh, City of Edinburgh

> Shared brief for both Edinburgh domain PRDs (commercialmortgagesedinburgh.co.uk + edinburghcommercialmortgages.co.uk). Edinburgh is the first Scottish city in the CMB network, so this brief also documents the legal and data-architecture differences that apply to every Scottish site we build after it.

## City: Edinburgh, City of Edinburgh

Edinburgh is Scotland's capital and the **second-largest financial centre in the United Kingdom** after the City of London. Commercial property here is shaped by four forces: the **financial services labour shed** anchored by Royal Bank of Scotland (NatWest Group) at Gogarburn, Lloyds Banking Group on Lothian Road, and the Standard Life Aberdeen / abrdn cluster around St Andrew Square; the **tourism economy** built on the Edinburgh Festival, the Royal Mile, Edinburgh Castle and the August Fringe (around thirteen million visitors a year, heavily peaked in July and August); the **three-university student footprint** (University of Edinburgh circa 45,000 students, Heriot-Watt circa 10,000, Edinburgh Napier circa 20,000 — around 75,000 combined); and the **life-sciences and biotech cluster** at Edinburgh BioQuarter and the Roslin Innovation Centre south of the city.

The local authority is **City of Edinburgh Council**, a unitary authority covering a population of roughly 530,000, with a wider Lothians travel-to-work area of around 1.5 million. The council operates a devolved Scottish planning regime, which is materially different to English planning law and has a direct bearing on how we underwrite change-of-use deals. Most importantly for our purposes, Scotland uses **Registers of Scotland (RoS)** for property registration, not HM Land Registry, and the legal architecture of a commercial property loan is a **standard security**, not a mortgage in the strict English sense. Both points reshape several of our standard pages and require dedicated Scottish copy where the Leeds, Manchester and Portsmouth sites simply reused English defaults.

Edinburgh sits across the M8 from Glasgow and shares much of its commercial banking covenant book with Glasgow's lender desks, but reads quite differently on the ground: less industrial, more financial services head-office, more tourism, more premium retail, and more heritage-constrained stock in the World Heritage core.

### Snapshot stats

- **Median residential price (12m):** circa £330,000 — broadly stable.
- **Residential transactions (12m):** circa 3,500.
- **YoY price change:** +1 to +2% — flat-to-positive, in line with the wider Scottish market and noticeably steadier than the southern English coastal markets in our network.
- **Source caveat:** Scotland uses **Registers of Scotland**, not HM Land Registry. RoS publishes a monthly **House Price Statistics** release and an annual property market report. Figures are not directly comparable line-for-line with our Land Registry-derived town-stats JSON for English cities, and our pipeline currently has no RoS feed. We treat the Edinburgh residential market temperature as a separate Scottish dataset rather than a slot in the English Land Registry view.

### Sold-data digest

Scotland's data architecture differs from England in three ways that matter for this brief:

1. Property transactions are recorded in the **Land Register of Scotland** (operated by Registers of Scotland), not HM Land Registry. RoS publishes price data monthly with a similar lag to Land Registry but in a different schema.
2. **Land and Buildings Transaction Tax (LBTT)**, administered by Revenue Scotland, replaces Stamp Duty Land Tax. Commercial LBTT bands are different to English SDLT — non-residential rate thresholds and the Additional Dwelling Supplement are Scottish-specific.
3. Conveyancing runs through **Scottish solicitors**, with the offer-acceptance contract (**missives**) creating a binding contract earlier in the process than the English exchange model.

Top postcode clusters by transaction value and commercial-mortgage relevance:

- **EH3** — New Town core, Charlotte Square, premium offices and townhouse conversions.
- **EH1** — Old Town and Royal Mile, hospitality and heritage retail.
- **EH9** — Marchmont and Bruntsfield, the densest student-let belt around the University of Edinburgh.
- **EH10** — Morningside, premium suburban retail and dental / professional services freeholds.
- **EH6** — Leith and Newhaven, regeneration corridor with the Trams to Newhaven extension.
- **EH12** — West End, Haymarket, Murrayfield, Corstorphine, Edinburgh Park.

### Planning data

City of Edinburgh Council runs a **Public Access** planning portal at planning.edinburgh.gov.uk. Our pipeline does not currently have an Idox-style commercial export for Edinburgh, so we plan to **scrape Public Access at build time** for the change-of-use, Class 1a/2/3 (the Scottish Use Classes Order equivalents), hotel, sui generis and HMO licence streams. Approximate volume is around 3,000 applications per year across all uses.

Major live regeneration and capital projects shaping the commercial pipeline:

- **St James Quarter** — Nuveen's £1bn flagship retail, leisure and hotel scheme, opened June 2021, anchoring the north end of Princes Street.
- **Edinburgh Park** — Parabola's large-scale office, residential and life-sciences masterplan adjacent to Edinburgh Gateway station and the tram line; current tenants include Lloyds Banking Group, abrdn (Aberdeen Standard) and Diageo.
- **Edinburgh BioQuarter** — joint venture between NHS Lothian, University of Edinburgh, Scottish Enterprise and City of Edinburgh Council at Little France, adjacent to the Royal Infirmary; one of Europe's larger life-sciences clusters.
- **Granton Waterfront regeneration** — long-running mixed-use scheme on the north coast.
- **Trams to Newhaven extension** — opened June 2023, materially shifting commercial yields and retail rents along Leith Walk and into Newhaven.
- **Edinburgh Futures Institute** — University of Edinburgh's redevelopment of the old Royal Infirmary at Quartermile, opened 2024.

Planning is devolved under the Scottish Government. The **Planning (Scotland) Act 2019**, **National Planning Framework 4 (NPF4)** and the **Affordable Housing Investment Programme** all influence determination decisions, and the Scottish **Land Reform Act** affects rural and edge-of-city land assemblies. None of these have direct English equivalents in our existing copy.

### Commercial property anchors

- **Business and research parks:** Edinburgh Park (Parabola), South Gyle Business Park, Edinburgh BioQuarter (Little France, Royal Infirmary adjacent), Heriot-Watt Research Park (Riccarton), Roslin Innovation Centre (Easter Bush), Sighthill industrial and commercial estate.
- **Retail and mixed-use:** Princes Street, **St James Quarter** (Nuveen flagship), **Multrees Walk** (luxury — Harvey Nichols, Louis Vuitton, Mulberry), **George Street** (premium independents and F&B), Ocean Terminal at Leith, Cameron Toll shopping centre, Fort Kinnaird retail park on the east side.
- **Office quarters:** Charlotte Square (premium townhouse offices), George Street (premium and serviced offices), Lothian Road (Lloyds Banking Group HQ, Standard Life building, EICC), **Exchange district** (Edinburgh International Conference Centre, financial services), St Andrew Square (RBS / NatWest Group registered office and the abrdn cluster), Edinburgh Park (Lloyds, abrdn, Diageo), **Quartermile** (former Royal Infirmary site, mixed office and residential).
- **Leisure and hospitality:** Old Town tourist spine from the Castle down the Royal Mile to Holyrood, New Town hotels (The Balmoral, Waldorf Astoria Caledonian, Kimpton Charlotte Square, Gleneagles Townhouse), Leith F&B corridor (The Shore, Constitution Street, Leith Walk), Grassmarket and Cowgate late-night, George Street premium hotels and restaurants.
- **Healthcare:** Edinburgh Royal Infirmary at Little France (NHS Lothian, embedded in the BioQuarter), Western General Hospital (north-west), Royal Hospital for Children and Young People (co-located at Little France), private healthcare cluster around Murrayfield (Spire Murrayfield Hospital).

### Lender presence in Edinburgh

- **High-street commercial desks:** Royal Bank of Scotland Commercial (NatWest Group, HQ at Gogarburn — Edinburgh is the registered office of NatWest Group plc), Lloyds Bank Commercial (Lothian Road), **Bank of Scotland Commercial** (the Scottish brand of Lloyds Banking Group, retained for Scottish covenant), HSBC UK Commercial, Santander Corporate, Barclays Business.
- **Scottish-specific:** Clydesdale Bank Commercial / **Virgin Money UK** (Glasgow HQ but Edinburgh-active across SME and mid-market), TSB Commercial (Edinburgh-listed brand).
- **Challengers:** Allica Bank, Hampshire Trust Bank, Shawbrook, OakNorth, Cynergy Bank, YBS Commercial, Aldermore, Paragon, Together.
- **Specialist and bridging:** LendInvest, Foundation Home Loans, Cumberland Building Society (north-of-border friendly), Hodge.
- **Scottish legal note for lenders:** the security document is a **standard security** under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the Land Register of Scotland. Enforcement runs through the **Sheriff Court**, not the County Court, and uses **calling-up notices** rather than English possession proceedings. Several English challenger lenders are perfectly happy lending against Scottish security but route the file to Scottish solicitors on their panel; a smaller number do not lend in Scotland at all. We make this clear on the placement pages.

### Sub-areas to cover (12)

1. **Old Town and Royal Mile (EH1)** — heritage retail, hospitality, World Heritage constraint.
2. **New Town and George Street (EH2/EH3)** — Charlotte Square, St Andrew Square, premium office and luxury retail.
3. **West End and Haymarket (EH3/EH12)** — office, hotel and the Haymarket station catchment.
4. **Princes Street and St James Quarter (EH1/EH2)** — primary retail spine plus Nuveen's flagship.
5. **Leith and Newhaven (EH6)** — Trams to Newhaven extension, Ocean Terminal, F&B-led regeneration.
6. **Tollcross and Fountainbridge (EH3/EH11)** — mixed-use, Edinburgh Quay, residential-led but commercial corners.
7. **Southside and the Meadows (EH8/EH9)** — University of Edinburgh halo, student-led F&B, Nicolson Street / South Bridge.
8. **Morningside and Bruntsfield (EH9/EH10)** — premium suburban retail, professional services freeholds, dental and veterinary.
9. **Stockbridge (EH3/EH4)** — independent retail, F&B, boutique hotels.
10. **Portobello (EH15)** — coastal regeneration, leisure, growing F&B and independent retail.
11. **Murrayfield and Corstorphine (EH12)** — Murrayfield Stadium, Edinburgh Zoo, suburban office and retail.
12. **Edinburgh Park and South Gyle (EH12)** — Parabola business park, Edinburgh Gateway, Edinburgh Airport adjacent.

### Demand-side signals

- **Largest employers and job clusters:** NatWest Group (RBS) at Gogarburn (around 8,000 staff), Lloyds Banking Group on Lothian Road and at Edinburgh Park, abrdn (Standard Life Aberdeen) around St Andrew Square, Diageo at Edinburgh Park, Scottish Government (St Andrew's House and Victoria Quay), City of Edinburgh Council, NHS Lothian, University of Edinburgh (around 17,000 staff), Heriot-Watt and Edinburgh Napier, Sky (Edinburgh contact and tech hub), Tesco Bank.
- **University presence:** approximately 75,000 students combined across the three universities, supporting a large student-let and HMO market plus year-round F&B in Marchmont, Newington and Tollcross.
- **Tourism profile:** approximately 13 million visitors a year, heavily peaked around the **Edinburgh Festival** and **Fringe** in July and August, with a secondary peak at Hogmanay. Drives hotel, short-let, hospitality and serviced-apartment mortgage demand.
- **Life sciences and bio:** Edinburgh BioQuarter at Little France and Roslin Innovation Centre south of the city sustain steady lab, office and incubator demand.
- **Financial services covenant:** Edinburgh has the deepest financial services labour shed in our network, which underpins prime office rents on Lothian Road, Charlotte Square and at Edinburgh Park.

### Data gaps

- **Registers of Scotland feed is not yet in our pipeline.** We will need to either subscribe to a RoS extract or scrape the monthly House Price Statistics release. Until then, the Edinburgh sold-data digest is hand-built rather than auto-refreshed.
- **City of Edinburgh Council planning data** is not in our Idox-style network export. We plan to scrape **planning.edinburgh.gov.uk** at build time and again on each refresh.
- **Companies House charges register** is useful in Scotland in the same way it is in England, since debentures and standard securities granted by Scottish companies are filed there. We expect the Companies House debenture flow to be one of the better proxies for commercial mortgage activity until we have a clean RoS feed.
- **HMO licensing data** in Scotland is administered by City of Edinburgh Council under a different statutory regime to the English Housing Act 2004 — licences are mandatory for any three-or-more unrelated occupants, which is a much wider net than England's five-plus threshold. The HMO licence register is a separate demand signal we should pull in.
- **EPC commercial register** for Scotland is held by the Scottish Government, not the English MHCLG register — different URL, different schema.

### Scotland-specific legal note for commercial mortgages

Every page on the Edinburgh sites that uses the word "mortgage" in a strictly legal sense needs Scottish-aware copy. The instrument is a **standard security** registered in the **Land Register of Scotland**. The contract for sale is created through the exchange of **missives** between solicitors, not through English-style exchange of contracts. Enforcement on default proceeds via a **calling-up notice** and, if necessary, action in the **Sheriff Court** rather than the County Court. **Land and Buildings Transaction Tax (LBTT)** replaces Stamp Duty Land Tax, with different commercial thresholds. Several English-headquartered lenders are happy to lend against Scottish security but use Scottish solicitors on their panel; a small minority do not lend in Scotland at all, and we flag this on the placement and product pages.

We are a commercial finance broker. We are **not authorised by the Financial Conduct Authority**, because commercial mortgages on non-residential investment and trading property fall outside the FCA's regulated mortgage regime. We never claim FCA authorisation on any Edinburgh page.
