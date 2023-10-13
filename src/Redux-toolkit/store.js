import { configureStore } from "@reduxjs/toolkit";
import DrinkSlice from "./DrinkSlice/DrinkSlice";
import FavoriteSlice from "./FavoriteSlice/FavoriteSlice"; // Подразумевается, что у вас есть отдельный редюсер для избранных напитков



const store = configureStore({
  reducer: {
    products: DrinkSlice,
    favorites: FavoriteSlice
  }, // Используйте объединенный редюсер
});

export default store;
