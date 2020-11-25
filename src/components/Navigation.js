import { Component } from "react"
import { Link } from "gatsby"

class Navigation extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li className={this.props.active === "myWork" ? "active" : ""}>
            <Link to="/">Experience</Link>
          </li>

          <li className={this.props.active === "gallery" ? "active" : ""}>
            <Link to="/gallery">Design Gallery</Link>
          </li>

          <li>
            <a
              href="//drive.google.com/file/d/15uSXGIjPgtdbgbdv4neRQ2wAYWJOs48O/preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </li>

          <li className={this.props.active === "contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
