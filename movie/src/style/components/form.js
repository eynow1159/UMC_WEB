import styled from "styled-components";

export const Title = styled.h1`
  font-family: ${props => props.$font || 'Pretendard-Regular'};
  width: 100%;
  margin: 0 0 20px 0;
  padding: 50px 10px 15px;
  border-bottom: 1px solid #141517;
  color: #fff;
  box-sizing: border-box;
  font-size: 28px;
`
  
export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 50px 0;
  box-sizing: border-box;
`

export const InputDiv = styled.div`
  position: relative;

  background-color: black;

  padding: 2px;
  border: 0px;
  border-bottom: ${props => props.$borderBottom || '0px' };
  border-radius: ${props => props.$borderRadius || '5px'};
  border-color: black;

  width: 50%;
  max-width: 330px;
  height: 48px;
  outline: 0;
  overflow: hidden;

  box-sizing: content-box;
`

export const InputText = styled.input`
  font-family: Pretendard-Regular;
  font-size: 15px;
  color: black;
  background-color: white;

  outline: 0;
  padding: 0 0 0 10px;
  margin: 0;
  border: ${props => props.$border || '1px solid #48484b'};
  border-radius: 5px;
  
  width: 100%;
  height: 100%;

  box-sizing: border-box;
`

export const ValidationIcon = styled.img`
  position: absolute;
  margin-top: -10px;
  top: 50%;
  right: 14px;
`

export const Submit = styled.button`
  font-family: Pretendard-Regular;
  width: 50%;
  max-width: 330px;
  height: 45px;
  padding: 0 5px;
  margin: 20px;

  background-color: #F82F62;
  color: white;
  outline: 0;

  opacity: ${props => props.$opacity || 1};

  border: 0;
  border-radius: 5px;
  box-sizing: border-box;

  cursor: pointer;

  &:hover{
    background-color: #FF0558;
  }
`

export const ErrMsg = styled.p`
  font-family: Pretendard-Regular;
  font-size: 12px;
  color: #f82f62;
  margin: 20px 0 0 0;
`