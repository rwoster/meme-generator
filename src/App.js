import React from "react";

// components
import Header from "./Components/Header";
import Meme from "./Components/Meme";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Meme />
      </div>
    </>
  );
}
