import styles from './Header.module.css'

import todoLogo from '../assets/todo-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} />
            <h1><span className={styles.to}>to</span><span className={styles.do}>do</span></h1>
        </header>
    )
}