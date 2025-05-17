import type { Product } from "@/lib/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
});

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  } as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to load products";
    });
  },
});

export default ProductSlice.reducer;
