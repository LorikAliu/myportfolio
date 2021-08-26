import React, { useEffect, useState, useRef } from 'react'
import BtnSlider from './BtnSlider'
import projectsStyles from '../styles/Projects.module.scss'
import imagesData from '../utilits/imagesData'
import imagesData2 from '../utilits/imagesData2'
import { prefix } from '../utilits/prefix';

const Projects = () => {
    // console.log(imagesData.length)

    const [slideIndex, setSlideIndex] = useState(1)
    const [slideIndex2, setSlideIndex2] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== imagesData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === imagesData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(imagesData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const nextSlide2 = () => {
        if(slideIndex2 !== imagesData2.length){
            setSlideIndex2(slideIndex2 + 1)
        } 
        else if (slideIndex2 === imagesData2.length){
            setSlideIndex2(1)
        }
    }

    const prevSlide2 = () => {
        if(slideIndex2 !== 1){
            setSlideIndex2(slideIndex2 - 1)
        }
        else if (slideIndex2 === 1){
            setSlideIndex2(imagesData2.length)
        }
    }

    const moveDot2 = index => {
        setSlideIndex2(index)
    }

    return (
        <div className={projectsStyles.projectsContainer} id="projects">
            <div className={projectsStyles.projectsBG}>
                <div className={projectsStyles.projectsWrapper}>
                    <div className={projectsStyles.projectsTitle}>
                        <h1>Recent Projects</h1>
                    </div>
                    <div className={projectsStyles.projectContainer}>
                        <div className={projectsStyles.projectWrapper}>
                            <div className={projectsStyles.projectDescription}>
                                <h1>Point Of Sale Web App</h1>
                                <p className={projectsStyles.projectP}>
                                    A web app that lets its users manage products of their store 
                                    with a simple to use UI. User can add new products, 
                                    make sales, and show various statistics about its sales.
                                </p>
                                <p className={projectsStyles.projectTech}>HTML, CSS, Javascript, Ajax, Local Storage, Node JS, MySQL</p>
                            </div>
                            <div className={projectsStyles.projectImage}>
                                {imagesData.map((obj, index) => {
                                    return (
                                        <div
                                        key={obj.id}
                                        className={slideIndex === index + 1 ? `${projectsStyles.slide} ${projectsStyles.activeAnim}` : `${projectsStyles.slide}`}
                                        >
                                            <img 
                                            src={`${prefix}/project1/img${index + 1}.png`} alt={`${obj.title}`}
                                            />
                                        </div>
                                    )
                                })}

                                {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
                                <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}

                                <button
                                onClick={prevSlide}
                                className={`${projectsStyles.btnSlide} ${projectsStyles.prev}`}
                                >
                                <img src={`${prefix}/left-arrow.svg`} />
                                </button>

                                <button
                                onClick={nextSlide}
                                className={`${projectsStyles.btnSlide} ${projectsStyles.next}`}
                                >
                                <img src={`${prefix}/right-arrow.svg`} />
                                </button>

                                <div className={projectsStyles.containerDots}>
                                    {Array.from({length: imagesData.length}).map((item, index) => (
                                        <div 
                                        onClick={() => moveDot(index + 1)}
                                        className={slideIndex === index + 1 ? `${projectsStyles.dot} ${projectsStyles.active}` : `${projectsStyles.dot}`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.projectContainer}>
                        <div className={projectsStyles.projectWrapper}>
                            <div className={projectsStyles.projectDescription}>
                                <h1>Create and Discover Events Web App</h1>
                                <p className={projectsStyles.projectP}>
                                    Web app for creating Events or discovering events near you.
                                </p>
                                <p className={projectsStyles.projectTech}>HTML, SASS, React JS, JWT, Node JS, Mongo DB</p>
                            </div>
                        <div className={projectsStyles.projectImage}>
                            {imagesData2.map((obj, index) => {
                                return (
                                    <div
                                    key={obj.id}
                                    className={slideIndex2 === index + 1 ? `${projectsStyles.slide} ${projectsStyles.activeAnim}` : `${projectsStyles.slide}`}
                                    >
                                        <img 
                                        src={`${prefix}/project2/img${index + 1}.png`} alt={`${obj.title}`}
                                        />
                                    </div>
                                )
                            })}

                                <button
                                onClick={prevSlide2}
                                className={`${projectsStyles.btnSlide} ${projectsStyles.prev}`}
                                >
                                <img src={`${prefix}/left-arrow.svg`} />
                                </button>

                                <button
                                onClick={nextSlide2}
                                className={`${projectsStyles.btnSlide} ${projectsStyles.next}`}
                                >
                                <img src={`${prefix}/right-arrow.svg`} />
                                </button>

                            <div className={projectsStyles.containerDots}>
                                {Array.from({length: imagesData2.length}).map((item, index) => (
                                    <div 
                                    onClick={() => moveDot2(index + 1)}
                                    className={slideIndex2 === index + 1 ? `${projectsStyles.dot} ${projectsStyles.active}` : `${projectsStyles.dot}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
