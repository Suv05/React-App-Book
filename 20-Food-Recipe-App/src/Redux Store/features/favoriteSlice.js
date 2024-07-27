import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const recipe = action.payload;
      const existingRecipe = state.find((item) => item.id === recipe.id);
      if (existingRecipe) {
        return state.filter((item) => item.id !== recipe.id);
      }
      state.push(recipe);
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
