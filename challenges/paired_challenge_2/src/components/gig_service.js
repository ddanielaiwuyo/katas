export async function makeRequest() {
	const url = "https://makers-gig-backend.onrender.com/events"
	const response = await fetch(url)
	if (response.status != 200) {
		console.log("status code not good", response.status) //might want to throw an err so reject can be handled
	}

	return await response.json()
}

