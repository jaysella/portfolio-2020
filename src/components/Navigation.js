import React, { Component } from 'react'
import { Link } from 'gatsby'

class Navigation extends Component {
	render() {
		return (
			<nav className={['main-nav', !!this.props.stuck ? 'stuck' : ''].join(' ')}>
				<ul>
					<li className={this.props.active === 'myWork' ? 'active' : ''}>
						<Link to="/">Projects</Link>
					</li>

					<li className={this.props.active === 'gallery' ? 'active' : ''}>
						<Link to="/gallery">Design Gallery</Link>
					</li>

					<li className={this.props.active === 'contact' ? 'active' : ''}>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation
