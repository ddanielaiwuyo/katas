import { useEffect, useState } from "react"
import "./Gig.css"

async function makeRequest() {
	const url = "https://makers-gig-backend.onrender.com/events"
	const response = await fetch(url)
	if (response.status != 200) {
		console.log("status code not good", response.status) //might want to throw an err so reject can be handled
	}

	return await response.json()
}

function Card(props) {
	const { gig } = props
	return (<>
		<div className="card-container" >
			<p className="band-name">{gig.band_name}</p>
			<p>{props.gig.description}</p>
			<p>Time: {new Date(gig.time).toDateString()}</p>
		</div>
	</>)
}


// Try to use createContext
function Main() {
	const [data, updateData] = useState([])
	const [favourites, updateFavourites] = useState([])

	useEffect(() => {
		makeRequest().then(
			(response) => {
				const favourites = []
				const nonFavourites = []

				response.forEach((gig) => {
					if (gig.event_id && gig.event_id % 2 == 0) { gig.favourited = true } if (gig.favourited) {
						favourites.push(gig)
					} else {
						nonFavourites.push(gig)
					}
				})

				// for gigs that are not 'favourited'
				updateData(nonFavourites)
				updateFavourites(favourites)
			},


			(error) => {
				console.log("An error occured: Reason:", error)
			})
	}, []);




	return < FavouritesDisplay
		favourites={favourites}
		nonFavourites={data}
		updateFavourites={updateFavourites}
		updateNonFavourites={updateData}
	/>
}



// Takes the list of favouries gig to display
function FavouritesDisplay(props) {
	const {
		favourites, updateFavourites,
		nonFavourites, updateNonFavourites
	} = props

	if (!favourites || favourites.length == 0 || !Array.isArray(favourites)) {
		console.warn("FavouritesDisplay received an empty from 'props' or invalid Array:", typeof favourites, favourites)
		return (<h3>Add a gig to your Favourties</h3>)
	}

	return (
		<div className="display-body">
			<div className="display-container">
				{favourites.map((gig) => (
					<div key={gig.event_id}>
						<WholeComponentFavourites
							gig={gig}
							favourites={favourites}
							updateFavourites={updateFavourites}
							nonFavourites={nonFavourites}
							updateNonFavourites={updateNonFavourites}
						/>
					</div>
				))}
			</div>


			<div className="listing-container">
				{nonFavourites.map((gig) => (
					<div key={gig.event_id}>
						<WholeComponentNonFavourites
							gig={gig}
							favourites={favourites}
							updateFavourites={updateFavourites}
							nonFavourites={nonFavourites}
							updateNonFavourites={updateNonFavourites}
						/>
					</div>
				))}
			</div>

		</div>
	)
}

function WholeComponentNonFavourites(props) {
	const { gig, favourites, nonFavourites, updateFavourites, updateNonFavourites } = props
	let removeEvent = () => {
		let updatedNonFavs = nonFavourites.filter((favourite) => gig.event_id != favourite.event_id)
		gig.favourited = true
		updateFavourites([...favourites, gig])

		updateNonFavourites(updatedNonFavs)
	}


	return (
		<div>
			<div key={gig.event_id} className="card-container">
				<Card gig={gig} />
				<button onClick={removeEvent}>Add to Favorites</button>
			</div>
		</div >
	)

}

function WholeComponentFavourites(props) {
	const { gig, favourites, nonFavourites, updateFavourites, updateNonFavourites } = props
	let removeEvent = () => {
		let updatedFavs = favourites.filter((favourite) => gig.event_id != favourite.event_id)
		gig.favourited = false
		updateFavourites(updatedFavs)

		updateNonFavourites([...nonFavourites, gig])
	}


	return (
		<div>
			<div key={gig.event_id} className="card-container">
				<Card gig={gig} />
				<button onClick={removeEvent}>Remove from Favorites</button>
			</div>
		</div >
	)
}

export default Main

