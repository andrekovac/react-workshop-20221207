import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList/BookList";
import { Counter } from "./components/Counter";
import { exampleBooks } from "./domain/book";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Counter />
      <BookList books={exampleBooks} />
    </div>
  );
};

export default App;
