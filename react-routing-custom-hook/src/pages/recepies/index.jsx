import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/use-fetch"
import useWindowRezise from "../../hooks/use-window-resize";

function RecipeList(){
    /*use loaction is used to get the current path name of the page we 
    are currently on */
const location = useLocation()
console.log(location);

// const resultFromCustomUseFetchHook = useFetch('https://dummyjson.com/recipes')
// console.log(resultFromCustomUseFetchHook);
const windowSize = useWindowRezise()
const{data,loading,error} = useFetch('https://dummyjson.com/recipes');
console.log(data);

if(loading) return (<h1>fetching recipe please wait</h1>)


    return(
        <div>
            <h1 style={{color:windowSize.width<784 ? 'red':'blue'}} >recipe list page</h1>
            <h3>current window width {windowSize.width} current window height{windowSize.height}</h3>
            <ul>
   {
  data?.recipes?.length > 0?
  data?.recipes.map((recipeItem) => <li key={recipeItem.id}>
    <img src={recipeItem.image} />
    <label>{recipeItem.name}</label>
  </li>)
  :null
   }
</ul>
        </div>
    )
}
export default RecipeList