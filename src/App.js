import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React testing practice</h1>
        <Counter initial={0} />
      </header>
    </div>
  );
}

export default App;
