import React, {Component} from 'react';

import styles from './index.css';

const colorful = require('images/colorful.jpg');

export default class UseImageData extends Component {
	constructor(){
    super();
		this.canvasUseImageData = React.createRef();
		this.colorful = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasUseImageData.current;

		if(drawing.getContext){
			const ctx = drawing.getContext('2d');
			const colorfulSmileImg = this.colorful.current;
			let red, green, blue, alpha, average, data, imageData;

			/* 用pattern填充矩形 */
			ctx.drawImage(colorfulSmileImg, 0, 0);
			imageData = ctx.getImageData(0, 0, 128, 128);
			data = imageData.data;

			for(let i=0;i < data.length;i+=4){
			  red = data[i];
				green = data[i+1];
				blue = data[i+2];
				alpha = data[i+3];

				// 取平均值
				average = Math.floor((red+green+blue)/3);

				// 设置颜色值, 透明度不变
				data[i] = average;
				data[i+1] = average;
				data[i+2] = average;
			}

			// 只读啊！！！！！
			// imageData.data = data;
			// context.putImageData(imageData, 0, 0);
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<img ref={this.colorful} src={colorful} />
				<canvas ref={this.canvasUseImageData} width="1000" height="600" className={styles.canvasBox}>
					您的浏览器不支持canvas，请更换浏览器.
				</canvas>
			</div>
		)
	}
}