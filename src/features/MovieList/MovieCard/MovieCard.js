import {
  Poster,
  Title,
  Year,
  Rating,
  Votes,
  Description,
  StyledCard,
  RateWrapper,
  TagsWrapper,
  DataWrapper,
  StarIcon,
} from "./styled";
import { POSTER_URL_SMALL } from "../../getAPI/config";
import GenreList from "../../Genras";
import noMovieImage from "../../../images/noMovieImage.svg";
import { movie } from "../../Routes";

const MovieCard = ({
  id,
  title,
  release_date,
  genre_ids,
  vote_average,
  vote_count,
  poster_path,
  character,
  job,
}) => {
  const releaseDate = new Date(release_date);
  const year = releaseDate.getFullYear() ? releaseDate.getFullYear() : "-";

  return (
    <>
      <StyledCard to={`${movie}/${id}`}>
        <Poster
          src={poster_path ? POSTER_URL_SMALL + poster_path : noMovieImage}
        ></Poster>
        <DataWrapper>
          <Description>
            <Title>{title}</Title>
            <Year>
              {character
                ? `${character}(${year})`
                : job
                ? `${job}(${year})`
                : year
                ? year
                : "-"}
            </Year>
          </Description>
          <TagsWrapper>
            <GenreList genreIds={genre_ids} />
          </TagsWrapper>
          <RateWrapper>
            {vote_count ? (
              <>
                <StarIcon />
                <Rating>{vote_average?.toFixed(1).replace(".", ",")}</Rating>
                <Votes>{vote_count} votes</Votes>
              </>
            ) : (
              <Votes>No votes yet</Votes>
            )}
          </RateWrapper>
        </DataWrapper>
      </StyledCard>
    </>
  );
};

export default MovieCard;
