import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/file";
import Video from "./Video";


import videos from "../utils/data";


const VideoDetails = ({ setsideBar }) => {
    // close side bar
    useEffect(() => {
        setsideBar(false);

    }, []);

    // get id
    let { id } = useParams();
    const video = videos.filter(video => video.personalization_id == id)



    return (
        <div>
            {video && (
                <>
                    <div className="video-detail">
                        <ReactPlayer
                            className="react-player"
                            width="95%"
                            origin={window.location.href}
                            controls={true}
                            url={video[0]?.url}
                            playing
                        />

                        <h2 className="video-title">{video[0]?.title}</h2>
                        {/* <div className="video-des">
                            <Link
                                to={`/channel/${videosDisData?.snippet?.channelId}`}
                                className="des-one"
                            >
                                <img
                                    src={videosDisData?.snippet?.thumbnails?.high?.url}
                                    alt={videosDisData?.snippet?.title}
                                />
                                <div>
                                    <h3>{videosDisData?.snippet?.channelTitle}</h3>
                                    <h4>{viewformatted.toUpperCase()} views</h4>
                                </div>
                            </Link>

                            <div className="des-two">
                                {Likeformatted.toUpperCase()} Likes{" "}
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                        </div> */}
                    </div>
                    <div className="related-videos">
                        <h2 className="title">Related Videos</h2>
                        <div className="video-card-wrapper">
                            {videos.map((data) => (
                                <Video key={data.personalization_id} d={data} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default VideoDetails;
