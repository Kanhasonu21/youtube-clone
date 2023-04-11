import React from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// import necessary components ^^^^^

const Video = ({ d }) => {
  // Calculate the difference between the date format 'YYYY-MM-DDTHH:MM:SSZ'  and the current date
  const date = d && d.publishTime;
  const diff = moment().diff(moment(date));
  const ago = moment.duration(diff).humanize();

  // using navigation
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleHoverOn = (e) => {
    console.log(e);
    // if (this.props.hover) {
    //   this.setState({ hover: true });
    // }
  };

  const handleHoverOff = (e) => {
    // if (this.props.hover) {
    //   this.setState({ hover: false });
    // }
  };
  // <Link
  //   to={`/video/${d?.personalization_id}`}
  //   className="card-box"
  //   text="Click to play"
  // >
  {
    /* <img
        src={d?.thumbnail_url}
        alt={d?.snippet?.title}
        referrerPolicy="no-referrer"
      /> */
  }
  return (
    <div
      className="card-box"
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}
    >
      {hover ? (
        <video controls width="250" autoPlay>
          <source src={d.url} type="video/mp4" />
        </video>
      ) : (
        <img
          src={d?.thumbnail_url}
          alt={d?.snippet?.title}
          referrerPolicy="no-referrer"
        />
      )}

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
    </div>
  );
};

export default Video;
