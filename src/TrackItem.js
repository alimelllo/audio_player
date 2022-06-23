
import TrackPlayingIcon from "./TrackPlayingIcon";
const TrackItem = (props) => {

    return (
    <div className="trackitem" onClick={props.onClick}>
<h3>{props.title}</h3>
<p>{props.artist}</p>

 <TrackPlayingIcon isPlaying={props.isPlaying}/>
    </div>
    )
}

export default TrackItem;