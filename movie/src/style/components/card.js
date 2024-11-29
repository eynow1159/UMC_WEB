import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: white;
  min-width: 125px;
  height: 190px;
`;

export const CardText = styled.span`
  font-size: 0.8rem;
  font-weight: ${(props) => (props?.bold === "true" ? 700 : 400)};
`;

export const StyledImage = styled.img`
  width: 128px;
  height: 192px;
  object-fit: cover;
  background-color: black;
  transition: all 200ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;