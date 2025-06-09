import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./axiosConfig";

export const UseRegisterUser = () => {
  const registerUser = (data) => {
    return api.post("/auth/register", data);
  };
  return useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUser,
  });
};

export const UseLoginUser = () => {
  const LoginUser = (data) => {
    return api.post("/auth/login", data);
  };
  return useMutation({
    mutationKey: ["LoginUser"],
    mutationFn: LoginUser,
  });
};

export const UseGetProducts = ({
  page = 1,
  limit = 10,
  name = "",
  ssrData,
}) => {
  const getProducts = () => {
    return api.get(
      `/products?page=${page}&limit=${limit}&name=${encodeURIComponent(name)}`
    );
  };
  return useQuery({
    queryKey: ["getProducts", page, limit, name],
    queryFn: getProducts,
    keepPreviousData: true,
    refetchInterval: 5000,
    initialData: ssrData,
  });
};

export const UseAddProduct = () => {
  const addProduct = (obj) => {
    return api.post("/products", obj);
  };
  return useMutation({
    mutationKey: ["addproduct"],
    mutationFn: addProduct,
  });
};

export const UseEditProduct = () => {
  const editProduct = ({ id, data }) => {
    return api.put(`/products/${id}`, data);
  };
  return useMutation({
    mutationKey: ["editProduct"],
    mutationFn: editProduct,
  });
};

export const UseDeleteProduct = () => {
  const deleteProduct = (id) => {
    return api.delete(`/products/${id}`);
  };
  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: deleteProduct,
  });
};
