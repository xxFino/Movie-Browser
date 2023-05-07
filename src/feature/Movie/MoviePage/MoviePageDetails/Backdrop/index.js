import {
  BackdropBox,
  BackdropContainer,
  BackdropImage,
  BackdropTitle,
  BackdropWrapper,
  Icon,
  Rate,
  RateOn,
  RatingBox,
  RatingWrapper,
  Votes,
} from "./styled";
import { backdropImage } from "./image";

export const Backdrop = ({ backdrop_path, title, rate, votes }) => {
  return (
    <BackdropWrapper>
      <BackdropContainer>
        <BackdropImage
          src={`${backdropImage}${backdrop_path}`}
          alt={`${title}`}
        />
        <BackdropBox>
          <BackdropTitle>{title}</BackdropTitle>
         <RatingWrapper>
         <RatingBox>
            <Icon display="true" />
            <Rate>{rate.toFixed(1)}</Rate>
            <RateOn>/ 10</RateOn>
          </RatingBox>
          <Votes>{votes} votes</Votes>
         </RatingWrapper>
        </BackdropBox>
      </BackdropContainer>
    </BackdropWrapper>
  );
};
