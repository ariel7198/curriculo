import React from 'react'
import style from './style/Profilecard.module.css'

import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaBehance } from 'react-icons/fa'

const Profilecard = () => {
    return (
        <div className={style.profilecard}>
            <div className={style.title}>
                <h2> Ariel Campos </h2>
                <p> Desenvolvedor Web </p>
                <small> Maringá - PR </small>
            </div>
            <ul className={style.socialIcons}> 
            <IconContext.Provider value={{ className: 'social-icons', size: '1.6em' }}>
                <li> <a href="https://github.com/ariel7198"><AiFillGithub  /> </a> </li>
                <li> <a href="https://www.linkedin.com/in/ariel-campos-37970a141/"> <AiFillLinkedin /> </a> </li>
                <li> <a href="https://www.behance.net/ariel7198"> <FaBehance /> </a> </li>
            </IconContext.Provider>
            </ul>

        </div>
    )
}

export default Profilecard
