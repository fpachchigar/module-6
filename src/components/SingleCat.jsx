import React from "react";

export default function SingleCat({ cat }) {
  return (
    /* <li style={{ margin: '10px 0' }}>
      <img src={cat.image} alt={cat.name} style={{ width: '150px', height: 'auto' }} />
      <h3>{cat.name}</h3>
      <p><em>{cat.latinName}</em></p>
    </li> */
    <div style={{ textAlign: "center" }}>
      <img
        src={cat.image}
        alt={cat.name}
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h3>{cat.name}</h3>
      <p>
        <i>{cat.latinName}</i>
      </p>
    </div>
  );
}
