import React from "react";
import Typewriter from "typewriter-effect";

import { ContentList } from "./ContentList";
import { MainContentWrapper, StyledContentWrapper, StyledLogo } from "./Styles";
import logo from "./images/Red-Eclipse-01.png";
import { About } from "./About";
import {Experiences} from "./Experiences";
import {TechnologiesPage} from "./TechnologiesPage";

export const MainPage = (props) => {
  document.body.style.overflow = "hidden";
  const aboutRef = React.useRef(null);
  const experiencesRef = React.useRef(null);
  const technologiesRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const refArray = [aboutRef, experiencesRef, technologiesRef, contactRef];
  const handleScroll = (refProp) => {
    refProp.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <StyledContentWrapper>{ContentList(refArray)}</StyledContentWrapper>

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
        <MainContentWrapper ref={aboutRef}>
          <About />
        </MainContentWrapper>
        <MainContentWrapper ref={experiencesRef}>
            <Experiences />
        </MainContentWrapper>
        <MainContentWrapper ref={technologiesRef}>
            <TechnologiesPage />
        </MainContentWrapper>
    </>
  );
};
