import { StyledList, StyledListItem } from "./Styles";

export const ContentList = (refVal) => {
  const contentArray = [ "Experiences","Technologies", "About","Contact"];
  const content = contentArray.map((item, index) => {
    return (
      <StyledListItem
        onClick={() =>
          refVal[index].current.scrollIntoView({ behavior: "smooth" })
        }
      >
        {item}
      </StyledListItem>
    );
  });
  return <StyledList>{content}</StyledList>;
};
