import React from "react";
import { StyledProgressBar, StyledProgressContainer } from "./Styles";

export const Navbar = (props) => {
  const [scrollWidth, setScrollWidth] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const percentScrolled =
        (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
        100;
      if (window.scrollY >= window.visualViewport.height-100 ) {
        props.setTopButton(true);
      } else if (window.scrollY < window.visualViewport.height ) {
        props.setTopButton(false);
      }
      setScrollWidth(percentScrolled);
    });
  }, [window.scrollY]);
  console.log(window.visualViewport.height)
  console.log(window.scrollY)

  return (
    <StyledProgressContainer>
      <StyledProgressBar width={`${scrollWidth}%`} />
    </StyledProgressContainer>
  );
};
