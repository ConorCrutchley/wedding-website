import type { LatLngTuple } from "leaflet";

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  location: {
    distance: number;
    walkTime: number;
    coordinates: LatLngTuple;
  };
  fullPrice: number;
  discountedPrice: number;
  images: string[];
  description: string;
  link: string;
}
