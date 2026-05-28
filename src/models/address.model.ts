import type { LatLngTuple } from "leaflet";

export interface Address {
  property: string;
  city: string;
  postcode: string;
  country: string;
  coordinates: LatLngTuple;
}
