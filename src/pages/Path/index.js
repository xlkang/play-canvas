import React, {Component} from 'react';

import styles from './index.css';

export default class Path extends Component {
	constructor(){
    super();
    	this.canvasPath = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasPath.current;

		if(drawing.getContext){
			console.log('beginDrawingPath------------');
			const context = drawing.getContext('2d');

			/* 绘制不带数字的时钟表盘 */
			context.beginPath();
			// 外圆
			context.arc(100, 100, 99, 0, 2 * Math.PI, false);
			// 内圆
			context.moveTo(194, 100);
			context.arc(100, 100, 94, 0, 2 * Math.PI, false);
			// 绘制分针
			context.moveTo(100, 100);
			context.lineTo(100, 25);
			// 绘制秒针
			context.moveTo(100, 100);
			context.lineTo(45, 100);
			//描边路径(必须)
			// context.strokeStyle = 'grey';
			context.stroke();
		}
	}

	render() {
		return (
			<canvas ref={this.canvasPath} width="780" height="900" className={styles.canvasBox}>
			</canvas>
		)
	}
}