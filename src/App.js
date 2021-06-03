import React, { useState } from 'react'
import styles from './App.module.css'
import FormControl from './components/FormControl'
import Modal from './components/Modal'
import UsersList from './components/UsersList'

function App() {
    const [users, setUsers] = useState([
        ['user1', 34],
        ['user2', 21]
    ])
    const [error, setError] = useState()

    const updateUserList = ({ username, age }) => {
        setUsers([[username, age], ...users])
    }

    const deleteUser = (username, age) => () => {
        setUsers(users.filter(user => !(user[0] === username && user[1] === age)))
        console.log('hello')
    }

    const removeModal = () => {
        setError()
    }

    const displayModal = (title, msg) => {
        setError([title, msg])
    }

    return (
        <div className={styles.app}>
            {error && <Modal
                error={error}
                clickHandler={removeModal}
            />}
            <FormControl updateUsers={updateUserList} displayModal={displayModal}/>
            <UsersList usersList={users} deleteUser={deleteUser} />
        </div>
    );
}

export default App;
