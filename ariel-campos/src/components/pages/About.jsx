import React from 'react'
import style from '../style/About.module.css'
import ifsulLogo from '../../images/if.png'

import Companycard from '../Companycard'

const About = () => {
    return (
        <div className={style.sobreContainer}>
            <h2> Sobre mim </h2>
            <p> Olá, me chamo Ariel. Descobri minha paixão pela criação durante meu ensino médio, no início do meu curso técnico em informática, desde lá
                comecei a estudar e me dedicar a área de desenvolvimento web. </p>
            <p> Me aventurei por diversas tecnologias para entender melhor como esse mundo funcionava, e cada vez mais me dedico
                    aos estudos e ao aperfeiçoamento na área. </p>
            <p> Iniciei profissionalmente na área de desenvolvimento web em 2019, e desde lá consegui, juntamente com minha equipe, melhorar 
                a qualidade dos projetos entregues e contribuir para os resultados da empresa. </p>
            <p> Estou sempre aberto para novas oportunidades e desafios. </p>
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