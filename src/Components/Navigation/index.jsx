import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { myRoutes } from '../MyRoutes'
import styles  from './style.module.css'
import ReorderIcon from '@mui/icons-material/Reorder';

const Navigation = () => {

  const[openLinks,setOpenLinks]=useState(false)
  const toggleNavbar=()=>{
setOpenLinks(!openLinks);
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide} id={openLinks ? "open" : "close"}>
        <img src="./pizzaLogo.png" alt="" />
        <div className={styles.hiddenLinks}>
        {
      myRoutes.map(({id,path,title})=>{
          return <NavLink className={styles} key={id} to={path}>{title}</NavLink>
      })
    }
        </div>
      </div>
      <div className={styles.rightSide}>
    {
      myRoutes.map(({id,path,title})=>{
          return <NavLink className={styles} key={id} to={path}>{title}</NavLink>
      })
    }
    <button onClick={toggleNavbar}>
    <ReorderIcon/>
    </button>
 
      </div>
    </div>
        
    
   
  )

}

export default Navigation