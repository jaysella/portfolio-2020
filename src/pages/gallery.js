import React, { useState, useCallback } from 'react'
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

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../assets/data/gallery-photos'

function IndexPage() {

	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<Layout>
			<SEO title="Home" />
			<section className="hero">
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

export default IndexPage

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