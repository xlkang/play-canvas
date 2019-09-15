import React, {Component} from 'react';

import styles from './index.css';

const smile = require('images/smile.jpg');

export default class drawImage extends Component {
	constructor(){
    super();
		this.canvasImage = React.createRef();
		this.smile = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasImage.current;

		if(drawing.getContext){
			const ctx = drawing.getContext('2d');
			const smileImg = this.smile.current;

			ctx.drawImage(smileImg, 10, 10);
			ctx.drawImage(smileImg, 50, 10, 20, 30);
			ctx.drawImage(smileImg, 0, 10, 200, 300, 0, 100, 40, 60);
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<img ref={this.smile} src={smile} />
				<canvas ref={this.canvasImage} width="1000" height="600" className={styles.canvasBox}>
					您的浏览器不支持canvas，请更换浏览器.
				</canvas>
			</div>
		)
	}
}