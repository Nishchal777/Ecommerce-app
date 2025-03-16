import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/Product";

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("S");
  const [rating] = useState(4.5);
  const [cartMessage, setCartMessage] = useState("");

  if (!product) {
    return <div className="text-center text-gray-500">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize });
    setCartMessage("Added to cart!");
    setTimeout(() => setCartMessage(""), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 mt-10 border rounded-md shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full rounded-md"
        />
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-500">{product.color}</p>
          <p className="text-gray-700">{product.gender}</p>
          <p className="text-3xl mt-2 font-semibold">{product.price}</p>

          {/* Ratings */}
          <div className="flex items-center mt-2">
            <span className="text-orange-600 text-sm">⭐ {rating}</span>
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <p className="font-medium">Size:</p>
            <div className="flex gap-3">
              {["S", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-1 border rounded-md ${
                    selectedSize === size
                      ? "bg-red-600 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Small Description */}
          <p className="mt-4 text-gray-600">
            This is a premium quality product, perfect for casual wear.
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          >
            Add to Cart
          </button>

          {/* Cart Message */}
          {cartMessage && <p className="text-red-600 mt-2 ">{cartMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Product;
