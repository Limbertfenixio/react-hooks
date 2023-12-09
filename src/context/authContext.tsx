import { createContext, useContext, useState } from "react";

const initialValue = {
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
}

const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const login = () => {
		setIsAuthenticated(true)
	}

	const logout = () => {
		setIsAuthenticated(false)
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}


export const useAuth = () => {
	return useContext(AuthContext)
}

