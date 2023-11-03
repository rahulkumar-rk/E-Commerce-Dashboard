import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    let result = await fetch("http://localhost:8080/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8080/delete/${id}`, {
      method: "DELETE",
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    let response = await result.json();
    if (response) {
      getProduct();
    }
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProduct();
    }
  };
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        type="search"
        placeholder="Search Product"
        className="search-product"
        onChange={searchHandle}
      ></input>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => {
          return (
            <ul key={item._id}>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>$ {item.price}</li>
              <li>{item.category}</li>
              <li>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                <Link to={`/update/${item._id}`}>Update</Link>
              </li>
            </ul>
          );
        })
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
};

export default Home;
