import { useState } from "react";
import { products } from "../assets/Product"; // Import product list
import { Link } from "react-router-dom";

const Collections = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedCategories(
      (prevCategories) =>
        checked
          ? [...prevCategories, value] // Add category if checked
          : prevCategories.filter((category) => category !== value) // Remove if unchecked
    );
  };
  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.gender)
        )
      : products; // Show all if no filter is selected
  return (
    <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 ">
      <div className=" min-w-60 mt-24 pt-3">
        <p className="text-xl flex justify-center gap-2">FILTERS</p>
        <div className={`border border-gray-300 rounded-md pl-5 py-3 mt-1 `}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((category) => (
              <p key={category} className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCheckboxChange}
                />
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className=" text-center text-3xl sm:py-3 lg:text-4xl leading-relaxed mt-6">
          All <span className="text-red-600">Collections</span>
        </div>
        <div className="text-center sm:text-sm lg:mt-0  leading-relaxed">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            voluptatum earum obcaecati
          </p>
        </div>
        <div className="max-w-9xl mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative border border-gray-300 rounded-md"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 px-2 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                      <Link to={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        <div>{product.name}</div>
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 text-left">
                      {product.color}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{product.gender}</p>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Collections;
