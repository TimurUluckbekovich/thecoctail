import React from 'react'
import styles from "./popularDrinks.module.css"

const PopularDrinks = (props) => {
    const {strDrink,strDrinkThumb,onClick} = props
  return (
    <div onClick={onClick} className={styles.popular_drink_content}>
        <div className={styles.popular_drink_img}>
            <img src={strDrinkThumb} alt="drink_photo" />
        </div>
        <p className={styles.popular_drink_title}>{strDrink}</p>
    </div>
  )
}

export default PopularDrinks