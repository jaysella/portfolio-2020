import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import SEO from '../components/seo'

import Navigation from '../components/Navigation'

const NotFoundPage = () => (
	<Layout>
		<SEO title="Contact Me" />
		<section className="hero">
			<p className="back-button"><Link to="/" className="button">&larr; Back Home</Link></p>
			<h1>
				Get in touch:
			</h1>
			<p className="preheader">You can find me on <a href="//github.com/j-651" target="_blank" rel="nofollow noreferrer">GitHub</a> or connect via email below.</p>
		</section>

		<section>
			<Navigation active="contact" stuck />

			<form method="post" name="contact" netlify-honeypot="bot-field" data-netlify="true">
				<input type="hidden" name="bot-field" />

				<label htmlFor="name">
					Name
					<input type="text" name="name" placeholder="Samuel Serif" />
				</label>
				
				<label htmlFor="email">
					Email
					<input type="email" name="email" placeholder="samuel.serif@example.com" />
				</label>

				<label htmlFor="message">
					Message
					<textarea name="message" />
				</label>

				<button type="submit" className="button--prominent">
					Send <span>&rarr;</span>
				</button>
			</form>
		</section>
	</Layout>
)

export default NotFoundPage