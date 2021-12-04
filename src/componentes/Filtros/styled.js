import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  align-items: center;
  flex-direction: column;
  grid-area: 1 / 4 / 3 / 6;
`;

export const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`