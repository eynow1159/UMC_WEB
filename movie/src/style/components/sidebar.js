import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  position: fixed;
  weight: 250px;
  height: calc(100vh - 60px);
  top: 60px;
  left: 0;

  background-color: #222222;
  
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  gap: 1rem;

  position: fixed;
`;

export const SidebarMenu = styled(Link)`
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

export const SidebarMenuText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  white-space: nowrap;
`;