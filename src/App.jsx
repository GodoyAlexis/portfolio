import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 mt-16">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
