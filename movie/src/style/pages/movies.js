import styled from 'styled-components';

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    padding: 2rem;
    flexDirection: row;
    gridTemplateColumns: repeat(auto-fill, minmax(150px, 1fr));
`;