import Hello from "./components/Hello";
import Post from "./components/Post";
import Gig from "./components/Display";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
	const gig = {
		bandName: "Childish Gambino",
		description: "Cool tracks and tunes, especially the sample of LES and the Earth PianoTuner"
	}
	
	return (
		<>
			<Hello name="World" />
			<img className="logo" src={makersLogo}></img>

			<Post post="Do you know you else says `ughh`" postedBy="ogmuscleman_" />


			<Gig gig={gig} />
		</>
	);
}

export default App;
