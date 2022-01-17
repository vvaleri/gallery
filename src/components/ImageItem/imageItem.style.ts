import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  width: calc(25% - 25px);
  margin-bottom: 25px;
  margin-right: 25px;
  transition: box-shadow 0.3s;
  cursor: pointer;

  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
    }
  }
  
  @media (max-width: 1179px) {
    width: calc(33.3% - 20px);
    margin-bottom: 20px;
    margin-right: 20px;
  }

  @media (max-width: 1023px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }

  img {
    width: 100%;
    max-width: 100%;
    object-fit: cover;

    @media (max-width: 1023px) {
      width: 100%;
    }
  }
`;

export { Item };