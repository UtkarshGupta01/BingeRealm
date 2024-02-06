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
} from "./styles/Footer.styled";
import WatchSection from "./WatchSection/WatchSection";
import { RiLinkedinFill, RiInstagramLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { FaRegCopyright, FaHeart } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  const [terms, setTerms] = useState(true);
  const [watch, setWatch] = useState(false);
  const termsOfUse =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit maiores aspernatur quasi amet, molestiae alias nisi qui ea ab sequi ad, vel aliquam mollitia harum modi porro officia culpa magnam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum suscipit vero, molestiae illum qui magni deleniti dicta aperiam non quae, sit porro, harum ad doloremque fugiat? Esse, perferendis fuga. Quidem!";
  const [content, setContent] = useState(termsOfUse);

  const handleFooterDisplay = (li) => {
    if (li === "terms") {
      setTerms(true);
      setWatch(false);
      setContent(termsOfUse);
    } else {
      setWatch(true);
      setTerms(false);
      setContent(<WatchSection />);
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
