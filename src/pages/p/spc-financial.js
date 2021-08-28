import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Gallery from "../../components/Gallery"

import styles from "./project.module.sass"

function SPCFinancialPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="sticky">
        <p className="back-button">
          <Link to="/" className="button icon-left">
            <span>&larr;</span> Back Home
          </Link>
        </p>
      </div>

      <div className={styles.top}>
        <section className="hero">
          <p className="preheader">
            <Link to="/">Jay Sella</Link> &mdash;{" "}
            <b>Marketing + Communications Intern</b>
          </p>
          <h1>
            SPC Financial
            <small>
              <sup>&reg;</sup>
            </small>
          </h1>
          <p className="info">
            A local investment advisory firm based in the Washington, D.C. Metro
            area with over $1.2 billion in assets under advisement + management.
          </p>
        </section>

        <aside className={styles.toc}>
          <h3>Contents</h3>
          <ul className="contents">
            <li>
              <a href="#highlights">Highlights</a>
            </li>
            <li>
              <a href="#website">Website</a>
            </li>
            <li>
              <a href="#marketing">Marketing</a>
            </li>
            <li>
              <a href="#designs">Designs</a>
            </li>
          </ul>
        </aside>
      </div>

      <section id="highlights">
        <h3>Highlights:</h3>
        <article className="highlights">
          <ul className="list">
            <li>
              <span>
                Launched electronic invoicing and payment processing with
                Stripe, <mark>saving $1,000 in annual operating costs</mark> and{" "}
                <mark>15 hours of employee time</mark> during the annual billing
                cycle
              </span>
            </li>
            <li>
              <span>
                Rolled out online appointment scheduling, reducing employee
                workload by <mark>16 hours/month</mark> and handling{" "}
                <mark>2,500 appointments</mark> since rollout
              </span>
            </li>
            <li>
              <span>
                Implemented live chat with the firm's advisors, meeting the
                needs of <mark>100 clients and prospects</mark> in the first
                year
              </span>
            </li>
          </ul>
        </article>
      </section>

      <section className={styles.project} id="website">
        <h3>Website:</h3>
        <p>
          <span>&#8627;</span> Redesign + Development
        </p>

        <article className="details">
          <div className="block">
            <h4>
              <mark>Logo + Tagline</mark>
            </h4>
            <p>
              Not long into the redesign process, it was decided it was time for
              a re-centering of the company. To match their now-modernized
              aesthetic, I crafted a new logo and assisted in the creation of a
              new tagline. That tagline &mdash;{" "}
              <i>
                Finance on a Human Level<sup>&reg;</sup>
              </i>{" "}
              &mdash; is now a registered trademark with the United States
              Patent and Trademark Office <small>(#88269408)</small>.
            </p>
          </div>

          <div className="block">
            <h4>
              <mark>Problem</mark>
            </h4>
            <p>
              For years, SPC had contracted with a third-party company to
              design, develop, and maintain their corporate website. I became
              involved to learn the inner workings of the firm’s Marketing
              department and assist in the maintenance and enhancement of their
              online presence. However, whenever our team approached the
              contractor about implementing new site functionality, they often
              failed to deliver.
            </p>
            <p>
              Ultimately, their reluctance to innovate became too much of a
              roadblock; it was time to design and build a new site, from
              scratch.
            </p>
          </div>

          <div className="block">
            <h4>
              <mark>Solution</mark>
            </h4>
            <p>
              With a clean slate, I set out to modernize the site's content,
              design, and feature set.
            </p>
            <p>
              <b>This project posed a unique challenge</b>: how could we
              modernize the site to appeal to younger, more tech-savvy audiences
              while providing a familiar, intuitive experience for older
              clients?
            </p>
            <p>
              The new design doubles down on SPC’s human-centric approach. I
              worked with the team to incorporate this focus into all website
              and marketing copy. New features and functionality were added to
              bolster client services while also avoiding unnecessary clutter.
            </p>
            <p>
              SPC's colors &mdash; blue and gold &mdash; remain prominent
              throughout the new design to keep a cohesive appearance across
              both the site and promotional materials such as apparel and
              accessories. Finally, I ensured the continued operation of old
              links to minimize disruption to existing clients.
            </p>
            <p>Throughout this project, I spearheaded the implementation of:</p>
            <ul className="list pb-0">
              <li>Advisor Live Chat</li>
              <li>Online Appointment Scheduling</li>
              <li>Electronic Invoicing + Payment Processing</li>
              <li>Integrated Job Postings + Applications</li>
              <li>Centralized Content Management</li>
            </ul>
          </div>

          {/* <div className="block">
            <h4>
              <mark>Tech Stack</mark>
            </h4>
            <p>
              The site is built on Gatsby, styled with Sass, stored in
              Bitbucket, connected to Contentful, and hosted by Netlify, along
              with custom Stripe integrations thanks to Netlify's AWS Lambda
              Functions abilities.
            </p>
          </div> */}

          <div className="block">
            <h4>
              <mark>Compliance + SEC Regulations</mark>
            </h4>
            <p>
              Compliance, privacy, and security are key considerations when
              developing new features for a financial service firm.
            </p>
            <p>
              I was in constant communication with the firm's Chief Compliance
              Officer, their VP of Marketing &amp; Communications, and various
              teams in the broker-dealer's corporate office including
              Advertising, Compliance, Risk Assessment, Social Media, and
              Third-Party Vendors.
            </p>
            <p>
              This involvement included drafting disclaimers and disclosures,
              submitting third-party vendor security assessments for review,
              managing multiple site versions in parallel, and maintaining audit
              logs for each change.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.project} id="marketing">
        <h3>Marketing:</h3>
        <p>
          <span>&#8627;</span> Presentations, Stationery, Advertisements
        </p>

        <article className="details">
          <div className="block">
            <p>
              Upon launching SPC’s revamped website, I began refreshing other
              branch materials in partnership with the company's marketing team.
              We designed new marketing collateral such as presentation
              templates, advertisements, infographics, letterhead, and business
              cards.
            </p>
            <p>
              These new materials included the firm's human-centric focus at
              their core.
            </p>
          </div>
        </article>
      </section>

      <section id="designs">
        <h3>Designs:</h3>
        <Gallery filter="spc" autoHeight />
      </section>
    </Layout>
  )
}

export default SPCFinancialPage
