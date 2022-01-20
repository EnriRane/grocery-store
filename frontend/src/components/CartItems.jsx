import React from "react";
import CartItem from "./CartItem";
const CartItems = ({ products }) => {
  return (
    <React.Fragment>
      <div className="p-2">
        <h4>
          Shopping cart ({products.length}{" "}
          {products.length > 1 ? "products" : "product"} in your cart)
        </h4>
        <h6 style={{ margin: "5%" }}>
          You should have at least $50 to place an order
        </h6>
      </div>
      {products.map((product) => (
        <CartItem key={product._id} product={product} />
      ))}
    </React.Fragment>
  );
};

export default CartItems;
