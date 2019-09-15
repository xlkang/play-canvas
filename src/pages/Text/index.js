import React, {Component} from 'react';

import styles from './index.css';

export default class Text extends Component {
	constructor(){
    super();
    	this.canvasText = React.createRef();
	}

	componentDidMount(){
		this.measureText();
		const drawing = this.canvasText.current;

		if(drawing.getContext){
			console.log('beginDrawingText=======================>>>>');
			const ctx = drawing.getContext('2d');

			/* 绘制不带数字的时钟表盘 */
			ctx.beginPath();
			// 外圆
			ctx.arc(100, 100, 99, 0, 2 * Math.PI, false);
			// 内圆
			ctx.moveTo(194, 100);
			ctx.arc(100, 100, 94, 0, 2 * Math.PI, false);
			// 绘制分针
			ctx.moveTo(100, 100);
			ctx.lineTo(100, 25);
			// 绘制秒针
			ctx.moveTo(100, 100);
			ctx.lineTo(45, 100);
			//描边路径(必须)
			ctx.stroke();

			/* 绘制文字 */
			ctx.font = 'bold 14px Arial';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText('12', 100, 18);
		}
	}

	measureText = () => {
		const drawing = this.canvasText.current;

		if(drawing.getContext){
			const ctx = drawing.getContext('2d');
			const fontSize = 100;

			/* 绘制一个矩形 */
			ctx.strokeRect(410, 0, 140, 20);
			console.log(ctx.measureText('Hello world!'))
			while(ctx.measureText('Hello world!').width > 140) {
				fontSize --;
				ctx.font = fontSize + 'px Arial';
			}

			ctx.fillText('Hello world!', 410, 10);
			ctx.fillText('Font size is ' + fontSize + 'px', 410, 50)
		}
	}

	render() {
		return (
			<canvas ref={this.canvasText} width="780" height="900" className={styles.canvasBox}>
			</canvas>
		)
	}
}