import React, {Component} from 'react';

import styles from './index.css';

export default class Shadow extends Component {
	constructor(){
    super();
		this.canvasShadow = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasShadow.current;

		if(drawing.getContext){
			const ctx = drawing.getContext('2d');

			ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 4;

			/* 绘制红色矩形 */
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(10, 10, 50, 50);

			/* 绘制蓝色矩形 */
			ctx.fillStyle = 'rgba(0, 0, 255, 0.5';
			ctx.fillRect(30, 30, 50, 50);
		}
	}

	render() {
		return (
			<canvas ref={this.canvasShadow} width="1000" height="600" className={styles.canvasBox}>
				您的浏览器不支持canvas，请更换浏览器.
			</canvas>
		)
	}
}