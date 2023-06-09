import React from "react";

import Video from "./Video";
import videos from "../utils/data";

const Feed = () => {
  return (
    <div className="feed">
      <div className="video-card-wrapper">
        {videos.map((video) => (
          <Video key={video.personalization_id} d={video} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
