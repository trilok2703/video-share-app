import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

function Body(){
    return(
        <div className="flex mt-28">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Body;