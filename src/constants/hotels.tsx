import type { Hotel } from "@/models/hotel.model";
import type { LatLngTuple } from "leaflet";
import aerodrome1 from "@/assets/hotels/aerodrome-1.webp";
import aerodrome2 from "@/assets/hotels/aerodrome-2.webp";
import aerodrome3 from "@/assets/hotels/aerodrome-3.webp";
import aerodrome4 from "@/assets/hotels/aerodrome-4.webp";
import aerodrome5 from "@/assets/hotels/aerodrome-5.webp";
import aerodrome6 from "@/assets/hotels/aerodrome-6.webp";
import grandSapphire from "@/assets/hotels/grand-sapphire-entrance.webp";
import hilton1 from "@/assets/hotels/hilton-1.webp";
import hilton3 from "@/assets/hotels/hilton-3.webp";
import hilton4 from "@/assets/hotels/hilton-4.webp";
import hilton5 from "@/assets/hotels/hilton-5.webp";
import hilton6 from "@/assets/hotels/hilton-6.webp";
import hilton7 from "@/assets/hotels/hilton-7.webp";
import hilton8 from "@/assets/hotels/hilton-8.webp";
import premierInn1 from "@/assets/hotels/premier-inn-1.webp";
import premierInn2 from "@/assets/hotels/premier-inn-2.webp";
import premierInn3 from "@/assets/hotels/premier-inn-3.webp";
import premierInn4 from "@/assets/hotels/premier-inn-4.webp";
import { venue } from "@/constants/venue";

const hiltonCoordinates: LatLngTuple = [
  51.35783819292506, -0.11519885831108768,
];
const aerodromeCoordinates: LatLngTuple = [
  51.35732828318965, -0.1169659531362527,
];
const premierInnCoordinates: LatLngTuple = [
  51.357075328020684, -0.11328304293272703,
];

export const hotels: Hotel[] = [
  {
    id: "grand-sapphire",
    name: venue.venueName,
    shortName: "Grand Sapphire",
    rating: 4,
    location: {
      distance: 0,
      walkTime: 0,
      coordinates: venue.address.coordinates,
    },
    fullPrice: 135,
    discountedPrice: 121.5,
    images: [grandSapphire],
    description: (
      <p>
        If you would like to stay at the wedding venue hotel, please call{" "}
        <a href="tel:02086862905">020 8686 2905</a> and ask to be connected to
        the reservations team. Please provide the reference number{" "}
        <strong>VAO31026</strong> to receive a 10% discount when completing your
        booking.
      </p>
    ),
    link: "tel:02086862905",
    address: venue.address,
  },
  {
    id: "hilton",
    name: "Hilton London Croydon",
    shortName: "Hilton",
    rating: 4,
    location: {
      distance: 0.2,
      walkTime: 5,
      coordinates: hiltonCoordinates,
    },
    fullPrice: 127,
    discountedPrice: 87,
    images: [hilton1, hilton3, hilton4, hilton5, hilton6, hilton7, hilton8],
    description: (
      <p>
        For those looking for a bit of luxury whilst they are celebrating with
        us, the Hilton hotel offers gorgeous rooms, fitness centre, spa and
        wellness centre, all within a short walk of the venue.
      </p>
    ),
    link: "https://withjoy.com/stays/38598965-65e9-4328-b954-b58cba5e6961?eventId=97da6535-0010-5af8-a8dc-da0be79f291c&provider=nuitee&currency=GBP&utm_medium=web&utm_source=website_accommodations_page&utm_campaign=accommodations_tile",
    address: {
      property: "101 Waddon Way",
      city: "Croydon",
      postcode: "CR9 4HH",
      country: "UK",
      coordinates: hiltonCoordinates,
    },
  },
  {
    id: "aerodrome",
    name: "London Croydon Aerodrome Hotel, BW Signature Collection",
    shortName: "Aerodrome",
    rating: 4,
    location: {
      distance: 0.1,
      walkTime: 3,
      coordinates: aerodromeCoordinates,
    },
    fullPrice: 110,
    discountedPrice: 82,
    images: [
      aerodrome1,
      aerodrome2,
      aerodrome3,
      aerodrome4,
      aerodrome5,
      aerodrome6,
    ],
    description: (
      <p>
        The Aerodrome Hotel is the closest hotel to the Grand Sapphire, and one
        of the most affordable. This 4 star hotel with a 7.7 rating on
        booking.com makes this hotel the best value for money nearby.
      </p>
    ),
    link: "https://withjoy.com/stays/f19b8bef-d609-42bf-bba1-2c71e94da625?eventId=97da6535-0010-5af8-a8dc-da0be79f291c&provider=zh&currency=GBP&utm_medium=web&utm_source=website_accommodations_page&utm_campaign=accommodations_tile",
    address: {
      property: "680 Purley Way",
      city: "Croydon",
      postcode: "CR9 4LT",
      country: "UK",
      coordinates: aerodromeCoordinates,
    },
  },
  {
    id: "premierInn",
    name: "Premier Inn London Croydon - Purley A23",
    shortName: "Premier Inn",
    rating: 3,
    location: {
      distance: 0.3,
      walkTime: 5,
      coordinates: premierInnCoordinates,
    },
    fullPrice: 86,
    discountedPrice: 72,
    images: [premierInn1, premierInn2, premierInn3, premierInn4],
    description: (
      <p>
        For those who are driving, the Premier Inn offers free parking for
        guests, all just a short walk away from the Grand Sapphire. This hotel
        is a great choice for those looking for a budget friendly option. Plus,
        with modern amenities like free Wi-Fi and on-site dining, you'll have
        everything you'll need for a comfortable stay.
      </p>
    ),
    link: "https://withjoy.com/stays/d1f18727-cec8-4e99-bf84-11045ff9eaf9?eventId=97da6535-0010-5af8-a8dc-da0be79f291c&provider=zh&currency=GBP&utm_medium=web&utm_source=website_accommodations_page&utm_campaign=accommodations_tile",
    address: {
      property: "619 Purley Way ",
      city: "Croydon",
      postcode: "CR0 4RQ",
      country: "UK",
      coordinates: premierInnCoordinates,
    },
  },
];
