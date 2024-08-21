import './skills.css'
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
    return (
        <>
            <div className="skills-card">
                <h1>Skills🔥⚡</h1>
                <p>Click on each image to see descriptions.</p>

                <img className="logo" src={PythonLogo} />
                <img className="logo" src={CppLogo} />
                <img className="logo" src={CLogo} />
                <br />
                <img className="logo" src={JavaLogo} />
                <img className="logo" src={JavascriptLogo} />
                <img className="logo" src={PytorchLogo} />
                <br />
                <img className="logo" src={ReactLogo} />
                <img className="logo" src={ScikitlearnLogo} />
                <img className="logo" src={TensorflowLogo} />
                <br />
                <img className="logo" src={TypescriptLogo} />

            </div>
        </>
    );
}

export default Skills