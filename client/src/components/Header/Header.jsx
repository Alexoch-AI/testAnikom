import React, { useState } from 'react'
import Control from '../Control/Control'
import style from './header.module.css'
import { Link } from "react-router-dom";

function Header() {
const [menuActive, setMenuActive] = useState(false)

 
  return (
    <header>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
      }}>
        <ul style={{
          flexDirection: 'row',
          display: 'flex',
          listStyle: 'none',
        }}>
        {menuActive &&
        <>
        <li className={style.menu}>
          <Link to='/'>All</Link>
        </li>
        <li className={style.menu}>
          <Link to='/tabs/1'>Красный</Link>
        </li>
        <li className={style.menu}>
          <Link to='/tabs/2'>Зеленый</Link>
        </li>
        <li className={style.menu}>
          <Link to='/tabs/3'>Синий</Link>
        </li>
        </>
        }
        </ul>
       <Control setMenuActive={setMenuActive} menuActive={menuActive}/> 
      </div>
    </header>
  )
}

export default Header

