import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from '../components/Introduction'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'
import ContactMe from '../components/ContactMe'

function App() {
  const [menuState, setMenuState] = useState("opens")

  function showMenu() {
    if (menuState === "open") {
      return (
        <p>empty</p>
      )
    } else {
      return (
        <span className="material-symbols-outlined align-right">
        menu
        </span>
      )
    }
  }

  return (
    <> 
      <div className="header">
        <nav>
          {showMenu()}
        </nav>
      </div>

      <section className='landing-section'>
        <Introduction className="intro"/>
        <img></img>
      </section>

      <section className='projects-section'>
        <h4>Projects</h4>
        <div className='projects-collection'>
          <ProjectCard 
            title={"Meme generator"}
            intro="A webapp that allows user to randomly generate memes and edit it on the go"
            acheivements=""
            skills=""
          />
          <ProjectCard 
            title={"Meme generator"}
            intro="A webapp that allows user to randomly generate memes and edit it on the go"
            acheivements=""
            skills=""
          />
          <ProjectCard 
            title={"Meme generator"}
            intro="A webapp that allows user to randomly generate memes and edit it on the go"
            acheivements=""
            skills=""
          />

        </div>
      </section>
      
      <section className='skill-section'>
        <h3>Skills</h3>
        <div className='skill--collections'>
          <SkillCard skillSection="Languages" skillSet={["Javscript", "Java", "Python"]}/>
          <SkillCard skillSection="Framework" skillSet={["Angular", "React", "Tailwind CSS"]}/>
          <SkillCard skillSection="Others" skillSet={["HTML", "CSS", "Figma", "SASS"]}/>
        </div>
      </section>

      <section>
        <h4>About Me</h4>
        <p>
          A highly motivated Software
          Engineer seeking for software
          development/testing
          opportunities where I can fully
          utilize and leverage my 6 years
          of software development and
          testing experience to pursue a
          software engineering role.
        </p>
      </section>

      <section>
        <ContactMe />
      </section>

      <footer>

      </footer>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
