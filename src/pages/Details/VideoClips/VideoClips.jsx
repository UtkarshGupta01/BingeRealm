import { useState } from "react";
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import { Title } from "../Cast/styles/Cast.styled";
import {
  PlayIcon,
  Video,
  VideoImg,
  VideoThumbnail,
  VideosCarousal,
  VideosName,
} from "./styles/VIdeoClips.styled";
import { FaPlay } from "react-icons/fa6";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";

const VideoClips = ({ videos }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const handleVideoOpen = (videoKey) => {
    setShowVideo(true);
    setVideoId(videoKey);
  };

  return (
    <>
      <SectionWrapper>
        <Title>Clips</Title>
        <VideosCarousal>
          {videos?.map((video) => (
            <Video key={video.id} onClick={() => handleVideoOpen(video.key)}>
              <VideoThumbnail>
                <VideoImg
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                />
                <PlayIcon>
                  <FaPlay />
                </PlayIcon>
              </VideoThumbnail>
              <VideosName>
                {video.name}{" "}
                <span style={{ fontSize: "15px" }}>({video.type})</span>
              </VideosName>
            </Video>
          ))}
        </VideosCarousal>
      </SectionWrapper>
      {showVideo && (
        <VideoPopup
          videoId={videoId}
          setVideoId={setVideoId}
          setShow={setShowVideo}
        />
      )}
    </>
  );
};

export default VideoClips;
