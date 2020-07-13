import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import styles from './project.module.sass'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../../assets/data/gallery-photos'

function SPCFinancialPage() {
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
					<li><a href="#summary">Summary</a></li>
					<li><a href="#website">Website</a></li>
					<li><a href="#marketing">Marketing</a></li>
					<li><a href="#designs">Designs</a></li>
				</ul>
			</aside>

			<section>
				<h3>Summary:</h3>
				<article className="summary">
					<p>Working at SPC I led a <mark>complete redesign</mark> of the firm's website + marketing materials to <mark>modernize the user experience</mark> and help clients + prospects <mark>find answers, faster</mark>.</p>
				</article>
			</section>

			{/* website is most robust in the area */}

			<section className={styles.project} id="website">
				<h3>Website:</h3>
				<p><span>&#8627;</span> Redesign + Development</p>

				<article className="details">
					<div className="block">
						<h4><mark>Lead up</mark></h4>
						<p>When I was first involved in the maintenance of the company's website, they were contracted with a third-party company to design + develop the site on their behalf.</p>
						<p>As time went on, together, SPC and I stumbled across features and styles we wanted to see implemented. When we approached them with our visions, they often failed to deliver.</p>
						<p>Eventually, our frustration with their lack of willingness to enhance the site become too much of a barrier. The service's <mark>lack of willingness to innovate</mark> did not match the firm's human-centric nature. To remedy and see our visions through, I got to work redesigning and coding a new site, from scratch.</p>
					</div>

					{/* <div className="left">
						<p>In redesigning and developing from scratch the firm's new website, I worked hand-in-hand with their marketing and compliance teams, along with the firm's broker-dealer to meet and exceed compliance, security, and privacy requirements.</p>

						<div className="actions">
							<a href="//spcfinancial.com" target="_blank" rel="noopener noreferrer" className="button--prominent">
								View Site <span>&rarr;</span>
							</a>
						</div>
					</div>
					<div className="right">
						<Gallery photos={spcPhotos.filter(function (photo) { return photo.src.includes('spc-financial') })} />
					</div> */}

					<div className="block">
						<h4><mark>Key Features</mark></h4>
						<p>With a clean slate, I got to work modernizing the content, design, and feature set. In striving to enhance their client (and prospect) experience, I led the implementation of the following:</p>
						<ul className="list">
							<li>Live Chat</li>
							<li>Online Appointment Scheduling</li>
							<li>Electronic Invoicing</li>
							<li>Online Job Applications</li>
							<li>Centralized Content Management</li>
							<li>Atomic Deploys + Branch Contexts</li>
							<li>Serverless Infrastructure</li>
						</ul>
					</div>

					<div className="block">
						<h4><mark>Tagline</mark></h4>
						<p>Eventually it was decided it was time for a re-centering of the company. To match their now-modernized design aesthetic, I created a new logo and assisted in the creation of a new tagline. That tagline, <em>Finance on a Human Level<sup>&reg;</sup></em> is now a <mark>registered trademark</mark> with the United States Patent and Trademark Office.</p>
					</div>

					<div className="block">
						<h4><mark>Compliance and SEC Regulations</mark></h4>
						<p>SPC is an independent SEC-registered investment advisor firm who utilizes Raymond James Financial Services as their broker-dealer. As a result, and due to the nature of the security around financial information, compliance is a key aspect early in the development of any new feature or design.</p>
						<p>At every step of the process, I was in communication with the firm's Chief Compliance Officer and the Compliance department, while also working with Raymond James' advertising, social media, and third-party vendor teams.</p>
						<p>All in all, this included <mark>writing and editing disclaimers</mark>, compiling <mark>third-party vendor security assessments</mark> for their review, running <mark>multiple sites in parallel</mark> while awaiting review and approval for new content and features, and also keeping <mark>audit logs</mark> for each change.</p>
					</div>
				</article>
			</section>
			
			<section className={styles.project} id="marketing">
				<h3>Marketing:</h3>
				<p><span>&#8627;</span> Presentations, Stationery, Advertisements</p>

				<article className="project text-only">
					<div>
						<p>Working with SPC's marketing team and to reflect the stylistic changes implemented on the website, I embarked on a mission to update other branch materials including presentation templates, logos, and stationery such as letterhead, envelopes, and business cards. This also carried over to changes in advertising styles.</p>
					</div>
				</article>
			</section>

			<section id="designs">
				<h3>Designs:</h3>
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