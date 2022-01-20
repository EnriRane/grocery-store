import React from "react";
import MostSold from "./MostSold";
import Newest from "./Newest";
import Products from "./Products";
import { addProducts } from "../reducers/products";
import { changePage } from "../reducers/pageData";
import { addMostSoldProducts } from "../reducers/mostSold";
import * as productService from "../services/productService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "../css/MainContainer.css";
import "../css/Products.css";
const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductsAndMostSoldProducts = async () => {
      try {
        const { data: products } = await productService.getAllProducts();
        const { data: mostSold } = await productService.getMostSoldProducts();
        dispatch(addProducts(products));
        dispatch(addMostSoldProducts(mostSold));
        dispatch(changePage(1));
      } catch (ex) {
        console.error(ex);
      }
    };
    getProductsAndMostSoldProducts();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="flex-container " id="mainContainer">
        <div className="flex-item-left products">
          <Products />
        </div>
        <div className="flex-item-right">
          <MostSold />
          <Newest />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainContainer;
