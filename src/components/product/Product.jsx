import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../services/ProductsService";

export default function Product({user}) {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((p) => setProduct(p));
  }, [id]);

  if (!product) {
    return "Loading...";
  }

  return (
    <div className="card Product mb-3" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description}
          <br />
          {product.price / 100} €
        </p>
        {user?.id === product?.user && (
          <Link to={`/product/${id}/edit`} className="btn btn-primary">
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}
