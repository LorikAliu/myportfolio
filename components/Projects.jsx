import useObserver from '../hooks/useObserver';
import ProjectSlider from './ProjectSlider'
import projectStyles from '../styles/Projects.module.scss'
import imagesData from '../utilits/imagesData'
import imagesData2 from '../utilits/imagesData2'


const Projects = ({activeSection, setActiveSection, refs, pageHeight = 100}) => {

    useObserver(activeSection, setActiveSection, refs, 'projects', pageHeight-1)

    return (
        // <div ref={refs['projects']} className={`container ${projectStyles['projects--container']}`} id="projects">
        <div className={`container ${projectStyles['projects--container']}`}>
            <div ref={refs['projects']} className={projectStyles.projectsRef} id="projects"></div>
            <div className={`wrapper ${projectStyles['projects--wrapper']}`}>
            {/* <div className={projectsStyles['projects-wrapper__t--e']}> */}
                <h1 className={`title ${projectStyles['projects--title']}`}>Recent Projects</h1>
                <div className={projectStyles['projects-card']}>
                    <div className={projectStyles['projects-text']}>
                        <h1>Point Of Sale Web App</h1>
                        <p className={projectStyles['projects-text__description']}>
                            A web app that lets its users manage products of their store 
                            with a simple to use UI. User can add new products, 
                            make sales, and generate various reports about the sales.
                        </p>
                        <p className={projectStyles['projects-text__technologies']}>HTML, CSS, Javascript, Ajax, Local Storage, Node JS, MySQL</p>
                    </div>

                    <ProjectSlider projectsData={imagesData} projectDir={'project1'} />
                </div>
                <div className={projectStyles['projects-card']}>
                    <div className={projectStyles['projects-text']}>
                        <h1>Create and Discover Events Web App</h1>
                        <p className={projectStyles['projects-text__description']}>
                            Web app for creating Events or discovering events near you.
                        </p>
                        <p className={projectStyles['projects-text__technologies']}>HTML, SASS, React JS, JWT, Node JS, Mongo DB</p>
                    </div>

                    <ProjectSlider projectsData={imagesData2} projectDir={'project2'} />
                </div>
            </div>
        </div>
    )
}

export default Projects
