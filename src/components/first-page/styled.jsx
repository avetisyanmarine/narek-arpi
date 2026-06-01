import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const FirstPagePart = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(1.5px);
  }
`;
const FirstPagePartContext = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  height: 100%;
  h2 {
    text-align: center;
    font-family: ArmAllegrou;
    line-height: 35px;
    color: aliceblue;
    letter-spacing: 5px;
  }
  .uniqueDiv {
    flex-direction: column;
    gap: 10px;
    margin-top: 60vh;
    .and {
      color: #fefefe;
      margin-bottom: 15px;
    }
    .uniqueH1 {
      line-height: 0;
    }
    p {
      color: #957b70;
      font-family: ArmAllegrou;
      font-weight: 400;
      margin-top: -64px;
    }
    img {
      width: 110px;
      filter: none;
    }
  }
`;
const GridDiv = styled(Flexible)`
  div {
    flex-direction: column;
    text-align: center;
    border-right: 3px solid #3d3a3a;
    padding: 10px 16px;
    h2 {
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 5px;
      font-family: DavelAghvor;
    }
    p {
      font-size: 22px;
      line-height: 8px;
    }
  }
  .uniqueBorder {
    border: 0;
  }
`;
export { FirstPagePart, FirstPagePartContext, GridDiv };
