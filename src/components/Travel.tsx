import ContentSection from "@/components/ContentSection";
import { scrollToSection } from "@/utils/scrollToSection";
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
      <hr />
      <h3>By Car</h3>
      <p>The venue is located just off the A23. It is appoximately:</p>
      <ul>
        <li>Less than 1 hour from Central London</li>
        <li>Less than 1 hour from Heathrow</li>
        <li>30 minutes from Gatwick</li>
        <li>2.5 - 3 hours from Birmingham</li>
      </ul>
      <p>
        There is limited parking at the venue which is reserved for the wedding
        party and immediate family members of the bride and groom.
      </p>
      <p>
        There are car parks on retail parks and paid parking options nearby.
        However, we recommend booking and hotel and parking on the car park
        there. The Premier Inn nearby has free parking for hotel guests. You can
        find out more about nearby hotels in the{" "}
        <a
          href={`#${sections["where-to-stay"]}`}
          onClick={(e) => {
            // Prevent the default behavior of the link
            // and scroll to the section
            e.preventDefault();
            scrollToSection(sections["where-to-stay"]);
          }}
        >
          Where To Stay
        </a>{" "}
        section.
      </p>
      <hr />
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
      <hr />
      <h3>By Air</h3>
      <p>
        London is home to a few airports. The one closest to the venue is
        Gatwick and it should take roughly half an hour via car/taxi to get to
        the venue from here. The most popular airport would be Heathrow.
        Travelling from Heathrow should talke less than 1 hour via car/taxi.
      </p>
      <hr />
      <h3>Things to do</h3>
      <p>
        For those stopping overnight, over the weekend, or even longer, you may
        be wondering what there is to do in the area once the wedding has
        finished. We've come up with a list of things to do/places you may want
        to visit before heading back home.
      </p>
      <h4>Sites to See</h4>
      <p>
        There are plenty of sites to see and places to visit not just in London
        but in Croydon as well. Here are our top picks for places to visit while
        you're here:
      </p>
      <ul>
        <li>
          <a href="https://www.nhm.ac.uk/" target="_blank" rel="noreferrer">
            Natural History Museum
          </a>
          <br />A jaw-dropping museum packed with towering dinosaur skeletons,
          sparkling gemstones, and hands-on exhibits that make science feel like
          an adventure.
        </li>
        <li>
          <a
            href="https://www.hrp.org.uk/tower-of-london/"
            target="_blank"
            rel="noreferrer"
          >
            Tower of London
          </a>
          <br />
          Step inside this legendary fortress to discover dramatic royal
          history, famous prisoners, and the dazzling Crown Jewels.
        </li>
        <li>
          <a
            href="https://www.wbstudiotour.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            Warner Brothers Studio Tour
          </a>
          <br />
          Go behind the scenes of the wizarding world and wander through real
          sets, props, and costumes from the Harry Potter films.
        </li>
        <li>
          <a
            href="https://www.historiccroydonairport.org.uk/"
            target="_blank"
            rel="noreferrer"
          >
            Croydon Airport Visitor Centre
          </a>
          <br />
          Travel back to the golden age of aviation at Britain's first
          international airport and explore the historic terminal where early
          commercial flights first took off.
        </li>
        <li>
          <a
            href="https://museumofcroydon.com/"
            target="_blank"
            rel="noreferrer"
          >
            Museum of Croydon
          </a>
          <br />
          Discover Croydon's story through interactive exhibits, local art, and
          fascinating snapshots of the town's past and present.
        </li>
      </ul>
      <h4>Theatre Shows</h4>
      <p>
        London is home to the iconic West End, a world-class theatre scene
        packed with unforgettable shows. If you fancy making a night of it while
        you're in town, these productions will be lighting up the stage around
        the time of the wedding:
      </p>
      <ul>
        <li>
          <a
            href="https://www.londontheatre.co.uk/show/302-the-lion-king-tickets"
            target="_blank"
            rel="noreferrer"
          >
            The Lion King
          </a>
        </li>
        <li>
          <a
            href="https://www.londontheatre.co.uk/show/313-wicked-tickets"
            target="_blank"
            rel="noreferrer"
          >
            Wicked
          </a>
        </li>
        <li>
          <a
            href="https://www.londontheatre.co.uk/show/45407-beetlejuice-the-musical"
            target="_blank"
            rel="noreferrer"
          >
            Beetlejuice
          </a>
        </li>
        <li>
          <a
            href="https://www.londontheatre.co.uk/show/305-matilda-the-musical-tickets"
            target="_blank"
            rel="noreferrer"
          >
            Matilda The Musical
          </a>
        </li>
        <li>
          <a
            href="https://www.londontheatre.co.uk/show/44232-paddington-the-musical"
            target="_blank"
            rel="noreferrer"
          >
            Paddington The Musical
          </a>
        </li>
      </ul>
      <h4>For those with kids</h4>
      <p>
        Croydon is full of great activities to keep the kids buzzing with energy
        and imagination! From high-flying fun at trampoline parks to
        mission-style adventures in spy-themed activity centres, and plenty of
        soft-play spots perfect for little ones to climb, slide, and explore,
        there's something for every age to enjoy right here in town.
      </p>
      <ul>
        <li>
          <a
            href="https://kidspaceadventures.com/croydon"
            target="_blank"
            rel="noreferrer"
          >
            Kidspace Croydon
          </a>
          <br />
          Near to the venue and ideal for young kids, Kidspace offers
          interavtive sandboxes for the very young, play areas for toddlers and
          older kids, and for the more adventurous there's rock climbing, go
          karting, laser tag, and drone flying.
        </li>
        <li>
          <a
            href="https://oxygenactiveplay.co.uk/activity-parks/croydon/"
            target="_blank"
            rel="noreferrer"
          >
            Oxygen Active Play
          </a>
          <br />
          Also near the venue there is Oxygen, a trampoline park well suited for
          kids with lots of energy. There's trampolines, parkour, climing,
          softplay and even a battle beam for Gladiators fans to try their hand
          at.
        </li>
        <li>
          <a
            href="https://spymissions.co.uk/contact/croydon"
            target="_blank"
            rel="noreferrer"
          >
            Spy Missions
          </a>
          <br />
          With missions for kids aged 6-7, 8-14, and for adults and families
          too, anyone can live our their James Bond fantasies here and undertake
          in a mission of their own.
        </li>
      </ul>
    </ContentSection>
  );
};

export default Travel;
