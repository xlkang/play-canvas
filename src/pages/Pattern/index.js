import React, {Component} from 'react';

import styles from './index.css';

const smile = require('images/smile_128.png');

export default class Pattern extends Component {
	constructor(){
    super();
		this.canvasPattern = React.createRef();
		this.smile = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasPattern.current;

		if(drawing.getContext){
			const ctx = drawing.getContext('2d');
			const smileImg = this.smile.current;
			const pattern = ctx.createPattern(smileImg, 'repeat');

			/* 用pattern填充矩形 */
			ctx.fillStyle = pattern;
			ctx.fillRect(10, 10, 500, 500);
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<img ref={this.smile} src={smile} />
				<canvas ref={this.canvasPattern} width="1000" height="600" className={styles.canvasBox}>
					您的浏览器不支持canvas，请更换浏览器.
				</canvas>
			</div>
		)
	}
}