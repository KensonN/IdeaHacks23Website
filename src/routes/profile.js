// import './App.css';
import React from 'react'
import Navbar from "../navbar"

class Profile  extends React.Component {
  render() {
    return (
        <div className="Profile">
        <Navbar />  
        <header className="App-header">
        <p>
            Profile!
        </p>
        </header>
    </div>
    )
  }
}

export default Profile;
