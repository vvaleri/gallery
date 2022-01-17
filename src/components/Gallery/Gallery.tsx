import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageItem } from '../ImageItem/ImageItem';
import { ImageModal } from '../ImageModal/ImageModal';
import { Loader } from '../UI/Loader/Loader';
import useScrollBlock from '../../hooks/useScrollBlock';
import { IImage } from '../../types';
import { APIKey } from '../../config/api-key';
import { Main, Title, List } from './gallery.style';


export const Gallery = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // для выбранного изображения
  const [imageTarget, setImageTarget] = useState<IImage>({} as IImage);

  const [like, setLike] = useState(false);

  const [activeModal, setActiveModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    axios.get<IImage[]>(`https://api.unsplash.com/photos/?client_id=${APIKey}&per_page=20`)
      .then(res => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const showImageModal = (imgData: IImage): void => {
    setImageTarget(imgData);
    setActiveModal(true);
    blockScroll();
  };

  const closeModal = () => {
    setActiveModal(false);
    allowScroll();
  };

  const isLiked = () => setLike(!like);

  return (
    <Main>
      <Title>Image gallery</Title>
      { error.length > 0
            && (
            <div>
              Ошибка
              {' '}
              {error}
              . Пожалуйста, обновите страницу или попробуйте повторить запрос позднее
            </div>
            )}
      <List>
        {
          isLoading
            ? <Loader />
            : images.map(image => (
              <ImageItem key={image.id} image={image} showModal={showImageModal} />
            ))
        }
      </List>
      <ImageModal
        closeModal={closeModal}
        imageTarget={imageTarget}
        visible={activeModal}
        like={like}
        isLiked={isLiked}
      />
    </Main>
  );
};