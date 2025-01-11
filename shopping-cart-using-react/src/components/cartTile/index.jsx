import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4 ">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 ">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold rounded-xl "
            >
              Remove
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            ${singleCartItem?.totalPrice?.toFixed(2) || "0.00"}
          </h3>
          <p className="mt-2  mb-3 font-bold text-[13px]">
            Quantity: {singleCartItem?.quantity}
          </p>
          <div className="flex gap-3 justify-center mt-3">
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              disabled={singleCartItem?.quantity === 1}
              className=" disabled:opacity-40 border border-gray-700 py-2 px-4 font-bold rounded-lg"
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="border border-gray-700 py-2 px-[13px] font-bold rounded-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </Fragment>
  );
}
export default CartTile;
