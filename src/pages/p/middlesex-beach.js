import React, { useState, useCallback } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import styles from './project.module.sass'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../../assets/data/gallery-photos'

function MiddlesexBeachPage({ data }) {
    const [currentImage, setCurrentImage] = useState(0)
	const [viewerIsOpen, setViewerIsOpen] = useState(false)

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index)
		setViewerIsOpen(true)
	}, [])

	const closeLightbox = () => {
		setCurrentImage(0)
		setViewerIsOpen(false)
    }

    const mbPhotos = !!photos ? photos.filter(function (photo) {
        if(photo.src.includes('beach') || photo.src.includes('mbm')) {
            return photo
        }
        return null
    }) : []
    
    return (
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
                    <li><a href="#the-marketplace">The Marketplace</a></li>
                    <li><a href="#designs">Designs</a></li>
                </ul>
            </aside>

            <section>
                <h3>Summary:</h3>
                <article className="summary">
                    <p>In my time volunteering with Middlesex Beach I have spearheaded a <mark>complete overhaul of their website</mark> with the rollout of individual user logins to ease access to protected documents. I have also served as the <mark>primary contact person</mark> for fielding general inquiries and managing general processes.</p>
                </article>
            </section>

            {/* website is most robust in the area */}

            <section className={styles.project} id="website">
                <h3>Website:</h3>
				<p><span>&#8627;</span> Webmaster + Point-of-Contact [Volunteer]</p>

                <article className="project featured">
                    <div className="left">
                        <p>When I assumed control of the HOA's website, there was little-to-no style, making it near impossible to navigate and find information. I set out on a mission to build a brand new website while prioritizing the most common information, standardizing formats, and focusing on ease of navigation. Today, the Association's website is one of the most robust for any HOA in the area.</p>

                        <div className="actions">
                            <a href="//middlesexbeach.org" target="_blank" rel="noopener noreferrer" className="button--prominent">
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
				<p><span>&#8627;</span> Designed + Sold Products [Fundraiser]</p>

                <article className="project text-only">
                    <div>
                        <p>As part of an initiative to enliven community spirit and help generate revenue to curb HOA dues, I designed and sold Middlesex-themed apparel, umbrellas, drink koozies, totes, and stickers. This also resulted in the development of a website for people to view the products, reserve their purchases, and communicate with our group.</p>
                    </div>
                </article>
            </section>

            <section id="designs">
				<h3>Designs:</h3>
				<Gallery photos={mbPhotos} onClick={openLightbox} />
			</section>

			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={mbPhotos.map(x => ({
								...x,
								srcset: x.srcSet,
								caption: x.title
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
        </Layout>
    )
}

export default MiddlesexBeachPage

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