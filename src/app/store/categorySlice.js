import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* Retrive Categories of Drinks */
export const retrieveCategories = createAsyncThunk(
  "cocktails/retrieveCategories",
  async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    );
    const data = await response.data;
    return data;
  }
);

/* Create and export Categories Reducer */
export const categoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    list: {
      status: "",
      values: [],
    },
  },
  reducers: {
    resetList: (state, payload) => {},
  },
  extraReducers: {
    [retrieveCategories.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.values = [];
    },
    [retrieveCategories.fulfilled.type]: (state, action) => {
      state.list.status = "success";
      state.list.values = action.payload.drinks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetList } = categoriesSlice.actions;

export default categoriesSlice.reducer;
