import React from "react";

import "./App.css";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

import { Background } from "./background/background";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Background />
      </div>
    </>
  );
}

export default App;
