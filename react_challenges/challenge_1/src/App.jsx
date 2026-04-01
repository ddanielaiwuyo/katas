import use from "react"

import Hello from "./components/Hello";
import Joke from "./components/Joke";
import { make_request } from "./components/Joke";

import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
	return (
		<>
			<Hello name="World" />
			<Joke />
			<img className="logo" src={makersLogo}></img>
		</>
	);
}

export default App;
