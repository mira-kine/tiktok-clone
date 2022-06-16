import React from 'react';
import './VideoFooter.css';

export default function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>your @handle goes here</h3>
        <p>this is the description</p>
      </div>
      <img className="videoFooter__disc" alt="spinning disc" />
    </div>
  );
}
