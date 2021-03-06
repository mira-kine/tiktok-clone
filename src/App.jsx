import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video/Video';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    // BEM - Block, Elements, Modifiers
    <div className="app">
      <h1>My Videos</h1>
      <div className="app__videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <div key={url}>
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
