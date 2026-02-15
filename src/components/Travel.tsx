import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";
import { venue } from "@/constants/venue";

const Travel = () => {
  return (
    <ContentSection id={sections["travel"]}>
      <h2>Travel</h2>
      <p>
        If you're unfamiliar with the area, we have wrote some helpful tips on
        how to get around the area below, and what you can do whilst you're in
        town.
      </p>
      <h3>Address</h3>
      <address>
        <p>
          {venue.venueName},<br />
          {venue.property},<br />
          {venue.city},<br />
          {venue.postcode},<br />
          {venue.country}
        </p>
      </address>
      <h3>By Car</h3>
      <p>The venue is located just off the A23. It is appoximately:</p>
      <ul>
        <li>Less than 1 hour from Central London</li>
        <li>Less than 1 hour from Heathrow</li>
        <li>30 minutes from Gatwick</li>
        <li>2.5 - 3 hours from Birmingham</li>
      </ul>
      <h3>By Train</h3>
      <p>
        For those travelling from the Midlands or other areas of the UK, the
        easiest train to catch will be the train to London Euston. From there,
        it will take just over 1 hour to get to the venue. If you take the tube,
        the simplest route will be:
      </p>
      <ul>
        <li>To take the Victoria line to Brixton from Euston Station.</li>
        <li>Get off at Victoria station (this will be 4 stops).</li>
        <li>Take the Southern line to Epsom Downs.</li>
        <li>Get off at Waddon station (this will be 10 stops).</li>
        <li>Walk for 20 minutes to get to the venue.</li>
      </ul>
      <p>
        Alternatively, you can take a quicker, though more complex route by:
      </p>
      <ul>
        <li>
          Taking the Northern line to Morden via Bank from Euston Station.
        </li>
        <li>Get off at London Bridge station (this will be 6 stops).</li>
        <li>Take the ThamesLink line to Brighton.</li>
        <li>Get off at East Croydon station (this will be non-stop).</li>
        <li>Take the 119 bus to Imperial Way (this will be 12 stops).</li>
        <li>Walk for 6 minutes to get to the venue.</li>
      </ul>
      <h3>By Air</h3>
      <p>
        London is home to a few airports. The one closest to the venue is
        Gatwick and it should take roughly half an hour via car/taxi to get to
        the venue from here. The most popular airport would be Heathrow.
        Travelling from Heathrow should talke less than 1 hour via car/taxi.
      </p>

      <h3>Things to do</h3>
    </ContentSection>
  );
};

export default Travel;
