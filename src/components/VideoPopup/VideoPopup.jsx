import ReactPlayer from "react-player/youtube";
import {
  VideoClose,
  VideoContainer,
  VideoOpacityLayer,
  Video,
} from "./styles/VideoPopup.styled";
import { CgCloseR } from "react-icons/cg";
import PropTypes from "prop-types";

const VideoPopup = ({ videoId, setVideoId, setShow }) => {
  const handleClose = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <VideoContainer>
      <VideoOpacityLayer onClick={handleClose}></VideoOpacityLayer>
      <VideoClose onClick={handleClose}>
        <CgCloseR />
      </VideoClose>
      <Video>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls={true}
          width="100%"
          height="100%"
        />
      </Video>
    </VideoContainer>
  );
};
VideoPopup.propTypes = {
  videoId: PropTypes.string.isRequired,
  setVideoId: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default VideoPopup;
