import React from 'react'
import styles from 'styles/App.scss'

class App extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <div className={styles.header}>
          <h1>Heroku Express Webpack React Starter</h1>
          <div className={styles.icons}>
            <span className={styles.heroku}></span>
            <span className={styles.express}></span>
            <span className={styles.webpack}></span>
            <span className={styles.react}></span>
          </div>
        </div>
        <div className={styles.inner}>
          <p>If you're seeing this, then congrats! It works!</p>
        </div>
      </div>
    )
  }
}

export default App
