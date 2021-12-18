import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Comments = styled.div`
    max-height: 400px;
    overflow-y: auto;

    /* -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    } */
`;

const Text = styled.p`
  color: #b1b3b1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  resize: none;
`;

export { Container, Comments, Text, Form, Textarea };
