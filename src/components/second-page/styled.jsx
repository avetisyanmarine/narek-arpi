import styled from "styled-components";

const SecondPagePart = styled.div`
  div {
    text-align: center;
  }
  h2 {
    color: #3d3a3a;
    font-size: 48px;
    font-weight: 600;
    font-family: ArmAllegrou;
    letter-spacing: 10px;
  }
  .uniqueH2 {
    font-family: DavelAghvor;
    margin-bottom: 15px;
  }
`;
const SecondPagePartContext = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      object-fit: cover;
      margin-right: 20px;
      margin-top: 20px;
    }
    h4 {
      background-color: #ffffff;
      border-radius: 15px;
      padding: 20px;
      font-size: 31px;
      font-family: ArmAllegrou;
      margin-bottom: 40px;
    }
  }
`;
export { SecondPagePart, SecondPagePartContext };
