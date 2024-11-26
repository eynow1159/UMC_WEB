import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  padding: 8px;
`;


export const Header = styled.div`
  position: relative;
  border-radius: 16px;
  height: 20rem;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


export const Cast = styled.div`
  display: block;
`;


export const Person = styled.div`
  marginTop: "8px";
  display: "flex";
  flexWrap: "wrap";
`;
