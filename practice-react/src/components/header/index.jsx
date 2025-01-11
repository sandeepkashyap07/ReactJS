import { Link } from "react-router-dom"


function Header(){
    return(
<div>

    <h1>this is header</h1>
    <ul className="flex gap-5">
        <li><Link to={'/home/recipe-list'}>recipe</Link> </li>
        <li><Link to={'/home/comment-list'}>comment</Link> </li>
       
    </ul>
</div>

    )
}

export default Header