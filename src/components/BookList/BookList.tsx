import { Book } from "../../domain/book";
import { BookListItem } from "../BookListItem";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </>
  );
};
