import { PlusCircle } from 'phosphor-react'
import styles from './Add.module.css'

export function Add() {
    return (
        <form className={styles.add}>
            <input
                placeholder='Add a new task'
            ></input>
            <button type='submit'>
                Add
                <PlusCircle size={16} />
            </button>
        </form>
    )
}