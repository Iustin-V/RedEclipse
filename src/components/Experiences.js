import {
  CenteredItem,
  SmallContainer, StyledDivider,
  StyledDynamicDiv,
  StyledExperienceContainer,
  StyledPicture,
} from "./Styles";

import laptop from "./images/laptop.jpg";

export const Experiences = () => {
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
      <CenteredItem>Experiences</CenteredItem>
      <StyledDivider />
      <SmallContainer>
        <StyledExperienceContainer>
          Combining creativity and skill our products promise a pleasant user
          experience along with security and stability. Our main objective is to
          ensure that the client is satisfied, we aim to achieve this by
          providing top-notch services.
        </StyledExperienceContainer>
        <StyledPicture src={laptop} alt="laptop" />
      </SmallContainer>
    </StyledDynamicDiv>
  );
};
