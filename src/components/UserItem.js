import React from 'react'
import styles from './Global.module.css'

function UserItem({children, deleteHandler}) {
    return (
        <span className={styles.item} onClick={deleteHandler}>
            {children}
        </span>
    )
}

export default UserItem
