import React from 'react'
import projectsStyles from '../styles/Projects.module.scss'
// import leftArrow from "../public/left-arrow.svg";
// import rightArrow from "../public/right-arrow.svg";
import { prefix } from '../utilits/prefix';

// {`${prefix}/project1/img${index + 1}.png`}

const BtnSlider = ({ direction, moveSlide }) => {
    return (
        <button
          onClick={moveSlide}
          className={direction === "next" ? `${projectsStyles.btnSlide} ${projectsStyles.next}` : `${projectsStyles.btnSlide} ${projectsStyles.prev}`}
        >
          <img src={direction === "next" ? `${prefix}/right-arrow.svg` : `${prefix}/left-arrow.svg`} />
        </button>
    );
}

export default BtnSlider
