import tracks from "./tracks";
import TrackItem from './TrackItem';
import { useState } from "react";
const PlayList = (props) => {



        const trackList = tracks.map((track,i) => (

          <TrackItem
            title={track.title}
            artist={track.artist}
            onClick={() => {props.onSelectedTrack(i); console.log(i)} }
            isPlaying={props.isPlaying}
          onPlayPauseClick={  props.onPlayPauseClick  } 
        
          />
        ));

    return (

<div className="tracklist">
{trackList}
</div>

)

} 
 

export default PlayList;