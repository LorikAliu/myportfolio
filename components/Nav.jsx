import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import navStyles from '../styles/Nav.module.scss'
import { prefix } from '../utilits/prefix';

const Nav = ({navActv}) => {

    const router = useRouter()

    const navb = useRef()
    const navbar = useRef()

    function bugerMenu() {
        navb.current.classList.toggle(`${navStyles.show}`)
        navbar.current.classList.toggle(`${navStyles.navShow}`)
    }

    // function closeMenu() {
    //     console.log('asdasd')
    //     console.log(navb.current.classList.contains(`${navStyles.show}`))
    //     console.log(navbar.current.classList.contains(`${navStyles.navShow}`))
    //     navb.current.classList.contains(`${navStyles.show}`) ? navb.current.classList.remove(`${navStyles.show}`) : ''
    //     navbar.current.classList.contains(`${navStyles.navShow}`) ? navbar.current.classList.remove(`${navStyles.navShow}`) : ''
    // }

    const closeMenu = (e, path) => {
        // e.preventDefault()

        // if (path === "/about") {
        //     router.push(path)
        // }
        // if (path === "/projects") {
        //     router.push(path)
        // }
        // if (path === "/contact") {
        //     router.push(path)
        // }
        console.log(e)
    };

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
                <div className={navStyles.logo}>
                    <Link className={navStyles.navBtn} href="#landing"><span onClick={closeMenu}><img src={`${prefix}/logo.svg`} alt="logo" /></span></Link>
                </div>
                <button className={navStyles.navbarToggler} 
                        id="burger"
                        onClick={bugerMenu}
                >
                    <span className={navStyles.navbarTogglerIcon}></span>
                </button>
                <ul className={navStyles.navbar} ref={navb} id="navbar">
                    {/* <li><Link className={navStyles.navBtn} onClick={closeMenu} href="#about">about</Link></li> */}
                    <li><Link className={navStyles.navBtn} href="#about"><span onClick={closeMenu}>about</span></Link></li>
                    <li><Link className={navStyles.navBtn} href="#projects"><span onClick={closeMenu}>projects</span></Link></li>
                    <li><Link className={navStyles.navBtn} href="#contact"><span onClick={closeMenu}>contact</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
