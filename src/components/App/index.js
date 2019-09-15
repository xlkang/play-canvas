import React, {Component} from 'react';

import Nav from 'components/Nav';
import BasicLayout from 'layouts/BasicLayout'
import getRouter from 'router';

export default class App extends Component {
	render() {
		return (
			<BasicLayout>
				<Nav/>
				<div style={{width: '100%', overflow: 'auto'}}>
					{getRouter()}
				</div>
			</BasicLayout>
		)
	}
}