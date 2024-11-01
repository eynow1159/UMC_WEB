import styled from "styled-components";

export const FirstStyledSweetPotato = styled.button`
    background-color: purple;
    border: none;
    padding: 0;
    cursor: pointer;
`;

export const StyledHoverButton = styled.button`
    &:hover {
        // 밑줄을 부여한다.
        text-decoration: underline;
    }
`;