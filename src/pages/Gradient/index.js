import React, {Component} from 'react';

import styles from './index.css';

export default class Gradient extends Component {
	constructor(){
    super();
		this.canvasGradient = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasGradient.current;

		if(drawing.getContext){
			const ctx = drawing.getContext('2d');
			// 线性渐变
			const linearGradient = this.createRectLineGradient(ctx, 30, 30, 50, 50);

			linearGradient.addColorStop(0, 'white');
			linearGradient.addColorStop(1, 'black');

			/* 绘制红色矩形 */
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(10, 10, 50, 50);

			/* 绘制渐变重合的矩形 */
			ctx.fillStyle = linearGradient;
			ctx.fillRect(30, 30, 50, 50);

			// 径向渐变
			ctx.translate(100, 0);
			const radialGradient = ctx.createRadialGradient(55, 55, 5, 55, 55, 30);

			radialGradient.addColorStop(0, 'white');
			radialGradient.addColorStop(1, 'grey');

			/* 绘制红色矩形 */
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(10, 10, 50, 50);

			/* 绘制渐变重合的矩形 */
			ctx.fillStyle = radialGradient;
			ctx.fillRect(30, 30, 50, 50);
		}
	}

	createRectLineGradient = (ctx, x, y, width, height) => ctx.createLinearGradient(x, y, x+width, y+height);

	render() {
		return (
			<canvas ref={this.canvasGradient} width="1000" height="600" className={styles.canvasBox}>
				您的浏览器不支持canvas，请更换浏览器.
			</canvas>
		)
	}
}