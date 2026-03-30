import { useState } from "react"
import "./Display.css"

function Display(props) {
	const favorites = props.favorites
	if (favorites.length === 0) {
		return (<h3> Ohweee, Here are the movies you liked</h3>)
	}

	return (
		<>
			<h3>  Ohweee, Here are the movies you liked</h3>
			<div className="display-container">
				{favorites.map((gig, i) => (
					<Card gig={gig} index={i} />
				))
				}
			</div>
		</>
	)

}

function Card(props) {
	return (
		<div key={props.index} className="card-container">
			<h3 className="band-name">{props.gig.bandName}</h3>
			<p> {props.gig.description}</p>
			<p> Will be hosted at <b>{props.gig.hostedAt}</b></p>
		</div>
	)
}

function already_exists(arr, tgt) {
	for (const obj of arr) {
		if (obj.id === tgt.id) {
			return true
		}
	}

	return false
}

function Component(props) {
	const addToFavs = () => {
		if (already_exists(props.favorites, props.gig)) {
			return
		}

		props.updateFavorites([...props.favorites, props.gig])
		console.log("clikcked")
	}

	const removeFromFavs = () => {
		if (already_exists(props.favorites, props.gig)) {
			props.favorites.pop(props.gig.id)
			props.updateFavorites([...props.favorites])
		}
	}
	return (
		<div className="list-container">


			<Card gig={props.gig} />

			<div className="button-container">
				<button onClick={addToFavs}> Add to favorites </button>
				<button onClick={removeFromFavs}> Remove from favorites </button>
			</div>
		</div>
	)
}

function Gig(props) {
	const [favorites, updateFavorites] = useState([])
	return (
		<div className="gigs-container">
			<Display favorites={favorites} />

			{props.gigs.map((gig) => (
				<Component
					gig={gig}
					favorites={favorites} updateFavorites={updateFavorites}
				/>
			))
			}
		</div>
	)
}


export default Gig
