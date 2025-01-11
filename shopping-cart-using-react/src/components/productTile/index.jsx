import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductTile({ singleProductTile }) {
  const { handleAddToCart, cartItems } =
    useContext(ShoppingCartContext);

  const navigate = useNavigate();
  function handleNavigateToProductDetailsPage(getCurrentProducId) {
    /*so what we have done here is that we passed the id of the item
  here and by using the navigate we naviagate to that details page and the 
  product detail page is dynamic  */
    console.log(getCurrentProducId, navigate);
    navigate(`/product-details/${getCurrentProducId}`);
  }

  return (
    <div className="relative group border border-cyan-900 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-auto">
        <img
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
        <div className="flex item-start justify-between mt-4 space-x-4">
          <div className="font-bold text-gray-900  sm:text-sm text-xs md:text-base ">
            <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              {" "}
              {singleProductTile?.title}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-950 sm:text-sm md:text-[14px">
              ${singleProductTile?.price}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() =>
            handleNavigateToProductDetailsPage(singleProductTile?.id)
          }
          className="px-5 mt-5 w-full py-2 rounded-full bg-black text-white font-bold text-lgg"
        >
          view details
        </button>
        <button
          disabled={
            cartItems.findIndex((item) => item.id === singleProductTile.id) > -1
          }
          onClick={() => handleAddToCart(singleProductTile)}
          className=" disabled:opacity-40  px-5 mt-5 w-full py-2 rounded-full bg-black text-white font-bold text-lgg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductTile;
