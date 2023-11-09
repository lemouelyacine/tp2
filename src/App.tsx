import { useState } from 'react'
import './App.css'
import Login from "./pages/Login/Login.tsx";
import Home from "./pages/Home/Home.tsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return isAuthenticated ? <Home /> : <Login connectUser={() => setIsAuthenticated(true)} />
}

export default App
