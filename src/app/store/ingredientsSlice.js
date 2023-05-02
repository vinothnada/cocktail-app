import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* Retrive Ingredients of Drinks */
export const retrieveIngredients = createAsyncThunk(
  "cocktails/retrieveIngredients",
  async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    );
    const data = await response.data;
    return data;
  }
);

/* Create and export Ingredients Reducer */
export const ingredientsSlice = createSlice({
  name: "Ingredients",
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
    [retrieveIngredients.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.values = [];
    },
    [retrieveIngredients.fulfilled.type]: (state, action) => {
      state.list.status = "success";
      state.list.values = action.payload.drinks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetList } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
