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
			<p className="preheader">Looking to contact me?</p>
			<h1>
				Let's start here...
                <br />
			</h1>
		</section>

		<section>
			<Navigation active="contact" stuck />

			<form method="post" netlify-honeypot="bot-field" data-netlify="true">
				<input type="hidden" name="bot-field" />

				<label htmlFor="name">
					Name
					<input type="text" name="name" />
				</label>
				
				<label htmlFor="email">
					Email
					<input type="email" name="email" />
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