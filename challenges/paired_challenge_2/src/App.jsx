import Gig from "./components/Gig";
import CheckList from "./components/CheckList"
import "./App.css";

function App() {
	const doneChallenges = [
		{ text: "Data from API", checked: true },
		{ text: "Loading Screen", checked: true },
		{ text: "Can favourite Gigs", checked: true },
		{ text: "Can remove Gig from favourites", checked: true },
	]
	return (
		<>
			<h2>React Challenge details @
				<a href="https://journey.makers.tech/pages/react-apps-paired-challenges">makers.tech</a>
			</h2>

			<CheckList items={doneChallenges} />
			<Gig />

		</>
	);
}

export default App;
