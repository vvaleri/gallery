import styled from 'styled-components';

const Main = styled.main`
  padding: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 25px);
  margin-bottom: -25px;
  list-style: none;

  @media (max-width: 1179px) {
    width: calc(100% + 20px);
    margin-bottom: -20px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export { Main, List };