import { create } from "./BaseService";

const http = create();

export const getProducts = (category, search) => {
  return http.get("/products", { params: { category, search } });
};

export const getProduct = (id) => {
  return http.get(`/products/${id}`);
};

export const editProduct = (product, id) => {
  return http.put(`/products/${id}`, product, {
    headers: { "Content-type": "multipart/form-data" },
  });
};

export const createProduct = (product) => {
  return http.post(`/products`, product);
};
