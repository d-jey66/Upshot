import React from "react";
import Header from "./components/Header"
import StyleGuide from "./components/Styleguide";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Section from "./components/Section";

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