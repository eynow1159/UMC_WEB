import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.3s ease, min-height 0s ease;
  box-sizing: border-box;

  background-color: black;
  padding: 20px;
  overflow-y: auto;
  justify-content: space-between;
  
`;

export const Wrapper = styled.div`
  padding: 0px 40px 60px 40px;
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
`;

export const Title = styled.h1`
  font-family: ${props => props.font || 'Pretendard-Regular'};

  width: 100%;
  margin: 0 0 10px 0;
  padding: 50px 0 13px;
  color: #fff;
  box-sizing: border-box;
  font-size: 28px;
  border-bottom: 1px solid #1b1c1d;
`;