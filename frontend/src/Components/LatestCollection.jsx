import React from "react";
import { products } from "../assets/Product"; // Import product list
import { Link } from "react-router-dom";

function LatestCollection() {
  // Filter products where latestCollection is true
  const latestProducts = products.filter((product) => product.latestCollection);

  return (
    <div>
      <div className=" text-center text-3xl sm:py-3 lg:text-4xl leading-relaxed mt-6">
        Our Latest <span className="text-red-600">Collections</span>
      </div>
      <div className="text-center sm:text-sm lg:mt-0  leading-relaxed">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptatum earum obcaecati
        </p>
      </div>
      <div className="max-w-9xl mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        {latestProducts.map((product) => (
          <div
            key={product.id}
            className=" group relative border border-gray-300 rounded-md"
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
                {/* Move color below the product name on the left side */}
                <p className="text-sm text-gray-500 mt-1 text-left  ">
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
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
