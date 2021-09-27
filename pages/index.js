import { useState, useEffect, createRef } from 'react';
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import navStyles from '../styles/Nav.module.scss'

export default function Home() {
  const [activeSection, setActiveSection] = useState();
  const [pageHeight, setPageHeight] = useState();

  useEffect(() => {
      setPageHeight(window.innerHeight);
      window.addEventListener('resize', (e) => {
      setTimeout(() => {
          setPageHeight(window.innerHeight);
      }, 300);
      });
  }, []);
  
  const refs =  {
    landing: createRef(),
    about: createRef(),
    projects: createRef(),
    contact: createRef()
  };

  const handleCLick = (htmlId) => {

    document.getElementById('navbar').classList.contains(`${navStyles.show}`) ? document.getElementById('navbar').classList.remove(`${navStyles.show}`) : ''
    document.getElementById('nav').classList.contains(`${navStyles.navShow}`) ? document.getElementById('nav').classList.remove(`${navStyles.navShow}`) : ''

      refs[htmlId].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
      });
  };
  return (
    <div>
      <Meta />
      <Nav activeSection={activeSection} handleCLick={handleCLick} />
      <Landing activeSection={activeSection} setActiveSection={setActiveSection} refs={refs} pageHeight={pageHeight} />
      <About activeSection={activeSection} setActiveSection={setActiveSection} refs={refs} pageHeight={pageHeight} />
      <Projects activeSection={activeSection} setActiveSection={setActiveSection} refs={refs} pageHeight={pageHeight} />
      <Contact activeSection={activeSection} setActiveSection={setActiveSection} refs={refs} pageHeight={pageHeight} />
    </div>
  )
}