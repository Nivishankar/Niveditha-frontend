import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const ApiApp = () => {
  const [fetchData, setFetchData] = useState([]);
  const [addData, setAddData] = useState({ pName: "", pPrice: "" });
  const [editData, setEditData] = useState({ _id: "", pName: "", pPrice: "" });

  useEffect(() => {
    apiFetch();
  }, [fetchData, editData, addData]);

  const apiFetch = async () => {
    try {
      const res = await axios.get(
        "https://p-9x7e.onrender.com/products/products"
      );
      setFetchData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteApi = async (deleteId) => {
    try {
      const res = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${deleteId}`
      );
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const addApi = async () => {
    try {
      const res = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        addData
      );
      alert(res.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const editApi = async (editId) => {
    try {
      const res = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
        editData
      );
      alert(res.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addEvent = (event) => {
    const { name, value } = event.target;
    setAddData({ ...addData, [name]: value });
  };

  const editEvent = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Api App</h1>
      <input
        type="text"
        name="pName"
        placeholder="productname"
        value={addData.pName}
        onChange={addEvent}
      ></input>
      <input
        type="text"
        name="pPrice"
        placeholder="productprice"
        value={addData.pPrice}
        onChange={addEvent}
      ></input>
      <button onClick={addApi}>Add</button>

      <br></br>
      <br></br>

      <input
        type="text"
        name="_id"
        placeholder="productID"
        value={editData._id}
        onChange={editEvent}
      ></input>
      <input
        type="text"
        name="pName"
        placeholder="productname"
        value={editData.pName}
        onChange={editEvent}
      ></input>
      <input
        type="text"
        name="pPrice"
        placeholder="productprice"
        value={editData.pPrice}
        onChange={editEvent}
      ></input>
      <button onClick={editApi(editData._id)}>Edit</button>
      <br></br>
      <br></br>

      <Table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fetchData.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.pName}</td>
              <td>{product.pPrice}</td>
              <td>
                <button onClick={deleteApi(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ApiApp;
