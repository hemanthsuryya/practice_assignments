const src = 'C:\Users\Hemanth Surya\Videos\MORE.mp4'
const poster = 'https://i1.sndcdn.com/artworks-YJzaiVO6r9NlWrjo-on9Cew-t500x500.jpg'
const title = 'More by KDA'
import ri from '@enact/ui/resolution';
import VideoPlayer from '@enact/sandstone/VideoPlayer'
import { MediaControls } from '@enact/sandstone/MediaPlayer'
import { Video } from '@enact/sandstone/VideoPlayer';
const videoPlayer = (prop) => {
	const videoTitle = title;
	const videoSource = src;
	const videoPoster = poster;

	return (
		<VideoPlayer title={videoTitle} poster={videoPoster}>
            <Video >
                <source src={videoSource}  />
                {/* <infoComponents>A video about my cat Boots, wearing boots.</infoComponents> */}
                {/* <MediaControls>
                    <leftComponents><Button backgroundOpacity="translucent" icon="star" /></leftComponents>
                    <rightComponents><Button backgroundOpacity="translucent" icon="notification" /></rightComponents>

                    <Button backgroundOpacity="translucent">Add To Favorites</Button>
                    <Button backgroundOpacity="translucent" icon="search" />
                </MediaControls> */}    
            </Video>            
        </VideoPlayer>
	);
}

export default videoPlayer;