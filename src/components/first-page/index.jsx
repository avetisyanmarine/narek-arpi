import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext, GridDiv } from "./styled";
import { useEffect, useState } from "react";
import Srtik from "../../assets/image/srtik.png";

export const FirstPage = () => {


  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <h2 style={{ fontSize: "35px", letterSpacing: "1px" }}>
            Հարսանյաց <br /> հրավեր
          </h2>
          <Flexible className="uniqueDiv">
            <h1>Նարեկ & Արփի</h1>
            <img src={Srtik} />
          </Flexible>
       
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
