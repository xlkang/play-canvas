import React, {Component} from 'react';

import styles from './index.css';

export default class Rectangle extends Component {
	constructor(){
    super();
    	this.canvasRectangle = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasRectangle.current;

		if(drawing.getContext){
			console.log('beginDrawingRectangle------------');
			const ctx = drawing.getContext('2d');

			/* 绘制两个重叠的填充矩形 */
			ctx.fillStyle = 'red';
			ctx.fillRect(10,10,50,50);

			ctx.fillStyle = 'rgba(0,0,255,0.5)';
			ctx.fillRect(30,30,50,50);

			/* 绘制两个重叠的描边矩形 */
			ctx.strokeStyle = 'red';
			ctx.strokeRect(110,10,50,50);

			ctx.strokeStyle = 'rgba(0,0,255,0.5)';
			ctx.strokeRect(130,30,50,50);

			/* 先绘制再切掉一块 */
			ctx.fillStyle = 'red';
			ctx.fillRect(210,10,50,50);

			ctx.fillStyle = 'rgba(0,0,255,0.5)';
			ctx.fillRect(230,30,50,50);
			
			ctx.clearRect(240,40,10,10);

			/* 控制矩形线条 */
			ctx.lineWidth = 10;
			ctx.lineCap = 'butt'; // butt:平头, round: 圆头, square: 方头
			ctx.lineJoin = 'bevel'; // round: 圆交, bevel: 斜交, miter: 斜接
			ctx.strokeStyle = 'red';
			ctx.strokeRect(310,10,50,50);

			ctx.lineWidth = 10;
			ctx.lineCap = 'round'; // butt:平头, round: 圆头, square: 方头
			ctx.lineJoin = 'miter'; // round: 圆交, bevel: 斜交, miter: 斜接
			ctx.strokeStyle = 'rgba(0,0,255,0.5)';
			ctx.strokeRect(330,30,50,50);
		}
	}

	render() {
		return (
			<canvas ref={this.canvasRectangle} width="600" height="600" className={styles.canvasBox}>
				您的浏览器不支持canvas，请更换浏览器.
			</canvas>
		)
	}
}