import { useState } from "react";
import {
  FooterSection,
  FooterList,
  Terms,
  Watch,
  FooterListContent,
  ContactTitle,
  ContactMedia,
  Media,
  MediaIcon,
  MediaName,
  CopyrightSection,
  CopyrightInfo,
  MadeBy,
  About,
} from "./styles/Footer.styled";
import WatchSection from "./WatchSection/WatchSection";
import AboutMe from "./About Me/AboutMe";
import { RiLinkedinFill, RiInstagramLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { FaRegCopyright, FaHeart } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  const [terms, setTerms] = useState(true);
  const [watch, setWatch] = useState(false);
  const [about, setAbout] = useState(false);
  const termsOfUse =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit maiores aspernatur quasi amet, molestiae alias nisi qui ea ab sequi ad, vel aliquam mollitia harum modi porro officia culpa magnam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum suscipit vero, molestiae illum qui magni deleniti dicta aperiam non quae, sit porro, harum ad doloremque fugiat? Esse, perferendis fuga. Quidem!";
  const [content, setContent] = useState(termsOfUse);

  const handleFooterDisplay = (selected) => {
    if (selected === "terms") {
      setTerms(true);
      setWatch(false);
      setAbout(false);
      setContent(termsOfUse);
    } else if (selected === "watch") {
      setWatch(true);
      setTerms(false);
      setAbout(false);
      setContent(<WatchSection />);
    } else {
      setAbout(true);
      setWatch(false);
      setTerms(false);
      setContent(<AboutMe />);
    }
  };

  return (
    <FooterSection>
      <FooterList>
        <Terms onClick={() => handleFooterDisplay("terms")} $terms={terms}>
          Terms of Use
        </Terms>
        <Watch onClick={() => handleFooterDisplay("watch")} $watch={watch}>
          Where to Watch?
        </Watch>
        <About onClick={() => handleFooterDisplay("about")} $about={about}>
          About Me
        </About>
      </FooterList>
      <FooterListContent>{content}</FooterListContent>
      <ContactTitle>- Contact Me -</ContactTitle>
      <ContactMedia>
        <Media>
          <MediaIcon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/utkarsh-gupta-212745246",
                "_blank"
              )
            }
          >
            <RiLinkedinFill />
          </MediaIcon>
          <MediaName>LinkedIn</MediaName>
        </Media>
        <Media>
          <MediaIcon
            onClick={() =>
              window.open("https://github.com/UtkarshGupta01", "_blank")
            }
          >
            <VscGithub />
          </MediaIcon>
          <MediaName>GitHub</MediaName>
        </Media>
        <Media>
          <MediaIcon
            onClick={() =>
              window.open("https://www.instagram.com/_utkaaarshhh_/", "_blank")
            }
          >
            <RiInstagramLine />
          </MediaIcon>
          <MediaName>Instagram</MediaName>
        </Media>
      </ContactMedia>
      <CopyrightSection>
        <CopyrightInfo>
          Copyright <FaRegCopyright /> 2024
        </CopyrightInfo>
        <LuDot size={20} />
        <MadeBy>
          Utkarsh Gupta
          <FaHeart />
        </MadeBy>
      </CopyrightSection>
    </FooterSection>
  );
};

export default Footer;
