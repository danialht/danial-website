import styles from './SkillCard.module.css';
import { useState } from 'react'
import Descriptionbox from './DescriptionBox.jsx'

function SkillCard(props) {
    /*
    isSquare: true if the logo image of the skill is a square, otherwise false, and it will be considered a rectangle
    */

    let isSquare = props.isSquare == null ? true : props.isSquare

    const [isActive, setIsActive] = useState(false);
    return (
        <div onMouseLeave={(e) => { props.onMouseLeave(e) }} onMouseEnter={(e) => { props.onMouseEnter(e) }} className={props.isBlurred ? styles.skillCardDivBlurred : styles.skillCardDiv}>
            <img className={isSquare ? styles.logoSquare : styles.logoRectangle} alt="skillCardImage" src={props.imageSrc} />
        </div>
    );
}

export default SkillCard