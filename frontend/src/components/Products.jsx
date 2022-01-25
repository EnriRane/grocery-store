import React from "react";
import { useContext } from "react";
import Product from "./common/Product";
import Pagination from "./common/Pagination";
import ProductContext from "../context/ProductContext";
import PageContext from "../context/PageContext";
import SearchContext from "../context/SearchContext";
import { getPageNumber } from "../reducer/pageData";
import * as pageDataAction from "../constants/pageDataConstant";
import { paginate } from "../utils/paginate";
const Products = () => {
  let allProducts = useContext(ProductContext);
  const [searchQuery] = useContext(SearchContext);
  const [pageData, dispatchPage] = useContext(PageContext);

  const currentPage = getPageNumber(pageData);
  const handlePageChange = (page) => {
    dispatchPage({ type: pageDataAction.CHANGE_PAGE, payload: page });
  };
  if (searchQuery) {
    allProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }
  const products = paginate(allProducts, currentPage, 10);
  return (
    <React.Fragment>
      <h2>List of Products</h2>
      <div className="container ">
        <div className="row row-cols-auto">
          {products.map((product) => (
            <Product
              key={product._id + Math.random() * 100}
              enabled={"true"}
              product={product}
            />
          ))}
        </div>
      </div>
      <div className="paginate">
        <Pagination
          itemsCount={allProducts.length}
          pageSize={10}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  );
};
export default Products;
