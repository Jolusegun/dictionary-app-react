import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary</strong>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Joyce Oluwatosin Olusegun</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
