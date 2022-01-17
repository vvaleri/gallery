import React from 'react';
import { IComment } from '../../types';
import { Text } from './commentCard.style';

interface CommentProps {
    comment: IComment
}

export const CommentCard = ({ comment }:CommentProps) => (
  <Text>
    <span>{comment.time}</span>
    <p>{comment.text}</p>
  </Text>
);