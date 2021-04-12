import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/ProductService";
import LinkToEdit from "./LinkToEdit";

export default function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((prod) => setProduct(prod));
  }, [id]);

  if (!product) {
    return "Loading...";
  }
  return (
    <div className="Product card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description}
          <br />
          {product.price / 100} €
        </p>
        <LinkToEdit
          productId={product.id}
          productUser={product.user}
        />
      </div>
    </div>
  );
}
