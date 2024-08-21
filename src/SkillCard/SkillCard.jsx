import styles from './SkillCard.module.css';
import { useState } from 'react'

function SkillCard(props) {
    let isSquare = props.isSquare == null ? true : props.isSquare
    const [isActive, setIsActive] = useState(false);
    return (
        <div onMouseLeave={(e) => { props.onMouseLeave(e) }} onMouseEnter={(e) => { props.onMouseEnter(e) }} className={props.isBlurred ? styles.skillCardDivBlurred : styles.skillCardDiv}>
            <img className={isSquare ? styles.logoSquare : styles.logoRectangle} alt="skillCardImage" src={props.imageSrc} />
        </div>
    );
}

export default SkillCard