import React from 'react'
import aboutStyles from '../styles/About.module.scss'
import { prefix } from '../utilits/prefix';

const About = () => {
    return (
        <div className={aboutStyles.about} id="about">
            <div className={aboutStyles.aboutRowTop}>
                <h1>About Me</h1>
                <div className={aboutStyles.desc}>
                    <div>Full Stack Web Developer adept at building responsive web applications. Passionate about learning new technologies, bringing ideas to life,
                         and working with dedicated teams to build efficient and robust applications suited to the user&apos;s needs.
                    </div>
                </div>
            </div>
            <div className={aboutStyles.aboutRowBottom}>
                <div className={aboutStyles.aboutTop}>
                    <h1>My Skills</h1>
                </div>
                <div className={aboutStyles.aboutBottom}>
                    <div className={aboutStyles.aboutItems}>
                        <div className={aboutStyles.aboutHeader}>
                            <img className={aboutStyles.skillsImg} src={`${prefix}/front-end.png`} alt="front-end_image" />
                        </div>
                        <div className={aboutStyles.aboutFooter}>
                            <p>Javascript</p>
                            <p>React JS</p>
                            <p>HTML/CSS</p>
                            <p>Bootstrap</p>
                            <p>Material UI</p>
                        </div>
                    </div>
                    <div className={aboutStyles.aboutItems}>
                        <div className={aboutStyles.aboutHeader}>
                            <img src={`${prefix}/back-end.png`} alt="back-end_image" />
                        </div>
                        <div className={aboutStyles.aboutFooter}>
                            <p>Node Js</p>
                            <p>Express Js</p>
                            <p>PHP</p>
                            <p>MySQL</p>
                            <p>MongoDB</p>
                            <p>PostgresSQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
