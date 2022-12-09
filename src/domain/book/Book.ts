type ISBN = string;

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  isbn: ISBN;
  abstract: string;
  numPages: number;
  author: string;
  publisher: string;
  price: string;
  cover: string;
}
