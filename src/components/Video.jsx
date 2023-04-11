import React from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from 'react-player/file'



const Video = ({ d }) => {

  const date = d && d.publishTime;
  const diff = moment().diff(moment(date));
  const ago = moment.duration(diff).humanize();

  // using navigation
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleHoverOn = (e) => {
    setHover(true);
  };

  const handleHoverOff = (e) => {
    setHover(false);
  };

  return (
    <Link
      to={`/video/${d.personalization_id}`}
      text="Click to Unmute"
      className="card-box"
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}>
      {hover ? <ReactPlayer url={d.url} playing width={350} height={196} controls muted={true} onClick={(e) => { e.preventDefault() }} />
        : <img
          src={d?.thumbnail_url}
          alt={d?.snippet?.title}
          referrerPolicy="no-referrer"
        />}

      <div className="card-content">
        <img
          src={d?.thumbnail_url}
          alt={d?.title}
          referrerPolicy="no-referrer"
          className="thumb"
        />
        <div className="des">
          <p>{d?.snippet?.title}</p>
          <div
            onClick={() => {
              navigate(`/channel/${d?.snippet?.channelId}`);
            }}
            className="channel-name"
            text={d.channelTitle}
          >
            {d.channelTitle}
          </div>
          <div className="date"> {ago} ago </div>
        </div>
      </div>
    </Link>
  );
};

export default Video;
