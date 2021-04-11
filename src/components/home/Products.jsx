import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/ProductsService";
import Product from "./Product";

const Products = ({ category }) => {
	const [products, setProducts] = useState([]);
	
  useEffect(() => {
    getProducts(category)
      .then((products) => setProducts(products))
      .catch((e) => console.log(e));
	}, [category]);
	
  return (
    <div className="Products d-flex flex-wrap">
      {products.length > 0
        ? products.map((p) => <Product {...p} key={p.id} />)
        : "Loading..."}
    </div>
  );
};

export default Products;
