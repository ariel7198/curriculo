import React from 'react'
import { SiYelp } from 'react-icons/si'
import style from './style/Companycard.module.css'

const Companycard = ( { empresa, periodo, imagem, cargo, descricao }) =>{
    return (
        <div className={style.companyCard}> 
            <div className={style.companyAvatarContainer}> 
                <img src={imagem} className={style.companyLogo} alt=""/>
            </div>
            <div className={style.jobDescription}>
                <h3> {empresa} </h3> <small> {periodo}</small>
                <h4> {cargo} </h4>
                <p className={style.description}> {descricao} </p>
            </div>
        </div>
    )
}

export default Companycard