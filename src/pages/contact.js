import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Navigation from "../components/Navigation"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <div className="sticky">
      <p className="back-button">
        <Link to="/" className="button icon-left">
          <span>&larr;</span> Back Home
        </Link>
      </p>
    </div>
    <section className="hero">
      <p className="preheader">What's next?</p>
      <h1>Get in touch</h1>
      <p className="postheader">
        I am always eager to learn about potential projects. If you have any
        questions or would simply like to reach out, my inbox is always open!
      </p>
    </section>

    <section>
      <Navigation active="contact" stuck />

      <form
        method="post"
        name="contact"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />

        <label htmlFor="name">
          Name
          <input type="text" name="name" placeholder="Samuel Serif" />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="samuel.serif@example.com"
          />
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
