import { Outlet } from "react-router-dom";
import Header from "../header";

function Layout(){
    return(
 <div>
        <Header/>

        {/* here the outlet component 
        makes the header or we can whole layout component as a common component
        for all the other components pages */}
        <Outlet/>
 </div>
    )
}

export default Layout;