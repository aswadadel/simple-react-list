import React, { useState } from 'react'
import styles from './Global.module.css'

function FormControl({ updateUsers, displayModal}) {
    const [input, setInput] = useState({ username: '', age: '' })

    function submitHandler(e) {
        e.preventDefault();
        if(input.username.trim().length ===0 || input.age.trim().length ===0) {
            displayModal('Invalid Input', 'Check fields again')
            return
        }
        if(+input.age < 14) {
            displayModal('Invalid Input', 'You have to be +14')
            return
        }
        updateUsers(input)
        setInput({
            username: '',
            age: ''
        })
    }

    const changeHandler = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className={[styles.form, styles.basic].join(' ')} onSubmit={submitHandler}>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                id='username'
                name='username'
                onChange={changeHandler}
                value={input.username}
            ></input>
            <label htmlFor='age'>Age (Years)</label>
            <input
                type='number'
                id='age'
                name='age'
                onChange={changeHandler}
                value={input.age}
            ></input>
            <button>Enter</button>
        </form>
    )
}

export default FormControl
