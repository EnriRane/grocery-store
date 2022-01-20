import React from "react";
import Product from "./common/Product";
import Pagination from "./common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/products";
import { changePage, getPageNumber } from "../reducers/pageData";
import { paginate } from "../utils/paginate";
const Products = () => {
  const dispatch = useDispatch();
  let allProducts = useSelector(getProducts);
  const searchQuery = useSelector((state) => state.groceryStore.searchQuery);
  const currentPage = useSelector(getPageNumber);
  const handlePageChange = (page) => {
    dispatch(changePage(page));
  };
  if (searchQuery) {
    allProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }
  const products = paginate(allProducts, currentPage, 4);
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
          pageSize={4}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  );
};
export default Products;
