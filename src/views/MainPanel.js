import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';
import VirtualGridList from '../components/VirtualGridList/VirtualGridList'
import Dropdown from '../components/Dropdown/Dropdown';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import css from './MainPanel.module.css'
// import filesys from '../file_sys.json'

import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const MainPanel = kind({
	name: 'MainPanel',

	styles: {
		css,
		className: 'MainPanel'
	},
	
	propTypes: {
		filesys: propTypes.array
	},

	render: ({filesys, ...props}) => (
		<Panel {...props}>
			{console.log('mainpanel: ', filesys)}
			{/* {console.log(props)} */}
			<Dropdown id="dropDown"/><br />
			<Header title="Media Player" />		
			
			<VirtualGridList id="grid" filesys={filesys} />
			
		</Panel>
	)
});

export default MainPanel;
