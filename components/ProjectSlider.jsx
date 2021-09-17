import React, {  useState } from 'react'
import projectStyles from '../styles/Projects.module.scss'
import { prefix } from '../utilits/prefix';

const ProjectSlider = ({ projectsData, projectDir }) => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== projectsData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === projectsData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(projectsData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const imgFullScreen = (e) => {
        const imgContainer = e.currentTarget
        const slide = imgContainer.parentNode
        const projectImage = slide.parentNode

        document.querySelector('body').classList.toggle('bodyToggler');

        projectImage.classList.toggle(`${projectStyles.projectImageToggler}`);
        slide.classList.toggle(`${projectStyles.slideToggler}`);  
        imgContainer.classList.toggle(`${projectStyles.activeFullpage}`);
    }

    return (
        <div className={projectStyles['projects-image']}>
        {projectsData.map((obj, index) => {
            return (
                <div
                key={obj.id}
                className={slideIndex === index + 1 ? `${projectStyles['image-slide']} ${projectStyles['image-slide--active']}` : `${projectStyles['image-slide']}`}
                >
                    <div className={projectStyles['image-slide__background']} onClick={imgFullScreen}>
                        <img 
                        src={`${prefix}/${projectDir}/img${index + 1}.png`} alt={`${obj.title}`}
                        />
                    </div>
                </div>
            )
        })}

        <button
        onClick={prevSlide}
        className={`${projectStyles.btnSlide} ${projectStyles.prev}`}
        >
        <img src={`${prefix}/svgs/left-arrow.svg`} />
        </button>

        <button
        onClick={nextSlide}
        className={`${projectStyles.btnSlide} ${projectStyles.next}`}
        >
        <img src={`${prefix}/svgs/right-arrow.svg`} />
        </button>

        <div className={projectStyles.containerDots}>
            {Array.from({length: projectsData.length}).map((item, index) => (
                <div key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? `${projectStyles.dot} ${projectStyles.active}` : `${projectStyles.dot}`}
                ></div>
            ))}
        </div>
    </div>
    )
}

export default ProjectSlider
