import React, { useState } from "react";
import SideMenu from "./SideMenu";
import Products from "./Products";

const Home = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="Home">
      <SideMenu activeCategory={category} setCategory={setCategory} />
      <Products category={category} />
    </div>
  );
};

export default Home;
