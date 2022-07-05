import React from "react";
import { IImage } from "../../types";
import { Item } from "./imageItem.style";

interface ImageItemProps {
  image: IImage;
  onOpenModal: (image: IImage) => void;
}

export const ImageItem = ({ image, onOpenModal }: ImageItemProps) => {
  
  const handleShowModal = (image: IImage) => () => {
    onOpenModal(image);
  };

  return (
    <Item onClick={handleShowModal(image)}>
      <img
        width="390px"
        height="260px"
        src={image.urls.small}
        alt={image.description || `photo by ${image.user.name}`}
      />
    </Item>
  );
};
