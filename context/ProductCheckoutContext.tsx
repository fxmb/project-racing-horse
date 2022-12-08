import React, { createContext, useContext, useState } from "react";
import { Product } from "../types";

type ProductCheckoutContextType = {
  checkoutProducts?: Product[] | [];
  setCheckoutProduct: React.Dispatch<React.SetStateAction<Product[] | []>>;
};

export const ProductCheckoutContext = createContext<ProductCheckoutContextType>(
  {} as ProductCheckoutContextType
);

export default function ProductCheckoutContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [checkoutProducts, setCheckoutProduct] = useState<Product[]>([]);

  return (
    <ProductCheckoutContext.Provider
      value={{
        checkoutProducts,
        setCheckoutProduct,
      }}
    >
      {children}
    </ProductCheckoutContext.Provider>
  );
}

export const useProductCheckoutContext = (): ProductCheckoutContextType =>
  useContext(ProductCheckoutContext);
