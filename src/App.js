import React from "react";
import "./App.scss";
import FooterBar from "./components/FooterBar";
import ResultArea from "./components/ResultArea";
import SearchBar from "./components/SearcBar";

const App = () => {
  return (
    <div className="flex flex-col items-center  ">
      <SearchBar />
      <ResultArea />
      <FooterBar />
    </div>
  );
};

export default App;
