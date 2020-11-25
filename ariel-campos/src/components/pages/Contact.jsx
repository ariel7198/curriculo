import React from 'react'
import style from '../style/Contact.module.css'

import { IconContext } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className={style.contatoContainer}>
            <h2> Vamos conversar </h2>
            <ul> 
                <li> ariel.7198@hotmail.com </li>
                <li> (44) 98857-6746 </li>

            </ul>
            <div className={style.contatoButtons}>
            <IconContext.Provider value={{ className: 'social-icons', size: '2.5em' }}>
                <ul> 
                    <li> <a href="mailto:ariel.7198@hotmail.com" target="_blank" rel="noreferrer"> <AiOutlineMail /> </a> </li>    
                    <li> <a href="https://wa.me/5544988576746" target="_blank" rel="noreferrer"> <AiOutlineWhatsApp /> </a> </li>    
                    <li> <a href="https://www.linkedin.com/in/ariel-campos-37970a141/" target="_blank" rel="noreferrer" > <AiFillLinkedin /> </a> </li>    
                </ul>

            </IconContext.Provider>
            </div>
        </div>
    )
}

export default Contact