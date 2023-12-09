import './App.css'
import { AuthProvider } from './context/authContext'
import UseContextHook from './useContextHook'
import UseEffectHook from './useEffectHook'
import UseStateHook from './useStateHook'

function App() {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
      <AuthProvider>
         <UseContextHook />
      </AuthProvider>
    </>
  )
}

export default App
