import styled from "styled-components";
import { Link } from "react-router-dom";

export const COLORS = {
  BRAND_DARK_RED: "#a40000",
  BRAND_LIGHT_RED: "#d60000",
};
export const StyledWrapper = styled.div`
  overflow-x: hidden;
  font-family: ShareTech;
  background-color: #e7e7e7;
`;
export const StyledPageWrapper = styled.div`
  height: calc(100vh - 80px);
  width: calc(100% - 80px);
  max-width: 1440px;
  padding: 40px;
  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledLogo = styled.img`
  height: 500px;
`;

export const StyledNav = styled.div`
  height: ${(props) => props.height};
  position: fixed;
  width: 100vw;
  background-color: #231f20;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  transition: height 200ms ease-in-out;
  overflow: hidden;
`;
export const StyledNavItem = styled(Link)`
  width: 100px;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 19px;
`;
export const StyledText = styled.p`
  font-weight: 700;
  margin: 0;
`;
export const StyledProgressContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 8px;
  background: #ccc;
`;
export const StyledProgressBar = styled.div`
  height: 8px;
  background-color: ${COLORS.BRAND_DARK_RED};
  width: ${(props) => props.width};
`;
export const StyledImageNew = styled.img`
  filter: invert(100%);
  height: 30px;
`;
export const StyledImage = styled.img`
  height: 100px;
  border: 0 solid;
  padding: 10px;
  background-color: #ededed;

  box-shadow: 15px 15px ${COLORS.BRAND_DARK_RED};
  transition: background-color 2s ease-out 10ms;
  :nth-child(odd) {
    height: 130px;
  }
  :hover {
    background-color: #fafafa;
    transform: scale(
      1.2
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    transition: 0.5ms;
  }
`;
export const StyledGallery = styled.div`
  height: 500px;
  width: 700px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 45px 65px;
  align-items: center;
`;
export const StyledDynamicDiv = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  font-size: ${(props) => props.fontSize};
  align-items: ${(props) => props.alignItems};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const CenteredItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
  font-size: 40px;
`;
export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  margin-right: 200px;
`;
export const StyledList = styled.ul`
  left: 5%;
  font-size: 30px;
  height: 500px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledListItem = styled.li`
  position: relative;
  width:fit-content ;
  opacity: 20%;
  transition: opacity 2s ease-out 10ms;
  margin: 0;
  padding: 0 0 10px 0;

  :hover {
    opacity: 100%;
  }
  ::before {
    content: '';
      position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #18272F;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
`;
export const StyledExperienceContainer = styled.div`
  font-size: 35px;
  width: 100%;
  margin-bottom: 50px;
  max-width: 600px;
`;

export const StyledFooter = styled.div`
  bottom: 0;
  background-color: #858585;
  height: 30px;
`;
export const StyledFooterText = styled.p`
  display: flex;
  justify-content: center;
  line-height: 30px;
  color: #fafafa;
`;
export const StyledTestButton = styled.button`
  width: 150px;
  height: 150px;
  border: 1px solid #333;
  font-family: "Cinzel", serif;
  font-size: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  transition: 1s;

  ::before,
  ::after {
    position: absolute;
    background: #eee;
    z-index: -1;
    transition: 1s;
    content: "";
  }

  ::before {
    height: 150px;
    width: 150px;
  }

  ::after {
    width: 150px;
    height: 150px;
  }

  :hover::before {
    width: 0;
    background: #fff;
  }

  :hover::after {
    height: 0;
    background: #fff;
  }

  :hover {
    background: #fff;
  }
`;
export const StyledToTopButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: ${COLORS.BRAND_DARK_RED};
  position: fixed;
  right: 40px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22%;
  overflow: hidden;
  transition: bottom 200ms ease-in-out;
  bottom: ${(props) => props.bottom};
`;
export const StyledPicture = styled.img`
  height: 300px;
`;
export const SmallContainer = styled.div`
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledDivider = styled.hr`
  border-left: 5px solid #a30001;
  border-radius: 5px;
  width: 0;
  height: 500px;
  @media (max-width: 768px) {
    border-top: 5px solid #a30001;
    max-width: 500px;
    width: 100%;
    height: 0;
  }
`;
