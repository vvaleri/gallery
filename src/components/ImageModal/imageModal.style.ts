import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 20;
  /* for firefox */
  scrollbar-color: #424242 #686868;

  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #424242;
  }

  &::-webkit-scrollbar-track {
    background-color: #686868;
  }

  @media (max-width: 767px) {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 15px;

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

export { Container, Wrap, Overlay, Content, CloseBtn, Image };
