import React from 'react'
import styles from './Global.module.css'

function Modal({ error, clickHandler }) {
    return (
        <div>
            <div className={styles.backdrop} onClick={clickHandler}></div>
            <div className={[styles.modal, styles.basic].join(' ')}>
                <h2>{error[0]}</h2>
                <p>{error[1]}</p>
                <button onClick={clickHandler}>OK</button>
            </div>
        </div>
    )
}

export default Modal
