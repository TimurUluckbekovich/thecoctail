import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchInfo.module.css";
import List from "../List/List";
import { getSearch } from "../../Redux-toolkit/DrinkSlice/DrinkSlice";

const SearchInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { text } = useParams();
  const { search } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getSearch(text));
  }, [text]);

  const handleCoctailsInfo = (id, title) => {
    navigate(`/drink/${id}/${title}`);
  };

  return (
    <div className="container">
      <div className={styles.search}>
        <h1>Browse Cocktails</h1>
        <div className={styles.search_content}>
          {search ? (
            <List
              items={search}
              renderItem={(elem, i) => (
                <div className={styles.search_item}>
                  <div className={styles.search_item_img}>
                    <img src={elem.strDrinkThumb} alt="" />
                  </div>
                  <p className={styles.search_item_text}>{elem.strDrink}</p>
                </div>
              )}
            />
          ) : (
            <h2 className={styles.noItem_text}>No Product</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;
