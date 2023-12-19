import "./App.css";
import Counter from "./components/Counter";
import Api from "./components/api/Api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React testing practice</h1>
        <Counter initial={0} />
        <Api />
      </header>
    </div>
  );
}

export default App;
