import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <section className="hero">
      <p className="preheader">Uh oh,</p>
      <h1>This page does not exist.</h1>
      <br />
      <p>
        <Link to="/" className="button--prominent">
          Let's go home <span>&rarr;</span>
        </Link>
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
