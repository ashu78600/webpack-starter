import React from "react";
import "./App.scss";
import FooterBar from "./components/FooterBar";
import ResultArea from "./components/ResultArea";
import SearchBar from "./components/SearcBar";

const App = () => {
  return (
    <div className="mx-auto">
      <SearchBar />
      <ResultArea />
      <FooterBar />
    </div>
  );
};

export default App;
