import AboutUs from "./components/AboutUs";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import RSVP from "@/components/RSVP";
import { WhatToExpect } from "@/components/WhatToExpect";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <RSVP />
      <AboutUs />
      <WhatToExpect />
    </>
  );
}

export default App;
