import React, { Component } from 'react'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import propTypes from 'prop-types'

import Layout from '../components/layout'

import styles from './index.module.sass'
// import Image from '../components/image'
import SEO from '../components/seo'

// import Tabs from '../components/Tabs'
// import Tab from '../components/Tab'
import Navigation from '../components/Navigation'

class IndexPage extends Component {
	render() {
		let data = this.props.data
		return (
			<>
				<Layout>
					<SEO title="Home" />
					<section className="hero stuck">
						<p className="preheader">Hi, I'm <b>Jay Sella</b>,</p>
						<h1>
							Tech <span>aficionado</span> &
							<br/>
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

						<article className="project featured">
							<div className="left">
								<h4>Design + Development</h4>
								<h2>SPC Financial, Inc.</h2>
								<p>Project entailed redesign + overhaul of existing website to modernize user experience.</p>

								<div className="actions">
									<Link to="/p/spc-financial" className="button--prominent">
										Details <span>&rarr;</span>
									</Link>
									<a href="//spcfinancial.com" target="_blank" rel="noopener noreferrer" className="simple-link">
										View Site <span>&rarr;</span>
									</a>
								</div>
							</div>
							<div className="right">
								<Img fluid={data.spcFinancial.childImageSharp.fluid} />
							</div>
						</article>

						<article className="project featured">
							<div className="left">
								<h4>Webmaster + Point-of-Contact</h4>
								<h2>Middlesex Beach Association</h2>
								<p>Project entailed complete overhaul of HOA’s website + the creation of individual user logins to ease access to protected documents. Additionally serve as primary contact person for fielding general inquiries and managing general processes.</p>

								<div className="actions">
									<Link to="/p/middlesex-beach" className="button--prominent">
										Details <span>&rarr;</span>
									</Link>
									<a href="//middlesexbeach.org" target="_blank" rel="noopener noreferrer" className="simple-link">
										View Site <span>&rarr;</span>
									</a>
								</div>
							</div>
							<div className="right">
								<Img fluid={data.middlesexBeach.childImageSharp.fluid} />
							</div>
						</article>

						<article className="project featured">
							<div className="left">
								<h4>Webmaster + Point-of-Contact</h4>
								<h2>Castello Ragazzi, LLC</h2>
								<p>Created + managed website for a company’s rental property. Additionally facilitated communication and requests with guests before, during, and after their stay.</p>

								<div className="actions">
									<Link to="/p/castello-ragazzi" className="button--prominent">
										Details <span>&rarr;</span>
									</Link>
								</div>
							</div>
							<div className="right">
								<Img fluid={data.castelloRagazzi.childImageSharp.fluid} />
							</div>
						</article>
					</section>

					<section className={styles.other_projects}>
						<h3>Other Projects:</h3>
						<div className={styles.projects}>
							<article className="project small">
								<div className="inner">
									<h4>Analysis + Development</h4>
									<h2>Spoon River Anthology</h2>
									<p>Group project entailed analysis of the text + characters of Edgar Lee Masters’ Spoon River Anthology. Simultaneously covered the design + development of the ability to interact with a character web + explore character analyses.</p>

									<div className="actions">
										<a href="//spoonriver.netlify.com" target="_blank" rel="noopener noreferrer" className="button">
											View Site <span>&rarr;</span>
										</a>
									</div>
								</div>
							</article>

							<article className="project small">
								<div className="inner">
									<h4>Webmaster</h4>
									<h2>Sella &amp; Martinic, LLC</h2>
									<p>Assumed responsibility for managing the firm’s website to reflect staff and company informational changes.</p>

									<div className="actions">
										<a href="//sellamartinic.com" target="_blank" rel="noopener noreferrer" className="button">
											View Site <span>&rarr;</span>
										</a>
									</div>
								</div>
							</article>

							<article className="project small">
								<div className="inner">
									<h4>Development</h4>
									<h2>St. Anselm's Abbey School</h2>
									<p>Developed an auto-scheduling system to simplify a previously tedious, highly-criticized process.</p>

									<div className="actions">
										<p className="info"><small>Link not available</small></p>
									</div>
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