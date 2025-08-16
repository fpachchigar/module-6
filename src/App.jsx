import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import { BigCats } from "./components/BigCats";
import Emoji from "./components/Emoji";
import { Calculator } from "./components/Calculator";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name="john"></Greeting>
      <div>
        <h1>Cat Gallery</h1>
        <BigCats />
      </div>
      <div>
        <h1>Emoji Mood Switcher</h1>
        <Emoji />
      </div>
      <div>
        <Calculator />
      </div>
    </>
  );
}
