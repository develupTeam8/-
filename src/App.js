import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles.js";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Route path="/" exact />
		</BrowserRouter>
	);
}

export default App;
