import React, {Component} from 'react';

import styles from './index.css'

export default class BasicLayout extends Component {
	render() {
		return (
			<div className={styles.basicLayout}>
				{this.props.children}
			</div>
		)
	}
}