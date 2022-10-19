import { ContentList } from "./ContentList";
import { MainContentWrapper, StyledLogo } from "./Styles";
import logo from "./images/Red-Eclipse-01.png";
import Typewriter from "typewriter-effect";

export const MainPage = (props) => {
  return (
    <>
      {ContentList(props.refArray)}
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
