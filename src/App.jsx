import React from "react";
import Header1 from "./components/Header1"
import StyleGuide1 from "./components/StyleGuide1";
import Portfolio1 from "./components/Portfolio1";
import Footer1 from "./components/Footer1";
import Section1 from "./components/Section1";

const App = () => {
  return (
    <div className="font-sans">
      <Header1 />
      <main>
        <StyleGuide1 />
        <Portfolio1 />
        <Section1 />
      </main>
      <Footer1 />
    </div>
  );
};

export default App;