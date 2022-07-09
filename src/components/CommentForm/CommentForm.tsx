import React, { ChangeEvent, useState } from "react";
import { Button } from "../UI/Button/Button";
import { CommentCard } from "../CommentCard/CommentCard";
import { IComment } from "../../types";
import { Container, Comments, Text, Form, Textarea } from "./commentForm.style";

export const CommentForm = () => {
  const [textComment, setTextComment] = useState<string>("");
  const [listComments, setListComments] = useState<IComment[]>([]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment = {
      time: new Date().toLocaleTimeString(),
      text: textComment
    };

    setListComments([...listComments, newComment]);
    setTextComment("");
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setTextComment(e.target.value);

  return (
    <Container>
      <Comments>
        {listComments.length ? (
          listComments.map(comment => (
            <CommentCard key={comment.time} comment={comment} />
          ))
        ) : (
          <Text>Здесь пока нет комментариев</Text>
        )}
      </Comments>
      <Form onSubmit={handleAddComment}>
        <Textarea required value={textComment} onChange={handleTextChange} />
        <Button type="submit" main>
          Отправить комментарий
        </Button>
      </Form>
    </Container>
  );
};
