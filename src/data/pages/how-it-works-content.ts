/**
 * /how-it-works page content, Commercial Mortgages Edinburgh.
 *
 * Five steps from enquiry to drawdown, each 150 to 200 words of real detail.
 * Required entities: RICS, valuation, solicitor, missives, completion, drawdown,
 * lender, standard security, Registers of Scotland, LBTT. Commercial mortgages
 * are unregulated lending, do NOT claim FCA authorisation in body copy. Voice:
 * editorial, broker-led, diagnostic, first-person plural ("we").
 *
 * Scotland-specific legal architecture: standard security under the
 * Conveyancing and Feudal Reform (Scotland) Act 1970, registered with
 * Registers of Scotland. Missives replace English exchange of contracts.
 * LBTT replaces SDLT, administered by Revenue Scotland.
 *
 * Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface HowItWorksContent {
  hero: {
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  process: {
    h2: string;
    steps: Array<{
      n: string;
      label: string;
      detail: string;
    }>;
  };
  criteria: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  timeline: {
    h2: string;
    body: string;
  };
}

export const howItWorksContent: HowItWorksContent = {
  hero: {
    h1: "How an Edinburgh commercial mortgage actually completes",
    lede:
      "Five steps from initial enquiry to settlement and drawdown. Indicative terms inside two business hours. RICS Red Book valuation in week two or three. Scottish solicitor instruction in parallel through the missives process. Standard security registered with Registers of Scotland at settlement. Funds drawn in 4 to 8 weeks for clean owner-occupier and investment deals; 6 to 10 weeks where the sector underwrite needs more work, such as an Edinburgh Park Grade A office investment refinance, a Marchmont HMO portfolio refinance, an Old Town heritage hotel acquisition, a Charlotte Square office acquisition or a Leith Walk mixed-use bridge-to-let.",
  },

  intro: {
    h2: "Commercial mortgage in one paragraph",
    body: [
      'A commercial mortgage is <strong>long-term debt secured against income-producing or owner-occupied commercial property</strong>. In Scotland the security instrument is a <strong>standard security</strong> under the Conveyancing and Feudal Reform (Scotland) Act 1970, registered in the <strong>Land Register of Scotland</strong> (operated by Registers of Scotland) rather than at HM Land Registry. In the Edinburgh market for mid-2026, facilities are typically structured at 65 to 75 percent LTV across 5 to 25 year terms, with monthly capital and interest payments. Rates run 6.0 to 9.0 percent pa depending on product, sector, LTV and covenant strength. Arrangement fees usually 1 to 2 percent of the facility, RICS Red Book valuation 1,500 to 8,000 pounds depending on asset complexity (Old Town heritage hospitality, Edinburgh BioQuarter life sciences specification, Charlotte Square A-listed townhouse offices and any New Town conservation-area work sit at the top of that band), and legal fees both sides. Land and Buildings Transaction Tax (LBTT), administered by Revenue Scotland, replaces Stamp Duty Land Tax with different commercial thresholds.',
      'The "how" splits into two halves: <strong>what each lender needs to see</strong> (covenant, EBITDA / ICR / DSCR cover, deposit, sector-specific evidence, comfort with Scottish security) and <strong>what the process looks like in calendar weeks</strong> (enquiry, indicative terms, full application, RICS valuation, credit approval, missives, standard security registration, drawdown). We handle both, packaging the application to match each lender desk\'s expectations, confirming the lender is happy lending against Scottish security on day one, and coordinating the timeline from your first call through the final settlement statement.',
    ],
  },

  process: {
    h2: "The five-step process from enquiry to drawdown",
    steps: [
      {
        n: "01",
        label: "Initial enquiry and free deal assessment, 2-hour response",
        detail:
          "You send us the basics: property type and address, purchase price or current valuation, deposit position, and either the last two years of business accounts (owner-occupier or trading-business) or the lease and rent roll (commercial investment). We read the deal against current Edinburgh lender appetite and call you back within two business hours during the working day. A recent Edinburgh Park (EH12) Grade A office investment refinance enquiry came in at nine in the morning and had a structured view back before lunch. The first conversation is diagnostic and free of charge, no application form, no credit check, no fees committed. We tell you whether the deal is fundable, where the likely friction sits, what the probable LTV and rate range look like, which two or three lender desks we would target first, which of those desks lend cleanly against Scottish security, and what evidence we will need to package the credit submission. If the numbers do not work, or if the lender list is constrained by Scottish-security appetite, you hear it on this call. No wasted valuer fees, no wasted Scottish legal time.",
      },
      {
        n: "02",
        label: "Lender shortlist and indicative terms, within 48 hours",
        detail:
          "We run the deal across three to five lender desks from the panel, typically a mix of high-street commercial (NatWest, Lloyds, HSBC UK, Barclays, Santander out of the Edinburgh and Glasgow regional desks that cover the central belt, plus Clydesdale Bank / Virgin Money UK and Bank of Scotland on the Scottish high-street side), challenger banks (Allica Bank, HTB, YBS Commercial, Aldermore, plus Cambridge and Counties on central-Scotland and Lothians deals) and specialists (InterBay Commercial, LendInvest, Cynergy Bank, Shawbrook) where the deal needs them, plus Paragon, Together, Foundation Home Loans and OakNorth on the HMO portfolio and bridge-to-let side. On a recent Edinburgh Park (EH12) Grade A office investment refinance we ran a four-lender shortlist back inside 36 hours, with a 70 percent LTV bid at 7.05 percent pa from a high-street commercial desk and a 72 percent LTV bid from a challenger 20 basis points wider. Indicative terms come back inside 48 hours: rate, LTV, term, repayment basis, EBITDA or ICR / DSCR cover, fees, conditions precedent, Scottish-security appetite confirmation, and the lender's appetite to commit. You see the alternatives side by side, with our view on which is the cleanest route and why.",
      },
      {
        n: "03",
        label: "Full application and RICS Red Book valuation",
        detail:
          "We package the credit submission to match the chosen lender's underwriting style. Owner-occupier: two years of filed accounts, current management figures, EBITDA workings, deposit proof, identity and source-of-funds documents. Investment: lease, tenant covenant pack, rent roll, the asset's historic occupancy, SPV pack if applicable. Trading-business: sector-specific evidence, occupancy and ADR for Old Town hospitality, Care Inspectorate reports for care, NHS contract value for dental, licensed-trade evidence for pubs and restaurants. On a recent Morningside dental owner-occupier acquisition the credit pack included three years of audited partnership accounts, the principal's CV pack, the NHS contract evidence and the deposit proof from retained earnings. The lender instructs the RICS Red Book valuation against its panel of approved Scottish valuers; the surveyor inspects the property and reports back, typically inside two to three weeks for mainstream commercial assets and three to five weeks for sector-specialist work such as an Old Town heritage hotel, a Charlotte Square A-listed townhouse office or a BioQuarter life sciences specification fit-out. We run the Scottish legal pack and missives drafting in parallel so we are not waiting in series.",
      },
      {
        n: "04",
        label: "Credit committee, missives concluded and formal mortgage offer",
        detail:
          "With the RICS valuation in hand and the credit pack complete, the lender's underwriter takes the case to credit committee. Committee meetings run weekly or fortnightly depending on the lender. The underwriter tests the EBITDA, ICR or DSCR cover at a stressed notional rate, reviews the valuation against the LTV requested, examines the borrower's accounts, the sector exposure on their book, the Scottish security position and any conditions precedent. Approval typically follows within one to two weeks of valuation sign-off on a clean case. The lender then issues a <strong>formal mortgage offer</strong> setting out the binding terms: rate, term, fees, standard security position, personal guarantee position, covenants and any conditions to satisfy before drawdown. In parallel, your Scottish solicitor negotiates and concludes <strong>missives</strong> with the seller's solicitor, the offer-and-acceptance contract that creates the binding sale, materially earlier in the process than the English exchange model. We review the lender offer with you in detail before you accept and coordinate the LBTT calculation with your solicitor so there are no surprises at settlement.",
      },
      {
        n: "05",
        label: "Standard security, settlement and drawdown of funds",
        detail:
          "On offer acceptance and missives conclusion, the lender instructs its Scottish solicitor and you instruct yours. The Scottish legal workstream covers the facility agreement, the <strong>standard security</strong> over the property under the Conveyancing and Feudal Reform (Scotland) Act 1970, any floating charge over a Scottish-incorporated SPV, any all-monies guarantee, the personal guarantee, title investigation, search results, planning compliance and the Scottish CPSE-equivalent replies. Standard commercial conveyancing in Scotland runs three to four weeks from instruction; complex or multi-asset cases longer. Once the solicitors are satisfied with conditions precedent, settlement (the Scottish term for completion) is fixed for a date that suits both sides. On the day of settlement the lender remits the funds to your solicitor; the disposition transfers title; the <strong>standard security registers with Registers of Scotland</strong>; LBTT is filed and paid; and your solicitor pays the seller or redeems the existing facility. <strong>Drawdown is a single tranche</strong>, commercial mortgages are not staged like development finance. Your monthly repayment cycle starts the following month. A typical Edinburgh settlement runs 4 to 8 weeks from indicative terms; our fastest clean owner-occupier on a Charlotte Square professional firm freehold acquisition was 30 working days from initial enquiry.",
      },
    ],
  },

  criteria: {
    h2: "What lenders need to see",
    items: [
      {
        label: "Trading history (owner-occupier)",
        detail:
          "Two years of clean filed accounts is the typical minimum. Specialists flex to 12 to 18 months in defensive regulated sectors, dental, GP, pharmacy, established trades, and the Edinburgh BioQuarter life sciences SME corridor where the underlying contracts and grant pipeline are visible.",
      },
      {
        label: "EBITDA cover (owner-occupier and trading-business)",
        detail:
          "Trading profit covering the monthly mortgage payment by 1.3 to 1.5 times for owner-occupier; 1.5 to 2.0 times for trading-business sectors. Old Town and New Town hospitality is stressed harder during July and August Festival peak occupancy to confirm out-of-Festival cover. Modelled before submitting.",
      },
      {
        label: "ICR cover (commercial investment)",
        detail:
          "Gross rent against interest cost at 140 to 160 percent stressed at a notional rate 1 to 2 percent above the pay rate. Strong tenant covenant on a long lease prices best. Edinburgh Park financial services tenants (Lloyds, abrdn, Diageo) and BioQuarter life sciences anchor leases underwrite particularly cleanly.",
      },
      {
        label: "Deposit",
        detail:
          "Typically 25 to 30 percent from genuine equity, accumulated retained profit, sale proceeds of another asset, or a family gift declared in writing. Not a second loan over the same security. LBTT is paid out of deposit, not financed, so the borrower needs to budget for the Revenue Scotland commercial bands separately.",
      },
      {
        label: "Sector-specific evidence (trading-business)",
        detail:
          "Care Inspectorate rating for care, NHS contract for dental, occupancy and ADR for hotel, licensed-trade evidence for pubs and restaurants, current HMO licence position on student-let portfolios, short-term lets licence position on Festival-let stock. The Morningside dental and Edinburgh BioQuarter healthcare ancillary corridors generate clean evidence packs.",
      },
      {
        label: "Realistic valuation",
        detail:
          "Lenders rely on the RICS Red Book valuation, not borrower or vendor estimates. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. Old Town and New Town listed-building cases require a Scottish valuer with conservation expertise.",
      },
      {
        label: "Lender appetite for Scottish security",
        detail:
          "A small minority of English-headquartered lenders do not lend in Scotland at all. Several others lend happily but route the file to a Scottish solicitor on their approved panel. We confirm Scottish-security appetite at first call so the shortlist is workable from day one.",
      },
    ],
  },

  timeline: {
    h2: "How long does an Edinburgh commercial mortgage take?",
    body:
      'From a clean enquiry through to settlement and drawdown: <strong>4 to 8 weeks</strong> for mainstream owner-occupier, commercial investment and semi-commercial. <strong>6 to 10 weeks</strong> for trading-business cases (Old Town heritage hospitality, Leith F and B, BioQuarter life sciences specification fit-out) and HMO portfolio refinance involving multi-property redemption sequencing across Marchmont, Bruntsfield, Newington and Southside. The critical-path item is almost always the RICS Red Book valuation, although on cross-border lender cases the Scottish solicitor panel allocation can also extend timing if not planned at first call. The fastest clean owner-occupier settlement on our recent record was <strong>30 working days</strong>, a Charlotte Square professional firm freehold acquisition where the borrower had two years of clean accounts ready, the Scottish solicitor moved quickly through missives, and the lender had recent comparable approvals on file at the same Edinburgh valuer.',
  },
};
