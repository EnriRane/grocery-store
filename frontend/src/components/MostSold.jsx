import Product from "./common/Product";
import { useSelector } from "react-redux";
import { getMostSoldProducts } from "../reducers/mostSold";
const MostSold = () => {
  const products = useSelector(getMostSoldProducts);
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
