import "./App.css";
import { AppHeader } from "./components/AppHeader";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      {5 + 6}
    </div>
  );
};

export default App;
