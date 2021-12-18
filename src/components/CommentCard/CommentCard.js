import React from 'react';
import { Text } from './commentCard.style';

export const CommentCard = ({ comment }) => (
  <Text>
    <span>{comment.time}</span>
    <p>{comment.text}</p>
  </Text>
);
