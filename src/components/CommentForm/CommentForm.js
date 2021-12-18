import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../UI/Button/Button';
import { CommentCard } from '../CommentCard/CommentCard';
import { Container, Comments, Text, Form, Textarea } from './commentForm.style';

export const CommentForm = () => {
  const [textComment, setTextComment] = useState('');
  const [listComments, setListComments] = useState([]);

  const addComment = e => {
    e.preventDefault();
    const newComment = {
      time: new Date().toLocaleTimeString(),
      text: textComment
    };

    setListComments([...listComments, newComment]);
    setTextComment('');
  };

  return (
    <Container>
      <Comments>
        {
          listComments.length > 0
            ? listComments.map(comment => (
              <CommentCard key={nanoid()} comment={comment} />
            ))
            : <Text>Здесь пока нет комментариев</Text>
        }
      </Comments>
      <Form onSubmit={addComment}>
        <Textarea
          required
          value={textComment}
          onChange={e => setTextComment(e.target.value)}
        />
        <Button main>Отправить комментарий</Button>
      </Form>
    </Container>
  );
};
