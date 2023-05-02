import { configureStore } from "@reduxjs/toolkit";
import cockTailsReducer from "./cocktailsSlice";
import ingredientReducer from "./ingredientsSlice";
import categoryReducer from "./categorySlice";

/* Create the Store */
export const store = configureStore({
  reducer: {
    cocktails: cockTailsReducer,
    ingredients: ingredientReducer,
    categories: categoryReducer,
  },
});

export default store;
