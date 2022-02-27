import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';

import MainPanel from '../views/MainPanel';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import css from './App.module.less';
import VideoPlayer from '../views/VideoPlayer';
import React from 'react';
import file_sys from '../file_sys.json';

const App = kind({
	name: 'App',

	functional: true,

	styles: {
		css,
		className: 'app'
	},
	defaultProps: {
		filesys: file_sys
	},

	render: ({filesys, ...props}) => (
		<div {...props}>
			<Panels>
				{console.log('app',filesys)}
				<Router>
					<Routes>
						<Route path="/" element={<MainPanel filesys= { filesys } />}  />
						<Route path="/VideoPlayer" element={<VideoPlayer />} />
					</Routes>
				</Router>
				
			</Panels>
		</div>
	)
});

export default ThemeDecorator(App);
