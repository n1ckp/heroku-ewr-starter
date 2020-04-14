import React from 'react'
import styles from './App.scss'

import HerokuIcon from 'img/heroku.svg'
import ExpressIcon from 'img/nodejs.svg'
import WebpackIcon from 'img/webpack.svg'
import ReactIcon from 'img/react.svg'
import TypeScriptIcon from 'img/typescript.svg'


const App: React.FunctionComponent = () => (
  <div id={styles.container}>
    <div className={styles.header}>
      <h1>Heroku Express Webpack React Starter</h1>
      <div className={styles.icons}>
        <HerokuIcon width={48} height={48} className={styles.icon} />
        <ExpressIcon width={48} height={48} className={styles.icon} />
        <WebpackIcon width={48} height={48} className={styles.icon} />
        <ReactIcon width={48} height={48} className={styles.icon} />
        <TypeScriptIcon width={48} height={48} className={styles.icon} />
      </div>
    </div>
    <div className={styles.inner}>
      <p>If you're seeing this, and the icons above, then congrats! It works!</p>
    </div>
    <div className={styles.footer}>
      <p>Created and maintained by <a href="https://n1ck.dev/" target="_blank">Nick Phillips</a></p>
    </div>
  </div>
)

export default App
