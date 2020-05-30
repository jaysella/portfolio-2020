import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import Layout from '../../components/layout'

import styles from './project.module.sass'
// import Image from '../components/image'
import SEO from '../../components/seo'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <section className="hero">
            <p className="back-button"><Link to="/" className="button">&larr; Back Home</Link></p>
            <p className="preheader">
                <Link to="/">Jay Sella</Link> &mdash; <b>Webmaster + Point-of-Contact</b>
            </p>
            <h1>
                Middlesex Beach
                <br/>Association
            </h1>
        </section>

        <aside className={styles.toc}>
            <h3>Contents</h3>
            <ul className="contents">
                <li><a href="#website">Website</a></li>
                <li><a href="#designs">Designs</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </aside>

        <section>
            <h3>Summary:</h3>
            <article className="summary">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam nulla, mollitia illo provident distinctio in nemo repudiandae dolores veniam esse vero ratione animi id officia quod, nobis unde aut!</p>
            </article>
        </section>

        <section>
            <h3>My Work:</h3>

            <article className="project featured" id="website">
                <div className="left">
                    <h4>Webmaster + Point-of-Contact</h4>
                    <h2>Website</h2>
                    <p>Project entailed complete overhaul of HOA’s website + the creation of individual user logins to ease access to protected documents. Additionally serve as primary contact person for fielding general inquiries and managing general processes.</p>

                    <div className="actions">
                        <a href="//middlesexbeach.org" target="_blank" rel="noopener noreferrer">
                            View Site <span>&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <Img fluid={data.middlesexBeach.childImageSharp.fluid} />
                </div>
            </article>

            <article className="project featured flipped" id="designs">
                <div className="left">
                    <h4>Permits, Wearables, Letterhead, Logo</h4>
                    <h2>Designs</h2>
                    <p>Project entailed complete overhaul of HOA’s website + the creation of individual user logins to ease access to protected documents. Additionally serve as primary contact person for fielding general inquiries and managing general processes.</p>

                    <div className="actions">
                        <p className="info"><small>Link not available</small></p>
                    </div>
                </div>
                <div className="right">
                    <Img fluid={data.middlesexBeach.childImageSharp.fluid} />
                </div>
            </article>

            <article className="project featured" id="products">
                <div className="left">
                    <h4>The MXB Marketplace</h4>
                    <h2>Products</h2>
                    <p>Designed + sold various items to raise money for the Association. Items included shirts, drink koozies, totes, beach umbrellas, and stickers. Additionally created website to showcase the products and the project's background.</p>

                    <div className="actions">
                        <p className="info"><small>Link not available</small></p>
                    </div>
                </div>
                <div className="right">
                    <Img fluid={data.middlesexBeach.childImageSharp.fluid} />
                </div>
            </article>
        </section>
    </Layout>
)

export default IndexPage

export const projectImage = graphql`
    fragment projectImage on File {
        childImageSharp {
            fluid(maxWidth: 2880, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
   }
`

export const query = graphql`
    query {
        spcFinancial: file(
            relativePath: { eq: "spc-financial.png" }
        ) {
            ...projectImage
        }
        middlesexBeach: file(
            relativePath: { eq: "middlesex-beach.png" }
        ) {
            ...projectImage
        }
        castelloRagazzi: file(
            relativePath: { eq: "castello-ragazzi.png" }
        ) {
            ...projectImage
        }
    }
`