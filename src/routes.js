import React from "react";

const Home = React.lazy(() => import("./views/Home/Home"));
const Category = React.lazy(() => import("./views/Category/Category"));
const Book = React.lazy(() => import("./views/Book/Book"));
const FormBook = React.lazy(() => import("./components/FormBook/FormBook"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/categories", name: "Categories", component: Category },
  { path: "/books/:id", exact: true, name: "Books", component: Book },
  {
    path: "/bookmanager/:id",
    exact: true,
    name: "Book Manager",
    component: FormBook
  }
];

export default routes;
