import styled from 'styled-components';

const Text = styled.div`
  max-width: 220px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    max-width: 100%;
    font-size: 14px;
  }

  span {
    color: #999999;
  }

  p {
    overflow-wrap: break-word;
  }
`;

export { Text };