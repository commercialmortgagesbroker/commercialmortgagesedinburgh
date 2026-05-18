/**
 * Area hero images, Unsplash CDN photo IDs for Edinburgh districts.
 */

export interface AreaImage {
  /** Unsplash CDN long-form photo ID. */
  id: string;
  /** Accessibility/SEO alt text. */
  alt: string;
}

export const AREA_IMAGES: Record<string, AreaImage> = {
  "old-town-royal-mile": {
    id: "1699021566217-f4ce5875b2e1",
    alt: "Edinburgh Old Town Royal Mile street with landmark civic architecture",
  },
  "new-town-george-street": {
    id: "1626010935539-710125f7e294",
    alt: "Edinburgh New Town George Street Georgian terraces",
  },
  "west-end-haymarket": {
    id: "1626011338434-2a000a7c63c0",
    alt: "Edinburgh West End Haymarket commercial street between buildings",
  },
  "princes-street-st-james": {
    id: "1699021565667-07f81d7d137c",
    alt: "Edinburgh Princes Street St James Quarter retail frontages",
  },
  "leith-newhaven": {
    id: "1603135946711-e2f73c019c44",
    alt: "Leith Newhaven Edinburgh waterfront with mixed-use buildings",
  },
  "tollcross-fountainbridge": {
    id: "1699021566678-edb0d7af1d5e",
    alt: "Tollcross Fountainbridge Edinburgh modern commercial street",
  },
  "southside-meadows": {
    id: "1697407503401-8991afe14b00",
    alt: "Southside Meadows Edinburgh landmark building with clock tower",
  },
  "morningside-bruntsfield": {
    id: "1699021566037-2079b9459957",
    alt: "Morningside Bruntsfield Edinburgh pedestrians in front of retail parade",
  },
  stockbridge: {
    id: "1683459269288-63ce626a67f2",
    alt: "Stockbridge Edinburgh town centre building with clock",
  },
  portobello: {
    id: "1626011789898-0b317546acb0",
    alt: "Portobello Edinburgh seafront commercial frontages",
  },
  "edinburgh-park-south-gyle": {
    id: "1638803702682-4b2c833e543f",
    alt: "Edinburgh Park South Gyle business park office buildings",
  },
  "edinburgh-bioquarter-little-france": {
    id: "1699818268277-242624112ff9",
    alt: "Edinburgh BioQuarter Little France life-sciences campus buildings",
  },
};

/** Canonical hero image for the /areas index page and city-wide contexts. */
export const AREAS_INDEX_IMAGE: AreaImage = {
  id: "1526637201259-da59cb348242",
  alt: "Edinburgh aerial skyline with development zones",
};

/** Safe lookup, returns the area image, or the canonical city image as fallback. */
export function getAreaImage(slug: string): AreaImage {
  return AREA_IMAGES[slug] ?? AREAS_INDEX_IMAGE;
}
