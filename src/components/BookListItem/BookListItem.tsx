import { Book } from "../../domain/book";

interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  const isFree = book.price === "$0.00";

  return (
    <>
      <h2 style={{ textDecoration: isFree ? "underline" : "inherit" }}>
        {book.title} {isFree && "💰"}
      </h2>
      <h3>{book.subtitle}</h3>
      <div>by {book.author}</div>
    </>
  );
};
