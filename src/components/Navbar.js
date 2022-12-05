import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/about">About page</Link>
            <Link to="/contact">Contact Page</Link>
        </div>
    )
}
export default Navbar