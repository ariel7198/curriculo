import React from 'react'

import style from './style/Projectscard.module.css'

import { IconContext } from 'react-icons';
import { BsPlayFill } from 'react-icons/bs'
import { BsFileCode } from 'react-icons/bs'

import Badge from './Technologiesbadges'



const Projectcard = (props) => {

    function checkLive(element){
        if (props.link){
            return (
                <a href={props.link} target="_blank" rel="noreferrer">  <button className='buttonHover'>  <BsPlayFill /> Live </button> </a>
            )
        } else {
            return (
                <button className={style.buttonHoverDisabled}>  <BsPlayFill /> Live </button>
            )
        }
    }
    // console.log(props.technologies)
    return (
        <div className={style.projectCard}>
            <div className={style.projectImageContainer}>
               <a href={props.link} target="_blank" rel="noreferrer"> <img src={props.img} className={style.projectThumb} alt="imagem do projeto" /> </a>
            </div>
            <div className={style.projectDescription}>
                <h2> {props.title} </h2>
                <p> {props.description} </p>
                <div className={style.technologiesContainer} >
                    {props.technologies.map((technology, i) => (
                        <Badge
                            name={props.technologies[i]} />
                        // <p>{props.technologies[i]} </p>

                    ))}
                </div>
                <div className={style.buttonsContainer}>
                    <IconContext.Provider value={{ className: 'social-icons', size: '1em' }}>
                        {checkLive()}
                        <a href={props.code} target="_blank" rel="noreferrer">  <button className='buttonHover'>  <BsFileCode /> Code   </button> </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Projectcard