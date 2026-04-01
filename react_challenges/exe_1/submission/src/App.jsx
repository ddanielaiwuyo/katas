import Hello from "./components/Hello";
import Product from "./components/Product";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
	return (
		<>
			<Hello name="World" />
			<Product
				name="Air Fryer K2000"
				description="The best air fryer to fry all things, even Mars bars"
				price={2000}
			/>

			<Product
				name="Maison Margiela By the Fireplace"
				description="Smells like roasting marshmellows by the fireplace"
				price={150.00}
			/>

			<img className="logo" src={makersLogo}></img>
		</>
	);
}

export default App;
