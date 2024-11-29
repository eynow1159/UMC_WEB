import styled from 'styled-components';

export const Section = styled.div`
  display: block;
  padding: 8px;

  position: relative;
  border-radius: 16px;
  height: 20rem;
  overflow: hidden;

  & img {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  gap: 8px;

  position: "absolute";
  top: 16;
  left: 16;
  padding: "8px";
  display: "flex";
  flexDirection: "column";
  alignItems: "start";
  gap: "8px";
`;


export const Text = styled.p`
`;

export const Cast = styled.div`
  display: block;
`;


export const Person = styled.div`
  marginTop: "8px";
  display: "flex";
  flexWrap: "wrap";
`;
