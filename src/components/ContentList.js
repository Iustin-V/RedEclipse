import { StyledList, StyledListItem } from "./Styles";
import aboutIcon from "./images/info.png";
import experiencesIcon from "./images/experiences.png";
import technologiesIcon from "./images/technologies.png";
import contactIcon from "./images/contact.png";

export const ContentList = (refVal) => {
  const contentArray = ["About", "Experiences", "Technologies", "Contact"];
  const iconArray = [aboutIcon, experiencesIcon, technologiesIcon, contactIcon];
  const content = contentArray.map((item, index) => {
    return (
      <StyledListItem
        onClick={() =>
          refVal[index].current.scrollIntoView({ behavior: "smooth" })
        }
      >
        <img src={iconArray[index]} alt={item} />
        <p>{item}</p>
      </StyledListItem>
    );
  });
  return <StyledList >{content}</StyledList>;
};
