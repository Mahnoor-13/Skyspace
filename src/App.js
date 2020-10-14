import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhySkyspace from "./components/WhySkyspace";
import Features from "./components/Features";
import PrivacyandControl from "./components/PrivacyandControl";
import Security from "./components/Security";
import Technology from "./components/Technology";
import OpenSource from "./components/OpenSource";
import Communtiy from "./components/Community";
import PricingPlan from "./components/PricingPlan";
import TrySkySpace from "./components/TrySkySpace"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WhySkyspace />
      <Features />
      <PrivacyandControl />
      <Security />
      <Technology />
      <OpenSource />
      <Communtiy />
      <PricingPlan />
      <TrySkySpace/>
      <Footer/>
    </div>
  );
}
export default App;
