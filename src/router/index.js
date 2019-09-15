import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home';
import Rectangle from 'bundle-loader?lazy&name=rectangle!pages/Rectangle';
import Path from 'bundle-loader?lazy&name=canvasPath!pages/Path';
import Text from 'bundle-loader?lazy&name=text!pages/Text';
import Transform from 'bundle-loader?lazy&name=transform!pages/Transform';
import DrawImage from 'bundle-loader?lazy&name=drawImage!pages/DrawImage';
import Pattern from 'bundle-loader?lazy&name=pattern!pages/Pattern';
import UseImageData from 'bundle-loader?lazy&name=useImageData!pages/UseImageData';
import Shadow from 'bundle-loader?lazy&name=shadow!pages/Shadow';
import Gradient from 'bundle-loader?lazy&name=gradient!pages/Gradient';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound';
import Loading from 'components/Loading';

/* 柯里化 createComponent(Home)相当于 (props)=>() : 2个连续箭头函数柯里化了1次 */
const createComponent = (component) => (props) => (
	<Bundle load={component}>
		{
			(Component) => Component ? <Component {...props} /> : <Loading/>
		}
	</Bundle>
);

const getRouter = () => (
	<Switch>
		<Route exact path="/" component={createComponent(Home)}/>
		<Route path="/rectangle" component={createComponent(Rectangle)}/>
		<Route path="/canvasPath" component={createComponent(Path)}/>
		<Route path="/text" component={createComponent(Text)}/>
		<Route path="/transform" component={createComponent(Transform)}/>
		<Route path="/drawImage" component={createComponent(DrawImage)}/>
		<Route path="/pattern" component={createComponent(Pattern)}/>
		<Route path="/useImageData" component={createComponent(UseImageData)}/>
		<Route path="/shadow" component={createComponent(Shadow)}/>
		<Route path="/gradient" component={createComponent(Gradient)}/>
		<Route component={createComponent(NotFound)}/>
	</Switch>
);

export default getRouter;