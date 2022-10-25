import {
  StyledDivider,
  StyledText,
  StyledTitle,
} from "./Styles";

export const About = () => {
  return (
    <>
      <StyledTitle>About</StyledTitle>
      <StyledDivider />
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute it laborum.
      </StyledText>
      {/*<StyledPicture src={laptop} alt="laptop" />*/}
    </>
  );
};
