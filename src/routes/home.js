import '../App.css';
import React from 'react'
import Navbar from '../navbar';
import { Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom"
import Profile from "./profile"
import Login from "./login"
import Zoo from "./zoo"
import Social from "./social"


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
      <header className="App-header">
        <p>
          "Click below to log in!"
        </p>
        <Link to="/login">
          <button>login</button>
        </Link>
      </header>
    </div>
    )
  }
}

export default Home;
