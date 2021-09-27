import React, { useEffect, useState, useRef } from 'react'
// import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'
import { prefix } from '../utilits/prefix';

const Nav = ({activeSection, handleCLick}) => {
    const navb = useRef()
    const navbar = useRef()

    function bugerMenu() {
        navb.current.classList.toggle(`${navStyles.show}`)
        navbar.current.classList.toggle(`${navStyles.navShow}`)
    }

    // function closeMenu() {
    //     navb.current.classList.contains(`${navStyles.show}`) ? navb.current.classList.remove(`${navStyles.show}`) : ''
    //     navbar.current.classList.contains(`${navStyles.navShow}`) ? navbar.current.classList.remove(`${navStyles.navShow}`) : ''
    // }

    // useEffect(()=> {
    //     if(navActv) {
    //         navbar.current.classList.add(`${navStyles.navActive}`)
    //     } else {
    //         navbar.current.classList.remove(`${navStyles.navActive}`)
    //     }
    //   }, [navActv])


    return (
        <header className={navStyles.header}>
            <nav className={navStyles.nav} ref={navbar} id="nav">
                <div className={navStyles.logo}>
                    <ul><li  className={`${activeSection === 'landing' ? '' : ''}`}><span className={navStyles.span} onClick={() => handleCLick('landing')}><img src={`${prefix}/logo.svg`} alt="logo" /></span></li></ul>
                </div>
                <button className={navStyles.navbarToggler} 
                        id="burger"
                        onClick={bugerMenu}
                >
                    <span className={navStyles.navbarTogglerIcon}></span>
                </button>
                <ul className={navStyles.navbar} ref={navb} id="navbar">
                    {/* <li className={`${activeSection === 'about' ? navStyles.navBtn + ' ' + navStyles.navAct : `${navStyles.navBtn}`}`}><span onClick={() => handleCLick('about')}>about</span></li> */}
                    <li><span className={`${activeSection === 'about' ? navStyles.navAct : ''}`}></span><span className={navStyles.span} onClick={() => handleCLick('about')}>about</span></li>
                    <li><span className={`${activeSection === 'projects' ? navStyles.navAct : ''}`}></span><span className={navStyles.span} onClick={() => handleCLick('projects')}>projects</span></li>
                    <li><span className={`${activeSection === 'contact' ? navStyles.navAct : ''}`}></span><span className={navStyles.span} onClick={() => handleCLick('contact')}>contact</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
