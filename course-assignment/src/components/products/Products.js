import { useState, useEffect } from "react";
import { API } from "../../constants/Api";
import Heading from "../layout/Heading";
import ProductsItem from "./ProductsItem";

function ProductList() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(API);

    if (response.ok) {
     const json = await response.json();
     setProducts(json);
    } else {
     setError("An error occured");
    }
   } catch (error) {
    setError(error.toString());
   } finally {
    setLoading(false);
   }
  }
  fetchData();
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>ERROR: An error occured</div>;
 }

 return (
  <>
  <Heading title="Products" />
   {products.map(function (product) {
    const { id, title, price } = product;
    return <ProductsItem key={id} id={id} title={title} price={price} />;
   })}
  </>
 );
}

export default ProductList;