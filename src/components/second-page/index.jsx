import { SecondPagePart, SecondPagePartContext } from "./styled";
import { Container } from "../../GlobalStyle";
import Sign from "../../assets/vectors/sign.png";
import Photo1 from "../../assets/image/photo1.jpg";
import { useEffect, useState } from "react";
import { Flexible } from "../../GlobalStyle";
import { GridDiv } from "../first-page/styled";
import SaveTheDate from "../../assets/image/savethedate.png";

export const SecondPage = () => {
  const weddingDate = new Date(2026, 7, 8, 0, 0, 0).getTime();
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");
  return (
    <SecondPagePart>
      <Container>
        <SecondPagePartContext>
          <div>
            <img loading="lazy" src={Sign} alt="Sign" />
            <h4 data-aos="fade-left">
              Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան
              օրվան։
            </h4>
          </div>
        </SecondPagePartContext>
        <div className="relative">
          <img src={Photo1} alt="Photo 1" className="rounded-[15px]" />
          <img
            className="absolute top-5 left-5 w-[120px]"
            src={SaveTheDate}
            style={{ filter: "invert(100%)" }}
            alt="Save The Date"
          />
          <h2 style={{color: "#292727", textShadow: "2px 2px 4px rgba(255, 255, 255, 0.926)"}} className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
            08/08/2026
          </h2>
        </div>
        <div style={{ margin: "30px 0" }} className="w-full">
          <h2 className="uniqueH2" style={{fontSize: "29px"}}>Միջոցառմանը Մնաց</h2>
          <GridDiv>
            <Flexible>
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>Օր</p>
            </Flexible>
            <Flexible>
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>Ժամ</p>
            </Flexible>
            <Flexible>
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>Րոպե</p>
            </Flexible>
            <Flexible className="uniqueBorder">
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>Վայրկյան</p>
            </Flexible>
          </GridDiv>
        </div>
      </Container>
    </SecondPagePart>
  );
};
