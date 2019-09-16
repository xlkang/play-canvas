import React, {Component} from 'react';

import styles from './index.css';

const smile = require('images/smile_128.png');

export default class Pattern extends Component {
	constructor(){
    super();
		this.canvasCompose = React.createRef();
		this.smile = React.createRef();
	}

	componentDidMount(){
		const drawing = this.canvasCompose.current;

		if(drawing.getContext){
			const ctx = drawing.getContext('2d');

			console.log(ctx.globalAlpha) // 1 ,默认值为1
			// 绘制红色矩形 
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(10, 10, 50, 50);

			// 修改全局透明度
			ctx.globalAlpha = 0.5;

			// 绘制蓝色矩形
			ctx.fillStyle = 'rgba(0, 0, 255, 1)';
			ctx.fillRect(30, 30, 50, 50);

			// 重置全局透明度
			ctx.globalAlpha = 1;


			// 绘制红色矩形
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(110, 10, 50, 50);

			// 设置合成操作
			ctx.globalCompositeOperation = 'destination-over';

			// 绘制蓝色矩形
			ctx.fillStyle = 'rgba(0, 0, 255, 1)';
			ctx.fillRect(130, 30, 50, 50);
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<canvas ref={this.canvasCompose} width="1000" height="600" className={styles.canvasBox}>
					您的浏览器不支持canvas，请更换浏览器.
				</canvas>
			</div>
		)
	}
}