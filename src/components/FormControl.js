import React from 'react'
import styles from './FormControl.module.css'

function FormControl() {
    return (
        <form className={styles.form}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username'></input>
            <label htmlFor='age'>Age (Years)</label>
            <input type='text' id='age'></input>
            <button>Enter</button>
        </form>
    )
}

export default FormControl
