import { Link } from "react-router-dom";
const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "")), 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 mt-10 border rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-center"><span className="text-red-600">Shopping</span> Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-3">
              <img src={item.imageSrc} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-500">Size: {item.size}</p>
                <p className="text-gray-700 font-semibold">{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="px-3 ml-2 py-1 lg:text-[15px] bg-red-600 text-white rounded-md hover:bg-red-700">
                Delete
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-xl mt-4 ">
            Total: ${getTotalPrice().toFixed(2)}
          </div>

          <div className="text-center mt-4">
            <Link to="/checkout" className="w-full sm:w-auto block sm:inline-block text-center text-sm mt-4 px-5 py-2  bg-red-600 hover:bg-red-700 text-white rounded-md">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
