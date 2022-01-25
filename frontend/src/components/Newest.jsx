import { useContext } from "react";
import Product from "./common/Product";
import ProductContext from "../context/ProductContext";
import { getNewProducts } from "../reducer/products";
const Newest = (props) => {
  const allProducts = useContext(ProductContext);
  const products = getNewProducts(allProducts);
  return (
    <div>
      <h2>Newest</h2>
      {products.map((product) => (
        <Product key={product.price} enabled="true" product={product} />
      ))}
    </div>
  );
};

export default Newest;
