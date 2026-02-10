import type { Hotel } from "@/models/hotel.model";
import aerodrome1 from "@/assets/hotels/aerodrome-1.webp";
import aerodrome2 from "@/assets/hotels/aerodrome-2.webp";
import aerodrome3 from "@/assets/hotels/aerodrome-3.webp";
import aerodrome4 from "@/assets/hotels/aerodrome-4.webp";
import aerodrome5 from "@/assets/hotels/aerodrome-5.webp";
import aerodrome6 from "@/assets/hotels/aerodrome-6.webp";
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

export const hotels: Hotel[] = [
  {
    id: "hilton",
    name: "Hilton London Croydon",
    shortName: "Hilton",
    rating: 4,
    location: {
      distance: 0.2,
      walkTime: 5,
      coordinates: [51.35783819292506, -0.11519885831108768],
    },
    fullPrice: 127,
    discountedPrice: 87,
    images: [hilton1, hilton3, hilton4, hilton5, hilton6, hilton7, hilton8],
    description:
      "For those looking for a bit of luxury whilst they are celebrating with us, the Hilton hotel offers gorgeous rooms, fitness centre, spa and wellness centre, all within a short walk of the venue.",
    link: "https://withjoy.com/stays/38598965-65e9-4328-b954-b58cba5e6961?eventId=97da6535-0010-5af8-a8dc-da0be79f291c&provider=nuitee&currency=GBP&utm_medium=web&utm_source=website_accommodations_page&utm_campaign=accommodations_tile",
  },
  {
    id: "aerodrome",
    name: "London Croydon Aerodrome Hotel, BW Signature Collection",
    shortName: "Aerodrome",
    rating: 4,
    location: {
      distance: 0.1,
      walkTime: 3,
      coordinates: [51.35732828318965, -0.1169659531362527],
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
    description:
      "The Aerodrome Hotel is the closest hotel to the Grand Sapphire, and one of the most affordable. This 4 star hotel with a 7.7 rating on booking.com makes this hotel the best value for money nearby.",
    link: "https://withjoy.com/stays/f19b8bef-d609-42bf-bba1-2c71e94da625?eventId=97da6535-0010-5af8-a8dc-da0be79f291c&provider=zh&currency=GBP&utm_medium=web&utm_source=website_accommodations_page&utm_campaign=accommodations_tile",
  },
  {
    id: "premierInn",
    name: "Premier Inn London Croydon - Purley A23",
    shortName: "Premier Inn",
    rating: 3,
    location: {
      distance: 0.3,
      walkTime: 5,
      coordinates: [51.357075328020684, -0.11328304293272703],
    },
    fullPrice: 86,
    discountedPrice: 72,
    images: [premierInn1, premierInn2, premierInn3, premierInn4],
    description:
      "For those who are driving, the Premier Inn offers free parking for guests, all just a short walk away from the Grand Sapphire. This hotel is a great choice for those looking for a budget friendly option. Plus, with modern amenities like free Wi-Fi and on-site dining, you'll have everything you'll need for a comfortable stay.",
    link: "https://withjoy.com/stays/d1f18727-cec8-4e99-bf84-11045ff9eaf9?eventId=97da6535-0010-5af8-a8dc-da0be79f291c&provider=zh&currency=GBP&utm_medium=web&utm_source=website_accommodations_page&utm_campaign=accommodations_tile",
  },
];
