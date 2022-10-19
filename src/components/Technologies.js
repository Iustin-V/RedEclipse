import typesciptLogo from "./images/typescript.png";
import reactLogo from "./images/React.png";
import remixLogo from "./images/remix.png";
import styledLogo from "./images/styledcomponentst.png";
import nodeLogo from "./images/Nodejs.png";
import htmlLogo from "./images/html.png";
import cssLogo from "./images/css.png";
import javascriptLogo from "./images/javascript.png";
import {StyledImage, StyledImageNew, StyledTestButton} from "./Styles";

export const Technologies = () => {
  const techArray = [
    typesciptLogo,
    cssLogo,
    htmlLogo,
    styledLogo,
    remixLogo,
    nodeLogo,
    javascriptLogo,
    reactLogo,
  ];
  return techArray.map((item) => {
    return (
          <StyledImage src={item} alt={`${item}`} />
    );
  });
};
