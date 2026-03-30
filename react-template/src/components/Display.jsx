import { useState } from "react"

function Display(props) {
	const favorites = props.favorites
	return (
		<>
			<h3>  Ohweee, Here are the movies you liked</h3>
			<div>
				{favorites.map((gig, i) => (
					<p key={i}>Gig Name: {gig}</p>
				))
				}
			</div>
		</>
	)

}

function Component(props) {
	// has a button
	const addToFavs = () => {
		props.updateFavorites([...props.favorites, props.bandName])
		console.log("clikcked")
	}
	console.log(props)

	const removeFromFavs = () => {
		props.updateFavorites(props.favorites.push(props.bandName))
	}

	return (<button onClick={addToFavs}> Add to favorites </button>)
}

function Gig(props) {
	const [favorites, updateFavorites] = useState([])
	return (
		<div>
			<Display favorites={favorites} />
			<Component
				bandName={props.bandName}
				favorites={favorites} updateFavorites={updateFavorites} />
		</div>
	)
}

export default Gig
