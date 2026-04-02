// exercise_link: https://journey.makers.tech/pages/effects-and-fetch
import { useState } from "react"

function Form() {
	const [username, setUsername] = useState("")
	const [errorMsg, setError] = useState("")

	const handleSubmit = (evt) => {
		evt.preventDefault()
		if (username.trim().length == 0) {
			setError(`Username cannot be empty must have be at least ${MIN_LENGTH} chars`)
			return
		}

		fetch("http://url.com/endpoint", {
			method: "POST",
			body: JSON.stringify({ username: username }),
		})
	}


	const MIN_LENGTH = 8

	const handleChange = (evt) => {
		const inputEl = evt.target
		let currentValue = inputEl.value
		console.log("curent_value -> ", currentValue)

		setUsername(currentValue)

		if (currentValue.length != MIN_LENGTH) {
			setError(`Username must not be less than ${MIN_LENGTH}, ${MIN_LENGTH - currentValue.trim().length} characters left `)
			return
		}
		setError("")
		console.log("Username is valid -> ", username)
	}
	return (
		<div>
			<div>
				<p className="error"> {errorMsg} </p>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Username</label>
				<br />

				<input type="text" name="username" value={username} onChange={handleChange} />
				<button> Submit </button>
			</form>
		</div>
	)
}

export default Form
