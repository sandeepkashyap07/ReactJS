import { Link } from "react-router-dom"

function NotFound(){
    return(
        <div>
            <h1>this is page is not found</h1>
            <Link to={'/recipe-list'}>go to recipe page</Link>
        </div>
    )
}
export default NotFound