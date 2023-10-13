import React, { useEffect } from "react";
import styles from "./AlfavitInfo.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlfavit } from "../../Redux-toolkit/DrinkSlice/DrinkSlice";
import Alfavit from "../Alfavit/Alfavit";
import List from "../List/List";

const AlfavitInfo = () => {
  const { drinks } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { alfavit } = useSelector((state) => state.products);
  console.log(alfavit);

  useEffect(() => {
    dispatch(getAlfavit(drinks));
  }, [drinks]);

  const infoClick = (id, title) => {
    navigate(`/drink/${id}/${title}`);
  };

  return (
    <div className="container">
      <div className={styles.alfavit}>
        <h1>Browse Cocktails</h1>
        <div className={styles.alfavit_item}>
          {alfavit ? (
            <List
              items={alfavit}
              renderItem={(elem, i) => (
                <div
                  onClick={() => infoClick(elem.idDrink, elem.strDrink)}
                  className={styles.alfavit_content}
                >
                  <div className={styles.alfavit_img}>
                    <img src={elem.strDrinkThumb} alt="" />
                  </div>
                  <p className={styles.alfavit_item_text}>{elem.strDrink}</p>
                </div>
              )}
            />
          ) : (
            <h2 className={styles.text}>No drinks found </h2>
          )}
        </div>
        <div>
          <h3 className={styles.text}>Browse Drinks</h3>
          <br />
          <Alfavit />
        </div>
      </div>
    </div>
  );
};

export default AlfavitInfo;
