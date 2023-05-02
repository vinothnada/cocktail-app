import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* Retrive Random Cocktails */
export const retrieveRandomCocktail = createAsyncThunk(
  "cocktails/retrieveRandom",
  async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const data = await response.data;
    return data;
  }
);

/* Retrive Cocktails by Alphabet */
export const retrieveCocktailByAlphabet = createAsyncThunk(
  "cocktails/retrieveCocktailByAlphabet",
  async (letter) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
);

/* Retrive Cocktails by Ingredient */
export const retrieveCocktailByIngredient = createAsyncThunk(
  "cocktails/retrieveCocktailByIngredient",
  async (param) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${param}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
);

/* Retrive Cocktails by Category */
export const retrieveCocktailByCategory = createAsyncThunk(
  "cocktails/retrieveCocktailByCategory",
  async (param) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
);

/* Retrive Cocktails by SearchText */
export const retrieveCocktailBySearchText = createAsyncThunk(
  "cocktails/retrieveCocktailBySearchText",
  async (param) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${param}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
);

/* Create and export Cocktail Reducer */
export const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState: {
    list: {
      status: "",
      randomDrinks: [],
      drinksByFilter: [],
    },
  },
  reducers: {
    resetList: (state, payload) => {},
  },
  extraReducers: {
    [retrieveRandomCocktail.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.randomDrinks = [];
    },
    [retrieveRandomCocktail.fulfilled.type]: (state, action) => {
      state.list.status = "success";
      state.list.randomDrinks.push(action.payload.drinks[0]);
    },
    [retrieveCocktailByAlphabet.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.drinksByFilter = [];
    },
    [retrieveCocktailByAlphabet.fulfilled.type]: (state, action) => {
      state.list.status = "success";
      state.list.drinksByFilter = action.payload.drinks;
    },
    [retrieveCocktailByIngredient.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.drinksByFilter = [];
    },
    [retrieveCocktailByIngredient.fulfilled.type]: (state, action) => {
      state.list.status = "success";
      state.list.drinksByFilter = action.payload.drinks;
    },
    [retrieveCocktailByCategory.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.drinksByFilter = [];
    },
    [retrieveCocktailByCategory.fulfilled.type]: (state, action) => {
      state.list.status = "success";
      state.list.drinksByFilter = action.payload.drinks;
    },
    [retrieveCocktailBySearchText.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.drinksByFilter = [];
    },
    [retrieveCocktailBySearchText.fulfilled.type]: (state, action) => {
      state.list.status = "success";
      state.list.drinksByFilter = action.payload.drinks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetList } = cocktailsSlice.actions;

export default cocktailsSlice.reducer;
