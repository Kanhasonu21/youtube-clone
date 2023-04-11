import React from "react";

// import { useGetFeedQuery } from "../redux/data";
import Video from "./Video";
import videos from "../utils/data";
// import necessary components ^^^^^

const Feed = () => {
  // const { data, isFetching, isError } = useGetFeedQuery();

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
