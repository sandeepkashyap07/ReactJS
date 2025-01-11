import { Link } from "react-router-dom";
function Header(){
    return(
        <header>

        <div>
            <h1>Home Page</h1>
            <ul className="text-xl list-none flex gap-4 bg-green-600 text-white ">
                <li><Link to={'/home/recipe-list'}>Recipe</Link></li>
                <li><Link to={'/home/comments-list'} >comments</Link></li>
            </ul>
        </div>
        </header>
    )
}
export default Header;
// trasnfering  the header component to layout component 
// to make the header component as a commonn component for other component 