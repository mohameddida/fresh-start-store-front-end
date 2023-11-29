import React from "react";
import Index from "../views";
import OfferPage from "../views/OffersPage/offerPage";

const DefaultRouter = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/:ProductId",
    element: <OfferPage />,
  },
];

export default DefaultRouter;
