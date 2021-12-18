import React from 'react';
import { Button } from '../UI/Button/Button';
import { CommentForm } from '../CommentForm/CommentForm';
import { Container, Wrap, Overlay, Content, CloseBtn, Image, Div } from './imageModal.style';
import Close from '../../assets/img/icon-close.svg';

export const ImageModal = ({ visible, closeModal, imageTarget, like, isLiked }) => (
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
          <Button
            like
            type="button"
            className={like ? 'active' : ''}
            onClick={isLiked}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 55 60" xmlSpace="preserve">
              <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z" />
            </svg>
            <span>Мне нравится</span>
          </Button>
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
