import logo from "./fox.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary App</strong>
          <div>
            <img
              src={logo}
              className="App-logo-img-fluid"
              alt="Fox logo"
              rel="noreferrer"
            />
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="bright" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Jolusegun/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on GitHub
            </a>{" "}
            by Joyce Oluwatosin Olusegun
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
