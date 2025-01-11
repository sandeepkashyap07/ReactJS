// create the context
// provide the state to context
// wrap context in root component
// consume the context using use context

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create a context
export const ShoppingCartContext = createContext(null);

/*globale state that provide values to the other 
 components to consume*/

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchListOfProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    // console.log(result);

    if (result && result?.products) {
      setListOfProducts(result?.products);
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetails) {
    /*here when we click on the add to cart we want to store the values in the
    method  
    here the handle cart will get info of product details
      onclicking the ADD YO CART button */
    // console.log(getProductDetails);

    /*her we check that the items we add to cart is already present or not
if not present then -1 or 0 */
    let copyExistingCartItems = [...cartItems];
    const findIndexOfContextItem = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );
    console.log(findIndexOfContextItem);
    if (findIndexOfContextItem === -1) {
      // if the item is not present we will push that item into the copyexisting one
      //  with quantity one
      copyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
      copyExistingCartItems[findIndexOfContextItem] = {
        ...copyExistingCartItems[findIndexOfContextItem],
        quantity: copyExistingCartItems[findIndexOfContextItem].quantity + 1,
        totalPrice:
         ( copyExistingCartItems[findIndexOfContextItem].quantity +
          1 )* copyExistingCartItems[findIndexOfContextItem].price,
      };
    }

    console.log("copyExistingCartItems", copyExistingCartItems);
    // here we set the item
    setCartItems(copyExistingCartItems);
    // here we store the item
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
    navigate("/cart");
  }

  console.log("cartItems", cartItems);

  /* so her we are logging the fetched but we want to fetch this data in 
product list so we pass this data in the provider value */
  // console.log(listOfProducts);

  function handleRemoveFromCart(getProductDetails, isFullRemoveFromCart) {
    let copyExistingCartItems = [...cartItems];
    const findIndexOfCurrentContextItem = copyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (isFullRemoveFromCart) {
      // splice remove items from the array 1 here means only one item
      copyExistingCartItems.splice(findIndexOfCurrentContextItem, 1);
    } else {
      copyExistingCartItems[findIndexOfCurrentContextItem] = {
        ...copyExistingCartItems[findIndexOfCurrentContextItem],
        quantity:
          copyExistingCartItems[findIndexOfCurrentContextItem].quantity - 1,
        totalPrice:
          (copyExistingCartItems[findIndexOfCurrentContextItem].quantity - 1) *
          copyExistingCartItems[findIndexOfCurrentContextItem].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
    setCartItems(copyExistingCartItems);
  }

  // when the page is rendereing the useeffect got invoked and also its inside content too
  useEffect(() => {
    fetchListOfProducts();
    /*when we put dependencies when we want to make a condition that
     if that dependency is present the useEffect will be invoked */

    /*  here after on the page load the browser  fetch the data stored in the local storage
    which have stored the data of items that are added to cart and throw on the cart pge*/
    // here we get the data from local storage and set the data in the setcartItem
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
  }, []);

  // here we provide the state to the context
  // /*here the childern is App and the app contain every component
  //  so the listofproducts data can be extracted by any component because
  // we passed the value of it  */
  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartProvider;
