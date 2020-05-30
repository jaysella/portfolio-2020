import React, { Component } from 'react'
import { Link } from 'gatsby'

class Navigation extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<nav className={['main-nav', !!this.props.stuck ? 'stuck' : ''].join(' ')}>
				<ul>
					<li className={this.props.active === 'myWork' ? 'active' : ''}>
						<Link to="/">My Work</Link>
					</li>

					<li className={this.props.active === 'gallery' ? 'active' : ''}>
						<Link to="/gallery">Gallery</Link>
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
