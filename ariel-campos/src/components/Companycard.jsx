import React from 'react'
import { SiYelp } from 'react-icons/si'
import style from './style/Companycard.module.css'

const Companycard = ( props ) =>{
    return (
        <div className={style.companyCard}> 
            <div className={style.companyAvatarContainer}> 
                <img src={props.imagem} className={style.companyLogo} alt=""/>
            </div>
            <div className={style.jobDescription}>
                <h3> {props.empresa} </h3> <small> {props.periodo}</small>
                <h4> {props.cargo} </h4>
                <div className={style.description}> {props.descricao} </div>
            </div>
        </div>
    )
}

export default Companycard