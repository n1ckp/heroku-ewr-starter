import React from 'react'
import styles from 'styles/App.scss'

import HerokuIcon from 'img/heroku.svg'
import ExpressIcon from 'img/nodejs.svg'
import WebpackIcon from 'img/webpack.svg'
import ReactIcon from 'img/react.svg'


class App extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <div className={styles.header}>
          <h1>Heroku Express Webpack React Starter</h1>
          <div className={styles.icons}>
            <HerokuIcon className={styles.icon} />
            <ExpressIcon className={styles.icon} />
            <WebpackIcon className={styles.icon} />
            <ReactIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.inner}>
          <p>If you're seeing this, and the icons above, then congrats! It works!</p>
        </div>
      </div>
    )
  }
}

export default App
