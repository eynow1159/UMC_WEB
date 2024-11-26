import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  color: red;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;

export const Container = styled.nav`
  height: 50px;

  gap: 1rem;
  flex-direction: row;

  grid-column: 1 / -1;
  background-color: #222222;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled(Link)`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => (props?.register === "true" ? "#e31b64" : "white")};
    color: black;
  }
`;

export const Text = styled.p`
  padding: 0px 12px;
  fontSize: 13px;
  margin: 14px 5px;
  &:hover {
    color: ${(props) => (props?.register === "true" ? "#2C2D2F" : "#FF3D6E")};
  }
`;