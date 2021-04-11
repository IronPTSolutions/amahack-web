import { useEffect, useState } from "react";
import { getProducts } from "../../services/ProductsService";
import Product from "./Product";

export default function Products({category}) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(category).then((prods) => setProducts(prods));
	}, [category]);

  return (
    <div className="Products d-flex flex-wrap justify-content-around mt-3">
      {products.map((p) => (
        <Product {...p} key={p.id} />
      ))}
    </div>
  );
}
