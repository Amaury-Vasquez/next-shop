import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 4fr 1fr 1fr;
  background: var(--purple);
  border-radius: 3px;
  color: white;

  & > span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  width: 100%;
`;
