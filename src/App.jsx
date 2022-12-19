import { useState } from "react";
import Navbar from "../src/components/Navbar";
import Card from "../src/components/Card";
import data from "../src/data";

function App() {
  const card = data.map((item) => {
    return <Card key={item.title} item={item} />;
  });
  return (
    <>
      <Navbar />
      {card}
    </>
  );
}

export default App;
