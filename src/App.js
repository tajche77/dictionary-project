import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by
            <a
              href="https://github.com/tajche77"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              TamaraB
            </a>
            , is open-sourced on {""}
            <a
              href="https://github.com/tajche77/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub {""}
            </a>
            and is hosted on {""}
            <a
              href="https://zippy-centaur-b67eef.netlify.app/"
              target="_blank"
              rel="noreferrer"
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
