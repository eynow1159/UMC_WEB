import styled from "styled-components";

const CustomButton = () => {
    return (
        <>
            <Btn color={'green'}>
                초록
            </Btn>
            
            <Btn color={'orange'}>
                주황
            </Btn>
        </>
    );
};

export default CustomButton;

const Btn = styled.button`
    background-color: ${props => props.color || 'purple'};
    border: none;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    color: white;
`


