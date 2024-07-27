import { createSlice } from "@reduxjs/toolkit";

//Load intial item from local-storage
const intialFav = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: intialFav,
  reducers: {
    addFavorite: (state, action) => {
      const recipe = action.payload;
      const existingRecipe = state.find((item) => item.id === recipe.id);
      if (existingRecipe) {
        return state.filter((item) => item.id !== recipe.id);
      }
      state.push(recipe);
      // Save updated state to localStorage
      localStorage.setItem("favoriteRecipes", JSON.stringify(state));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
