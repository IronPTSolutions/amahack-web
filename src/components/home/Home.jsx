import React, { useState } from 'react';
import Products from './Products';
import SideMenu from './SideMenu';

const Home = () => {
  const [category, setCategory] = useState('')

  return (
    <div className="Home d-flex">
      <SideMenu activeCategory={category} setCategory={setCategory} />
      <Products category={category} />
    </div>
  );
};

export default Home;