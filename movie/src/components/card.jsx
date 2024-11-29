import { StyledCard, CardText, StyledImage } from "../style/components/card.js";

const Card = ({ movie }) => {
  return (
    <StyledCard to={`/movies/${movie?.id}`}>
      <StyledImage src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
      <CardText bold="true">{movie?.title}</CardText>
      <CardText>{movie?.release_date}</CardText>
    </StyledCard>
  );
};

export default Card;