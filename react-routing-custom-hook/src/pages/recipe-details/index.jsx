import { useParams } from "react-router-dom"

function RecipeDetailsPage(){
/* use params is used extract or to return a pbject key/value pair of
 the current URl we are on  
 the dynamic page URL value for example
 for example  http://localhost:5173/recipe-list/1121121 
 here the 1121121 will be returned by the params as a value because in the
 path="/recipe-list/:id  wehave given the id"*/


    const params = useParams()
    console.log(params);
    // here we are extracting the id value from the dynamic URL
    const{id} = params
    
    return(
<div>
    <h1>recipe details of recipe item{id} </h1>
</div>
    )
}
export default RecipeDetailsPage