import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom"
import Profile from "./routes/profile"
import Login from "./routes/login"
import Zoo from "./routes/zoo"
import Social from "./routes/social"
import Home from "./routes/home"

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/zoo" element={<Zoo />} />
            <Route path="/social" element={<Social />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
    </div>
    )
  }
}

export default App;
