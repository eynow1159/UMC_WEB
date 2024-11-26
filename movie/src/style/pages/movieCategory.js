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

export const MovieCategoryBox = styled.div`
display: flex;
gap: 10px;
flex-flow: wrap;
`;

export const MovieCategory = styled(Link)`
flex: 1 1 calc(25% - 5px);
max-width: calc(25% - 10px);
position: relative;
border-radius: 5px;
overflow: hidden;
box-sizing: border-box;

transition: all 0.4s ease;

@media (max-width: 1400px){
  flex: 1 1 calc(33.33% - 10px);
  max-width: calc(33.33% - 10px);
}

@media (max-width: 1100px){
  flex: 1 1 calc(50% - 10px);
  max-width: calc(50% - 10px);
}

@media (max-width: 600px){
  flex: 1 1 100%;
  max-width: 100%;
}
`;

export const Image = styled.img`
  width: 100%;

  transition: all 0.3s ease;

  &:hover{
    filter: brightness(50%);
    cursor: pointer;
  }
`;

export const ImageText = styled.div`
position: absolute;
font-size: 13px;
bottom: 5%;
left: 2%;
color: white;
font-family: Pretendard-Regular;

padding: 1%;
border-radius: 5px;
background-color: #00000099;
`