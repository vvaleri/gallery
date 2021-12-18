import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  transform: scale(1);
  visibility: visible;
  opacity: 1;
  z-index: 20;

  &::-webkit-scrollbar {
    display: none;
  }
  /* &.visible {
    transform: scale(1);
    visibility: visible;
    opacity: 1;
  } */
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 60px 40px;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  min-width: 510px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  color: #000;


  @media (max-width: 767px) {
    flex-direction: column;
    padding: 30px 20px;
    min-width: 100%;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-right: 15px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
    margin-right: 0;
    padding: 0;
    padding-top: 10px;
  }

  img {
    margin-bottom: 10px;

    @media (max-width: 767px) {
      max-height: 250px;
      object-fit: cover;
    }
  }
`;

const Div = styled.div`
  width: 360px;
  height: 410px;
  border: 1px solid pink;
  margin-bottom: 10px;
`;

export { Container, Wrap, Overlay, Content, CloseBtn, Image, Div };
