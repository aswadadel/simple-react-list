import React from 'react'
import styles from './Global.module.css'
import UserItem from './UserItem'

function UsersList({ usersList:users , deleteUser}) {
    return (
        <div className={[styles.basic].join(' ')}>
            {users.length === 0 && <UserItem>no users are here</UserItem>}
            {users.map((user, index) => (
                <UserItem
                    key={index}
                    deleteHandler={deleteUser(user[0], user[1])}>
                    {user.join(', ')}
                </UserItem>
            ))}
        </div>
    )
}

export default UsersList
