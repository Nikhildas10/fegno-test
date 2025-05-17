import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { fetchProducts } from "./ProductSlice";

export const useFetchProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: products,
    loading,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { products, loading, error };
};
