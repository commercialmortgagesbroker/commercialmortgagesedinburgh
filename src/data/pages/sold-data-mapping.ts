/**
 * Sold-data mapping, Edinburgh (Commercial Mortgages context).
 *
 * NOTE: Scotland uses Registers of Scotland (RoS), NOT HM Land Registry.
 * Sold-data structure mirrors England/Wales for consistency across the
 * network — data sources for refresh are different (RoS monthly publication).
 *
 * All 12 Edinburgh districts read from the same edinburgh.json file.
 * On commercial mortgage pages, residential sold data is used as a temperature
 * gauge for the wider area, commercial owner-occupier and semi-commercial
 * pricing track the residential curve, even though commercial-tagged
 * registration data is much sparser.
 */

import edinburghData from "@/data/sold-data/edinburgh.json";

export interface SoldTransaction {
  price: number;
  date: string;
  postcode: string;
  propertyType: string;
  newBuild: boolean;
  tenure: string;
  address: string;
}

export interface SoldDataFile {
  updatedAt: string;
  townSlug: string;
  countySlug: string;
  stats: {
    medianPrice: number;
    medianByType: Record<string, number>;
    transactionCount12m: number;
    yoyChange: number;
    newBuildCount: number;
    existingCount: number;
    newBuildPremium: number | null;
  };
  recentTransactions: SoldTransaction[];
}

const DISTRICT_TO_TOWN: Record<string, { data: SoldDataFile; label: string }> = {
  "old-town-royal-mile": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "new-town-george-street": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "west-end-haymarket": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "princes-street-st-james": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "leith-newhaven": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "tollcross-fountainbridge": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "southside-meadows": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "morningside-bruntsfield": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  stockbridge: { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  portobello: { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "edinburgh-park-south-gyle": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
  "edinburgh-bioquarter-little-france": { data: edinburghData as SoldDataFile, label: "City of Edinburgh Council" },
};

export function getSoldDataForDistrict(slug: string):
  | { data: SoldDataFile; lpaLabel: string }
  | null {
  const entry = DISTRICT_TO_TOWN[slug];
  if (!entry) return null;
  return { data: entry.data, lpaLabel: entry.label };
}
