import { Link } from "react-router-dom";

export function Menu(){
    return(
        <div className="bg-dark p-3 text-white">
            <span><Link to="/home" className="text-white me-3 text-decoration-none">Home</Link></span>
            <span><Link to="/contactus" className="text-white me-3 text-decoration-none">Contactus</Link></span>
            <span><Link to="/signup" className="text-white me-3 text-decoration-none">Signup</Link></span>
            <span><Link to="/signin" className="text-white me-3 text-decoration-none">Signin</Link></span>
        </div>
    )
}