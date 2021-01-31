import { ThemeToggler } from "gatsby-plugin-dark-mode"

import styles from "./layout.module.sass"

import { ReactComponent as LinkedInLogo } from "../assets/images/linkedin.svg"
import { ReactComponent as GitHubLogo } from "../assets/images/github.svg"
import { ReactComponent as LightMode } from "../assets/images/sun.svg"
import { ReactComponent as DarkMode } from "../assets/images/moon.svg"
// import { ReactComponent as Logo } from '../assets/images/logo.svg'

function LeftLinks() {
  return (
    <div className={styles.leftLinks}>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/jay-sella"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInLogo className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="//github.com/j-651"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHubLogo className={styles.icon} />
          </a>
        </li>
        {/* <li>
            <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                <Logo className={styles.icon} />
            </a>
        </li> */}
        <li>
          <ThemeToggler>
            {({ theme, toggleTheme }) => {
              // Don't render anything at compile time. Deferring rendering until we
              // know which theme to use on the client avoids incorrect initial
              // state being displayed.
              if (theme === null) {
                return null
              }
              return (
                <>
                  {theme === "dark" && (
                    <button
                      aria-label="Switch to Light Mode"
                      onClick={() => toggleTheme("light")}
                    >
                      <LightMode className={styles.icon}></LightMode>
                    </button>
                  )}
                  {theme === "light" && (
                    <button
                      aria-label="Switch to Dark Mode"
                      onClick={() => toggleTheme("dark")}
                    >
                      <DarkMode className={styles.icon}></DarkMode>
                    </button>
                  )}
                </>
              )
            }}
          </ThemeToggler>
        </li>
      </ul>
    </div>
  )
}

export default LeftLinks
