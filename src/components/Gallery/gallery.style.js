import styled from 'styled-components';

const Main = styled.main`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 35px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 25px);
  margin-bottom: -25px;
  list-style: none;
`;

export { Main, Title, List };
