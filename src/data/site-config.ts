// Per-site configuration. The single CSS variable that varies between
// network sites is the accent triplet, see DESIGN-BRIEF.md §11.
export const siteConfig = {
  "name": "Commercial Mortgages Edinburgh",
  "domain": "commercialmortgagesedinburgh.co.uk",
  "locationName": "Edinburgh",
  "county": "edinburgh",
  "town": "edinburgh",
  "tagline": "Specialist commercial mortgages in Edinburgh and the Lothians",
  "description": "Specialist commercial mortgage broker for Edinburgh, the Lothians and central Scotland. Owner-occupier, investment, semi-commercial, portfolio, life sciences and trading-business finance from a 90+ lender panel. Indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa. Scotland-specific legal architecture (standard security, Registers of Scotland) handled end-to-end.",
  "keyword": "commercial mortgages edinburgh",
  "heroSubtitle": "Owner-occupier, investment, life sciences, semi-commercial and trading-business commercial mortgages, sourced from a 90+ lender panel and structured around your Edinburgh asset. Standard security under Scottish law. Indicative terms in 48 hours.",
  "phone": "07595 366094",
  "email": "enquiries@commercialmortgagesedinburgh.co.uk",
  "leadEmail": "commercialmortgagesbroker@gmail.com",
  "address": {
    "street": "Edinburgh",
    "city": "Edinburgh",
    "postcode": "",
    "country": "United Kingdom"
  },
  "coordinates": {
    "lat": 55.9533,
    "lon": -3.1883
  },
  "siteType": "commercial-mortgages",
  "siteMode": "primary",
  "primarySiteUrl": "https://commercialmortgagesedinburgh.co.uk",
  "satelliteSiteUrl": "https://edinburghcommercialmortgages.co.uk",
  "ccLocationUrl": "https://commercialmortgagesbroker.co.uk/locations/scotland/edinburgh",
  "accent": {
    "hex": "#3d3a9d",
    "hsl": "hsl(242, 45%, 42%)",
    "hue": 242
  },
  "stats": [
    { "value": "£250M+", "label": "Arranged" },
    { "value": "90+", "label": "Lenders" },
    { "value": "48hr", "label": "Decisions" },
    { "value": "75%", "label": "Max LTV" }
  ],
  "ghlSiteTag": "CommercialMortgagesEdinburgh",
  "ghlSource": "Commercial Mortgages Edinburgh Primary Website",
  "ghlWidgetId": ""
} as const;
