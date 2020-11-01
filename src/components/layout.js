/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import LeftLinks from "./LeftLinks"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <LeftLinks />
        <footer>
          <p>
            <small>
              Designed + coded from scratch in the Washington, D.C. area.
              <br />
              Some icons made by various contributors via{" "}
              <a
                href="//flaticon.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                www.flaticon.com
              </a>
              .
            </small>
            <br />
            &copy; {new Date().getFullYear()} Jay Sella. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
