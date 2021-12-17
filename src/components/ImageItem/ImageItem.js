import React from 'react';
import { Item } from './imageItem.style';

export const ImageItem = ({ image }) => (
  <Item>
    <img
      width="390px"
      height="260px"
      src={image.urls.small}
      alt={image.description || `photo by ${image.user.name}`}
    />
  </Item>
);
