import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import styles from "./project.module.sass"

function MiddlesexBeachPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="sticky">
        <p className="back-button">
          <Link to="/" className="button icon-left">
            <span>&larr;</span> Back Home
          </Link>
        </p>
      </div>

      <div className={styles.top}>
        <section className="hero">
          <p className="preheader">
            <Link to="/">Jay Sella</Link> &mdash;{" "}
            <b>Webmaster + Point-of-Contact [Volunteer]</b>
          </p>
          <h1>Middlesex Beach Association</h1>
          <p className="info">
            A Homeowners Association for a private community on the Eastern
            Shore with nearly 250 properties.
          </p>
        </section>

        <aside className={styles.toc}>
          <h3>Contents</h3>
          <ul className="contents">
            <li>
              <a href="#website">Website</a>
            </li>
            <li>
              <a href="#the-marketplace">The Marketplace</a>
            </li>
          </ul>
        </aside>
      </div>

      <section id="highlights">
        <h3>Highlights:</h3>
        <article className="highlights">
          {/* <p>In my time volunteering with Middlesex Beach I have spearheaded a <mark>complete overhaul of their website</mark> with the rollout of individual user logins to ease access to protected documents. I have also served as the <mark>primary contact person</mark> for fielding general inquiries and managing general processes.</p> */}
          <ul className="list">
            <li>
              <span>
                Implemented a mass communication service to reliably communicate
                with owners, sending 77 email campaigns with an average{" "}
                <mark>75% engagement rate</mark>
              </span>
            </li>
            <li>
              <span>
                Crafted and engineered a{" "}
                <i>Hologram &amp; QR Code Verification System</i>, responsible
                for <mark>5,000+ scans</mark>/year{" "}
                <small>(during peak summer months)</small>
              </span>
            </li>
            <li>
              <span>
                Designed, marketed, and sold{" "}
                <mark>$6,000+ worth of merchandise</mark> for a community
                fundraiser
              </span>
            </li>
            <li>
              <span>
                Established and managed the procedures and databases for
                processing nearly <mark>1,000 owner profile changes</mark>,
                resulting in a <mark>62% increase</mark> in reliable
                communication channels
              </span>
            </li>
            <li>
              <span>
                Served as a point-of-contact between the Board, employees,
                owners, and property management,{" "}
                <mark>handling 700+ support inquiries</mark> over a 3-year span
              </span>
            </li>
          </ul>
        </article>
      </section>

      <section className={styles.project} id="website">
        <h3>Website:</h3>
        <p>
          <span>&#8627;</span> Webmaster + Communications Officer [Volunteer]
        </p>

        <article className="project featured">
          <div className="left">
            <p>
              When I assumed control of the HOA's website, there was
              little-to-no style, making it near impossible to navigate and find
              information. I set out to build a brand new website while
              prioritizing the most commonly requested and searched for
              information, standardizing formats, and focusing on ease of
              navigation. Today, it is one of the most robust HOA websites in
              the area.
            </p>

            <div className="actions">
              <a
                href="//middlesexbeach.org"
                target="_blank"
                rel="noopener noreferrer"
                className="button--prominent"
              >
                View Site <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="right">
            <Img fluid={data.middlesexBeach.childImageSharp.fluid} />
          </div>
        </article>
      </section>

      <section className={styles.project} id="the-marketplace">
        <h3>The Marketplace:</h3>
        <p>
          <span>&#8627;</span> Designed + Sold Products [Fundraiser]
        </p>

        <article className="project text-only">
          <div>
            <p>
              To enliven community spirit and generate revenue to lower HOA
              fees, I designed and sold Middlesex-themed apparel, umbrellas, and
              beach accessories. However, the team faced challenges from a
              limited digital presence and uncertain demand. This also resulted
              in the development of a website for people to view the products,
              reserve their purchases, and communicate with our group. The
              website was built in PHP with a MySQL database backend for
              inventory management. Responsible for communications, I connected
              both over a dedicated email and through Chatra, a live chat
              service.
            </p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default MiddlesexBeachPage

export const query = graphql`
  query {
    middlesexBeach: file(relativePath: { eq: "middlesex-beach.png" }) {
      ...projectImage
    }
  }
`
