import React from "react";

const OffreCard = ({ product }) => {
  return (
    <div className="border border-gray-500 rounded-md p-3 ">
      <div key={product.id} className="group relative">
        <div className="aspect-h-2 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-full">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="text-left">
            <h3 className="text-base  font-bold text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0 " />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default OffreCard;
