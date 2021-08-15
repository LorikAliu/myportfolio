import React, { useEffect, useState, useRef } from 'react'
import navStyles from '../styles/Nav.module.scss'

const Nav = ({navActv}) => {

    const navb = useRef()
    const navbar = useRef()

    function bugerMenu() {
        navb.current.classList.toggle(`${navStyles.show}`)
        navbar.current.classList.toggle(`${navStyles.navShow}`)
    }

    useEffect(()=> {
        if(navActv) {
            navbar.current.classList.add(`${navStyles.navActive}`)
        } else {
            navbar.current.classList.remove(`${navStyles.navActive}`)
        }
      }, [navActv])


    return (
        <header className={navStyles.header}>
            <nav className={navStyles.nav} ref={navbar} id="nav">
                <div className={navStyles.emptySpace}></div>
                <button className={navStyles.navbarToggler} 
                        id="burger"
                        onClick={bugerMenu}
                >
                    <span className={navStyles.navbarTogglerIcon}></span>
                </button>
                <ul className={navStyles.navbar} ref={navb} id="navbar">
                    <li><a className={navStyles.navBtn} href="#home">home</a></li>
                    <li><a className={navStyles.navBtn} href="#about">about</a></li>
                    <li><a className={navStyles.navBtn} href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
