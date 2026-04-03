import AboutUs from "@/components/AboutUs";
import Background from "@/components/Background";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import RSVP from "@/components/RSVP";
import Registry from "@/components/Registry";
import Schedule from "@/components/Programme";
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
      <Registry />
      <WeddingParty />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
