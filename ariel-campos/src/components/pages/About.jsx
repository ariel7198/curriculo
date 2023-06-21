import React from 'react'

import style from '../style/About.module.css'

import ifsulLogo from '../../images/if.png'

import Companycard from '../Companycard'

const About = () => {
    return (
        <div className={style.sobreContainer}>
            <h2> Sobre mim </h2>
            <p> Me chamo Ariel. Sou apaixonado por criação e inovação.  </p>
            <p>Minha jornada no desenvolvimento web tem sido impulsionada pelo amor por criar soluções digitais envolventes e funcionais.  </p>
            <p>Com habilidades abrangentes e adaptabilidade. Estou pronto para enfrentar desafios e entregar resultados excepcionais </p>
            <div className={style.formacao}>
                <h3> Formação </h3>
                <Companycard
                    empresa='Instituto Federal Sul-rio-grandense'
                    periodo='2014 - 2018'
                    imagem={ifsulLogo}
                    cargo='Técnico em Informática'
                    descricao={
                        <ul> 
                            <li> Programação C++, JAVA, PHP; </li>
                            <li> Banco de dados SQL; </li>
                            <li> Engenharia e Arquitetura de software; </li>
                            
                        </ul>
                    }
                />

            </div>
        </div>
    )
}

export default About