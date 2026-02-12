import AboutUs from "@/components/AboutUs";
import Background from "@/components/Background";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import RSVP from "@/components/RSVP";
import Schedule from "@/components/Schedule";
import Travel from "@/components/Travel";
import WeddingParty from "@/components/WeddingParty";
import { WhatToExpect } from "@/components/WhatToExpect";
import { WhereToStay } from "@/components/WhereToStay";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <RSVP />
      <AboutUs />
      <WhatToExpect />
      <Travel />
      <WhereToStay />
      <Schedule />
      <FAQs />
      <WeddingParty />
    </>
  );
}

export default App;
