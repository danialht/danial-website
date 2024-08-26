import styles from './Experiences.module.css'
import ExperienceCard from './ExperienceCard.jsx'

function Experiences() {
    return (
        <div className={styles.mainDiv}>
            <ExperienceCard startDate="July 2024" endDate="August 2024" role="Researcher" place="ITCSC research program, CUHK university, Hong Kong" description="My research was related to Non-Convex and Non-Smooth Optimization; to be more specific, improving lower bounds for first order optimization algorithms. I worked on the Minimax problem which has many applications in machine learning e.g. GANs with regularization, off-policy reinforcement learning, and some robust learning models." />
            <br />
            <ExperienceCard startDate="June 2022" endDate="October 2023" role="Olympiad instructor" place="Top high schools in Tehran (e.g. Allameh Tabatabei, Farzanegan, Salam, ...)" description="I have taught physics olympiad and creative problem-solving methods in many of top highschools of Iran (Allame Tabatabaei, Allame Helli, Salam, Farzanegan, ...) to talented students preparing for National Physics Olympiad and International Physics Olympiad (IPhO). Topics which I have taught include Probability Theory, Statistical Mechanics, Linear Algebra, Electromagnetism, Mechanics, Thermodynamics, Fluid Dynamics, Special Relativity and many problem-solving strategies for all the subjects mentioned." />
        </div>
    );
}

export default Experiences