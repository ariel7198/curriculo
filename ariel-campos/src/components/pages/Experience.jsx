import React from 'react'
import style from '../style/Experience.module.css'
import Companycard from '../Companycard'
import compumateLogo from '../../images/compumate.png'
import fbnetLogo from '../../images/fbnet.png'
import digimaxLogo from '../../images/digimax.png'

const Experience = () => {
    return (
        <div className={style.experienciaContainer}>
            <h2> Experiência </h2>
            <div className={style.companyCardsContainer}>
                <Companycard
                    empresa='Digimax'
                    periodo='2019 - Atual'
                    imagem={digimaxLogo}
                    cargo='Desenvolvedor Web'
                    descricao={
                        <ul>
                            <li> Desenvolvimento de sites e landing pages; </li>
                            <li> Desenvolvimento de novos widgets para a plataforma duda mobile; </li>
                            <li> Manutenção de websites Wordpress; </li>
                            <li> Manutenção de lojas virtuais. </li>
                        </ul>
                    }
                />
                <Companycard
                    empresa='Compumate'
                    periodo='2019 - 2019'
                    imagem={compumateLogo}
                    cargo='Suporte / Homologação'
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
                <Companycard
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
                />

            </div>
        </div>
    )
}

export default Experience
