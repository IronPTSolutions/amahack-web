import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editProduct, getProduct } from "../../services/ProductService";
import FormElement from "./FormElement";
import { CATEGORIES } from "../home/SideMenu";

export default function ProductForm() {
  const { id } = useParams();
  const { push } = useHistory();
  const [product, setProduct] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getProduct(id).then((prod) => setProduct(prod));
  }, [id]);

  if (!product) {
    return "Loading...";
  }

  const onChange = (event) => {
    setProduct((old) => {
      let value = event.target.value;
      if (event.target.type === "file") {
        value = event.target.files[0];
      } else if (event.target.tagName === "SELECT") {
        value = [...event.target.selectedOptions].map((o) => o.value);
      }
      return { ...old, [event.target.id]: value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      formData.append(key, value);
    });
    editProduct(formData, id)
      .then(() => {
        push("/");
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setErrors(e.response.data.errors);
        }
      });
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <FormElement
        name="Name"
        id="name"
        value={product.name}
        onChange={onChange}
        error={errors.name}
      />
      <FormElement
        name="Description"
        id="description"
        value={product.description}
        onChange={onChange}
        tag="textarea"
        error={errors.description}
      />
      <FormElement
        name="Price"
        id="price"
        value={product.price}
        onChange={onChange}
        type="number"
        error={errors.price}
      />
      <FormElement
        name="Image"
        id="image"
        onChange={onChange}
        error={errors.image}
        type="file"
      />
      <div className="form-group mt-3">
        <label htmlFor="categories">Categories</label>
        <select
          id="categories"
          className={`form-control ${errors.categories && "is-invalid"} `}
          value={product.categories}
          onChange={onChange}
          multiple
        >
          {CATEGORIES.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
        <div className="invalid-feedback">{errors.categories}</div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Edit
      </button>
    </form>
  );
}
