import { useEffect, useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList/BookList";
import { Counter } from "./components/Counter";
import { exampleBooks } from "./domain/book";

const App = () => {
  const [result, setResult] = useState<{ title: string } | undefined>(
    undefined
  );

  console.log("render");

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

  return (
    <div className="App">
      Titel: {result?.title}
      <AppHeader />
      <Counter />
      <BookList books={exampleBooks} />
    </div>
  );
};

export default App;
