import { useState } from "react"

function Display(props) {
	const favorites = props.favorites
	console.log(favorites)
	if (favorites.length === 0) {
		return ( <h3>  Ohweee, Here are the movies you liked</h3>)
	}

	return (
		<>
			<h3>  Ohweee, Here are the movies you liked</h3>
			<div>
				{favorites.map((gig, i) => (
					<Card gig={gig} index={i}/>
				))
				}
			</div>
		</>
	)

}

function Card(props) {
	return (
		<div key={props.index}>
			<p>Band Name: {props.gig.bandName}</p>
			<p>Description: {props.gig.description}</p>
		</div>
	)
}

function Component(props) {
	const addToFavs = () => {
		props.updateFavorites([...props.favorites, props.gig])
		console.log("clikcked")
	}
	return (<button onClick={addToFavs}> Add to favorites </button>)
}

function Gig(props) {
	const [favorites, updateFavorites] = useState([])
	return (
		<div>
			<Display favorites={favorites} />
			<Component
				gig={props.gig}
				favorites={favorites} updateFavorites={updateFavorites} />
		</div>
	)
}

export default Gig
