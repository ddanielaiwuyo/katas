import Hello from "./components/Hello";
import Post from "./components/Post";
import Gig from "./components/Gig";
import makersLogo from "./assets/Makers-Logo.png";
import weirdFishes from "./assets/weird_fishes.png";
import "./App.css";

function App() {
	return (
		<>
			<Hello name="World" />
			<img className="logo" src={makersLogo}></img>

			<Post post="Do you know you else says `ughh`" postedBy="ogmuscleman_" />
			<Gig
				bandName="Radiohead"
				src={weirdFishes}
				alt="Album cover of two brightly colored fishes"
				description={`
					Weird Fishes/Arrpegi brandishes new drums behind it's drain-cycling
					arpeggios, but sounds every bit massive in a cresendoing as it's live 
					renditions suggests that it might - Genius.com
					`
				}
				location="Manchester, United"
				date={Date()}
			/>
		</>
	);
}

export default App;
