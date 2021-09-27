import useObserver from '../hooks/useObserver';
import landingStyles from '../styles/Landing.module.scss'
import { prefix } from '../utilits/prefix';

const Landing = ({activeSection, setActiveSection, refs, pageHeight = 100}) => {

    useObserver(activeSection, setActiveSection, refs, 'landing', pageHeight-1)

    return (
        <div ref={refs['landing']} className={landingStyles.landing} id="landing">
            <div className={landingStyles.row}>
                <div className={landingStyles.hello}>
                    <div className={landingStyles.helloName}>Hello<span className={landingStyles.wavingHand}> 👋</span>, my name is Lorik.</div>
                </div>
                <div className={landingStyles.img}>
                    <img src={`${prefix}/computer-img.svg`} alt="computer_image" />
                </div>
                <div className={landingStyles.developer}>
                    <div className={landingStyles.devDesc}>I&apos;m a Full Stack Web Developer</div>
                </div>
                <div className={landingStyles.empty}></div>
            </div>
            <div className={landingStyles.row2}></div>
        </div>
    )
}

export default Landing
