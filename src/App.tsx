import { useEffect, useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList/BookList";
import { Counter } from "./components/Counter";
import { exampleBooks } from "./domain/book";

const useBook = () => {
  const [result, setResult] = useState<{ title: string } | undefined>(
    undefined
  );

  // Daten von einer API beziehen
  const fetchBookAsync = async () => {
    try {
      const response = await fetch("http://localhost:4730/books/9781787125421");
      const result = await response.json();
      console.log({ result });
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookAsync();
  }, []);

  return result;
};

const App = () => {
  const [show, setShow] = useState(true);
  const book = useBook();

  return (
    <div className="App">
      Titel: {book?.title}
      <AppHeader />
      {show && <Counter />}
      <button onClick={() => setShow(!show)}>Toggle show</button>
      <BookList books={exampleBooks} />
    </div>
  );
};

export default App;
