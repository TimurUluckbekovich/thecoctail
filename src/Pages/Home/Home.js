import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Coctail_Left from "../../Assets/cocktail_left.png";
import Coctail_Right from "../../Assets/cocktail_right.png";
import Patreon_logo from "../../Assets/patreon_logo.png";
import Cocktail_logo from "../../Assets/cocktail-logo.png";
import ingredient_logo from "../../Assets/ingredient-logo.png";
import drinksImages_logo from "../../Assets/image2.png";
import List from "../../Components/List/List";
import PopularDrinks from "../../Components/PopularDrings";
import PopularIngredients from "../../Components/PopularIngredients";
import LatestDrinks from "../../Components/LatestDrinks";
import Alfavit from "../../Components/Alfavit";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    popularDrinks,
    popularIngredients,
    latestDrinks,
    randomDrinks,
    randomIngredients,
  } = useSelector((state) => state.products);
  const [input, setInput] = useState("");

  // console.log("Popular Ingredients>>>", popularIngredients);
  // console.log("Popular Drinks>>>", popularDrinks);
  // console.log("Latest Drinks>>>", latestDrinks);
  // console.log("Random Drinks>>>", randomDrinks);
  // console.log("Random Ingredients>>>", randomIngredients);

  const handleCoctailInfo = (id, title) => {
    navigate(`/drink/${id}/${title}`);
  };

  const handleIngredientInfo = (title) => {
    navigate(`/ingredient/${title}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <div className="container">
      <div className={styles.Home_content}>
        <div className={styles.Home_coctail_left}>
          <img src={Coctail_Left} alt="Coctail Left" />
        </div>
        <div className={styles.Home_description}>
          <h1>Welcome to TheCocktailDB</h1>
          <p>
            An open, crowd-sourced database of drinks and cocktails from around
            the world. <br /> We also offer a{" "}
            <a href="https://www.thecocktaildb.com/api.php">free JSON API</a>{" "}
            for anyone wanting to use it. <br /> If you like the site, please
            consider supporting us on Patreon by clicking the link below...
          </p>
          <div className={styles.Home_patreon_logo}>
            <a href="https://www.patreon.com/thedatadb">
              {" "}
              <img src={Patreon_logo} alt="Patreon Logo" />
            </a>
          </div>
          <a
            href="https://www.patreon.com/thedatadb"
            className={styles.Patreon_text}
          >
            Click to upgrade free API to premium for $3
          </a>
          <p>Currently 363 supporters</p>
        </div>
        <div className={styles.Home_coctail_right}>
          <img src={Coctail_Right} alt="Coctail Right" />
        </div>
      </div>
      <div className={styles.Home_search}>
        <form onSubmit={handleSearch}>
          <div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search for a Cocktail..."
            />
          </div>
          <div>
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <div className={styles.Home_drinks_info}>
          <div>
            <img src={Cocktail_logo} alt="Cocktail_logo" />{" "}
            <p>
              <b>Total Drinks:</b> 636{" "}
            </p>{" "}
          </div>
          <div>
            <img src={ingredient_logo} alt="ingredient_logo" />{" "}
            <p>
              <b>Total Ingredients:</b> 489
            </p>{" "}
          </div>
          <div>
            <img src={drinksImages_logo} alt="drinksImages_logo" />{" "}
            <p>
              <b>Drink Images:</b> 636(93cc)
            </p>{" "}
          </div>
        </div>
      </div>
      <div className={styles.popular_drinks}>
        <h3>Popular Drinks</h3>
        <div className={styles.popular_drinks_content}>
          <List
            items={popularDrinks}
            renderItem={(elem, i) => (
              <PopularDrinks
                onClick={() => handleCoctailInfo(elem.idDrink, elem.strDrink)}
                {...elem}
                key={i}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.popular_ingredients}>
        <h3>Popular Ingredients</h3>
        <div className={styles.popular_ingredients_content}>
          <List
            items={popularIngredients}
            renderItem={(elem, i) => (
              <PopularIngredients
                onClick={() => handleIngredientInfo(elem.strIngredient)}
                {...elem}
                key={i}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.latest_drinks}>
        <h3>Latest Drinks</h3>
        <div className={styles.latest_drinks_content}>
          <List
            items={latestDrinks}
            renderItem={(elem, i) => (
              <LatestDrinks
                onClick={() => handleCoctailInfo(elem.idDrink, elem.strDrink)}
                {...elem}
                key={i}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.popular_ingredients}>
        <h3>Random Ingredients</h3>
        <div className={styles.popular_ingredients_content}>
          <List
            items={randomIngredients}
            renderItem={(elem, i) => (
              <PopularIngredients
                onClick={() => handleIngredientInfo(elem.strIngredient)}
                {...elem}
                key={i}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.popular_drinks}>
        <h3>Random Drinks</h3>
        <div className={styles.popular_drinks_content}>
          <List
            items={randomDrinks && randomDrinks}
            renderItem={(elem, i) => (
              <PopularDrinks
                onClick={() => handleCoctailInfo(elem.idDrink, elem.strDrink)}
                {...elem}
                key={i}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.alfavit_drinks}>
        <h3>Browse By Name</h3>
        <div className={styles.alfavit_content}>
          <Alfavit />
        </div>
      </div>
    </div>
  );
};

export default Home;
