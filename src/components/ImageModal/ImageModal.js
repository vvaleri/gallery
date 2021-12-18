import React from 'react';
import { Button } from '../UI/Button/Button';
import { CommentForm } from '../CommentForm/CommentForm';
import { Container, Wrap, Overlay, Content, CloseBtn, Image, Div } from './imageModal.style';
import Close from '../../assets/img/icon-close.svg';

export const ImageModal = ({ visible, closeModal, imageTarget }) => (
  visible
  && (
  <Container>
    <Wrap>
      <Overlay onClick={closeModal} />
      <Content>
        <Image>
          {/* <Div /> */}
          <img
            src={imageTarget.urls.small}
            alt={imageTarget.description || `photo by ${imageTarget.user.name}`}
          />
          <Button type="button">like</Button>
        </Image>
        <CommentForm />
        <CloseBtn onClick={closeModal}>
          <img src={Close} alt="close modal" />
        </CloseBtn>
      </Content>
    </Wrap>
  </Container>
  )
);
