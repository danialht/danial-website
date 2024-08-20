import './about.css'
import { TypeAnimation } from 'react-type-animation';

function About() {

    /*return (
        <div>
            <TypeAnimation
                sequence={[
                    "I'm a CS Student",
                    1000,
                    "I'm a Writer",
                    1000,
                    "I'm a Designer",
                    1000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
            />
        </div>
    );*/

    return (
        <div className="card">
            <img class="image" alt="profile picture" src="https://avatars.githubusercontent.com/u/119340172?v=4" />

            <TypeAnimation
                sequence={["Hi! 👋", 1500, "I'm Danial", 1500]}
                speed={50}
                repeat={Infinity}
                style={{ 'font-size': '10vh', 'border': '1px solid black' }}
            />

        </div >
    );
}

export default About