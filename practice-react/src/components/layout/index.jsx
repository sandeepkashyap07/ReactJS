import { Outlet } from "react-router-dom"
import Header from "../header"
import { Link } from "react-router-dom"
function Layout(){
    return(
        <div>

 <Header/>
 {/* <Link to={<Layout/>} className="bg-blue-800  border-4"  >go to home page</Link> */}

<Outlet/>
        </div>
    )
}

export default Layout