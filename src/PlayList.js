import tracks from "./tracks";
import TrackItem from './TrackItem';
const PlayList = (props) => {

        const trackList = tracks.map((track) => (
          <TrackItem
            title={track.title}
            artist={track.artist}
            onClick={ () => {
            
             }}
          />
        ));

    return (

<div className="tracklist">
{trackList}
</div>

)

} 
 

export default PlayList;