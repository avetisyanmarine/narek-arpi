import { Container, Flexible } from "../../GlobalStyle";
import Church from "../../assets/image/church.jpg";
import Bant from "../../assets/image/bant.png";
import PHoto3 from "../../assets/image/photo3.jpg";
import AttendanceGuests from "../AttendanceGuests";
import { ForthPagePart } from "./styled";
import P1 from "../../assets/image/blockimages/p1.jpg";
import P2 from "../../assets/image/blockimages/p2.jpg";
import P3 from "../../assets/image/blockimages/p3.jpg";
import P4 from "../../assets/image/blockimages/p4.jpg";
import P5 from "../../assets/image/blockimages/p5.jpg";
import P6 from "../../assets/image/blockimages/p6.jpg";
import P7 from "../../assets/image/blockimages/p7.jpg";
import P8 from "../../assets/image/blockimages/p8.jpg";
import P9 from "../../assets/image/blockimages/p9.jpg";

export const ForthPage = () => {
  // 9 նկարների զանգված (massiv)՝ կոդը չերկարացնելու և մաքուր պահելու համար
  const images = [P1, P2, P3, P4, P5, P6, P7, P8, P9];

  return (
    <ForthPagePart>
      <Container>{/* Առաջին հատվածը թողնում եմ նույնը */}</Container>

      <div style={{ margin: "55px 0" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible
            style={{ padding: "0 25px" }}
            data-aos="fade-up"
            className="absolute w-full h-[322px] bg-white/45 text-2xl"
          >
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ։
            <br />
            <br />
            Սպիտակ զգեստը թողնենք միայն հարսին։ Սիրով Խնդրում ենք ընտրել այլ նուրբ և տոնական գույներ։
            <br />
            <br />
            Հարսի պարի և Տորթի արարողության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>

      <Container>
        <AttendanceGuests />

        {/* ԱՀԱ ԱՅՍՏԵՂ ԱՎԵԼԱՑՆՈՒՄ ԵՆՔ 3x3 ՑԱՆՑԸ */}
        <div className="grid grid-cols-3 gap-3" style={{ margin: "55px 0" }}>
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-[10px] h-[200px] w-full"
            >
              <img
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <h2
          className="text-center font-[ArmAllegrou]"
          style={{ margin: "20px 0" }}
        >
          Սիրով ՝ <br /> Նարեկ և Արփի
        </h2>
      </Container>
    </ForthPagePart>
  );
};
