import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImage from "../HomePage/pizza.jpeg2.jpeg"
import styles from './style.module.css'


const HomePage = () => {
  return (
    <div className={styles.home}  style ={{backgroundImage:`url(${BannerImage})`}}>
      <div className={styles.headerContainer}
     >
        <h1>Pedro's Pizzeria</h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <NavLink to='./Menu'>
        <button>ORDER NOW</button>
        </NavLink>
        
      </div>
      
    </div>
  )
}

export default HomePage