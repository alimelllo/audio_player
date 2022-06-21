import './styles.css';
import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";
import { useEffect, useState } from 'react';
import Loading from './Loading';

function App() {

const [ IsLoading , SetIsLoading ] = useState(true);

useEffect(() => {
  
  setTimeout(() => {
    SetIsLoading(false);
  },4000);

},[])
  
return (
    <>
    <div className="App">
     
  { IsLoading ? (

<Loading />

  ):(
<>
    <AudioPlayer tracks={tracks} />

    
</>
  ) }



    </div>
    </>
  )
}

export default App;
