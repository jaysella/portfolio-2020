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
                    <li><a href="#marketplace">Marketplace</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                </ul>
            </aside>

            <section>
                <h3>Summary:</h3>
                <article className="summary">
                    <p>In my time volunteering with Middlesex Beach I have spearheaded a <mark>complete overhaul of their website</mark> with the rollout of individual user logins to ease access to protected documents. I have also served as the <mark>primary contact person</mark> for fielding general inquiries and managing general processes.</p>
                </article>
            </section>

            {/* website is most robust in the area */}

            <section className={styles.work}>
                <h3>My Work:</h3>

                <article className="project featured" id="website">
                    <div className="left">
                        <h4>Webmaster + Point-of-Contact</h4>
                        <h2>Website</h2>
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

                <article className="project featured flipped" id="marketplace">
                    <div className="left">
                        <h4>Designed + Sold Products</h4>
                        <h2>'MXB Marketplace'</h2>
                        <p>As part of an initiative to enliven community spirit and help generate revenue to curb HOA dues, I designed and sold Middlesex-themed apparel, umbrellas, drink koozies, totes, and stickers. This also resulted in the development of a website for people to view the products, reserve their purchases, and communicate with our group.</p>

                        <div className="actions">
                            <p className="info"><small>Link no longer available</small></p>
                        </div>
                    </div>
                    <div className="right">
                        <Gallery photos={mbPhotos.filter(function (photo) { return photo.src.includes('mbm-shirt-kids') })} />
                    </div>
                </article>
            </section>

            <section id="gallery">
				<h3>Gallery:</h3>
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