import {MainContentWrapper, StyledLogo, WIPContainer} from "./Styles";
import logo from "./images/Red-Eclipse-01.png";
import Typewriter from "typewriter-effect";
import React from "react";

export const WorkInProgress=()=>{

    return<WIPContainer>
        <StyledLogo src={logo} alt="RedEclipseLogo" />
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString("Coming ")
                    .pauseFor(500)
                    .typeString("soon")
                    .pauseFor(1000)
                    .start();
            }}
        />
    </WIPContainer>
}