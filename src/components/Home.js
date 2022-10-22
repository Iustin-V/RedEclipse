import React from "react";

import arrow from "./images/arrow.png";

import {
  StyledPageWrapper,

  StyledToTopButton,
  StyledImageNew,
} from "./Styles";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Experiences } from "./Experiences";
import { TechnologiesPage } from "./TechnologiesPage";
import { MainPage } from "./MainPage";
import {About} from "./About";

export const Home = () => {
  const technologiesRef = React.useRef(null);
  const experiencesRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const topRef = React.useRef(null);

  const [isTopButton, setTopButton] = React.useState(false);

  const refArray = [experiencesRef, technologiesRef, aboutRef];
  return (
    <>
        <MainPage refArray={refArray} />

      {/*<StyledPageWrapper ref={experiencesRef}>*/}
      {/*  <About />*/}
      {/*</StyledPageWrapper>*/}

      {/*<StyledPageWrapper ref={experiencesRef}>*/}
      {/*  <Experiences />*/}
      {/*</StyledPageWrapper>*/}
      {/*<StyledPageWrapper ref={experiencesRef}>*/}
      {/*  <Experiences />*/}
      {/*</StyledPageWrapper>*/}
      {/*<StyledPageWrapper ref={technologiesRef}>*/}
      {/*  <TechnologiesPage />*/}
      {/*</StyledPageWrapper>*/}
      {/*<StyledToTopButton*/}
      {/*  bottom={isTopButton ? "40px" : "-50px"}*/}
      {/*  onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })}*/}
      {/*>*/}
      {/*  <StyledImageNew src={arrow} alt="Arrow" />*/}
      {/*</StyledToTopButton>*/}
      <Footer />
    </>
  );
};
