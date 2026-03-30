import Gig from "./components/Display";
import "./App.css";

function App() {
	const gigs = [
		{
			id: 0,
			bandName: "Childish Gambino",
			description: "Cool tracks and tunes, especially the sample of LES and the Earth PianoTuner",
			hostedAt: "Cool Island",
		},
		{
			id: 1,
			bandName: "MiheroMiraha",
			description: "Nice Vibrant Tracks",
			hostedAt: "Mordecai Rigby Park",
		},
		{
			id: 2,
			bandName: "Lamine Vacouver",
			description: "Native Drums of Pocahontas",
			hostedAt: "Karavan Horatiii",
		}
	]

	return (
		<>
			<Gig gigs={gigs}/>
		</>
	);
}

export default App;
