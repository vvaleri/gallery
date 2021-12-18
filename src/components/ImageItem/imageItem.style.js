import styled from 'styled-components';

const Item = styled.li`
  width: calc(25% - 25px);
  margin-bottom: 25px;
  margin-right: 25px;
  cursor: pointer;

  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export { Item };
