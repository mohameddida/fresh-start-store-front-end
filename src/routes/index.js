import React from "react";

//layoutpages
import Default from "../layouts/default";
import DefaultRouter from "./DefaultRouter";

export const IndexRouters = [
  {
    path: "/",
    element: <Default />,
    children: [...DefaultRouter],
  },
];
