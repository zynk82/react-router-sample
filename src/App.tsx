import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='profile'>Profile</Link>
            </nav>

            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>

            <div className="App">
            </div>
        </BrowserRouter>
    );
}

export default App;
