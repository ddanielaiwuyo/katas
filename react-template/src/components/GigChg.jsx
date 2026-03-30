import { useState } from "react"

function FavoritesDisplay(props) {
	const favs = props.gigs.filter((gig) => gig.status)
	return (
		<div>
			{favs.map((gig) => (
				<p>Gig: {gig.name}</p>
			))}
		</div>
	)
}


function ToggleButton(props) {
	const toggle = () => {
		props.updateDisplay(!props.fav)
		console.log("stats -> ", props.fav)
	}
	return (
		<> <button onClick={toggle}>Add to favories</button> </>
	)
}

function GigCard(props) {
	return (
		<p>Band Name: {props.bandName}</p>
	)
}

/**
 * @props {string} bandName
 * @props {sting} description
 * @props {string} date
 * */
// So now, we want a list of gigs with each their own component
// when a component is clicked, we update the display
function GigChg(props) {
	// we want to click the button for every gig, 
	// and then if so, add them to favs
	const [favorites, addToFavs] = useState([])
	return (
		<>
			<FavoritesDisplay  />
			<GigCard bandName="Charlie Charlie" />
			<ToggleButton updateDisplay={addToFavs} fav={favorites} />
		</>
	)
}

export default GigChg 
