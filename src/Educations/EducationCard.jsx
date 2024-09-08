import styles from './EducationCard.module.css'

function EducationCard(props) {
    return (
        <div className={styles.mainDiv}>
            <img className={styles.logo} src={props.imageSrc} />
            <div className={styles.textDiv}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.description}>{props.firstLine}</p>
                <p className={styles.description}>{props.secondLine}</p>
            </div>
        </div>
    )
}

export default EducationCard