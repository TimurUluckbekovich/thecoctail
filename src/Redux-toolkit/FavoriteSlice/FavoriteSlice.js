import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const drink = action.payload;
      if (!state.some((item) => item.idDrink === drink.idDrink)) {
        state.push(drink);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      const drinkId = action.payload;
      const updatedState = state.filter((item) => item.idDrink !== drinkId);
      localStorage.setItem("favorites", JSON.stringify(updatedState)); // Сохраняем в локальное хранилище
      return updatedState;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
