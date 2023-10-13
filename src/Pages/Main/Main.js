import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getPopularDrinks,
  getPopularIngredients,
  getLatestDrinks,
  getRandomDrinks,
  getRandomIngredient,
} from "../../Redux-toolkit/DrinkSlice/DrinkSlice";
import Home from "../Home";
import Favorites from "../Favorites";
import CoctailInfo from "../../Components/Coctail-Info/CoctailInfo";
import IngredientsInfo from "../../Components/IngredientsInfo";
import AlfavitInfo from "../../Components/Alfavit-Info/AlfavitInfo";
import SearchInfo from "../../Components/Search-Info/SearchInfo";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularDrinks());
    dispatch(getPopularIngredients());
    dispatch(getLatestDrinks());
    dispatch(getRandomDrinks());
    dispatch(getRandomIngredient());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/drink/:idDrink/:title" element={<CoctailInfo />} />
        <Route path="/ingredient/:title" element={<IngredientsInfo />} />
        <Route path="/alfavit/:drinks" element={<AlfavitInfo />} />
        <Route path="/search/:text" element={<SearchInfo />} />
      </Routes>
    </div>
  );
};

export default Main;
