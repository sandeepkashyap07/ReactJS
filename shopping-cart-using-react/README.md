# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


we create a context
export const ShoppingCartContext = createContext(null)


we create a global state which provide the data to app

 function ShoppingCartProvider({children}){


const[loading,setLoading] = useState(false)
const[listOfProducts,setListOfProducts] =  useState([])


async function fetchListOfProducts(){
    const apiResponse = await fetch('https://dummyjson.com/products')
    const result= await apiResponse.json()
    console.log(result);

    if(result && result?.products){
        setListOfProducts(result?.products)
    }
    
}


/* so her we are logging the fetched but we want to fetch this data in 
product list so we pass this data in the provider value */
console.log(listOfProducts);


// when the page is rendereing the useeffect got invoked and also its inside content too
useEffect(()=>{
    fetchListOfProducts()
},[])



    // here we provide the state to the context 
    // /*here the childern is App and the app contain every component
    //  so the listofproducts data can be extracted by any component because 
    // we passed the value of it  */
    return <ShoppingCartContext.Provider value={{listOfProducts}}>{children}</ShoppingCartContext.Provider>
 }
 export default ShoppingCartProvider;


 
this ShoppingCartProvider is wrapping the app
<ShoppingCartProvider>
 <App/>
 </ShoppingCartProvider>



-- now we will fetch data in the provider
 
async function fetchListOfProducts(){
    const apiResponse = await fetch('https://dummyjson.com/products')
    const result= await apiResponse.json()
    console.log(result);

    if(result && result?.products){
        setListOfProducts(result?.products)
    }
    
}

and after fetching the data the data we fetched will be passed to the provider value={} which is wrapping the children (App) now the data we have fetched can be accessed anywhere in the App
    return <ShoppingCartContext.Provider value={{listOfProducts}}>{children}</ShoppingCartContext.Provider>

-- and now we want to extract the data in other 
component state variable their we simply use 
useContext(contextName)
 and we fill the contextname that we cretaed using createContext in the context field
 
-- const getContextValue = useContext(ShoppingCartContext)


create context -> dataq fecth then pass the data as value in the provider-> wrap the provider with App->get that context in another file using useContext




useEffect(()=>{
    fetchListOfProducts()
    /*when we put dependencies when we want to make a condition that
     if that dependency is present the useEffect will be invoked first other wise not*/
},[])


