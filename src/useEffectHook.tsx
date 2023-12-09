import { useEffect, useState } from "react";


const Timer = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1)
		}, 1000)

		// Cleanup function to clear the interval when the component unmounts
		return () => clearInterval(intervalId)
	}, []) // Empty dependency array means this effect runs once after the initial render

	return <p>Seconds: {seconds}</p>
}

const DataFetcher = () => {
	const [data, setData] = useState<any>(null)

	useEffect(() => {
		// Fetch data from an API
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((result) => setData(result))
			.catch((error) => console.error('Error fetching data: ', error))
	}, []) // Empty dependency array means this effect runs once after the initial render

	return (
		<div>
			<p>Basic Usage UseEffect</p>
			{data ? (
				<ul>
					{data?.map((item: any, i: number) => (
						<li key={i}>{item.name}</li>
					))}
				</ul>
			) : (
				<p>Loading data...</p>
			)}
		</div>
	)
}

const UseEffectHook = () => {
	return (
		<div>
			<DataFetcher />
			<Timer />
		</div>
	)
}

export default UseEffectHook