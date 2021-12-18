import styled, { css } from 'styled-components';

const MainButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.3s;
  
  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      opacity: 0.7;
    }
  }

  ${props => props.like && css`
      color: #1390E5;
      background-color: transparent;
      @media (hover: hover), screen and (min-width: 0\0) {
        :hover,
        :focus {
          background-color: #e3f3ff;
        }
      }
  `}
`;

export { MainButton };
