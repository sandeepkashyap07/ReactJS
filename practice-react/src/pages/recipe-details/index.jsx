import { useParams } from "react-router-dom"

function RecipeDetails(){
    const params = useParams();
    const {id} = params
    return(
        <div>
            <h1>here are the recipe detail of recipe {id}</h1>
        </div>
    )
}
export default RecipeDetails