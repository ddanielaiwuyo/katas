// Gig Challenge : https://journey.makers.tech/pages/react-apps-paired-challenges
// Goal: Contact an API Endpoint, and while theres some latency, display a loading spinner
// Step 1, lets fetch some endpoint

import { useEffect, useState } from "react"
import "./Gig.css"

async function make_request() {
	const url = "https://makers-gig-backend.onrender.com/events"
	const response = await fetch(url)
	if (response.status != 200) {
		console.log("status code not good", response.status) //might want to throw an err so reject can be handled
	}

	return await response.json()
}


function Card(props) {
	const { gig, favourites, updateFavourites } = props
	if (!gig || !favourites) {
		throw new ReferenceError(`Props for Card has an undefined value: ${gig}, ${favourites}, ${updateFavourites}`)
	}

	const handleClick = () => {
		if (!gig.favorited) {
			gig.favourited = true
		}
		updateFavourites([...favourites, gig])
	}

	return (<>
		<div className="card-container" >
			<p className="band-name">Band Name: {gig.band_name}</p>
			<p>{props.gig.description}</p>
			<p>Time: {new Date(gig.time).toDateString()}</p>
			<button type="button" onClick={handleClick}>{gig.favourited ? "Remove from Favourties" : "Add to Favourites"}</button>
		</div>
	</>)
}

function Gig() {
	const [data, setData] = useState([])
	const [favourites, updateFavourites] = useState([])
	useEffect(() => {
		make_request().then(
			(response) => {
				console.log("response body from server ->", response)
				const allFavourites = []
				const nonFavourites = []
				response.forEach((gig) => {
					if (gig.favourited) {
						allFavourites.push(gig)
					} else {
						nonFavourites.push(gig)
					}
				})

				// console.log("all favourties -> ", allFavourites)
				// console.log("all non -> ", nonFavourites)
				setData([...nonFavourites])
				updateFavourites([...allFavourites])
			},
			(error) => console.log("Error from server -> ", error)
		)
	}, [])

	// <div className="display-container">
	// 	{favourites.map((gig) => (
	// 		<Card key={gig.id} gig={gig} updateFavourites={updateFavourites} favourites={favourites} />
	// 		// <Card key={gig.id} gig={gig} />
	// 	))}
	// </div >
	if (data.length == 0) {
		return <p>Data is Loading</p>
	}
	return (
		<div>
			<DisplayContainer favourites={favourites} />
			<div className="gigs-container">
				{data.map((gig) => (
					<Card key={gig.id} gig={gig} updateFavourites={updateFavourites} favourites={favourites} />
				))}
			</div >


		</div>

	)
}


function DisplayContainer(props) {
	const { favourites } = props
	return (
		<div className="display-container">
			{favourites.map((gig) => (
				<Card key={gig.id} gig={gig} favourites={favourites} />
			))}
		</div >


	)
}
export default Gig
