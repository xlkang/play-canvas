import React, {Component} from 'react';

import styles from './index.css';

export default class Transform extends Component {
	constructor(){
    super();
    	this.canvasTransform = React.createRef();
	}

	componentDidMount(){
		this.transForm();
	}

	transForm = () => {
		const drawing = this.canvasTransform.current;

		if(drawing.getContext){
			console.log('beginDrawingTransform=======================>>>>');
			const ctx = drawing.getContext('2d');

			/* 绘制不带数字的时钟表盘,变换原点 */
			ctx.beginPath();
			// 外圆
			ctx.arc(100, 100, 99, 0, 2 * Math.PI, false);
			// 内圆
			ctx.moveTo(194, 100);
			ctx.arc(100, 100, 94, 0, 2 * Math.PI, false);

			// 变换原点
			ctx.translate(100, 100);
			// 绘制分针
			ctx.moveTo(0, 0);
			ctx.lineTo(0, -75);
			// 绘制秒针
			ctx.moveTo(0, 0);
			ctx.lineTo(-55, 0);
			//描边路径(必须)
			ctx.stroke();

			/* 绘制不带数字的时钟表盘,旋转指针 */
			ctx.beginPath();
			// 外圆
			ctx.arc(300, 0, 99, 0, 2 * Math.PI, false);
			// 内圆
			ctx.moveTo(394, 0);
			ctx.arc(300, 0, 94, 0, 2 * Math.PI, false);

			// 变换原点
			ctx.translate(300, 0);
			// 旋转表针
			ctx.rotate(1);
			ctx.moveTo(0, 0);
			ctx.lineTo(0, -75);

			// 绘制秒针
			ctx.moveTo(0, 0);
			ctx.lineTo(-55, 0);
			//描边路径(必须)
			ctx.stroke();

			/* 使用save()和retore() */
			ctx.rotate(-1);
			ctx.translate(200, -100); //  (400, 0)
			ctx.fillStyle = '#ff0000';
			ctx.save(); // A

			ctx.fillStyle = '#00ff00';
			ctx.translate(100, 100); // (500, 100)
			ctx.save(); // B

			ctx.fillStyle = '#0000ff';
			ctx.fillRect(0, 0, 100, 200); // 从(500, 100)开始绘制蓝色矩形

			ctx.restore(); // 回到 B
			ctx.fillRect(10, 10, 100, 200); // 从(510, 110)开始绘制绿色矩形

			ctx.restore(); // 回到 A
			ctx.fillRect(0, 0, 100, 200); // 从(400, 0)开始绘制红色矩形
		}
	}

	render() {
		return (
			<canvas ref={this.canvasTransform} width="1000" height="900" className={styles.canvasBox}>
			</canvas>
		)
	}
}