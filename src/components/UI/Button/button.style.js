import styled, { css } from 'styled-components';

const MainButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.3s;
  
  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      opacity: 0.8;
    }
  }

  ${props => props.like && css`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    padding: 10px;
    border-radius: 20px;
    color: #3E3D3B;

      svg {
        margin-right: 3px;
        stroke: #000;
        stroke-width: 3px;
        fill: transparent;
        transition: stroke 0.3s, fill 0.3s;
      }

      &.active {
        svg {
        stroke: red;
        fill: red;
       }
      }
  `}
  ${props => props.main && css`
    max-width: 220px;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    background-color: #FF4A32;

    @media (max-width: 767px) {
      max-width: 100%;
    }

  `}
`;

export { MainButton };
