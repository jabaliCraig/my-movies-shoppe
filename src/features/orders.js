import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchOrdersAsync = createAsyncThunk("orders", async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/orders`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// export const addOrderAsync = createAsyncThunk("addOrder", async (order) => {
//     const { data } = await axios.post(`/api/movies`, order);
//     return data
// });

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(addOrderAsync.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // });
  },
});

export const selectOrders = (state) => {
  return state.orders;
};

export default ordersSlice.reducer;