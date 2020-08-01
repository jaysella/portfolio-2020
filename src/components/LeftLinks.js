import React from 'react'
import styles from './layout.module.sass'

import { ReactComponent as GitHubLogo } from '../assets/images/github.svg'
// import { ReactComponent as Logo } from '../assets/images/logo.svg'

function LeftLinks() {
    return (
        <div className={styles.leftLinks}>
            <ul>
                <li>
                    <a href="//github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <GitHubLogo className={styles.icon} viewBox="0 0 438.549 438.549" />
                    </a>
                </li>
                {/* <li>
                    <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                        <Logo className={styles.icon} />
                    </a>
                </li> */}
                <li></li>
            </ul>
        </div>
    )
}

export default LeftLinks