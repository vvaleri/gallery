import styled from 'styled-components';

const Item = styled.li`
  width: calc(25% - 25px);
  margin-bottom: 25px;
  margin-right: 25px;
  cursor: pointer;
  
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
    max-width: 100%;
    object-fit: cover;

    @media (max-width: 1023px) {
      width: 100%;
    }
  }
`;

export { Item };
