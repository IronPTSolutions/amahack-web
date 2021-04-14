import { create } from "./BaseService";

const http = create();

export const getProducts = (category) => {
  return http.get("/products", { params: { category: category } });
};

export const getProduct = (id) => {
  return http.get(`/products/${id}`);
};

export const editProduct = (product, id) => {
  return http.put(`/products/${id}`, product);
}