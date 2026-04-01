// challenge-link: https://journey.makers.tech/pages/react-apps-paired-challenges
import { useEffect, useState } from "react"
export async function make_request() {
	const reponse = await fetch("https://official-joke-api.appspot.com/jokes/ten")
	const data = await reponse.json()
	return data
}

// react doesn't know how to handle promises
function Joke() {
	const [data, setData] = useState(null)

	useEffect(() => {
		async function getData() {
			try {
				const data = await make_request()
				console.log(data)
				setData(data)
			} catch (err) {
				console.error(err)
				console.error(err.stack)
			}
		}
		getData()
	}, [])

	console.log("calling _data:,", data)

	return (
		<div>
			<p>We could go up, up, up</p>
			{data?.map(joke => (
				<p key={joke.id}>{joke.setup}</p>
			))}
		</div>
	)
}

export default Joke
