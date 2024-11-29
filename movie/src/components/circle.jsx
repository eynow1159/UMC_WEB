import { StyledCircle, CircleText, StyledImage } from "../style/components/circle.js";

const Circle = ({ person }) => {
  return (
    <StyledCircle>
      <StyledImage src={`https://image.tmdb.org/t/p/original${person?.profile_path}`} />
      <CircleText bold="true">{person?.original_name}</CircleText>
      <CircleText>{person?.character}</CircleText>
    </StyledCircle>
  );
};

export default Circle;