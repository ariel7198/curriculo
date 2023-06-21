import React from 'react'

import style from '../style/Technologies.module.css'

import Technologycard from '../Technologycard'

import { IconContext } from 'react-icons';
import { AiFillHtml5 } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { GrMysql } from 'react-icons/gr'
import { FaReact } from 'react-icons/fa'
import { DiGulp } from 'react-icons/di'
import { FaVuejs} from 'react-icons/fa'






const Technologies = () => {
    return (
        <div className={style.tecnologiasContainer}>
            <h2> Tecnologias e ferramentas </h2>
            <div className={style.tecnologiasList}>
                <IconContext.Provider value={{ className: 'social-icons', size: '3em' }}>
                    <Technologycard
                        title='HTML'
                        icon={<AiFillHtml5 />}
                    />
                    <Technologycard
                        title='Javascript'
                        icon={<SiJavascript />}
                    />
                    <Technologycard
                        title='SASS'
                        icon={<FaSass />}
                    />
                    <Technologycard
                        title='Bootstrap'
                        icon={<BsFillBootstrapFill />}
                    />
                    <Technologycard
                        title='React'
                        icon={<FaReact />}
                    />
                    <Technologycard
                        title='Vue.js'
                        icon={<FaVuejs />}
                    />
                    <Technologycard
                        title='Gulp'
                        icon={< DiGulp />}
                    />
                    <Technologycard
                        title='Github'
                        icon={<AiFillGithub />}
                    />
                    <Technologycard
                        title='MySQL'
                        icon={<GrMysql />}
                    />

                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Technologies