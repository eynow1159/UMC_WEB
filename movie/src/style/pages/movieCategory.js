import styled from 'styled-components';
import { Link } from "react-router-dom";


export const CategoryWrapper = styled.div`  
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: row;

  gap: 1rem;
`;

export const StyledCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: white;
`;

export const CategoryText = styled.span`
  font-size: 0.8rem;
  font-weight: ${(props) => (props?.bold === "true" ? 700 : 400)};
  text-decoration: none;
  color: white;

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