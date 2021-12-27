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
          <Dictionary defaultKeyword="flower" />
        </main>
      </div>
    </div>
  );
}
