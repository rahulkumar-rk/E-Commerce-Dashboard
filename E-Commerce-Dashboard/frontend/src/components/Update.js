import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const params = useParams();
  const navigate=useNavigate();
 

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:8080/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  }
  useEffect(() => {
    getProductDetails();
  }, []);

  const updateProduct = async () => {
    console.log(name, price, category, company);
    
    let result = await fetch(`http://localhost:8080/update/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

      },
    });
    result = await result.json();
    navigate('/');
    // console.log(result);
  };
  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputBox"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter product price"
        className="inputBox"
        name="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter product category"
        className="inputBox"
        name="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter product company"
        className="inputBox"
        name="company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <button className="btn" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default Update;
