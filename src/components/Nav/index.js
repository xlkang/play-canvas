import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import styles from './index.css';

export default class Nav extends Component {
	render() {
		return (
			<div className={styles.navContainer}>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/rectangle">Rectangle</Link></li>
					<li><Link to="/canvasPath">Path</Link></li>
					<li><Link to="/text">Text</Link></li>
					<li><Link to="/transform">Transform</Link></li>
					<li><Link to="/drawImage">DrawImage</Link></li>
					<li><Link to="/pattern">Pattern</Link></li>
					<li><Link to="/useImageData">UseImageData</Link></li>
					<li><Link to="/shadow">Shadow</Link></li>
					<li><Link to="/gradient">Gradient</Link></li>
				</ul>
			</div>
		)
	}
}

