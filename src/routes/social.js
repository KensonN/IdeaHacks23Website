// import './App.css';
import React from 'react'
import { Routes, Route} from "react-router-dom";
import Navbar from "../navbar"


class Social extends React.Component {
  render() {
    return (
        <div className="Social">
        <Navbar />
        <header className="App-header">
        <p>
            Social!
        </p>
        </header>
    </div>
    )
  }
}

export default Social;
