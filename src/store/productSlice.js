import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchProductsAsync = createAsyncThunk("products", async () => {
  try {
    const { data } = await axios.get("/api/campuses");
    console.log("DATA", data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectProducts = (state) => {
  return state.products;
};

export default productSlice.reducer;
