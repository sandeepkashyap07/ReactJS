import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductDetailsPage() {
  // params is used to get the current path of the page
  // here we get the dynamic path value of the page
  // const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    productDetails,
    setProductDetails,
    setLoading,
    loading,
    handleAddToCart,
    cartItems
  } = useContext(ShoppingCartContext);

  async function fetchProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    if (result) {
      setProductDetails(result);
      setLoading(false);
    }
    // console.log(result);
    // if (result) setProductDetails(result);
  }

  console.log(productDetails);

  useEffect(() => {
    fetchProductDetails();

    /**here we put the id as dependency so if the id is present
     * then the useeffect will be invoked other wise not
     */
  }, [id]);

  // function handleGoToCart(){
  //  navigate('/cart')
  // }

  if (loading)
    return (
      <h3 className="text-center text-5xl">product details are laoding</h3>
    );

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productDetails?.images?.length
                ? productDetails?.images.map((imageItem) => (
                    <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                      <img
                        className="w-24 cursor-pointer"
                        src={imageItem}
                        alt="product secondary image"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-zinc-800">
              {productDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${productDetails?.price}</p>
            </div>
            <div className="mt-5 text-center min-w-[200px] px-4 py-3 border border-zinc-700 bg-transparent text-sm font-semibold">
              {/* so what we have done here is that on click on add to cart we call the method hadnlecart
            from the context and pass the product details of the product in the handle cart */}
              <button
              disabled={
                productDetails?
                cartItems.findIndex(item => item.id === productDetails.id)>-1 :false}
                onClick={() => handleAddToCart(productDetails)}
                className=" disabled:opacity-40  cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
