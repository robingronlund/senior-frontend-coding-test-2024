import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid hsl(0, 0%, 27.1%);
  border-radius: 8px;
  background-color: #fff;
  color: hsl(0, 0%, 27.1%);
  cursor: pointer;

  &:hover {
    border-color: hsl(0, 0%, 50%);
    color: hsl(0, 0%, 50%);
  }
`;
