// import React from 'react'npm start
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
// import { Form } from "react-bootstrap";
const FetchApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://p-9x7e.onrender.com/products/products"
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [products]);

  const handleDelete = async (deleteId) => {
    try {
      const res = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${deleteId}`
      );
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        // const updatedProducts = products.filter(
        //   (product) => product._id !== deleteId
        // );
        // setProducts(updatedProducts);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAdd = async (editdata) => {
    let res = await axios.post(
      "https://p-9x7e.onrender.com/products/add-product",
      editdata
      //   {
      //     _id: "628900S",
      //     pName: "suzuki",
      //     pPrice: "2000",
      //   }
    );
    if (res.data.error) {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
  };

  const handleEdit = async (editId) => {
    try {
      let res = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
        {
          pName: "hie",
          pPrice: 200,
        }
      );
      console.log(res, "...res");
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        setProducts(res);
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  return (
    <>
      <Table border={1}>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Date</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.pName}</td>
              <td>{product.pPrice}</td>
              <td>{product.date}</td>
              <td>
                <Delete deleteId={product._id} handleDelete={handleDelete} />
              </td>
              <td>
                <Edit editId={product._id} handleEdit={handleEdit} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <button onClick={<Add />}>Add</button> */}

      <input
        type="text"
        onChange={(e) => {
          setProducts({ _id: e.target.value });
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setProducts({ pName: e.target.value });
        }}
      />
      <button onClick={() => handleAdd({ data: products })}>Add</button>

      {/* <Add handleAdd={handleAdd}></Add> */}
    </>
  );
};

const Delete = ({ deleteId, handleDelete }) => {
  return <button onClick={() => handleDelete(deleteId)}>Delete</button>;
};

const Edit = ({ editId, handleEdit }) => {
  return <button onClick={() => handleEdit(editId)}>Edit</button>;
};

// const Add = ({ handleAdd }) => {
//   return <button onClick={() => handleAdd()}>Add</button>;
// };

export default FetchApi;
