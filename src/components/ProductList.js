import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  return grid_view ? (
    <GridView products={products} />
  ) : (
    <ListView products={products} />
  );
};

export default ProductList;
