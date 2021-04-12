import { create } from "./BaseService";

const http = create()

export const getProducts = () => {
  return http.get('/products')
}

export const getProduct = (id) => {
	return http.get(`/products/${id}`);
}