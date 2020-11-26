import React from 'react'

import Projectcard from '../Projectcard'

import autoexpressImage from '../../images/projects/autoexpress.jpg'
// import autoexpressImage2 from '../../images/projects/autoexpress2.jpg'
import recipesImage from '../../images/projects/recipes.jpg'
import portfolioImage from '../../images/projects/portfolio.jpg'


import { IconContext } from 'react-icons'
import { FaBehance } from 'react-icons/fa'

import style from '../style/Projects.module.css'

const Projects = () => {
    return (
        <div className={style.projectsContainer}>
            <h2> Projetos </h2>
            <Projectcard
                img={autoexpressImage}
                title='AutoExpress Logística'
                link='http://autoexpresslogistica.com/'
                code='https://github.com/ariel7198/autoexpress'
                technologies={['html', 'css', 'js', 'bootstrap', 'php', 'git']}
                description='Website de uma empresa virtual de logística, criado para praticar os conceitos de bootstrap'
            />
            <Projectcard
                img={recipesImage}
                title='Receitas'
                link='https://recipes-ochre.vercel.app/'
                code='https://github.com/ariel7198/recipes'
                technologies={['html', 'css', 'js', 'react', 'js', 'git']}
                description='Website criado em React utilizando a API de receitas edamam.com para pesquisa de receitas por palavras chaves. Com exibição dos ingredientes e labels da receita em forma de badges '
            />
            <Projectcard
                img={portfolioImage}
                title='Website Porfolio'
                link='http://autoexpresslogistica.com/'
                code='https://github.com/ariel7198/recipes'
                technologies={['html', 'css', 'js', 'react', 'git']}
                description='Portfolio pessoal com projetos, experiência e contato, criado em React'
            />
            <p> Veja mais projetos criados na plataforma duda mobile</p>
            <IconContext.Provider value={{ className: 'social-icons', size: '1em' }}>
                <button className='buttonHover'> <a href="https://www.behance.net/ariel7198"> <FaBehance /> Ver no behance  </a> </button>
            </IconContext.Provider>
        </div>
    )
}

export default Projects