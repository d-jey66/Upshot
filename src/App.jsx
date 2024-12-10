import React from "react";
import Header1 from "./components/Header1"
import StyleGuide1 from "./components/StyleGuide1";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="font-sans">
      <Header1 />
      <main>
        <StyleGuide1 />
        <Portfolio />
        <Section />
      </main>
      <Footer />
    </div>
  );
};

export default App;