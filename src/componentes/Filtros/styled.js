import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  align-items: center;
  flex-direction: column;
  grid-area: 1 / 4 / 3 / 6;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  gap: 0.2rem;
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 0.2rem;
  font-size: 0.8rem;
`;