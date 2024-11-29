import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCircle = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;

  align-items: center;
  width: 100px;
  text-align: center;
  color: white;
`;

export const CircleText = styled.span`
  font-size: 0.8rem;
  font-weight: ${(props) => (props?.bold === "true" ? 700 : 400)};
  font-size: ${(props) => (props?.bold === "true" ? 700 : 400)};
  color: ${(props) => (props?.bold === "true" ? 700 : 400)};
`;

export const StyledImage = styled.img`
  background-color: black;
  transition: all 200ms ease-in-out;
  
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid white;
`;