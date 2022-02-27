import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import css from './MainPanel.module.css'
// import fs from 'fs'


const videoPlayer = kind({
	name: 'VideoPlayer',

	styles: {
		css,
		className: 'VideoPlayer'
	},
	
	render: (props) => (
		<Panel {...props}>
			<VideoPlayer />
		</Panel>
	)
});

export default videoPlayer;
