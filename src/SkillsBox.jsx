import './skillsbox.css'
import SkillCard from './SkillCard/SkillCard.jsx'

import { useState } from 'react'

import CLogo from './assets/logos/c.png'
import CppLogo from './assets/logos/cpp.png'
import JavaLogo from './assets/logos/java.png'
import JavascriptLogo from './assets/logos/js.png'
import PythonLogo from './assets/logos/python.svg'
import PytorchLogo from './assets/logos/pytorch.png'
import ReactLogo from './assets/logos/react.png'
import ScikitlearnLogo from './assets/logos/scikitlearn.png'
import TensorflowLogo from './assets/logos/tensorflow.png'
import TypescriptLogo from './assets/logos/typescript.svg'

function Skills() {

    const [active, setActive] = useState(-1);
    // STATES:
    // -1: no skillCard is blurred
    // any x >= 0: all skillCard except the x-th skillCard is blurred

    let handleMouseExit = (e, x) => {
        setActive(-1)
    };

    let handleMouseEnter = (e, x) => {
        setActive(x)
    };

    let skillCards = [
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 0) }} onMouseEnter={(e) => { handleMouseEnter(e, 0) }}
            isBlurred={active == 0 || active == -1 ? false : true} imageSrc={CppLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 1) }} onMouseEnter={(e) => { handleMouseEnter(e, 1) }}
            isBlurred={active == 1 || active == -1 ? false : true} imageSrc={CLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 2) }} onMouseEnter={(e) => { handleMouseEnter(e, 2) }}
            isBlurred={active == 2 || active == -1 ? false : true} imageSrc={PythonLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 3) }} onMouseEnter={(e) => { handleMouseEnter(e, 3) }}
            isBlurred={active == 3 || active == -1 ? false : true} imageSrc={JavaLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 4) }} onMouseEnter={(e) => { handleMouseEnter(e, 4) }}
            isBlurred={active == 4 || active == -1 ? false : true} imageSrc={JavascriptLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 5) }} onMouseEnter={(e) => { handleMouseEnter(e, 5) }}
            isBlurred={active == 5 || active == -1 ? false : true} isSquare={false} imageSrc={PytorchLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 6) }} onMouseEnter={(e) => { handleMouseEnter(e, 6) }}
            isBlurred={active == 6 || active == -1 ? false : true} isSquare={false} imageSrc={ReactLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 7) }} onMouseEnter={(e) => { handleMouseEnter(e, 7) }}
            isBlurred={active == 7 || active == -1 ? false : true} imageSrc={ScikitlearnLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 8) }} onMouseEnter={(e) => { handleMouseEnter(e, 8) }}
            isBlurred={active == 8 || active == -1 ? false : true} imageSrc={TensorflowLogo} />,
        <SkillCard onMouseLeave={(e) => { handleMouseExit(e, 9) }} onMouseEnter={(e) => { handleMouseEnter(e, 9) }}
            isBlurred={active == 9 || active == -1 ? false : true} imageSrc={TypescriptLogo} />,
    ];


    return (
        <>
            <div className="skills-card">
                <h1>Skills🔥⚡</h1>
                <p>Click on each image to see descriptions.</p>
                {skillCards[0]}
                {skillCards[1]}
                {skillCards[2]}
                <br />
                {skillCards[3]}
                {skillCards[4]}
                {skillCards[5]}
                <br />
                {skillCards[6]}
                {skillCards[7]}
                {skillCards[8]}
                <br />
                {skillCards[9]}

            </div>
        </>
    );
}

export default Skills