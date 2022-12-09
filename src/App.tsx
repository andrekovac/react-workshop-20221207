import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList/BookList";
import { exampleBooks } from "./domain/book";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <BookList books={exampleBooks} />
    </div>
  );
};

export default App;
