import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../services/ProductsService";

const ProductDetail = ({ user }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(id)
      .then((p) => setProduct(p))
      .catch((e) => console.log(e));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Product m-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.description}
            <br />
            {product.price / 100} €
          </p>
          {product?.user === user?.id && (
            <Link to={`/products/${id}/edit`} className="btn btn-primary">
              Edit
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
