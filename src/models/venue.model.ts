import type { LatLngTuple } from "leaflet";

export interface Venue {
  venueName: string;
  property: string;
  city: string;
  postcode: string;
  country: string;
  coordinates: LatLngTuple;
}
