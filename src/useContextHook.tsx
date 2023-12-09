import { useEffect, useState } from "react"
import { useAuth } from "./context/authContext"

const UserProfile = () => {
	const { isAuthenticated } = useAuth()
	const [userData, setUserData] = useState<any>(null)

	useEffect(() => {
		if (isAuthenticated) {
			// Fetch user data when authenticated
			fetch('https://jsonplaceholder.typicode.com/users/1')
				.then((response) => response.json())
				.then((result) => setUserData(result))
				.catch((error) => console.error('Error fetching data: ', error))
		}
	}, [isAuthenticated]) // Run the effect when isAuthenticated changes

	return (
		<div>
			{ isAuthenticated ? (
				<div>
					<h2>Welcome, { userData ? userData.name : 'User' }</h2>
					<p>Email: {userData ? userData.email: 'Loading...'}</p>
				</div>
			) : (
				<p>Please log in to view your profile.</p>
			) }
		</div>
	)
}

const AuthStatus = () => {
	const { isAuthenticated, login, logout } = useAuth()

	return (
		<div>
			<p>User is: { isAuthenticated ? 'Logged In' : 'Logged Out' }</p>
			<button onClick={login}>Login</button>
			<button onClick={logout}>Logout</button>
		</div>
	)
}

const UseContextHook = () => {
	return (
		<div>
			<AuthStatus />
			<UserProfile />
		</div>
	)
}

export default UseContextHook