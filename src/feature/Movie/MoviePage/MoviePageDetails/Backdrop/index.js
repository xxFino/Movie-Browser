import {
  BackdropBox,
  BackdropContainer,
  BackdropImage,
  BackdropTitle,
  BackdropWrapper,
} from "./styled";
import { backdropImage } from "./backdropURL";
import { Rating } from "../../../../../core/components/Rating";

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
          <Rating rate={rate} votes={votes}/>
        </BackdropBox>
      </BackdropContainer>
    </BackdropWrapper>
  );
};
