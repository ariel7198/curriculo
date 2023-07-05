import React from 'react'

import style from '../style/Experience.module.css'

import Companycard from '../Companycard'

import compumateLogo from '../../images/compumate.png'
import fbnetLogo from '../../images/fbnet.png'
import digimaxLogo from '../../images/digimax.png'
import ndlogo from '../../images/nd.png'

const Experience = () => {
    return (
        <div className={style.experienciaContainer}>
            <h2> Experiência </h2>
            <div className={style.companyCardsContainer}>
                 <Companycard
                    empresa='Nação Digital'
                    periodo='2021 - 2023'
                    imagem={ndlogo}
                    cargo='Desenvolvedor Web'
                    descricao={
                        <ul>
                            <li> Responsável pela criação e manutenção de sites usando WordPress, Vue.js, React e outras plataformas; </li>
                            <li> Responsável pelo desenvolvimento e implementação de sistemas para soluções internas da empresa;</li>
                            <li> Responsável por coordenar o time de desenvolvimento nos projetos internos seguindo metodologias ágeis; </li>
                            <li> Responsável pela relação entre o time de desenvolvimento e outras áreas da empresa envolvidas nos projetos.</li>
                        </ul>
                    }
                />
                <Companycard
                    empresa='Digimax'
                    periodo='2019 - Atual'
                    imagem={digimaxLogo}
                    cargo='Desenvolvedor Web'
                    descricao={
                        <ul>
                            <li> Responsável pelo desenvolvimento de Websites e landing pages responsivas em diferentes plataformas e tecnologias; </li>
                            <li> Responsável pela prototipação de telas de Websites e aplicativos; </li>
                            <li> Manutenção de websites Wordpress; </li>
                            <li> Manutenção de lojas virtuais. </li>
                        </ul>
                    }
                />
                <Companycard
                    empresa='Compumate Softwares Corporativos'
                    periodo='2019 - 2019'
                    imagem={compumateLogo}
                    cargo='Software QA Tester'
                    descricao={
                        <ul>
                            <h3> Homologação </h3>
                            <li> Homologação de alterações no sistema; </li>
                            <li> Teste de novas funções; </li>

                            <h3> Suporte técnico </h3>
                            <li> Atendimento remoto e presencial de clientes;</li>
                            <li> Instalação e manutenção de terminais e servidores. </li>
                        </ul>
                    }
                />
                {/* <Companycard
                    empresa='FbNet'
                    periodo='2018 - 2019'
                    imagem={fbnetLogo}
                    cargo='Auxiliar supervisor de redes'
                    descricao={
                        <ul>
                            <li> Atendimento a clientes; </li>
                            <li> Configuração de redes e servidores; </li>
                            <li> Configuração de roteadores openwrt e dispositivos mikrotik. </li>
                        </ul>
                    }
                /> */}

            </div>
        </div>
    )
}

export default Experience
