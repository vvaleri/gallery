import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageItem } from '../ImageItem/ImageItem';
import { Main, Title, List } from './gallery.style';
import { APIKey } from '../../config/api-key';

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // axios.get(`https://api.unsplash.com/phoos/?client_id=${APIKey}&per_page=20`)
    //   .then(res => {
    //     setImages([...images, ...res.data]);
    //   })
    //   .catch(err => setError(err.message));
  }, []);

  return (
    <Main>
      <Title>Image gallery</Title>
      <List>
        {
          images.length > 0
            ? images.map(image => (
              <ImageItem key={image.id} image={image} />
            ))
            : <div>Изображения не найдены</div>
        }
      </List>
    </Main>
  );
};
