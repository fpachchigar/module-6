import React, { useState } from "react";
import SingleCat from "./SingleCat";

const cats = [
  {
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "images/Cheetah.jpeg",
  },
  { name: "Cougar", latinName: "Puma concolor", image: "images/Cougar.jpeg" },
  { name: "Jaguar", latinName: "Panthera onca", image: "images/Jaguar.jpeg" },
  {
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "images/Leopard.jpeg",
  },
  { name: "Lion", latinName: "Panthera leo", image: "images/Lion.jpeg" },
  {
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "images/SnowLeopard.jpeg",
  },
  { name: "Tiger", latinName: "Panthera tigris", image: "images/Tiger.jpeg" },
];

export function BigCats() {
  const [displayedCats, setDisplayedCats] = useState(cats);

  const sortAlphabetically = () => {
    const sortedCats = [...displayedCats].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDisplayedCats(sortedCats);
  };

  const reverseList = () => {
    const reversedCats = [...displayedCats].reverse();
    setDisplayedCats(reversedCats);
  };

  const filterPanthera = () => {
    const filteredCats = cats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setDisplayedCats(filteredCats);
  };

  const resetList = () => {
    setDisplayedCats(cats);
  };

  return (
    <div className="big-cats">
      <h2>Big Cats</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <button onClick={resetList}>Reset</button>
      </div>
      <ul
        style={{
          display: "flex", // arrange in a row
          gap: "20px", // space between items
          flexWrap: "wrap", // wrap to next line if too many
          listStyleType: "none",
          padding: 0,
        }}
      >
        {displayedCats.map((cat, index) => (
          <SingleCat key={index} cat={cat} />
        ))}
      </ul>
    </div>
  );
}
