import { useState } from "react";
import { Book } from "../../domain/book";
import { Hideable } from "../Hideable";

interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  const [likes, setLikes] = useState(0);
  const isFree = book.price === "$0.00";

  const increaseLikeCount = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <h2 style={{ textDecoration: isFree ? "underline" : "inherit" }}>
        {likes >= 5 && "⭐️"} {book.title} {isFree && "💰"}
      </h2>
      <h3>{book.subtitle}</h3>
      <Hideable>{book.abstract}</Hideable>
      <div>by {book.author}</div>
      <button onClick={increaseLikeCount}>
        &#128079; {likes > 0 && `(${likes})`}
      </button>
    </>
  );
};
