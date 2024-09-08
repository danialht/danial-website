// import styles from './DescriptionBox.module.css'
import { useState } from 'react'

function DescriptionBox(props) {

    let styles = {
        'position': 'absolute',
        backgroundColor: 'grey',
        'top': 0,
        'left': 0,
        zIndex: '1',
        'visibility': (props.visible ? 'visible' : 'hidden'),
    }

    styles['left'] = props.x + 5;
    styles['top'] = props.y + 10;

    return (
        <div style={styles} >
            {props.description == null ? "DESCRIPTION FAILED!" : props.description}
        </div >
    );
}

export default DescriptionBox