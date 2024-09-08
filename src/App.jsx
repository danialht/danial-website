import Header from './Header.jsx'
import HelloCard from './HelloCard.jsx'
import SkillsBox from './SkillsBox.jsx'
import Experiences from './Experiences/Experiences.jsx'
import Footer from './Footer.jsx'
import Educations from './Educations/Educations.jsx'
import Background from './Background.jsx'
import DescriptionBox from './SkillCard/DescriptionBox.jsx'
import { useState } from 'react'
import './App.css'

function App() {

    const [state, setState] = useState([0, 0, false]);

    let showDescription = () => {
        setState([state[0], state[1], true])
    }
    let hideDescription = () => {
        setState([state[0], state[1], false])
    }



    return (
        <div style={{
            alignItems: 'center',
            textAlign: 'center',
        }}>
            <DescriptionBox visible={state[2]} x={state[0]} y={state[1]} />
            <Background />
            <Header />
            <HelloCard />
            <Educations />
            <Experiences />
            <SkillsBox showDescription={showDescription} hideDescription={hideDescription} onMouseMove={(e) => { setState([e.pageX, e.pageY, state[2]]) }} />
            <Footer />
        </div>
    );
}



export default App
