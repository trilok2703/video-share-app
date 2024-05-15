import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar(){
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    // Early return pattern
    if(!isMenuOpen) return null;

    return(
        <div className="p-5 w-48 shadow-lg">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Music</li>
                <li>Shorts</li>
                <li>Live</li>
            </ul>
            <h2 className="font-bold pt-5">Subscriptions</h2>
            <ul>
                <li>Sports</li>
                <li>Music</li>
                <li>Shorts</li>
                <li>Movies</li>
            </ul>
            <h2 className="font-bold pt-5">Watch Later</h2>
            <ul>
                <li>Sports</li>
                <li>Music</li>
                <li>Shorts</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar;