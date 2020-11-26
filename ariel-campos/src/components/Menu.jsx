import React from 'react'

import style from './style/Menu.module.css'

import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={style.menu}>
            <ul>
                <li className={style.coolLink}> <NavLink to='/'> Sobre </NavLink> </li>
                <li> <NavLink to='tecnologias'> Tecnologias </NavLink> </li>
                <li> <NavLink to='experiencia'> Experiência </NavLink> </li>
                <li> <NavLink to='projetos'> Projetos </NavLink> </li>
                <li> <NavLink to='contato'> Contato </NavLink> </li>
            </ul>
        </div>
    )
}

export default Menu
