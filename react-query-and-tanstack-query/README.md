# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


tanstack query / react query

so what we have done firslty install the react query

then create a folder react query in which creata api folder where we create a dummy data and a function to fetch that dummy data and also created a function to push new data in the existing dummy data
const productList = [
    {
        title:'product1',
        id:1
    },
    {
        title:'product2',
        id:2
    },
    {
        title:'product3',
        id:3
    },
    {
        title:'product4',
        id:4
    },
    {
        title:'product5',
        id:5
    },
]

export const fetchListOfProducts = async()=>{
    await new Promise((resolve)=> setTimeout(resolve,1000))
    return productList
}

export const addNewProduct = async(productName)=>{
    await new Promise((resolve)=> setTimeout(resolve,1000))
    const newlyCreatedProduct = {
        id:productList.length+1,
        title : productName,

    }
    productList.push(newlyCreatedProduct)
    return newlyCreatedProduct;
}





then in main.jsx we wrap the app with querycientProvider 

and outside the function of root we create a variabalse naming queryclient  = new QueryClient()

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<QueryClientProvider client={queryClient}>
<App />
</QueryClientProvider>
</BrowserRouter>

)
