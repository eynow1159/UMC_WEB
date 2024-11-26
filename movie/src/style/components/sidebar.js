import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  gap: 1rem;
  flex-direction: column;

  background-color: #222222;
  color: white;
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  overflow-y: auto;
  padding: 10px;
  max-width: 300px;
`;

export const Wrapper = styled(Link)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  border-radius: 1rem;
  &:hover {
    background-color: #555555;
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  white-space: nowrap;
`;