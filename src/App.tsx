import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'

import './global.css'
import { Add } from './components/Add'
import { List } from './components/List'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Add />
        <List />
      </div>
    </>
  )
}
