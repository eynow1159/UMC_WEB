import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLogo = styled(Link)`
  color: red;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;

export const NavWrapper = styled.nav`
  position: fixed;
  weight: 100vh;
  height: 60px;
  top: 0;
  left: 0;

  background-color: #222222;
  
  padding: 5px;
  display: flex;
  gap: 1rem;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const MenuButton = styled(Link)`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => (props?.register === "true" ? "#e31b64" : "white")};
    color: black;
  }
`;
