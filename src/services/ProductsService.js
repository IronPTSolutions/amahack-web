import { create } from "./BaseService";

const http = create();

export const getProducts = (category) => {
  return http.get("/products", { params: { category } });
};

export const getProduct = (id) => {
	return http.get(`/products/${id}`);
}