import styled from "styled-components";

const FirstStyledSweetPotato = styled.button`
    background-color: purple;
    border: none;
    padding: 0;
    cursor: pointer;
`

/*
// css 일 경우
button:hover {
	// 버튼에 손을 올렸을 떄, purple 글씨 색상으로 변경되는 코드.
	color: purple;
}
*/ 
const StyledHoverButton = styled.button`
	&:hover {
		// 밑줄을 부여한다.
		text-decoration: underline;
	}
`