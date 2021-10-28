import React from "react";
import logo from "./logo.svg";
import "./App.css";
 let name : string   = "Akshit"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Game main screen</p>

        <h1>{`Time: ${Date.now()}`}</h1>
        <p>Hello {name}</p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, recusandae suscipit. At voluptates molestias sint nulla perferendis, neque commodi adipisci officiis doloribus cupiditate nihil, vero ipsum dignissimos quia, rem labore!</h2>

      </header>
    </div>
  );
}

export default App;
