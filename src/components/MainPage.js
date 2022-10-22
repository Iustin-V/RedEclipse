import { ContentList } from "./ContentList";
import { MainContentWrapper, StyledContentWrapper, StyledLogo } from "./Styles";
import logo from "./images/Red-Eclipse-01.png";
import Typewriter from "typewriter-effect";

export const MainPage = (props) => {
  return (
    <>
      <StyledContentWrapper>{ContentList(props.refArray)}</StyledContentWrapper>

      <MainContentWrapper>
        <StyledLogo src={logo} alt="RedEclipseLogo" />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("You commission it")
              .pauseFor(500)
              .typeString(", we build it")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Contact us")
              .start();
          }}
        />
      </MainContentWrapper>
    </>
  );
};
