import React from 'react'
import style from './style/Technologiescards.module.css'

const Technologycard = (props) => {
    return (
        <div className={style.technologiecard}>
            {props.icon}
            <h4 className={style.subtitles}> {props.title} </h4>
        </div>
    )
}
export default Technologycard