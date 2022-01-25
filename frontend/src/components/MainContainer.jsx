import React, { useContext } from "react";
import { useEffect, useReducer } from "react";
import MostSold from "./MostSold";
import Newest from "./Newest";
import Products from "./Products";
import * as productService from "../services/productService";
import ProductContext from "../context/ProductContext";
import MostSoldContext from "../context/MostSoldContext";
import PageContext from "../context/PageContext";
import { mostSoldReducer } from "../reducer/mostSold";
import { productReducer } from "../reducer/products";
import * as mostSoldAction from "../constants/mostSoldConstant";
import * as pageDataAction from "../constants/pageDataConstant";
import * as productAction from "../constants/productConstant";
import "../css/MainContainer.css";
import "../css/Products.css";
const MainContainer = () => {
  const [allProducts, dispatchProducts] = useReducer(productReducer, []);
  const [mostSoldProducts, dispatchMostSold] = useReducer(mostSoldReducer, []);
  const [pageData, dispatchPage] = useContext(PageContext);
  useEffect(() => {
    const getProductsAndMostSoldProducts = async () => {
      try {
        const { data: products } = await productService.getAllProducts();
        const { data: mostSold } = await productService.getMostSoldProducts();
        dispatchProducts({
          type: productAction.ADD_PRODUCTS,
          payload: products,
        });
        dispatchMostSold({
          type: mostSoldAction.ADD_MOST_SOLD_PRODUCTS,
          payload: mostSold,
        });
        dispatchPage({ type: pageDataAction.CHANGE_PAGE, payload: 1 });
      } catch (ex) {
        console.error(ex);
      }
    };
    getProductsAndMostSoldProducts();
  }, [dispatchProducts]);
  return (
    <React.Fragment>
      <ProductContext.Provider value={allProducts}>
        <MostSoldContext.Provider value={mostSoldProducts}>
          <div className="flex-container " id="mainContainer">
            <div className="flex-item-left products">
              <Products />
            </div>
            <div className="flex-item-right">
              <MostSold />
              <Newest />
            </div>
          </div>
        </MostSoldContext.Provider>
      </ProductContext.Provider>
    </React.Fragment>
  );
};

export default MainContainer;
