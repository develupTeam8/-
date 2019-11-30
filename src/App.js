import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Form from "./page/Form";
import GlobalStyles from "./components/GlobalStyles.js";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/form" component={Form} />
    </BrowserRouter>
  );
}

export default App;
