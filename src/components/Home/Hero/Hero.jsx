import heroDemo from "/gif/hero_demo.mp4";
import { HeroContainer, HeroVid } from "./styles/Hero.styled";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroVid src={heroDemo} autoPlay loop muted />
    </HeroContainer>
  );
};

export default Hero;
