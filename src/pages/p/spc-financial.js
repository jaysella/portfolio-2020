import React from "react"
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
            area with nearly $1 billion in assets under advisement + management.
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
                Launched electronic invoicing and payment processing system via
                Stripe, <mark>saving $1,000 in annual operating costs</mark> and
                <mark>15 hours of employee time</mark> during the annual billing
                cycle
              </span>
            </li>
            <li>
              <span>
                Rolled out online appointment scheduling, handling neatly{" "}
                <mark>600 appointments</mark> and saving{" "}
                <mark>16 hours of employee time</mark> per month
              </span>
            </li>
            <li>
              <span>
                Implemented live chat with the firm's advisors, handling the
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
              new tagline. That tagline,{" "}
              <i>
                Finance on a Human Level<sup>&reg;</sup>
              </i>{" "}
              is now a registered trademark with the United States Patent and
              Trademark Office.
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
              website. However, whenever my team and I approached the contractor
              about new site functionality, they often failed to deliver.
            </p>
            <p>
              Ultimately, their reluctance to innovate became too much of a
              roadblock; it was time to design and build a new site, from
              scratch.
            </p>
            <p>
              <b>&there4;</b> This was the time to see our visions through
              &rarr; it was time to design + build a new site, from scratch.
            </p>
          </div>

          <div className="block">
            <h4>
              <mark>Solution</mark>
            </h4>
            <p>
              With a clean slate, I set out to modernize the content, design,
              and feature set.
            </p>
            <p>
              This project posed a unique challenge: how could we modernize the
              site to appeal to younger, more tech-savvy audiences while
              providing a familiar experience for older clients?
            </p>
            <p>
              The new design doubles down on SPC’s human-centric approach. I
              worked with the team to refresh all website copy to incorporate
              this new focus. I paid special attention when adding while also
              optimizing ease of navigation. New features and functionality were
              added without to avoid cluttering the page and overloading users.
            </p>
            <p>
              SPC's colors, blue and gold, remain prominent across the design to
              keep a cohesive appearance both across the site and across the
              firm’s print materials, apparel, and accessories. Finally, I
              ensured the continued operation of old links to minimize
              disruption to existing clients.
            </p>
            <p>
              <b>&there4;</b> In the end, I spearheaded the implementation of:
            </p>
            <ul className="list pb-0">
              <li>Advisor Live Chat</li>
              <li>Online Appointment Scheduling</li>
              <li>Electronic Invoicing + Payment Processing</li>
              <li>Integrated Job Postings + Applications</li>
              <li>Centralized Content Management</li>
            </ul>
          </div>

          <div className="block">
            <h4>
              <mark>Tech Stack</mark>
            </h4>
            <p>
              The site is built on Gatsby, styled with Sass, stored in
              Bitbucket, connected to Contentful, and hosted by Netlify, along
              with custom Stripe integrations thanks to Netlify's AWS Lambda
              Functions abilities.
            </p>
          </div>

          <div className="block">
            <h4>
              <mark>Compliance + SEC Regulations</mark>
            </h4>
            <p>
              Compliance, privacy, and security are key considerations in the
              marketing process for a financial service firm.
            </p>
            <p>
              Throughout this project, I was in constant communication with the
              firm's Chief Compliance Officer, VP of Marketing &amp;
              Communications, and various teams in the broker-dealer's corporate
              office including Advertising, Compliance, Risk Assessment, Social
              Media, and Third-Party Vendors.
            </p>
            <p>
              This involvement included drafting disclaimers and disclosures,
              submitting third-party vendor security assessments for review,
              managing multiple site versions in parallel, and also keeping and
              reviewing audit logs for each change.
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
              Upon completing stylistic changes on SPC’s website, I embarked on
              a mission to update other branch materials in partnership with
              SPC’s marketing team. We created new marketing collateral
              including presentation templates, logos, stationery,and business
              cards. We also chose to extend the new tone and aesthetic to the
              firm’s advertising campaigns.
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
