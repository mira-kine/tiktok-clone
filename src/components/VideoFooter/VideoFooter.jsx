import React from 'react';
import './VideoFooter.css';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import Ticker from 'react-ticker';

export default function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>your @handle goes here</h3>
        <p>this is the description</p>
        <div className="videoFooter__ticker">
          <AudiotrackIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Hi everyone</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__disc" alt="spinning disc" />
    </div>
  );
}
