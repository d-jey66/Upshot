import React from "react";
import Header from "./components/header";
import StyleGuide from "./components/StyleGuide";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Section from "./components/section";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <StyleGuide />
        <Portfolio />
        <Section />
      </main>
      <Footer />
    </div>
  );
};

export default App;