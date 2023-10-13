import React from 'react'
import styles from "./LatestDrinks.module.css"

const LatestDrinks = (props) => {
  const {strDrinkThumb,strDrink,onClick} = props
  return (
    <div onClick={onClick} className={styles.latest_drinks_content}>
        <div className={styles.latest_drinks_img}>
            <img src={strDrinkThumb} alt="" />
        </div>
        <div className={styles.latest_drinks_title}>{strDrink}</div>
    </div>
  )
}

export default LatestDrinks