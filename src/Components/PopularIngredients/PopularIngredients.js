import React from 'react'
import styles from "./PopularIngredients.module.css"

const PopularIngredients = (props) => {
  const {strIngredient,onClick } = props
  return (
    <div onClick={onClick} className={styles.popular_ingredients_content}>
        <div className={styles.popular_ingredients_img}>
            <img src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`} alt="ingredients_photos" />
        </div>
        <div className={styles.popular_ingredients_title}>{strIngredient}</div>
    </div>
  )
}

export default PopularIngredients