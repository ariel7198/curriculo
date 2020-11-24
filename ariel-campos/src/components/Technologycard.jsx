import React from 'react'
import style from './style/Technologiescards.module.css'

const Technologycard = ({ title, icon }) => {
    return (
        <div className={style.technologiecard}> 
            {icon}
            <h4 className={style.subtitles}> {title} </h4>
        </div>
    )
}
export default Technologycard