import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageItem } from '../ImageItem/ImageItem';
import { ImageModal } from '../ImageModal/ImageModal';
import { Main, Title, List } from './gallery.style';
import useScrollBlock from '../../hooks/useScrollBlock';
import { APIKey } from '../../config/api-key';

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const [imageTarget, setImageTarget] = useState({});

  const [activeModal, setActiveModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?client_id=${APIKey}&per_page=20`)
      .then(res => {
        setImages([...images, ...res.data]);
      })
      .catch(err => setError(err.message));
  }, []);

  const showImageModal = imgData => {
    setImageTarget(imgData);
    setActiveModal(true);
    blockScroll();
  };

  const closeModal = () => {
    setActiveModal(false);
    allowScroll();
  };

  return (
    <Main>
      <Title>Image gallery</Title>
      <List>
        {
          images.length > 0
            ? images.map(image => (
              <ImageItem key={image.id} image={image} showModal={showImageModal} />
            ))
            : <div>Изображения не найдены</div>
        }
      </List>
      <ImageModal
        closeModal={closeModal}
        imageTarget={imageTarget}
        visible={activeModal}
      />
    </Main>
  );
};
