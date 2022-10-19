import {
  CenteredItem,
  SmallContainer,
  StyledDivider,
  StyledDynamicDiv,
  StyledExperienceContainer,
  StyledPicture,
} from "./Styles";
import laptop from "./images/laptop.jpg";

export const About = () => {
  return (
    <StyledDynamicDiv
      display="flex"
      height="500px"
      gap="100px"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      fontSize="35px"
    >
      <CenteredItem>About</CenteredItem>
      <StyledDivider />
      <SmallContainer>
        <StyledExperienceContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute it laborum.
        </StyledExperienceContainer>
        {/*<StyledPicture src={laptop} alt="laptop" />*/}
      </SmallContainer>
    </StyledDynamicDiv>
  );
};
