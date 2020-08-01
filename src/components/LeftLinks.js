import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import styles from "./layout.module.sass"

import { ReactComponent as GitHubLogo } from "../assets/images/github.svg"
import { ReactComponent as LightMode } from "../assets/images/light.svg"
import { ReactComponent as DarkMode } from "../assets/images/dark.svg"
// import { ReactComponent as Logo } from '../assets/images/logo.svg'

function LeftLinks() {
  return (
    <div className={styles.leftLinks}>
      <ul>
        <li>
          <a
            href="//github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <GitHubLogo className={styles.icon} viewBox="0 0 438.549 438.549" />
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
