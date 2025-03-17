import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    paymentMethod: "esewa", // Default payment method
  });

  const DELIVERY_CHARGE = 10;

  // Ensure cart is not undefined
  const getTotalPrice = () => {
    const total = cart.reduce(
      (total, item) => total + parseFloat(item.price.replace("$", "")),
      0
    );
    return total + DELIVERY_CHARGE;
  };
  const [paymentMethod, setPaymentMethod] = useState("esewa"); // Default value

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.location
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    alert(
      `Order placed successfully with ${formData.paymentMethod.toUpperCase()}!`
    );
    navigate("/thank-you"); // Redirect after order completion
  };

  // If cart is empty, display message
  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 mt-10 border rounded-md shadow-lg text-center">
        <h2 className="text-2xl font-bold ">No checkouts available</h2>
        <p className="text-gray-500 mt-2">Your cart is empty.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 border rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        <span className="text-red-600">Checkout</span> Page
      </h2>

      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-lg font-semibold">
          Total: ${getTotalPrice().toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">Includes $10 delivery charge</p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <div className="max-w-md rounded-md">
            <h2 className="block text-sm font-medium">Select Payment Method</h2>
            <div className="lg:flex sm:grid gap-4 sm:gap-6 md:gap-10 lg:gap-14">
              <label className="flex items-center space-x-1 mt-2 ">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="esewa"
                  checked={paymentMethod === "esewa"}
                  onChange={handleChange}
                />
                <span>Esewa</span>
              </label>

              <label className="flex items-center space-x-1 mt-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="khalti"
                  checked={paymentMethod === "khalti"}
                  onChange={handleChange}
                />
                <span>Khalti</span>
              </label>

              <label className="flex items-center space-x-1 mt-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handleChange}
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
