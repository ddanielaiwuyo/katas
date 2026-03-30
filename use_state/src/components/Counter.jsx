
import { useState } from "react";

function Counter() {
	const [count, setValue] = useState(0)

	const increment = () => setValue(count + 1);
	const decrement = () => setValue(count - 1);
	return (
		<>
			<h1>Count {count} </h1>
			<button onClick={increment}> Increment </button>
			<button onClick={decrement}> Decrement </button>
		</>
	)
}

export default Counter
