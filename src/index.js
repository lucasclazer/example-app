import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/stable";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import categories from "./data/categories";
import books from "./data/books";

try {
  if (
    localStorage.getItem("categories") ||
    localStorage.getItem("categories").length <= 0
  ) {
    console.log("inicializa as categorias");
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  if (
    localStorage.getItem("books") ||
    localStorage.getItem("books").length <= 0
  ) {
    console.log("Inicializa os livros");
    localStorage.setItem("books", JSON.stringify(books));
  }
} catch (error) {
  console.error("Erro: ", error);
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("books", JSON.stringify(books));
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
