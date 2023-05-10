import { Icon, Rate, RateOn, RatingBox, RatingWrapper, Votes } from "./styled"

export const Rating = ({rate, votes}) => {
    return (
        <RatingWrapper>
         <RatingBox>
            <Icon display="true" />
            <Rate>{rate.toFixed(1).replace(".", ",")}</Rate>
            <RateOn>/ 10</RateOn>
          </RatingBox>
          <Votes>{votes} votes</Votes>
         </RatingWrapper>
    )
}