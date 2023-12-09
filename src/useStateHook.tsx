import { useState } from "react";


const Counter = () => {
	// Declare a state variable named 'count' with an initial value of 0
	const [count, setCount] = useState(0)
	const [isEven, setIsEven] = useState(false)

	return (
		<div>
			<p>Basic usage UseState hook</p>
			<p>Count: {count}</p>
			<p>{ isEven ? 'Even' : 'Odd' }</p>
			<div style={{display: 'flex', justifyContent: 'space-around', width: 600}}>
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<button onClick={() => setCount(count - 1)}>Decrement</button>
				<button onClick={() => setIsEven(!isEven)}>Toggle Even/Odd</button>
			</div>
		</div>
	)
}

const UseStateHook = () => {
	return <Counter />
}

export default UseStateHook