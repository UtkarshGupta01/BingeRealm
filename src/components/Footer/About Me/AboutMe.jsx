import { About, PortfolioLink } from "./styles/AboutMe.styled";

const AboutMe = () => {
  return (
    <About>
      Hello! My name is Utkarsh Gupta, a Frontend Web Developer, working towards
      becoming a Full Stack Developer. <br /> <br />
      To know more about me, visit :{" "}
      <PortfolioLink
        href="https://utkarshwebdev.netlify.app/"
        rel="noreferrer"
        target="_blank"
      >
        utkarshwebdev.netlify.app
      </PortfolioLink>
    </About>
  );
};

export default AboutMe;
