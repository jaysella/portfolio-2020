import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

import styles from './project.module.sass'
import SEO from '../../components/seo'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../../assets/data/gallery-photos'

function SPCFinancialPage({ data }) {
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

	const spcPhotos = !!photos ? photos.filter(function (photo) {
		return photo.src.includes('spc')
	}) : ''

	return (
		<Layout>
			<SEO title="Home" />
			<section className="hero">
				<p className="back-button"><Link to="/" className="button">&larr; Back Home</Link></p>
				<p className="preheader">
					<Link to="/">Jay Sella</Link> &mdash; <b>Design + Development</b>
				</p>
				<h1>
					SPC Financial<small><sup>&reg;</sup></small>
				</h1>
			</section>

			<aside className={styles.toc}>
				<h3>Contents</h3>
				<ul className="contents">
					<li><a href="#website">Website</a></li>
					<li><a href="#marketing">Marketing Materials</a></li>
					<li><a href="#gallery">Gallery</a></li>
				</ul>
			</aside>

			<section>
				<h3>Summary:</h3>
				<article className="summary">
					<p>Working at SPC I led a <mark>complete redesign of existing website and marketing materials</mark> to modernize user experience and refresh brand.</p>
				</article>
			</section>

			{/* website is most robust in the area */}

			<section className={styles.work}>
				<h3>My Work:</h3>

				<article className="project featured" id="website">
					<div className="left">
						<h4>Redesign + Development</h4>
						<h2>Website</h2>
						<p>In redesigning and developing from scratch the firm's new website, I worked hand-in-hand with their marketing and compliance teams, along with the firm's broker-dealer to meet and exceed compliance, security, and privacy requirements.</p>

						<div className="actions">
							<a href="//spcfinancial.com" target="_blank" rel="noopener noreferrer" className="button--prominent">
								View Site <span>&rarr;</span>
							</a>
						</div>
					</div>
					<div className="right">
						<Gallery photos={spcPhotos.filter(function (photo) { return photo.src.includes('spc-financial') })} />
					</div>

					<div className="additional">
						<hr/>
						<h4><mark>Key Features</mark></h4>
						<p>A driving factor leading to my building a brand new site stemmed from a <mark>lack of willingness</mark> from firm's previous website service <mark>to innovate</mark>.</p>

						<br/>

						<p>In striving to enhance their client (and prospect) experience, I led the implementation of the following:</p>
						<ul className="list">
							<li>Live Chat</li>
							<li>Online Appointment Scheduling</li>
							<li>Electronic Invoicing</li>
							<li>Online Job Applications</li>
						</ul>
					</div>
				</article>

				<article className="project featured flipped" id="marketing">
					<div className="left">
						<h4>Presentations, Stationery, Advertisements</h4>
						<h2>Marketing Materials</h2>
						<p>Working with SPC's marketing team and to reflect the stylistic changes implemented on the website, I embarked on updating other branch materials including presentation templates, logos, and stationery such as letterhead, envelopes, and business cards. This also carried over to changes in advertising styles.</p>
					</div>
					<div className="right">
						<Gallery photos={spcPhotos.filter(function (photo) { if (photo.src.includes('spc-table-topper') || photo.src.includes('spc-townhall-invite') || photo.src.includes('logo')) { return photo } })} />
					</div>
				</article>
			</section>

			<section id="gallery">
				<h3>Gallery:</h3>
				<Gallery photos={spcPhotos} onClick={openLightbox} />
			</section>

			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={spcPhotos.map(x => ({
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

export default SPCFinancialPage