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
			<div className="sticky">
				<p className="back-button"><Link to="/" className="button icon-left"><span>&larr;</span> Back Home</Link></p>
			</div>

			<div className={styles.top}>
				<section className="hero">
					<p className="preheader">
						<Link to="/">Jay Sella</Link> &mdash; <b>Marketing + Communications Intern</b>
					</p>
					<h1>
						SPC Financial<small><sup>&reg;</sup></small>
					</h1>
					<p className="info">
						A local investment advisory firm based in the Washington, D.C. Metro area with nearly $1 billion in assets under advisement + management.
					</p>
				</section>

				<aside className={styles.toc}>
					<h3>Contents</h3>
					<ul role="list" className="contents">
						<li><a href="#summary">Summary</a></li>
						<li><a href="#website">Website</a></li>
						<li><a href="#marketing">Marketing</a></li>
						<li><a href="#designs">Designs</a></li>
					</ul>
				</aside>
			</div>

			<section>
				<h3>Summary:</h3>
				<article className="summary">
					<ul className="list">
						<li>
							<span>Led a complete redesign + rebuild of the firm's website, handling <mark>15,000 pageviews/month</mark></span>
						</li>
						<li>
							<span>Launched electronic invoicing and payment processing, saving <mark>$1,000+/year and faster turn-around</mark></span>
						</li>
						<li>
							<span>Rolled out online appointment scheduling, handling <mark>450 appointments in the first 6 months</mark></span>
						</li>
						<li>
							<span>Implemented live chat with the firm's advisors, handling <mark>100+ communications in the first year</mark></span>
						</li>
					</ul>
				</article>
			</section>

			<section className={styles.project} id="website">
				<h3>Website:</h3>
				<p><span>&#8627;</span> Redesign + Development</p>

				<article className="details">
					<div className="block">
						<h4><mark>Background</mark></h4>
						<p>SPC is an independent registered investment advisory firm in the Washington, D.C. Metro area with nearly $1 billion in assets under advisement + management.</p>
					</div>

					<div className="block">
						<h4><mark>Problem</mark></h4>
						<p>Initially, SPC was contracted with a third-party company to design, develop, and maintain their site on the firm's behalf. As I became increasingly involved in the organization, <mark>we discovered + realized new functionality we wanted implemented</mark>.</p>
						<p>When approached with our visions, <i>the company often failed to deliver</i>.</p>
						<p>Eventually, our frustration with <mark>their reluctance to iterate and improve became too much of a roadblock</mark>; their philosophy did not match the firm's human-centricity.</p>
						<p><b>&there4;</b> <mark>This was the time to see our visions through</mark> &rarr; it was time to design + build a new site, from scratch.</p>
					</div>

					<div className="block">
						<h4><mark>Solution</mark></h4>
						<p>With a clean slate, I got to work modernizing the content, design, and feature set.</p>
						<p>This project posed a unique challenge: the <mark>melding together of familiar experiences</mark> for their older clients, whilst also <mark>innovating and modernizing</mark> to appeal to younger, more tech-savvy audiences.</p>
						<p>Attention was paid to ensure the continued operation of old links while also optimizing ease of navigation. New features and functionality were added without overloading the user or over-cluttering the page.</p>
						<p>SPC's brand refresh doubles down on their human-centric focus; <mark>all website copy was modified</mark> to incorporate the new language. SPC's colors, blue and gold, are prominent across their brand. It was important to keep a <mark>cohesive appearance</mark> both across the site and across other materials, including documents, apparel, and accessories.</p>
						<p><b>&there4;</b> In the end, <mark>I spearheaded the implementation of</mark>:</p>
						<ul className="list pb-0">
							<li>Advisor Live Chat</li>
							<li>Online Appointment Scheduling</li>
							<li>Electronic Invoicing + Payment Processing</li>
							<li>Integrated Job Postings + Applications</li>
							<li>Centralized Content Management</li>
						</ul>
					</div>

					<div className="block">
						<h4><mark>Tech Stack</mark></h4>
						<p>The site is built on Gatsby, styled with Sass, stored in Bitbucket, connected to Contentful, and hosted by Netlify, along with custom Stripe integrations thanks to Netlify's AWS Lambda Functions abilities.</p>
					</div>

					<div className="block">
						<h4><mark>Compliance + SEC Regulations</mark></h4>
						<p>As an investment advisory firm, SPC has a second-party broker-dealer. Due to the nature of handling financial information, <mark>compliance, privacy, and security are key considerations</mark> at every step of the process, from concept to continued maintenance.</p>
						<p><mark>Along the way, I was in constant communication</mark> with the firm's Chief Compliance Officer and VP of Marketing &amp; Communications, while also working with the broker-dealer's Advertising, Compliance, Risk Assessment, Social Media, and Third-Party Vendor teams.</p>
						<p>This involvement included drafting disclaimers and disclosures, submitting third-party vendor security assessments for review, managing multiple site versions in parallel, and also keeping and reviewing audit logs for each change.</p>
					</div>
				</article>
			</section>
			
			<section className={styles.project} id="marketing">
				<h3>Marketing:</h3>
				<p><span>&#8627;</span> Presentations, Stationery, Advertisements</p>

				<article className="details">
					<div className="block">
						<p>Working with SPC's marketing team and to reflect the stylistic changes implemented on the website, I embarked on a mission to update other branch materials including presentation templates, logos, and stationery such as letterhead, envelopes, and business cards. This also carried over to changes in advertising styles.</p>
					</div>

					<div className="block">
						<h4><mark>Logo + Tagline</mark></h4>
						<p>Not long into the redesign process, it was decided it was time for a re-centering of the company. To match their now-modernized aesthetic, I <mark>crafted a new logo</mark> and assisted in the creation of a new tagline. That tagline, <i>Finance on a Human Level<sup>&reg;</sup></i> is now a <mark>registered trademark</mark> with the United States Patent and Trademark Office.</p>
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