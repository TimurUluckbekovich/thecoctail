import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Favorites.module.css";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../Redux-toolkit/FavoriteSlice/FavoriteSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Получение данных из localStorage при инициализации компонента
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      storedFavorites.forEach((drink) => {
        dispatch(addToFavorites(drink));
      });
    }
  }, [dispatch]);

  const removeFromLocalStorage = (drinkId) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      const updatedFavorites = storedFavorites.filter(
        (drink) => drink.idDrink !== drinkId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleRemoveFromFavorites = (drink) => {
    dispatch(removeFromFavorites(drink.idDrink)); // Удаляем напиток из состояния Redux
    removeFromLocalStorage(drink.idDrink); // Удаляем напиток из localStorage
  };

  const handleCoctailInfo = (id, title) => {
    navigate(`/drink/${id}/${title}`);
  };

  return (
    <div className="container">
      <div className={styles.favorites}>
        <h1>Избранное:</h1>
        <div className={styles.favorites_content}>
          {favorites && favorites.length > 0 ? (
            favorites.map((drink) => (
              <div
                onClick={() => handleCoctailInfo(drink.idDrink, drink.strDrink)}
                key={drink.idDrink}
                className={styles.favorites_item}
              >
                <div className={styles.favorites_img}>
                  <img src={drink.strDrinkThumb} alt="" />
                </div>
                <div className={styles.favorites_item_info}>
                  <p className={styles.favorites_item_title}>
                    {drink.strDrink}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromFavorites(drink);
                    }}
                    className={styles.favorites_item_btn}
                  >
                    Delete{" "}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h3>Список избранных напитков пуст.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
