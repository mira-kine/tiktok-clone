import React from 'react';
import './VideoFooter.css';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import Ticker from 'react-ticker';

export default function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <AudiotrackIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__disc" alt="spinning disc" />
    </div>
  );
}
