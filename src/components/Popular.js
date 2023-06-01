import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, selectProducts } from "../store/productSlice";

const Popular = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  console.log("HELLO1", products);

  return <section id={"popular"}>{products}</section>;
};

export default Popular;
