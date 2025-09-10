import React from "react";
import { useParams } from "react-router-dom";
import ProductManager from "./ProductManager";

interface RouteParams {
  productId: string;
}

export const ProductManagerWrapper: React.FC = () => {
  const { productId } = useParams<RouteParams>();

  // convert string param to number if ProductManager expects number
  const pid = productId ? parseInt(productId, 10) : undefined;

  return pid ? <ProductManager productId={pid} /> : <div>Invalid Product</div>;
};

export default ProductManagerWrapper;
