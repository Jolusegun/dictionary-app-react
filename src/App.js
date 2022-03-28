import logo from "./fox.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div>
            <img
              src={logo}
              className="App-logo-img-fluid"
              alt="Fox logo"
              rel="noreferrer"
              width="150"
            />
          </div>
          <strong className="Diction">Neat | Dictionary | Search</strong>
        </header>
        <main>
          <Dictionary defaultKeyword="fit" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Jolusegun/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Open-sourced on GitHub
            </a>{" "}
            by{" "}
            <a
              href="https://github.com/Jolusegun/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Joyce Oluwatosin Olusegun
            </a>
            {""} and hosted on{" "}
            <a
              href="https://boring-varahamihira-627cc1.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
