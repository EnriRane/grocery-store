import { useContext } from "react";
import Product from "./common/Product";
import MostSoldContext from "../context/MostSoldContext";
const MostSold = () => {
  const products = useContext(MostSoldContext);
  return (
    <div>
      <h2>Most Sold</h2>
      {products.map((product) => (
        <Product
          key={product.product._id + Math.random() * 100}
          product={product.product}
          totalQuantitySold={product["totalQuantitySold"]}
        />
      ))}
    </div>
  );
};

export default MostSold;
