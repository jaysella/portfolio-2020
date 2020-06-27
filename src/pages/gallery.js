import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Navigation from '../components/Navigation'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../assets/data/gallery-photos'

function GalleryPage() {

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

	return (
		<Layout>
			<SEO title="Home" />
			<section className="hero">
				<p className="back-button"><Link to="/" className="button">&larr; All Projects</Link></p>
				<p className="preheader">Hi, I'm <b>Jay Sella</b>,</p>
				<h1>
					Tech <span>aficionado</span> &
					<br />
					Web <span>developer</span>
				</h1>
			</section>

			<section>
				<Navigation active="gallery" stuck />

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

				<Gallery photos={photos} onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel
								currentIndex={currentImage}
								views={photos.map(x => ({
									...x,
									srcset: x.srcSet,
									caption: x.title
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			</section>
		</Layout>
	)
}

export default GalleryPage