import { POSTER_URL_BIG } from "../../../getAPI/config";
import {
  Wrapper,
  Poster,
  Title,
  Rating,
  Votes,
  Background,
  Section,
  RatingSection,
  StarIcon,
  SmallRating,
  RatingsWrapper,
} from "./styled";

const Banner = ({ backdrop_path, title, vote_average, vote_count }) => {
  return (
    <>
      <Background>
        <Wrapper>
          {backdrop_path ? <Poster src={POSTER_URL_BIG + backdrop_path} /> : ""}
          <Section>
            <Title>{title}</Title>
            <RatingSection>
              <RatingsWrapper>
                <StarIcon />
                <Rating>{vote_average?.toFixed(1).replace(".", ",")}</Rating>
                <SmallRating>/ 10</SmallRating>
              </RatingsWrapper>
              <Votes>{vote_count} votes</Votes>
            </RatingSection>
          </Section>
        </Wrapper>
      </Background>
    </>
  );
};

export default Banner;
