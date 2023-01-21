// import './App.css';
import React from 'react'
import { Routes, Route} from "react-router-dom";
import Navbar from "../navbar"


class Zoo extends React.Component {
  render() {
    return (
        
    <div className="Zoo">
        <Navbar />
        <header className="App-header">
            <p>
                Zoo!
            </p>
        </header>
    </div>
    )
  }
}

export default Zoo;
