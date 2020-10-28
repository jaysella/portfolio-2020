import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "../components/Navigation"
import Gallery from "../components/Gallery"

import styles from "./p/project.module.sass"

function GalleryPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="sticky">
        <p className="back-button">
          <Link to="/" className="button icon-left">
            <span>&larr;</span> All Projects
          </Link>
        </p>
      </div>
      <section className="hero">
        <p className="preheader">
          Hi, I'm <b>Jay Sella</b>,
        </p>
        <h1>
          Tech <span>aficionado</span> &
          <br />
          Web <span>developer</span>
        </h1>
      </section>

      <Navigation active="gallery" stuck />

      <section className={styles.project} id="website">
        <h3>Digital Media:</h3>

        <article className="details">
          <div className="block">
            <h4>
              <mark>Websites</mark>
            </h4>
            <Gallery filter="website" autoHeight />
          </div>

          <div className="block">
            <h4>
              <mark>Email &amp; Social Media</mark>
            </h4>
            <Gallery filter="social" autoHeight maxThreeCols />
          </div>

          <div className="block">
            <h4>
              <mark>Presentations</mark>
            </h4>
            <Gallery filter="presentation" autoHeight />
          </div>
        </article>
      </section>

      <section className={styles.project} id="website">
        <h3>Print Media:</h3>

        <article className="details">
          <div className="block">
            <h4>
              <mark>The Priory Press</mark>
            </h4>
            <Gallery filter="priory-press" autoHeight />
            <p className="caption">
              <em>
                <b>View full editions</b>:{" "}
                <a
                  href="https://drive.google.com/file/d/11I9qMWeSkE1Iw3iHdc1HltpOPjQEhDQn/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fall 2020
                </a>{" "}
                &bull;{" "}
                <a
                  href="https://drive.google.com/file/d/1urPRWoyeQKT1wyXEqQxobFJjmM2eK7KE/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Summer 2020
                </a>{" "}
                &bull;{" "}
                <a
                  href="https://drive.google.com/file/d/12I6lZJMbfuB5ktpmZUYRxYhmqH5cHJ6W/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  December 2019
                </a>{" "}
                &bull;{" "}
                <a
                  href="https://drive.google.com/file/d/10wh1EyCg5p6TJoyY_BVuBXvzBQjRth6t/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fall 2019
                </a>
              </em>
            </p>
          </div>

          <div className="block">
            <h4>
              <mark>The Priory Perspective</mark>
            </h4>
            <Gallery filter="priory-perspective" autoHeight />
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default GalleryPage
