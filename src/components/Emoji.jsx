import React, { useState } from "react";

export default function Emoji() {
  
  const [isHappy, setIsHappy] = useState(true);
  const toggleMood = () => {
    setIsHappy(!isHappy);
  
  }
  return (
    <div style={{ textAlign: "center" , marginTop: "50px" }}>
      <h1 style={{fontSize: "4rem" }}>
        {isHappy ? "Happy😊" : "Sad😔"} 
      </h1>
      <button onClick={toggleMood} 
        style={{ 
          fontSize: "2rem", 
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer"
          }}
          >
            change mood
      </button>
      </div>
      );
}
     
    