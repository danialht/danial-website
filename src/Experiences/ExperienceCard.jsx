import styles from './ExperienceCard.module.css'

function ExperienceCard(props) {
    let place = props.place == null ? "TITLE" : props.place
    let role = props.role == null ? "ROLE" : props.role
    let startDate = props.startDate == null ? "START_DATE" : props.startDate
    let endDate = props.endDate == null ? "END_DATE" : props.endDate
    let description = props.description == null ? "DESCRIPTION" : props.description

    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.role}>{role}</h1>
            <h2 className={styles.place}> {place} </h2>
            <h2 className={styles.date}>from {startDate} to {endDate}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default ExperienceCard