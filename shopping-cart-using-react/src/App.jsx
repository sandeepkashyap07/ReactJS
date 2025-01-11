import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/productLists"
import ProductDetailsPage from "./pages/productDetails"
import CartListPage from "./pages/cartLists"


function App() {
  

  return (
<div>
  
<Fragment>
  <Routes>
    <Route path="/products" element={<ProductListPage/>}/>
    <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
    <Route path="/cart" element={<CartListPage/>}/>
  </Routes>
</Fragment>
</div>
        )
}

export default App
