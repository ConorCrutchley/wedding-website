import ContentSection from "@/components/ContentSection";
import sections from "@/constants/sections.json";
import tobiAndConor from "@/assets/tobi-and-conor-dressed-smart-and-smiling-after-getting-engaged.webp";

const AboutUs = () => {
  return (
    <ContentSection
      id={sections["about-us"]}
      includeFlower={false}
      roundTopBorders
    >
      <h2>About Us</h2>
      <img
        src={tobiAndConor}
        alt="Tobi and Conor dressed smart and smiling after getting engaged"
      />
      <h3>How did you first meet?</h3>
      <p>
        We first met on Hinge. One of Tobi's prompts was that she's born on the
        29th February. I always wondered when leap year babies celebrate their
        birthday, so I started the conversation asking just that... and we
        haven't stopped talking since.
      </p>
      <p>
        For those interested, Tobi celebrates her birthday on both the 28th of
        February and the 1st of March, and on all three days when it's a leap
        year!
      </p>
      <hr />
      <h3>Who made the first move? How?</h3>
      <p>
        Conor made the first move. We started talking on Hinge around Christmas,
        and I asked him if he had any new years resolutions. He said "My main
        resolution is to go on a date with you". We organised to meet up from
        there.
      </p>
      <hr />
      <h3>What was your most memorable date?</h3>
      <p>
        There's so many to choose from, we love to going out and doing new
        things. We always talk about our first date though. We went to Zizi's in
        the mailbox and got chatting over some great food. We were both nervous,
        Tobi was even doing a nervous dance in between each bite.
      </p>
      <p>
        We soon warmed to each other though, and things got competitive when we
        moved onto bowling at Lane 7 afterwards. I'd been before Christmas and
        done pretty well, so thought it would be a good chance to impress
        Tobi... I then proceeded to play terribly and Tobi won.
      </p>
      <p>
        After some drinks and some games at the arcade, I walked Tobi home. It
        being January, it was really cold, and I mentioned that Tobi's gloves
        looked warm. I asked if I could feel her gloves, she said yes, and then
        I held her hand all the way back before kissing her goodnight.
      </p>
      <p>
        I must have done something right on that first date as she agreed so a
        second... and a third... and a fourth... and here we are!
      </p>
      <hr />
      <h3>What's the best meal you have eaten together?</h3>
      <p>
        Bonehead in Birmingham, the chicken there is absolutely gorgeous. It's
        very close to the train station so if you're ever in town and fancy
        giving it a go, let us know, we'd love to go there again.
      </p>
      <hr />
      <h3>What's the most memorable trip you have taken together?</h3>
      <p>
        Our trip to Bath before Christmas was certainly memorable, it's where we
        got engaged! We'd been given a treasure hunt book that guides you around
        the city so we knew that was certainly a place we wanted to visit.
      </p>
      <p>
        We had a wonderful time visiting all the sites of the city, stopping off
        at all the famous pubs, and exploring all the shops; Bath is such a
        beautiful place and following the treasure hunt book was such a fun way
        to explore it.
      </p>
      <p>
        After a full day's adventuring, we were all set to go out for dinner. In
        the hotel room, just as we were about to leave, I asked Tobi if she had
        everything. She said she had, and I asked "Are you sure?" before getting
        on one knee and pulling out the ring.
      </p>
      <p>
        Tobi was so shocked, she couldn't stop saying "Oh my gosh" and "Is this
        real?". I had a whole speech in mind that I wanted to say, but my heart
        was beating so fast I kept fumbling my words. I got the most important
        words right though, "Will you marry me?" to which Tobi thankfully said
        "Yes".
      </p>
      <hr />
      <h3>The dorkiest thing about us is</h3>
      <p>
        We both love Death in Paradise! On our first date, we talked about the
        films and TV shows we're interested in and couldn't believe it when we
        both said we loved this show. But then again, who doesn't love a murder
        mystery set in the Carribean?
      </p>
      <hr />
      <h3>Where are you going for your honeymoon?</h3>
      <p>
        We're thinking of going on a Carribean cruise and visiting the island
        where Death in Paradise is filmed.
      </p>
    </ContentSection>
  );
};

export default AboutUs;
