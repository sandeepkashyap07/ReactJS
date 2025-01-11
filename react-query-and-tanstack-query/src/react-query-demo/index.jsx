import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewProduct, fetchListOfProducts } from "./api"
import { useState } from "react"

function ReactQueryDemo(){
    const[productTitle,SetProductTitle] = useState('')

    const getQueryClient= useQueryClient()

    // const query = useQuery({
    const {data: productList,isLoading} = useQuery({
// key name of query        queryname that we named it in the api index folder
        queryKey :['productList'],
        // here we define which function you want to apply on the query function
        queryFn: ()=> fetchListOfProducts()
    })
    // console.log(data);

    const{mutateAsync:handleAddNewProductMutation} = useMutation({
        // here we pass the function that do the changes in the query
        mutationFn: addNewProduct,
        onSuccess:()=>{
            getQueryClient.invalidateQueries(['productList'])
        }
    })


    async function handleAddNewProduct(){
        await handleAddNewProductMutation(productTitle)
        SetProductTitle("");
    }
    
    if(isLoading) return(<h3>loading </h3>)
    return(
        <div>
            <h1>react query demo</h1>
            <div>
                <input name="name" value={productTitle} onChange={(event)=> SetProductTitle(event.target.value)} type="text" placeholder="enter product title" className="border-black" />
                <button onClick={handleAddNewProduct} disabled={productTitle.trim() === ""} type="button">add new product</button>
            </div>
            <ul>
                {
                    productList?.length>0?
                    productList.map(item => <li key={item.id}>
                        {item.title } id{ item.id}
                    </li>)
                    : <h3>no products are found</h3>
                }
            </ul>
        </div>
    )
}
export default ReactQueryDemo