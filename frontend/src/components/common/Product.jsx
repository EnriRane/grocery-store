import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import _ from "lodash";
import { addtoCart } from "../../reducers/cart";
import { getCartProducts } from "../../reducers/cart";
import { getProductImage } from "../../reducers/products";
import "../../css/Product.css";

const Product = ({ enabled, product, totalQuantitySold }) => {
  const cartProducts = useSelector(getCartProducts);
  const imagePath = useSelector(getProductImage(product._id));
  const dispatch = useDispatch();

  const [color, setColor] = useState("black");
  const [buttonName, setButtonName] = useState("Add to Cart");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    isInCart(product);
  });

  const addToCard = (product) => {
    addToCartEffect();
    dispatch(addtoCart(product));
  };
  const getProperty = (name) => {
    return _.get(product, name);
  };
  const addToCartEffect = () => {
    setColor("aqua");
    setButtonName("Added to Card");
    setDisabled(true);
  };
  const isInCart = (product) => {
    if (product) {
      if (cartProducts.find((item) => item._id === product._id)) {
        addToCartEffect();
      }
    }
  };
  return (
    <div>
      <div className="card" style={{ backgroundColor: "#ffccff" }}>
        <h5>{getProperty("name")}</h5>
        {totalQuantitySold !== undefined ? (
          <p className="price">Quanity sold:{totalQuantitySold} pieces</p>
        ) : (
          <p className="price">{getProperty("price")}$</p>
        )}
        <Link to={`productDetails/${getProperty("_id")}`}>
          <img
            src={
              getProperty("image") !== undefined
                ? `/images/${getProperty("image")}`
                : `/images/${imagePath}`
            }
            alt="Product"
          />
        </Link>
        <p className="description">{getProperty("description")}</p>
        <p>
          {enabled && (
            <button
              onClick={() => addToCard(product)}
              style={{ backgroundColor: color }}
              disabled={disabled}
            >
              {buttonName}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Product;
