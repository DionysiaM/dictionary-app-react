import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col-6">
              <img src={logo} className="App-logo img-fluid" alt="logo" />
            </div>
            <div className="col-6">
              <h1 className="Lexicon"> Lexicon</h1>
            </div>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="universe" />
        </main>
      </div>
      <footer>
        🌸 This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/dionysia-mastorou-5835a770/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Dionysia Mastorou.
        </a>{" "}
        It is open-sourced on{" "}
        <a
          href="https://github.com/DionysiaM/dictionary-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        and hosted on{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          {" "}
          Netlify.
        </a>{" "}
        Photos provided by{" "}
        <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
          {" "}
          Pexels.
        </a>{" "}
        🌸{" "}
      </footer>
    </div>
  );
}
