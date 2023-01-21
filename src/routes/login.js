// import './App.css';
import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom"


class Login  extends React.Component {
  render() {
    return (
      <div className="Login">
      <header className="App-header">
        <p>
        Login!
        </p>
        <Link to="/zoo">
            <button>
                Click!!!!!
            </button>
        </Link>
      </header>
    </div>
    )
  }
}

export default Login;
