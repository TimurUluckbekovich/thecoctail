import React, { useEffect } from "react";
import styles from "./IngredientsInfo.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientInfo } from "../../Redux-toolkit/DrinkSlice/DrinkSlice";
import List from "../List/List";
import Alfavit from "../Alfavit";


const IngredientsInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title } = useParams();
  const { ingredientInfo} = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getIngredientInfo(title));
  }, [title]);
  

  const handleCoctailsInfo = (id, title) => {
    navigate(`/drink/${id}/${title}`);
  };

  return (
    <div className="container">
      <div className={styles.ingredient_info}>
        <div className={styles.ingredient}>
          <h2>{title}</h2>
          <div className={styles.ingredient_img}>
            <img
              src={`https://www.thecocktaildb.com/images/ingredients/${title}.png`}
              alt=""
            />
          </div>
        </div>
        <div className={styles.drinks}>
          <h2>Drinks</h2>
          <div className={styles.drinks_item}>
            <List
              items={ingredientInfo}
              renderItem={(elem, i) => (
                <div
                  onClick={() =>
                    handleCoctailsInfo(elem.idDrink, elem.strDrink)
                  }
                  className={styles.drinks_img}
                >
                  <img src={elem.strDrinkThumb} alt="" />
                  <p className={styles.drink_title}>{elem.strDrink}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
        <h3>Browse More</h3>
        <Alfavit/>
    </div>
  );
};

export default IngredientsInfo;
