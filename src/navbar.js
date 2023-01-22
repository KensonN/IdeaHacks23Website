import { Link } from "react-router-dom"

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