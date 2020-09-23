import React, { Component } from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import Img from "gatsby-image"

import propTypes from "prop-types"

import Layout from "../components/layout"

import styles from "./index.module.sass"
// import Image from '../components/image'
import SEO from "../components/seo"

// import Tabs from '../components/Tabs'
// import Tab from '../components/Tab'
import Navigation from "../components/Navigation"

class IndexPage extends Component {
  render() {
    let data = this.props.data
    return (
      <>
        <Layout>
          <SEO title="Home" />
          <section className="hero stuck">
            <p className="preheader">
              Hi, I'm <b>Jay Sella</b>,
            </p>
            <h1>
              Tech <span>aficionado</span> &
              <br />
              Web <span>developer</span>
            </h1>
          </section>

          <section>
            <Navigation active="myWork" />
            {/* <Tabs>
							<Tab tabTitle={'My Work'}>
								<p>hello</p>
							</Tab>
							<Tab tabTitle={'Gallery'}>
								<p>from</p>
							</Tab>
							<Tab tabTitle={'Contact'}>
								<p>from</p>
							</Tab>
						</Tabs> */}

            <article className="project featured slideUp">
              <div className="left">
                <h4>Marketing + Communications Intern</h4>
                <h2>SPC Financial&reg;</h2>
                <p>
                  Redesigned and rebuilt the firm's website and marketing
                  materials to modernize the user experience and help clients +
                  prospects find answers faster.
                </p>

                <div className="actions">
                  <Link to="/p/spc-financial" className="button--prominent">
                    More Info <span>&rarr;</span>
                  </Link>
                  <a
                    href="//spcfinancial.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="simple-link"
                  >
                    View Site <span className="upperRight">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <Img fluid={data.spcFinancial.childImageSharp.fluid} />
              </div>
            </article>

            <article className="project featured slideUp">
              <div className="left">
                <h4>Webmaster + Central Technology Consultant</h4>
                <h2>Middlesex Beach Association</h2>
                <p>
                  I overhauled the HOA’s website, implemented a QR Code
                  Verification System, and served as a central technology
                  consultant for evaluating and maintaining the Association's
                  infrastructure.
                </p>

                <div className="actions">
                  <Link to="/p/middlesex-beach" className="button--prominent">
                    More Info <span>&rarr;</span>
                  </Link>
                  <a
                    href="//middlesexbeach.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="simple-link"
                  >
                    View Site <span className="upperRight">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <Img fluid={data.middlesexBeach.childImageSharp.fluid} />
              </div>
            </article>

            <article className="project featured slideUp">
              <div className="left">
                <h4>Webmaster + Communications Officer</h4>
                <h2>Castello Ragazzi, LLC</h2>
                <p>
                  I designed + developed a website marketing a beach rental
                  property, whilst managing communication with guests before,
                  during, and after their stay.
                </p>

                <div className="actions">
                  <Link to="/p/castello-ragazzi" className="button--prominent">
                    More Info <span>&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="right">
                <Img fluid={data.castelloRagazzi.childImageSharp.fluid} />
              </div>
            </article>
          </section>

          <section className={styles.other_projects}>
            <h3>Other Noteworthy Projects</h3>
            <div className={styles.projects}>
              <article className="project small slideUp">
                <div className="inner">
                  <h4>Gatsby.js &bull; Sass &bull; Netlify</h4>
                  <h2>Spoon River Anthology</h2>
                  <p>
                    Created an interactive exploration of Edgar Lee Masters'{" "}
                    <i>Spoon River Anthology</i>: analysis, characters,
                    connections.
                  </p>

                  <div className="actions">
                    <a
                      href="//spoonriver.netlify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button--prominent"
                    >
                      <span className="upperRight">&rarr;</span>
                    </a>
                  </div>
                </div>
              </article>

              <article className="project small slideUp">
                <div className="inner">
                  <h4>Website Consultant</h4>
                  <h2>Sella &amp; Martinic, LLC</h2>
                  <p>
                    Assumed control of the company's site in 2017 to revitalize
                    content and reflect changes among the staff and company.
                  </p>

                  <div className="actions">
                    <a
                      href="//sellamartinic.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button--prominent"
                    >
                      <span className="upperRight">&rarr;</span>
                    </a>
                  </div>
                </div>
              </article>

              <article className="project small slideUp">
                <div className="inner">
                  <h4>Communications Director</h4>
                  <h2>St. Anselm's Abbey School — Student Government</h2>
                  <p>
                    I automated student assignments for school events and lunch
                    cleanup, increasing accountability and reliability in much
                    less time.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

IndexPage.propTypes = {
  data: propTypes.object.isRequired,
}

export default IndexPage

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxWidth: 3000, quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const query = graphql`
  query {
    spcFinancial: file(relativePath: { eq: "spc-financial.png" }) {
      ...projectImage
    }
    middlesexBeach: file(relativePath: { eq: "middlesex-beach.png" }) {
      ...projectImage
    }
    castelloRagazzi: file(relativePath: { eq: "castello-ragazzi.png" }) {
      ...projectImage
    }
  }
`
