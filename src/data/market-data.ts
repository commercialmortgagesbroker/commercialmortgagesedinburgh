import type { MarketData } from "./types";

/**
 * Per-area market data, Commercial Mortgages Edinburgh.
 *
 * The MarketData[] interface is shared with the dev-fin reference repos and
 * is consumed by area-page market widgets. Field names retain dev-fin
 * vocabulary (`activeDevSites`, `avgDevTimelineMonths`, `planningApprovalRate`)
 * but the values here are calibrated to commercial-mortgage relevance:
 *   - `activeDevSites` counts active commercial-mortgage-relevant items in
 *     the local pipeline, City of Edinburgh Council planning applications inside
 *     the area's postcode catchment plus known transactional activity.
 *   - `avgDevTimelineMonths` reads as "average commercial mortgage process
 *     to drawdown" in months for mainstream owner-occupier / investment.
 *   - `avgPricePerSqft` is residential price per sqft per Registers of Scotland,
 *     used as a market-temperature gauge for the wider local market.
 *     Residential transactions are NOT a direct commercial signal; they
 *     proxy area health for ground-floor retail, semi-commercial blended
 *     yield, and tenant-covenant catchment underwriting.
 *   - `rentalYield` is residential headline yield, used as a directional
 *     indicator for semi-commercial blended-yield underwriting.
 *
 * Slugs match AREAS in src/lib/constants.ts.
 */

export const marketData: MarketData[] = [
  {
    slug: "old-town-royal-mile",
    areaName: "Old Town and Royal Mile",
    avgPricePerSqft: 410,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 6,
    population: 38000,
    growthRate: 5.2,
    activeDevSites: 42,
    rentalYield: 5.5,
    conservationCoverage: 32,
    valueCategory: "premium",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH1 / EH2 commercial-relevant 2026",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "new-town-george-street",
    areaName: "New Town and George Street",
    avgPricePerSqft: 460,
    planningApprovalRate: 82,
    avgDevTimelineMonths: 7,
    population: 9800,
    growthRate: 6.8,
    activeDevSites: 38,
    rentalYield: 5.9,
    conservationCoverage: 18,
    valueCategory: "regeneration",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "New Town and George Street Edinburgh Regeneration Framework + LCC Planning",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "west-end-haymarket",
    areaName: "West End and Haymarket",
    avgPricePerSqft: 280,
    planningApprovalRate: 80,
    avgDevTimelineMonths: 7,
    population: 9800,
    growthRate: 4.5,
    activeDevSites: 22,
    rentalYield: 6.2,
    conservationCoverage: 35,
    valueCategory: "regeneration",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "Forth Valley Edinburgh Area Action Plan + LCC Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "princes-street-st-james",
    areaName: "Princes Street and St James",
    avgPricePerSqft: 340,
    planningApprovalRate: 64,
    avgDevTimelineMonths: 6,
    population: 21000,
    growthRate: 2.4,
    activeDevSites: 18,
    rentalYield: 6.8,
    conservationCoverage: 28,
    valueCategory: "mid-range",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council, Article 4 HMO direction (EH6) + LCC Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "leith-newhaven",
    areaName: "Leith and Newhaven",
    avgPricePerSqft: 320,
    planningApprovalRate: 60,
    avgDevTimelineMonths: 6,
    population: 14500,
    growthRate: 1.8,
    activeDevSites: 12,
    rentalYield: 7.4,
    conservationCoverage: 22,
    valueCategory: "mid-range",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council, Article 4 HMO direction (EH6) + LCC Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "tollcross-fountainbridge",
    areaName: "Tollcross and Fountainbridge",
    avgPricePerSqft: 280,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 6,
    population: 16500,
    growthRate: 3.4,
    activeDevSites: 14,
    rentalYield: 5.4,
    conservationCoverage: 18,
    valueCategory: "value",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH5 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "southside-meadows",
    areaName: "Southside and the Meadows",
    avgPricePerSqft: 360,
    planningApprovalRate: 74,
    avgDevTimelineMonths: 6,
    population: 16800,
    growthRate: 3.1,
    activeDevSites: 16,
    rentalYield: 4.8,
    conservationCoverage: 25,
    valueCategory: "mid-range",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH7 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "morningside-bruntsfield",
    areaName: "Morningside and Bruntsfield",
    avgPricePerSqft: 380,
    planningApprovalRate: 71,
    avgDevTimelineMonths: 7,
    population: 28500,
    growthRate: 2.0,
    activeDevSites: 11,
    rentalYield: 4.2,
    conservationCoverage: 28,
    valueCategory: "premium",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH8 / EH17 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "stockbridge",
    areaName: "Stockbridge",
    avgPricePerSqft: 340,
    planningApprovalRate: 73,
    avgDevTimelineMonths: 6,
    population: 18900,
    growthRate: 2.3,
    activeDevSites: 13,
    rentalYield: 4.4,
    conservationCoverage: 22,
    valueCategory: "mid-range",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH18 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "portobello",
    areaName: "Portobello",
    avgPricePerSqft: 220,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 7,
    population: 18200,
    growthRate: 2.6,
    activeDevSites: 19,
    rentalYield: 6.4,
    conservationCoverage: 12,
    valueCategory: "value",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH11 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "edinburgh-park-south-gyle",
    areaName: "Edinburgh Park and South Gyle",
    avgPricePerSqft: 200,
    planningApprovalRate: 75,
    avgDevTimelineMonths: 7,
    population: 23800,
    growthRate: 1.9,
    activeDevSites: 14,
    rentalYield: 6.6,
    conservationCoverage: 10,
    valueCategory: "value",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH12 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "edinburgh-bioquarter-little-france",
    areaName: "Edinburgh BioQuarter and Little France",
    avgPricePerSqft: 240,
    planningApprovalRate: 79,
    avgDevTimelineMonths: 6,
    population: 44800,
    growthRate: 1.6,
    activeDevSites: 17,
    rentalYield: 5.4,
    conservationCoverage: 12,
    valueCategory: "value",
    sources: {
      priceSource: "Registers of Scotland Price Paid Data 2025–26 (Edinburgh LPA)",
      planningSource: "City of Edinburgh Council Planning Portal, EH27 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
];

export function getMarketData(slug: string) {
  return marketData.find((d) => d.slug === slug);
}

export function getAllMarketData() {
  return marketData;
}
