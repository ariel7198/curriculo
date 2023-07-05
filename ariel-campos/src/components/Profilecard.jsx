import React from 'react'

import style from './style/Profilecard.module.css'
import cv from '../files/Resume-PT.docx'
import cven from '../files/Resume-EN.docx'

import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaBehance } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'


const Profilecard = () => {
    return (
        <div className={style.profilecard}>
            <div className={style.title}>
                <h2> Ariel Campos </h2>
                <p> Desenvolvedor Web </p>
                <small> Maringá - PR </small> <br />
            </div>
            <ul className={style.socialIcons}>
                <IconContext.Provider value={{ className: 'social-icons', size: '1.6em' }}>
                    <li> <a href="https://github.com/ariel7198" target="_blank" rel='noreferrer'><AiFillGithub /> </a> </li>
                    <li> <a href="https://www.linkedin.com/in/ariel-campos-37970a141/" target="_blank" rel='noreferrer'> <AiFillLinkedin /> </a> </li>
                    <li> <a href="https://www.behance.net/ariel7198" target="_blank" rel='noreferrer'> <FaBehance /> </a> </li>
                </IconContext.Provider>
            </ul>
            <div className={style.download}>
                <a href={cv} target='_blank' rel="noopener noreferrer" download="ariel-campos-cv"> <button className='buttonHover'>  <BsDownload /> Baixar Currículo </button> </a>
                <a href={cven} target='_blank' rel="noopener noreferrer" download="ariel-campos-cv"> <button className='buttonHover'>  <BsDownload /> English CV </button> </a>
            </div>

        </div >
    )
}

export default Profilecard
