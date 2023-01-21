import { Link } from "react-router-dom"
import { Routes, Route} from "react-router-dom";
import Zoo from "./routes/zoo";
import Social from "./routes/social";
import Profile from "./routes/profile";
import Login from "./routes/login"

const Navbar =()=>{
    return (
    <div>
        <Link to="/zoo">Zoo</Link>
        <Link to="/social">Social</Link>
        <Link to="/profile">Profile</Link>
    </div>
    )
}
export default Navbar;