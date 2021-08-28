import PropTypes from "prop-types"
import LeftLinks from "./LeftLinks"

const Layout = ({ children }) => {
  return (
    <>
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
          <p style={{ marginBottom: `0.375em` }}>
            &copy; {new Date().getFullYear()} Jay Sella. All Rights Reserved.
          </p>
          <p>
            <small>
              Designed + built in the Washington, D.C. area. Some icons made by
              contributors via{" "}
              <a
                href="//flaticon.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Flaticon
              </a>
              .
            </small>
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
