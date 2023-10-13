import React, { useEffect, useState } from "react";
import styles from "./CoctailInfo.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getCoctailInfo } from "../../Redux-toolkit/DrinkSlice/DrinkSlice";
import { addToFavorites } from "../../Redux-toolkit/FavoriteSlice/FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import british2 from "../../Assets/british2.png";
import germany from "../../Assets/germany.png";
import italian from "../../Assets/italian.png";
import spain from "../../Assets/spain.png";
import france from "../../Assets/france.png";
import List from "../List/List";
import Alfavit from "../Alfavit";

const CoctailInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idDrink } = useParams();
  const { coctailInfo } = useSelector((state) => state.products);

  const [lang, setLang] = useState("english");
  // console.log("language>>>", lang);

  const changeEnglish = () => {
    setLang("english");
  };
  const changeGerman = () => {
    setLang("german");
  };
  const changeItalian = () => {
    setLang("italian");
  };
  const changeFrench = () => {
    setLang("french");
  };
  const changeSpanish = () => {
    setLang("spanish");
  };

  useEffect(() => {
    dispatch(getCoctailInfo(idDrink));
  });

  const handleAddToFavorites = (drink) => {
    dispatch(
      addToFavorites({
        idDrink: drink.idDrink,
        strDrink: drink.strDrink,
        strDrinkThumb: drink.strDrinkThumb,
      })
    );
  };

  const handleInfo = (title) => {
    navigate(`/ingredient/${title}`);
  };

  return (
    <div className="container">
      <List
        items={coctailInfo && coctailInfo}
        renderItem={(elem, i) => (
          <div className={styles.coctail_info}>
            <div className={styles.coctail_info_title}>
              <h2>{elem.strDrink}</h2>
              <h2>Ingredients:</h2>
            </div>
            <div className={styles.coctail_info_img}>
              <div className={styles.first_img}>
                <img src={elem.strDrinkThumb} alt="" />
                <button
                  onClick={() => handleAddToFavorites(elem)}
                  className={styles.add_to_favorites_btn}
                >
                  <i class="fa-solid fa-plus"></i> Добавить в избранное
                </button>
              </div>
              <div className={styles.second_item}>
                {elem.strIngredient1 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient1)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient1}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure1}
                      {elem.strIngredient1}A
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient2 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient2)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient2}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure2}
                      {elem.strIngredient2}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient3 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient3)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient3}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure3}
                      {elem.strIngredient3}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient4 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient4)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient4}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure4}
                      {elem.strIngredient4}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient5 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient5)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient5}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure5}
                      {elem.strIngredient5}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient6 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient6)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient6}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure6}
                      {elem.strIngredient6}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient7 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient7)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient7}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure7}
                      {elem.strIngredient7}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient8 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient8)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient8}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure8}
                      {elem.strIngredient8}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient9 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient9)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient9}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure9}
                      {elem.strIngredient9}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient10 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient10)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient10}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure10}
                      {elem.strIngredient10}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient11 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient11)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient11}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure11}
                      {elem.strIngredient11}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient12 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient12)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient12}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure12}
                      {elem.strIngredient12}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient13 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient13)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient13}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure13}
                      {elem.strIngredient13}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient14 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient14)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient14}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure14}
                      {elem.strIngredient14}
                    </p>
                  </div>
                ) : null}
                {elem.strIngredient15 ? (
                  <div
                    onClick={() => handleInfo(elem.strIngredient15)}
                    className={styles.second_img}
                  >
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient15}.png`}
                      alt=""
                    />
                    <p className={styles.ingredients_title}>
                      {elem.strMeasure15}
                      {elem.strIngredient15}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.coctail_info_instruction}>
              <h2>Instruction</h2>
              <div className={styles.instruction_language}>
                <img onClick={changeEnglish} src={british2} alt="en" />
                <img onClick={changeGerman} src={germany} alt="deu" />
                <img onClick={changeItalian} src={italian} alt="it" />
                <img onClick={changeFrench} src={france} alt="fr" />
                <img onClick={changeSpanish} src={spain} alt="sp" />
              </div>
              <List
                items={coctailInfo && coctailInfo}
                renderItem={(elem, i) => (
                  <div className={styles.instruction_text}>
                    <p>
                      {lang === "english"
                        ? elem.strInstructions
                        : lang === "german"
                        ? elem.strInstructionsDE
                        : lang === "italian"
                        ? elem.strInstructionsIT
                        : lang === "french"
                        ? elem.strInstructionsFR
                        : lang === "spanish"
                        ? elem.strInstructionsES
                        : null}
                    </p>
                    <h2>Glass</h2>
                    <p>Serve: {elem.strGlass}</p>
                  </div>
                )}
              />
            </div>
            <h3>Browse More</h3> <br />
            <Alfavit/>
          </div>
        )}
      />
    </div>
  );
};

export default CoctailInfo;
