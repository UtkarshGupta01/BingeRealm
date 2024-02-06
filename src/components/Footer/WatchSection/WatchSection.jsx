import {
  WatchPlatforms,
  Platform,
  PlatformIcon,
  PlatformName,
} from "./styles/WatchSection.styled";
import prime from "/icons/prime.png";
import netflix from "/icons/netflix.png";
import disney from "/icons/disney.png";
import crunchyroll from "/icons/crunchyroll.png";
import aniwatch from "/icons/aniwatch.png";

const WatchSection = () => {
  const platforms = [
    {
      id: 1,
      name: "Prime",
      src: prime,
      website: "https://www.primevideo.com/",
    },
    {
      id: 2,
      name: "Netflix",
      src: netflix,
      website: "https://www.netflix.com/in/",
    },
    {
      id: 3,
      name: "Disney +",
      src: disney,
      website: "https://www.hotstar.com/",
    },
    {
      id: 4,
      name: "Crunchyroll",
      src: crunchyroll,
      website: "https://www.crunchyroll.com/",
    },
    {
      id: 5,
      name: "AniWatch",
      src: aniwatch,
      website: "https://aniwatch.to/",
    },
  ];
  return (
    <WatchPlatforms>
      {platforms.map((platform) => (
        <Platform
          key={platform.id}
          onClick={() => window.open(platform.website, "_blank")}
        >
          <PlatformIcon src={platform.src} />
          <PlatformName>{platform.name}</PlatformName>
        </Platform>
      ))}
    </WatchPlatforms>
  );
};

export default WatchSection;
