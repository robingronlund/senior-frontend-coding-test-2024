import styled from '@emotion/styled';

export const MovieCard = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
