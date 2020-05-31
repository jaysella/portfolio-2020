import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import styles from './project.module.sass'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../../assets/data/gallery-photos'

function CastelloRagazziPage() {
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

	const crPhotos = !!photos ? photos.filter(function (photo) {
		return photo.src.includes('castello')
	}) : ''

	return (
		<Layout>
			<SEO title="Home" />
			<section className="hero">
				<p className="back-button"><Link to="/" className="button">&larr; Back Home</Link></p>
				<p className="preheader">
					<Link to="/">Jay Sella</Link> &mdash; <b>Webmaster + Point-of-Contact</b>
				</p>
				<h1>
					Castello Ragazzi<small>, LLC</small>
				</h1>
			</section>

			<aside className={styles.toc}>
				<h3>Contents</h3>
				<ul className="contents">
					<li><a href="#website">Website</a></li>
					<li><a href="#gallery">Gallery</a></li>
				</ul>
			</aside>

			<section>
				<h3>Summary:</h3>
				<article className="summary">
					<p>Castello Ragazzi managed a rental property along the Eastern Shore. As webmaster, I <mark>designed + developed three website iterations</mark> and served as a <mark>main point-of-contact for prospects + current guests</mark>.</p>
				</article>
			</section>

			<section className={styles.work}>
				<h3>My Work:</h3>

				<article className="project featured" id="website">
					<div className="left">
						<h4>Webmaster</h4>
						<h2>Website</h2>
						<p>The purpose of this website was to showcase the property's pictures, features, pricing, and availability.</p>

						<div className="actions">
							<p className="info">
								Site no longer available
							</p>
						</div>
					</div>
					<div className="right">
						<Gallery photos={crPhotos.filter(function (photo) { return photo.src.includes('castello-ragazzi') })} />
					</div>
				</article>
			</section>

			<section id="gallery">
				<h3>Gallery:</h3>
				<Gallery photos={crPhotos} onClick={openLightbox} />
			</section>

			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={crPhotos.map(x => ({
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

export default CastelloRagazziPage