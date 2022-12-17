import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import GamePage from "./pages/GamePage";

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/game" element={<GamePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
