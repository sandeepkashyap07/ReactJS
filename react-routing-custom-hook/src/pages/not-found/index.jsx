import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <div>
            <h1>this page doesnt exist </h1>
            <Link to={'/recipe-list'} className="text-xl bg-yellow-800 text-white" >Go to recipe page</Link>
        </div>
    )
}
export default NotFoundPage;