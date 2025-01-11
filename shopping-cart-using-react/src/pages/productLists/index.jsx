import { ShoppingCartContext } from "../../context"
import { useContext } from "react"
import ProductTile from "../../components/productTile"





function ProductListPage(){
    /* here we extract the listofproduct data which is defined in the value 
    property of the provider and the provider wrapped the children which is app
    and app contain the product list page*/
    

/*here we get that context value so we use the useContext hook
and in the parameter we will fill it with the contextvariablename
that we created in the context file in the starting 
 */
// const getContextValue = useContext(ShoppingCartContext)

// here we only fetching the list of products from the context
const {listOfProducts,loading} = useContext(ShoppingCartContext)
console.log(listOfProducts);

if(loading) return(<h1 className="text-4xl text-center">data is laoding</h1>)

    return(
        <div>
           <section className="py-12 bg-white sm:py-16 lg:py-20">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
                  <div className="max-w-md mx-auto text-center">
                  <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl ">Our featured products</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
{
listOfProducts && listOfProducts.length > 0 ? 
listOfProducts.map(singleProductTile=> <ProductTile key={singleProductTile.id} singleProductTile={singleProductTile}  /> ):<h3>no products</h3>
}
                  </div>
              </div>
           </section>
        </div>
    )
}

export default ProductListPage