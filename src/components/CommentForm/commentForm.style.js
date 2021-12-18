import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    height: 100%;
  }
`;

const Comments = styled.div`
    max-height: 400px;
    overflow-y: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 767px) {
      max-height: 150px;
    }
`;

const Text = styled.p`
  color: #b1b3b1;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-bottom: 5px;
  width: 220px;
  resize: none;
  outline: none;
  border: 1px solid #828282;
  border-radius: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }

  :focus {
    border: 1px solid #000;
  }
`;

export { Container, Comments, Text, Form, Textarea };
