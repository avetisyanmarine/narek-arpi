import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled";

export const ThirdPageBlock = ({
  ImageSrc,
  number,
  bigText,
  smallText,
  uniqueMargin,
  className,
  line,
  mapLink,
}) => {
  return (
    <ThirdPageBlockPart
      className={className || ""}
      style={{ marginTop: uniqueMargin ? `${uniqueMargin}px` : "" }}
    >
      <ThirdPageBlockPartSvg line={line}>
        <img loading="lazy" src={ImageSrc} alt="icon" />
      </ThirdPageBlockPartSvg>
      
      <ThirdPagePartContext data-aos="fade-left">
        <h3>{number}</h3>
        <h3>{bigText}</h3>
        <p>
          {smallText} 
          {mapLink && (
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noreferrer"
              style={{
                marginLeft: "5px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "normal",
                textDecoration: "underline",
              }}
            >
              (Տեսնել քարտեզի վրա)
            </a>
          )}
        </p>
      </ThirdPagePartContext>
    </ThirdPageBlockPart>
  );
};