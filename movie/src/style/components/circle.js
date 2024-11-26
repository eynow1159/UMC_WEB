import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCircle = styled(Link)`
  margin: 4px;
  width: 8rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  border-radius: 16px;

  & img {
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
      filter: brightness(50%);
    }
  }
`;

export const CircleText = styled.span`
  color: "gray";
  fontSize: "0.9rem";
  padding: "0.25rem";
`;