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
  @media (max-width: 768px) {
    height: 420px;
  }
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
  :hover {    border: 5px solid ${COLORS.BRAND_DARK_RED};

    background-color: #fafafa;
    transform: scale(
      1.2
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    transition: 0.5ms;
  }
  @media (max-width: 768px) {
    border: 5px solid black;
    height: 50px;
    box-shadow: none;

    :nth-child(odd) {
      border: 5px solid;

      height: 50px;
    }
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
  @media (max-width: 768px) {
    gap: 15px 10px;
    width: calc(100% - 30px);
  }
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
export const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
  position: relative;
  left: 240px;
  width: calc(100vw - 240px);
  height: 100vh;
  gap: 25px;
  justify-content: center;
  @media (max-width: 768px) {
    left: 50px;
    width: calc(100vw - 50px);
    span {
      font-size: 25px;
    }
  }
`;
export const StyledList = styled.ul`
  left: 5%;
  font-size: 30px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding: 0;
  height: 100%;
  transition: width 1s ease-out 10ms;
  overflow: hidden;
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 50px;
    p {
      display: none;
      font-size: 25px;
    }
    :hover {
      width: 260px;
      align-items: flex-start;
      p {
        display: flex;
      }
    }
  }
`;

export const StyledListItem = styled.li`
  position: relative;
  transition: opacity 2s ease-out 10ms;
  margin: 0;
  padding:10px 30px;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: calc(100% - 60px);
  @media(max-width: 768px){
    width: calc(100% - 20px);

    padding: 10px;
  
  }
  :hover{
    transform: rotateY(180deg);

    transition: transform 0.6s ease-out 10ms,background-color 0.7s ease-in-out;

    background-color: #e7e7e7;
    color:black;
      p{
        transform: rotateY(-180deg);
        
      }
    img{
      filter: none;
    }
  }
}


  img {
    height: 30px;
    filter: invert(100%);
  //}
  //div{
  //  position: absolute;
  //  background: white;
  //  color: crimson;
  //  top: 0;
  //  left: 260px;
  //  width: 260px;
  //  height: 100%;
  //  opacity: .5;
  //  transform: perspective(400px) rotateY(90deg);
  //  transform-origin: 0 100%;
  //  transition: all .4s ease-out;
  //}
  //:hover{
  //  transform: translateX(-240px);
  //}
  //
  //:hover >div {
  //  opacity: 1;
  //  transform: perspective(400px) rotateY(0deg) scale(1);
  //
  //}

::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

:hover::before {
  transform-origin: left;
  transform: scaleX(1);
//}
`;
export const StyledText = styled.div`
  font-size: 25px;
  width: calc(100% - 50px);
  margin-bottom: 50px;
  max-width: 600px;
`;

export const StyledFooter = styled.div`
  position: fixed;
  left: 240px;
  width: calc(100vw - 240px);
  bottom: 0;
  background-color: #858585;
  height: 30px;
  p {
    margin: 0;
  }
  @media (max-width: 768px) {
    left: 50px;
    width: calc(100vw - 50px);
  }
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
  //border-left: 5px solid #a30001;
  //border-radius: 5px;
  //width: 0;
  //height: 500px;
  //@media (max-width: 768px) {
  border-top: 5px solid #a30001;
  max-width: 500px;
  width: 100%;
  height: 0;
  //}
`;
export const StyledContentWrapper = styled.div`
  position: fixed;
  height: 100vh;
  left: 0;
  z-index: 2;
  background-color: #a40000;
  color: white;
`;
