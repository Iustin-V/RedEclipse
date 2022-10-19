import { CenteredItem, StyledDynamicDiv, StyledGallery } from "./Styles";
import { Technologies } from "./Technologies";

export const TechnologiesPage = () => {
  return (
    <StyledDynamicDiv
      display="flex"
      height="500px"
      gap="100px"
      width="100%"
      justifyContent="space-between"
    >
      <CenteredItem>Technologies we use:</CenteredItem>
      <StyledGallery>{Technologies()}</StyledGallery>
    </StyledDynamicDiv>
  );
};
