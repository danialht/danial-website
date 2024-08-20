import './about.css'
import { TypeAnimation } from 'react-type-animation';


function HelloCard() {

    // TODO: hovering on profile makes the text blurred

    return (
        <div className="card">
            <img class="image" alt="profile picture" src="https://avatars.githubusercontent.com/u/119340172?v=4" />
            <div style={{ 'display': 'inline-block', 'vertical-align': 'top' }}>
                <TypeAnimation
                    sequence={["Hi! 👋", 1500, "Hi! 👋\nI'm Danial.", 1500, "", 500]}
                    speed={50}
                    repeat={Infinity}
                    style={{ whiteSpace: 'pre-line', 'font-size': '10vh' }}
                />
            </div>

        </div >
    );
}

export default HelloCard