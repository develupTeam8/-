import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
