import React from "react";
import { StyledProgressBar, StyledProgressContainer } from "./Styles";

export const Navbar = (props) => {
  const [scrollWidth, setScrollWidth] = React.useState(0);

  return (
    <StyledProgressContainer>
      <StyledProgressBar width={`${scrollWidth}%`} />
    </StyledProgressContainer>
  );
};
