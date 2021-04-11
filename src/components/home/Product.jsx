import { Link } from "react-router-dom";

const Product = ({ name, description, price, categories, image, user, id }) => {
  return (
    <div className="Product m-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
            <br />
            {price / 100} €
          </p>
          <Link to={`/products/${id}`} className="btn btn-primary">
            View detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
