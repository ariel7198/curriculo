import React from 'react'

import style from './style/Technologiesbadges.module.css'

const TechnologiesBadges = (props) => {
    return (
        <div className={style.technologyBadge}>
            {props.name}
        </div>
    )
}

export default TechnologiesBadges 