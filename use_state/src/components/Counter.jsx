import { useState } from "react"

function CountDisplay(props) {
	return <h1>Count Value :: {props.count}</h1>
}

function IncreaseButton(props) {
	const incrementCounter = () => {
		props.setCount(props.count + 1)
	}

	return <button onClick={incrementCounter}>Increment Counter</button>
}

function DecreaseButton(props) {
	const reduce = () => {
		props.setCount(props.count - 1)
	}

	return <button onClick={reduce}>Decrement Counter</button>
}


function Counter(props) {
	const [count, setCount] = useState(0)
	return (
		<div>
			<CountDisplay count={count} />
			<IncreaseButton setCount={setCount} count={count} />
			<DecreaseButton setCount={setCount} count={count} />
		</div>
	)
}
export default Counter

//
// import { useState } from "react";
//
// function Counter() {
// 	const [count, setValue] = useState(0)
//
// 	const increment = () => setValue(count + 1);
// 	const decrement = () => setValue(count - 1);
// 	return (
// 		<>
// 			<h1>Count {count} </h1>
// 			<button onClick={increment}> Increment </button>
// 			<button onClick={decrement}> Decrement </button>
// 		</>
// 	)
// }
//
// export default Counter
