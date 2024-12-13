import styles from './List.module.css'

export function List() {
    return (
        <div className={styles.list}>
            <header>
                <span className={styles.createdTasks}>
                    Created tasks 
                    <span className={styles.count}>0</span>
                </span>
                <span className={styles.completedTasks}>
                    Completed
                    <span className={styles.count}>0</span>
                </span>
            </header>
        </div>
    )
}