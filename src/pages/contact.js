import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import SEO from '../components/seo'

const NotFoundPage = () => (
	<Layout>
		<SEO title="Contact Me" />
		<section className="hero">
			<p><Link to="/" className="button">&larr; Back Home</Link></p>
			<p className="preheader">Looking to contact me?</p>
			<h1>
				Let's start here...
                <br />
			</h1>
		</section>

		<section>
			<h3>Email:</h3>
			<br/>
			<code>jay@jaysella.dev</code>
		</section>
	</Layout>
)

export default NotFoundPage