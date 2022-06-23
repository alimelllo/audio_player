import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";


const TrackPlayingIcon = (props) => {

return (
<>
    {props.isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => props.onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => props.onPlayPauseClick(true)}
          aria-label="Play"
        >
          <Play />
        </button>
      )}

</>
)


}

export default TrackPlayingIcon;