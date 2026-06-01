import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import Photo2 from "../../assets/image/photo2.jpg";
import SvgRing from "../../assets/vectors/ring.png";
import SvgCouple from "../../assets/vectors/cup.png";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ժամանակացույց</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            className="uniqueone"
            ImageSrc={SvgRing}
            number={"10:00"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            smallText="Աշտարակ"
            mapLink="https://maps.google.com/?q=40.269913,44.345142"
          />

          <ThirdPageBlock
            uniqueMargin={120}
            className="uniqueone"
            ImageSrc={SvgRing}
            number={"11:30"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText="Գեղանիստ"
            mapLink="https://maps.google.com/?q=40.146339,44.432625"
          />
          <ThirdPageBlock
            ImageSrc={SvgChurch}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Մարիամ Աստվածածին եկեղեցի"
          />
          <ThirdPageBlock
            className="secondBlock"
            line={true}
            ImageSrc={SvgCouple}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Dainty Hall ռեստորան"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Մարիամ Աստվածածին եկեղեցի"}
            mapSrc={"https://yandex.com/maps/-/CPTGbOle"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Dainty Hall ռեստորան"}
            mapSrc={"https://yandex.com/maps/-/CPTGb07j"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={Photo2} className="rounded-[15px]" alt="" />
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Օգոստոս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > 4 && i <= 36 ? (
              <div className={i - 4 == 8 ? "special" : ""}>{i - 4}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
