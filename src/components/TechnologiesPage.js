import {StyledGallery, StyledTitle} from "./Styles";
import { Technologies } from "./Technologies";

export const TechnologiesPage = () => {
  return (
    <>
      <StyledTitle>Technologies we use:</StyledTitle>
      <StyledGallery>{Technologies()}</StyledGallery>
    </>
  );
};
