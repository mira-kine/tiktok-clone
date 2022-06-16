import React, { useRef, useState } from 'react';
import './Video.css';

export default function Video() {
  const [playing, setPlaying] = useState(false);
  // useRef to target the video that the user clicks to stop/play video
  const videoRef = useRef(null);

  //  use play state to toggle between states of play and pause
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m-webapp.tiktokcdn-us.com/9126e5d60a3ccd6124c3beb697983b79/62aacaab/video/tos/useast5/tos-useast5-ve-0068c001-tx/d1132bcd6c1846bf9f9f64ad072bf729/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C0%7C0&amp;br=3922&amp;bt=1961&amp;cs=0&amp;ds=3&amp;ft=ebtHKH-qMyq8Z51pFwe2Ne_yfl7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=O2ZlaTxkM2U6MzhpOmY6ZkBpamdsZzY6ZmpoZDMzZzczNEAtXmE1YS4xXzExMjIyMTU1YSM1Y19rcjRnM2FgLS1kMS9zcw%3D%3D&amp;l=202206160015280101131351430501C2A6"
      ></video>
      {/* <VideoFooter /> */}
      {/* <VideoSidebar /> */}
    </div>
  );
}
