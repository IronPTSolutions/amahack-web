import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  editProduct,
  getProduct,
  createProduct,
} from "../../services/ProductsService";
import { CATEGORIES } from "../home/SideMenu";

const ProductForm = () => {
  const { push } = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    categoires: [],
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    categories: "",
    image: "",
  });

  useEffect(() => {
    getProduct(id)
      .then((p) => setProduct(p))
      .catch((e) => console.log(e));
  }, [id]);

  if (!product?.id) {
    return <p>Loading...</p>;
  }

  const onChange = (ev) => {
		setProduct((old) => {
			let value = ev.target.value;
			if (ev.target.tagName === "SELECT") {
				value = Array.from(ev.target.selectedOptions, o => o.value)
			}
			return { ...old, [ev.target.id]: value };
		});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const request = id ? editProduct : createProduct;
    request(product, id)
      .then((r) => {
        push("/");
      })
      .catch((e) => {
        if (e.response.status === 403) {
        }
        setErrors(e.response.data);
      });
  };

  return (
    <div className="ProductForm container mt-5">
      <h1>{id ? "Edit" : "Create"} product</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            placeholder="Bag of potatoes"
            value={product.name}
            onChange={onChange}
            aria-describedby="name-validation"
          />
          <div id="name-validation" className="invalid-feedback">
            {errors.name}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            id="description"
            value={product.description}
            onChange={onChange}
            aria-describedby="description-validation"
          />
          <div id="description-validation" className="invalid-feedback">
            {errors.description}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <select
            className={`form-control ${errors.categories ? "is-invalid" : ""}`}
            id="categories"
            multiple
            value={product.categories}
            onChange={onChange}
            aria-describedby="categories-validation"
          >
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div id="categories-validation" className="invalid-feedback">
            {errors.categories}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
            id="image"
            value={product.image}
            onChange={onChange}
            aria-describedby="image-validation"
          />
          <div id="image-validation" className="invalid-feedback">
            {errors.image}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
