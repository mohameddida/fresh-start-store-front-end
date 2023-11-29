import React from "react";
import Carousel from "../Components/partials/Carousel/carousel";
import { ProductsOffer } from "../Components/partials/content/productOffers";

const Index = () => {
  return (
    <div className="lg:mx-7 ">
      <Carousel />
      <ProductsOffer />
    </div>
  );
};

export default Index;
