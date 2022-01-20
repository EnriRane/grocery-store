import { useSelector } from "react-redux";
import Product from "./common/Product";
import { getNewProducts } from "../reducers/products";
const Newest = (props) => {
  const products = useSelector(getNewProducts);
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
